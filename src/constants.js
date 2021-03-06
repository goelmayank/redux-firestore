/**
 * @constant
 * @type {String}
 * @description Prefix for all actions within library
 * @example
 * import { constants } from 'react-redux-firebase'
 * constants.actionsPrefix === '@@reduxFirestore' // true
*/
export const actionsPrefix = '@@reduxFirestore';

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} START - `@@reduxFirestore/START`
 * @property {String} SET - `@@reduxFirestore/SET`
 * @property {String} SET_PROFILE - `@@reduxFirestore/SET_PROFILE`
 * @property {String} LOGIN - `@@reduxFirestore/LOGIN`
 * @property {String} LOGOUT - `@@reduxFirestore/LOGOUT`
 * @property {String} ERROR - `@@reduxFirestore/ERROR`
 * @property {String} SET_LISTENER - `@@reduxFirestore/SET_LISTENER`
 * @property {String} UNSET_LISTENER - `@@reduxFirestore/UNSET_LISTENER`
 * @example
 * import { actionTypes } from 'react-redux-firebase'
 * actionTypes.SET === '@@reduxFirestore/SET' // true
*/
export const actionTypes = {
  START: `${actionsPrefix}/START`,
  SET: `${actionsPrefix}/SET`,
  SET_PROFILE: `${actionsPrefix}/SET_PROFILE`,
  LOGIN: `${actionsPrefix}/LOGIN`,
  LOGOUT: `${actionsPrefix}/LOGOUT`,
  ERROR: `${actionsPrefix}/ERROR`,
  SET_LISTENER: `${actionsPrefix}/SET_LISTENER`,
  UNSET_LISTENER: `${actionsPrefix}/UNSET_LISTENER`,
};

/**
 * @constant
 * @type {Object}
 * @name defaultConfig
 * @description Default configuration options
 * @property {String} userProfile - `null` Location on Firebase where user
 * profiles are stored. Often set to `'users'`.
 * @property {String|Function} presence - `null` Location on Firebase where of currently
 * online users is stored. Often set to `'presence'` or `'onlineUsers'`. If a function
 * is passed, the arguments are: `(currentUser, firebase)`.
 * @property {String|Function} sessions - `sessions` Location on Firebase where user
 * sessions are stored (only if presense is set). Often set to `'sessions'` or
 * `'userSessions'`. If a function is passed, the arguments are: `(currentUser, firebase)`.
 * @property {Boolean} enableLogging - `false` Whether or not firebase
 * database logging is enabled.
 * @property {Array} preserveOnLougout - `null` Data parameters to preserve when
 * logging out.
 * @property {Boolean} updateProfileOnLogin - `true` Whether or not to update
 * user profile when logging in.
 * @property {Boolean} resetBeforeLogin - `true` Whether or not to reset auth
 * and profile when logging in (see issue #254 for more details).
 * @property {Boolean} enableRedirectHandling - `true` Whether or not to enable
 * redirect handling. This must be disabled if environment is not http/https
 * such as with react-native.
 * @property {Boolean} enableEmptyAuthChanges - `false` Whether or not to enable
 * empty auth changes. When set to true, `onAuthStateChanged` will be fired with,
 * empty auth changes such as `undefined` on initialization
 * (see [#137](https://github.com/prescottprue/react-redux-firebase/issues/137)).
 * Requires `v1.5.0-alpha` or higher.
 * @property {Boolean} autoPopulateProfile - `false` REMOVED FROM v2.0.0. Whether or not to
 * automatically populate profile with data loaded through
 * profileParamsToPopulate config.
 * @property {Boolean} setProfilePopulateResults - `true` Whether or not to
 * call SET actions for data that results from populating profile to redux under
 * the data path. For example role parameter on profile populated from 'roles'
 * root. True will call SET_PROFILE as well as a SET action with the role that
 * is loaded (places it in data/roles).
 * @property {Boolean} dispatchOnUnsetListener - `false` Whether or not to
 * dispatch UNSET_LISTENER when disabling listeners for a specific path. USE WITH CAUTION
 * Setting this to true allows an action to be called that removes data
 * from redux (which might not always be expected).
 * @property {String} firebaseStateName - 'firebase' Assumed name of Firebase
 * state (name given when passing reducer to combineReducers). Used in
 * firebaseAuthIsReady promise (see #264).
 * @property {Boolean} attachAuthIsReady - `true` Whether or not to attach
 * firebaseAuthIsReady to store. authIsLoaded can be imported and used
 * directly instead based on preference.
 * @type {Object}
*/
export const defaultConfig = {
  userProfile: null,
  presence: null,
  sessions: 'sessions',
  enableLogging: false,
  resetBeforeLogin: true,
  updateProfileOnLogin: true,
  enableRedirectHandling: true,
  autoPopulateProfile: false,
  setProfilePopulateResults: false,
  dispatchOnUnsetListener: true,
  enableEmptyAuthChanges: false,
  firebaseStateName: 'firebase',
  attachAuthIsReady: true,
};

/**
 * @constant
 * @type {Array}
 * @description List of all external auth providers that are supported
 * (firebase's email/anonymous included by default).
 * @private
*/
export const supportedAuthProviders = [
  'google',
  'github',
  'twitter',
  'facebook',
];

/**
 * @constant
 * @description Top level redux paths that can be populated
 * @type {Array}
 * @private
 */
export const topLevelPaths = ['auth', 'profile', 'ordered', 'data'];

export default {
  actionTypes,
  defaultConfig,
};
