<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress_j8');

/** MySQL database username */
define('DB_USER', 'wordpress_3t');

/** MySQL database password */
define('DB_PASSWORD', 'rPjXYjaeWqFssLRZ');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hQ7aDy2uH2!ezxFDe1a#w*IDCSBX*pFFGqVQsYA&!z7rAHcHXYgrgprp)dCxFvpR');
define('SECURE_AUTH_KEY',  'v*Q6s)rMcm@tnGE1Vzr7wy(l(cTI)Y3l!zuD&1F&&bU@6Q&rdjqWMiAjT0sbQ2Hs');
define('LOGGED_IN_KEY',    'PkKROpVJUUBM%)K0mXJt%o1LETV&5o#&iIPd93G**xbw4V%n6OhjZocR@FFt!K!q');
define('NONCE_KEY',        'd%ZQj7@6*Pj0ay4(FnQ&Aa(9R#xx&Baa0nIdSm8i(^oCRfOI1qw6X(!^SbdaSWnN');
define('AUTH_SALT',        '6iIIjoX)q)jluNGvf)ePCH@&pQcKo20YMAnClkfc0i)JJ6!I7g0Z3asHEx4#wJ)!');
define('SECURE_AUTH_SALT', '4fjY8x#UTKWFshkBN12!GF1mZLUT5N4rf3z1uzr2ynGnAtEyTY2nXpwWBSdd(x1E');
define('LOGGED_IN_SALT',   'PibweokSHqUL@1zFti%qH#e64alE#38G633iTXT7uZ*Pn&uQ%7o8FqImzhHX^Hs1');
define('NONCE_SALT',       's#DqH@kHhN^*dyFlDGD10LvmS746Qz(3t8Vp^YwrEJM4y9XpjvfKT)*OVEBz!ux2');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'FrGBe93F3h_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
?>
