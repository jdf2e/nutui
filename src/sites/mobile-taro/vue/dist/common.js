(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['common'],
  {
    /***/ '../../../packages/utils/create/component.ts':
      /*!***********************************************************************************************!*\
  !*** /Users/suzigang/Downloads/project/nutui3.0/nutui/src/packages/utils/create/component.ts ***!
  \***********************************************************************************************/
      /*! exports provided: createComponent */
      /*! exports used: createComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return createComponent;
          }
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ '../../../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );

        function createComponent(name) {
          var componentName = 'nut-' + name;
          return {
            componentName: componentName,
            create: function(_component) {
              _component.baseName = name;
              _component.name = componentName;

              _component.install = function(vue) {
                var _component$children;

                vue.component(_component.name, _component);
                (_component === null || _component === void 0
                  ? void 0
                  : (_component$children = _component.children) === null ||
                    _component$children === void 0
                  ? void 0
                  : _component$children.length) &&
                  _component.children.forEach(function(item) {
                    vue.component(item.name, item);
                  });
              };

              return Object(
                vue__WEBPACK_IMPORTED_MODULE_0__[/* defineComponent */ 'e']
              )(_component);
            },
            createDemo: function(_component) {
              _component.baseName = name;
              _component.name = 'demo-' + name;
              return Object(
                vue__WEBPACK_IMPORTED_MODULE_0__[/* defineComponent */ 'e']
              )(_component);
            }
          };
        }

        /***/
      },

    /***/ '../../../packages/utils/create/index.ts':
      /*!*******************************************************************************************!*\
  !*** /Users/suzigang/Downloads/project/nutui3.0/nutui/src/packages/utils/create/index.ts ***!
  \*******************************************************************************************/
      /*! exports provided: createComponent */
      /*! exports used: createComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./component */ '../../../packages/utils/create/component.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _component__WEBPACK_IMPORTED_MODULE_0__['a'];
          }
        );

        /***/
      }
  }
]);
//# sourceMappingURL=common.js.map
