(function () {
    var feedback = document.getElementById('contact-feedback');
    if (!feedback) {
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var status = params.get('contact');
    if (!status) {
        return;
    }

    var messages = {
        ok: 'Mensaje enviado correctamente. Gracias por contactarme.',
        missing_fields: 'Completa todos los campos requeridos.',
        invalid_email: 'El correo no es valido.',
        too_long: 'Uno de los campos supera el limite permitido.',
        method_not_allowed: 'Solicitud no valida para este formulario.',
        invalid_origin: 'Origen de solicitud no permitido.',
        invalid_referer: 'Referencia de solicitud no permitida.',
        config_missing: 'Falta configurar la conexion de base de datos.',
        config_invalid: 'La configuracion de base de datos no es valida.',
        server_error: 'Error del servidor. Intenta de nuevo en unos minutos.'
    };

    var message = messages[status] || 'No se pudo procesar el formulario.';
    var success = status === 'ok';

    feedback.textContent = message;
    feedback.style.padding = '10px 12px';
    feedback.style.borderRadius = '8px';
    feedback.style.marginBottom = '12px';
    feedback.style.fontSize = '0.95rem';
    feedback.style.backgroundColor = success ? '#d1e7dd' : '#f8d7da';
    feedback.style.color = success ? '#0f5132' : '#842029';

    if (window.history && window.history.replaceState) {
        var cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
    }
})();