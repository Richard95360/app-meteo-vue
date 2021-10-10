"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Accueil = _interopRequireDefault(require("./components/Accueil"));

var _Page = _interopRequireDefault(require("./components/Page1"));

var _Page2 = _interopRequireDefault(require("./components/Page2"));

var _Post = _interopRequireDefault(require("./components/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  path: '/',
  component: _Accueil["default"]
}, {
  path: '/page1',
  component: _Page["default"]
}, {
  path: '/page2',
  component: _Page2["default"]
}, {
  path: '/blogpost/:id',
  component: _Post["default"]
}];
exports["default"] = _default;