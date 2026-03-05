<?php
declare(strict_types=1);

function redirect_with_status(string $status): never
{
    header('Location: /index.html?contact=' . rawurlencode($status) . '#contacto');
    exit;
}

function host_from_url(string $url): string
{
    $host = parse_url($url, PHP_URL_HOST);
    return is_string($host) ? strtolower($host) : '';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_with_status('method_not_allowed');
}

$currentHost = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$originHost = host_from_url((string) ($_SERVER['HTTP_ORIGIN'] ?? ''));
$refererHost = host_from_url((string) ($_SERVER['HTTP_REFERER'] ?? ''));

if ($originHost !== '' && $originHost !== $currentHost) {
    redirect_with_status('invalid_origin');
}
if ($originHost === '' && $refererHost !== '' && $refererHost !== $currentHost) {
    redirect_with_status('invalid_referer');
}

$honeypot = trim((string) ($_POST['website'] ?? ''));
if ($honeypot !== '') {
    redirect_with_status('ok');
}

$nombre = trim((string) ($_POST['nombre'] ?? ''));
$correo = trim((string) ($_POST['correo'] ?? ''));
$mensaje = trim((string) ($_POST['Mensaje'] ?? ''));

if ($nombre === '' || $correo === '' || $mensaje === '') {
    redirect_with_status('missing_fields');
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    redirect_with_status('invalid_email');
}

if (mb_strlen($nombre) > 120 || mb_strlen($correo) > 190 || mb_strlen($mensaje) > 3000) {
    redirect_with_status('too_long');
}

$configFile = __DIR__ . '/config/database.php';
if (!is_file($configFile)) {
    redirect_with_status('config_missing');
}

/** @var array{host:string,port:int,dbname:string,user:string,password:string,table:string} $config */
$config = require $configFile;

$requiredKeys = ['host', 'port', 'dbname', 'user', 'password', 'table'];
foreach ($requiredKeys as $key) {
    if (!array_key_exists($key, $config) || $config[$key] === '') {
        redirect_with_status('config_invalid');
    }
}

if (!preg_match('/^[A-Za-z0-9_]+$/', (string) $config['table'])) {
    redirect_with_status('config_invalid');
}

try {
    $dsn = sprintf(
        'mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4',
        $config['host'],
        (int) $config['port'],
        $config['dbname']
    );

    $pdo = new PDO(
        $dsn,
        $config['user'],
        $config['password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

    $sql = sprintf(
        'INSERT INTO `%s` (`nombre`, `correo`, `mensaje`, `created_at`, `ip_address`, `user_agent`) VALUES (:nombre, :correo, :mensaje, NOW(), :ip_address, :user_agent)',
        $config['table']
    );

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nombre' => $nombre,
        ':correo' => $correo,
        ':mensaje' => $mensaje,
        ':ip_address' => (string) ($_SERVER['REMOTE_ADDR'] ?? ''),
        ':user_agent' => substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255),
    ]);
} catch (Throwable $e) {
    error_log('Contact form error: ' . $e->getMessage());
    redirect_with_status('server_error');
}

redirect_with_status('ok');