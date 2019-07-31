;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./style/index.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./style/index.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index);
    global.index = mod.exports;
  }
})(this, function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'nuc-button',
    props: {
      size: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      radius: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleButtonClick: function handleButtonClick(e) {
        this.$emit('click', e);
      }
    }
  };
  _exports.default = _default;
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"nuc-button"},[_vm._v("\n    11\n")])}
__vue__options__.staticRenderFns = []
