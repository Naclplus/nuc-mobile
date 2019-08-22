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
        default: 'large'
      },
      type: {
        type: String,
        default: 'default'
      },
      inline: {
        type: Boolean,
        default: false
      },
      ghost: {
        type: Boolean,
        default: false
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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"nuc-button",class:[
        _vm.size && ("nuc-button--" + _vm.size),
        _vm.type && ("nuc-button--" + _vm.type),
        _vm.inline ? "nuc-button--inline" : 'nuc-button--block',
        _vm.radius && "nuc-button--radius",
        _vm.ghost && "nuc-button--ghost",
        (_vm.disabled || _vm.loading) && "nuc-button--disabled"
    ],attrs:{"disabled":_vm.disabled || _vm.loading},on:{"click":_vm.handleButtonClick}},[_c('div',{staticClass:"nuc-button__inner"},[(_vm.loading)?_c('svg',{staticClass:"nuc-button__inner-loading",attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 50 50","xml:space":"preserve","fill":"currentColor"}},[_c('path',{attrs:{"d":"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[_c('animateTransform',{attrs:{"attributeType":"xml","attributeName":"transform","type":"rotate","from":"0 25 25","to":"360 25 25","dur":"0.6s","repeatCount":"indefinite"}})],1)]):_vm._e(),_vm._v(" "),_c('span',[_vm._t("default")],2)])])}
__vue__options__.staticRenderFns = []
