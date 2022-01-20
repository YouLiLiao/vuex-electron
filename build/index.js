"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
Object.defineProperty(exports, "createPersistedState", {
  enumerable: true,
  get: function get() {
    return _persistedState["default"]
  }
})
Object.defineProperty(exports, "createSharedMutations", {
  enumerable: true,
  get: function get() {
    return _sharedMutations["default"]
  }
})
exports.initRenderer = initRenderer

var _persistedState = _interopRequireDefault(require("./persisted-state"))

var _sharedMutations = _interopRequireDefault(require("./shared-mutations"))

var _electronStore = _interopRequireDefault(require("electron-store"))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function initRenderer() {
  _electronStore["default"].initRenderer()
}
