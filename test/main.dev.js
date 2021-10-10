"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bus = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Routes = _interopRequireDefault(require("./Routes"));

require("bootstrap");

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bus = new _vue["default"]();
exports.bus = bus;
_vue["default"].config.productionTip = false;

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: _Routes["default"],
  mode: 'history'
});
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: router
}).$mount('#app');