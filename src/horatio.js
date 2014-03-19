/**
 * Horatio
 * A Javascript compiler for the Shakespeare Programming Language
 *
 * @author Miles Zimmerman
 */

/**
 * Horatio Namespace
 * @namespace
 */
var Horatio = Horatio || {
  
  // Is this running on nodejs?
  // Borrowed with love from moment.js
  hasModule: (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
  
};


/** Expose */
if (Horatio.hasModule) module.exports = Horatio;