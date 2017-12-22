/**
 * Module dependencies.
 */
var Strategy = require('./userStrategy');

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Strategy = Strategy;