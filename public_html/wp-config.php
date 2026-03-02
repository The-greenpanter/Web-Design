<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'epiz_32929542_w177' );

/** Database username */
define( 'DB_USER', '32929542_a' );

/** Database password */
define( 'DB_PASSWORD', 'p2S6g8Z)]8' );

/** Database hostname */
define( 'DB_HOST', 'sql111.byetcluster.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qp94bh3alliihgekvgkxzmciq8l1aw93xab69fnyvylar4tal35lznslecygsovp' );
define( 'SECURE_AUTH_KEY',  '39hvzaezdweioklkgrl2tq09makmpbw7yf0w5gctbvlh8roizi9rdl8d0lt3eeza' );
define( 'LOGGED_IN_KEY',    'in81fhg0legkrsufmzho1bl77losqnlcbecu5gnvpwou1bt0x7ncmo4ftoj0ota0' );
define( 'NONCE_KEY',        'kyrriswvvsulafcf7qtx9iq1yeyxzdi7txmdm8rak8pmdbgxikqzyp9fniy9mlpg' );
define( 'AUTH_SALT',        'jqhmjhogheqfddhv9potspkrfhy6syxzi4l1ekdg1vrd2fzmlnl4bglvp9ugqtbu' );
define( 'SECURE_AUTH_SALT', '6nrpxsgfymb58ohsv2winh5wqsngwsvfupszuhypfwquaxfgw2elaqi8ecpbkhki' );
define( 'LOGGED_IN_SALT',   'csc0a3zxzytbv9htltpv0vlnxlrc3ax6gqkexpv8ytp47l6xa74m8f1nichxwtmd' );
define( 'NONCE_SALT',       '96zcqgwtgkwlzdaias52skyady2sxmapx8eu6ryxrrxayyy18mesol3swufwcyvz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpPanter';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* Multisite */
define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
define( 'DOMAIN_CURRENT_SITE', 'thegreenpanter.infinityfreeapp.com' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
