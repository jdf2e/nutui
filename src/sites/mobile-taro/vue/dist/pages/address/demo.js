(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['pages/address/demo'],
  {
    /***/ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/address/demo.vue':
      /*!**********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/address/demo.vue ***!
  \**********************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _demo_vue_vue_type_template_id_3e528abc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./demo.vue?vue&type=template&id=3e528abc&scoped=true */ './src/pages/address/demo.vue?vue&type=template&id=3e528abc&scoped=true'
        );
        /* harmony import */ var _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./demo.vue?vue&type=script&lang=ts */ './src/pages/address/demo.vue?vue&type=script&lang=ts'
        );
        /* harmony import */ var _demo_vue_vue_type_style_index_0_id_3e528abc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true */ './src/pages/address/demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true'
        );

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _demo_vue_vue_type_template_id_3e528abc_scoped_true__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__scopeId = 'data-v-3e528abc';
        /* hot reload */
        if (false) {
        }

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/address/demo.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/address/demo.vue?vue&type=script&lang=ts':
      /*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/address/demo.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js'
        );
        /* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/create */ '../../../packages/utils/create/index.ts'
        );
        /* harmony import */ var _index_taro_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./index.taro.vue */ './src/pages/address/index.taro.vue'
        );
        /* harmony import */ var _cell_index_taro_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../cell/index.taro.vue */ './src/pages/cell/index.taro.vue'
        );

        var _createComponent = Object(
            _packages_utils_create__WEBPACK_IMPORTED_MODULE_2__[
              /* createComponent */ 'a'
            ]
          )('address'),
          createDemo = _createComponent.createDemo;

        /* harmony default export */ __webpack_exports__['a'] = createDemo({
          components: {
            'nut-address':
              _index_taro_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ 'a'],
            'nut-cell':
              _cell_index_taro_vue__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
          },
          props: {},
          setup: function setup() {
            var address = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ 'i']
            )({
              province: [
                {
                  id: 1,
                  name: '北京'
                },
                {
                  id: 2,
                  name: '广西'
                },
                {
                  id: 3,
                  name: '江西'
                },
                {
                  id: 4,
                  name: '四川'
                }
              ],
              city: [
                {
                  id: 7,
                  name: '朝阳区'
                },
                {
                  id: 8,
                  name: '崇文区'
                },
                {
                  id: 9,
                  name: '昌平区'
                },
                {
                  id: 6,
                  name: '石景山区'
                }
              ],
              country: [
                {
                  id: 3,
                  name: '八里庄街道'
                },
                {
                  id: 9,
                  name: '北苑'
                },
                {
                  id: 4,
                  name: '常营乡'
                }
              ],
              town: []
            });
            var showPopup = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ 'i']
            )({
              normal: false,
              exist: false,
              customImg: false,
              other: false
            });
            var icon = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ 'i']
            )({
              selectedIcon: 'heart-fill',
              defaultIcon: 'heart1',
              closeBtnIcon: 'close',
              backBtnIcon: 'left'
            });
            var existAddress = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ 'j']
            )([
              {
                id: 1,
                addressDetail: '',
                cityName: '次渠镇',
                countyName: '通州区',
                provinceName: '北京市',
                selectedAddress: true,
                townName: ''
              },
              {
                id: 2,
                addressDetail: '',
                cityName: '钓鱼岛全区',
                countyName: '',
                provinceName: '钓鱼岛',
                selectedAddress: false,
                townName: ''
              },
              {
                id: 3,
                addressDetail: '京东大厦',
                cityName: '大兴区',
                countyName: '科创十一街18号院',
                provinceName: '北京市',
                selectedAddress: false,
                townName: ''
              }
            ]);
            var text = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ 'i']
            )({
              one: '请选择地址',
              two: '请选择地址',
              three: '请选择地址',
              four: '请选择地址'
            });

            var showAddress = function showAddress() {
              showPopup.normal = !showPopup.normal;
            };

            var onChange = function onChange(cal, tag) {
              var name = address[cal.next];

              if (name.length < 1) {
                showPopup[tag] = false;
              }
            };

            var close1 = function close1(val) {
              console.log(val);
              text.one = val.data.addressStr;
            };

            var showAddressExist = function showAddressExist() {
              showPopup.exist = true;
            };

            var close2 = function close2(val) {
              console.log(val);

              if (val.type == 'exist') {
                var _val$data = val.data,
                  provinceName = _val$data.provinceName,
                  cityName = _val$data.cityName,
                  countyName = _val$data.countyName,
                  townName = _val$data.townName,
                  addressDetail = _val$data.addressDetail;
                text.two =
                  provinceName +
                  cityName +
                  countyName +
                  townName +
                  addressDetail;
              } else {
                text.two = val.data.addressStr;
              }
            };

            var selected = function selected(prevExistAdd, nowExistAdd, arr) {
              console.log(prevExistAdd);
              console.log(nowExistAdd);
            };

            var showAddressOther = function showAddressOther() {
              showPopup.other = true;
            };

            var showCustomImg = function showCustomImg() {
              showPopup.customImg = true;
            };

            var close3 = function close3(val) {
              console.log(val);

              if (val.type == 'exist') {
                var _val$data2 = val.data,
                  provinceName = _val$data2.provinceName,
                  cityName = _val$data2.cityName,
                  countyName = _val$data2.countyName,
                  townName = _val$data2.townName,
                  addressDetail = _val$data2.addressDetail;
                text.three =
                  provinceName +
                  cityName +
                  countyName +
                  townName +
                  addressDetail;
              } else {
                text.three = val.data.addressStr;
              }
            };

            var close4 = function close4(val) {
              console.log(val);

              if (val.type == 'exist') {
                var _val$data3 = val.data,
                  provinceName = _val$data3.provinceName,
                  cityName = _val$data3.cityName,
                  countyName = _val$data3.countyName,
                  townName = _val$data3.townName,
                  addressDetail = _val$data3.addressDetail;
                text.four =
                  provinceName +
                  cityName +
                  countyName +
                  townName +
                  addressDetail;
              } else {
                text.four = val.data.addressStr;
              }
            };

            var switchModule = function switchModule(val) {
              if (val.type == 'custom') {
                console.log('点击了“选择其他地址”按钮');
              } else {
                console.log('点击了自定义地址左上角的返回按钮');
              }
            };

            var closeMask = function closeMask(val) {
              console.log('关闭弹层', val);
            };

            return Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                    /* default */ 'a'
                  ]
                )(
                  Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                      /* default */ 'a'
                    ]
                  )(
                    {
                      showAddress: showAddress,
                      showPopup: showPopup,
                      onChange: onChange,
                      close1: close1,
                      showAddressExist: showAddressExist,
                      close2: close2,
                      selected: selected,
                      existAddress: existAddress,
                      showAddressOther: showAddressOther,
                      showCustomImg: showCustomImg,
                      close3: close3,
                      close4: close4,
                      switchModule: switchModule,
                      closeMask: closeMask
                    },
                    Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ 'q'])(
                      icon
                    )
                  ),
                  Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ 'q'])(
                    text
                  )
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ 'q'])(
                  showPopup
                )
              ),
              Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ 'q'])(
                address
              )
            );
          }
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/address/index.taro.vue?vue&type=script&lang=ts':
      /*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/address/index.taro.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js'
        );
        /* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/create */ '../../../packages/utils/create/index.ts'
        );
        /* harmony import */ var _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./../icon/index.taro.vue */ './src/pages/icon/index.taro.vue'
        );
        /* harmony import */ var _popup_index_taro_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./../popup/index.taro.vue */ './src/pages/popup/index.taro.vue'
        );
        /* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @tarojs/taro */ './node_modules/@tarojs/taro/index.js'
        );
        /* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__
        );

        var _createComponent = Object(
            _packages_utils_create__WEBPACK_IMPORTED_MODULE_4__[
              /* createComponent */ 'a'
            ]
          )('address'),
          create = _createComponent.create,
          componentName = _createComponent.componentName;

        /* harmony default export */ __webpack_exports__['a'] = create({
          inheritAttrs: false,
          props: {
            visible: {
              type: Boolean,
              default: false
            },
            type: {
              type: String,
              default: 'custom'
            },
            customAddressTitle: {
              type: String,
              default: '请选择所在地区'
            },
            province: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            city: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            // 市
            country: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            // 县
            town: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            // 镇
            isShowCustomAddress: {
              type: Boolean,
              default: true
            },
            // 是否显示‘选择其他地区’按钮 type=‘exist’ 生效
            existAddress: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            // 现存地址列表
            existAddressTitle: {
              type: String,
              default: '配送至'
            },
            customAndExistTitle: {
              type: String,
              default: '选择其他地址'
            },
            defaultIcon: {
              // 地址选择列表前 - 默认的图标
              type: String,
              default: 'location2'
            },
            selectedIcon: {
              // 地址选择列表前 - 选中的图标
              type: String,
              default: 'Check'
            },
            closeBtnIcon: {
              // 关闭弹框按钮 icon
              type: String,
              default: 'circle-close'
            },
            backBtnIcon: {
              // 选择其他地址左上角返回 icon
              type: String,
              default: 'left'
            }
          },
          components: {
            'nut-icon':
              _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_5__[
                /* default */ 'a'
              ],
            'nut-popup':
              _popup_index_taro_vue__WEBPACK_IMPORTED_MODULE_6__[
                /* default */ 'a'
              ]
          },
          emits: [
            'update:visible',
            'type',
            'change',
            'selected',
            'close',
            'close-mask',
            'switch-module'
          ],
          setup: function setup(props, _ref) {
            var emit = _ref.emit;
            var classes = Object(
              vue__WEBPACK_IMPORTED_MODULE_2__[/* computed */ 'd']
            )(function() {
              var prefixCls = componentName;
              return Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[
                  /* default */ 'a'
                ]
              )({}, prefixCls, true);
            });
            var regionLine = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j']
            )(null);
            var tabItemRef = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* reactive */ 'i']
            )({
              province: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j'])(
                null
              ),
              city: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j'])(
                null
              ),
              country: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j'])(
                null
              ),
              town: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j'])(
                null
              )
            });
            var showPopup = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j']
            )(props.visible);
            var privateType = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j']
            )(props.type);
            var tabIndex = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j']
            )(0);
            var tabName = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j']
            )(['province', 'city', 'country', 'town']);
            var regionList = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* reactive */ 'i']
            )({
              province: props.province,
              city: props.city,
              country: props.country,
              town: props.town
            });
            var selectedRegion = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* reactive */ 'i']
            )({
              province: {},
              city: {},
              country: {},
              town: {}
            }); //已选择的 省、市、县、镇

            var selectedExistAddress = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* reactive */ 'i']
            )({}); // 当前选择的地址

            var closeWay = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j']
            )('self');
            var lineDistance = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* ref */ 'j']
            )(20); //获取已选地区列表名称

            var getTabName = function getTabName(item, index) {
              if (item.name) return item.name;

              if (tabIndex.value < index) {
                return item.name;
              } else {
                return '请选择';
              }
            }; // 手动关闭 点击叉号(cross)，或者蒙层(mask)

            var handClose = function handClose() {
              var type =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 'self';
              if (!props.closeBtnIcon) return;
              closeWay.value = type == 'cross' ? 'cross' : 'self';
              showPopup.value = false;
            }; // 点击遮罩层关闭

            var clickOverlay = function clickOverlay() {
              closeWay.value = 'mask';
            }; // 移动下面的红线

            var lineAnimation = function lineAnimation() {
              setTimeout(function() {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a
                  .createSelectorQuery()
                  .selectAll('.'.concat(tabName.value[tabIndex.value]))
                  .boundingClientRect(function(rects) {
                    rects.forEach(function(rect) {
                      if (rect.width > 0) lineDistance.value = rect.left;
                    });
                  })
                  .exec();
              }, 100);
            }; // 切换下一级列表

            var nextAreaList = function nextAreaList(item) {
              // onchange 接收的参数
              var calBack = {
                next: '',
                value: '',
                custom: tabName.value[tabIndex.value]
              };
              selectedRegion[tabName.value[tabIndex.value]] = item;

              for (var i = tabIndex.value; i < tabIndex.value - 1; i++) {
                selectedRegion[tabName.value[i + 1]] = {};
              }

              if (tabIndex.value < 3) {
                tabIndex.value = tabIndex.value + 1;
                lineAnimation(); // 切换下一个

                calBack.next = tabName.value[tabIndex.value];
                calBack.value = item;
                emit('change', calBack);
              } else {
                handClose();
              }
            }; //切换地区Tab

            var changeRegionTab = function changeRegionTab(item, key, index) {
              tabIndex.value = index;
              lineAnimation();
            }; // 选择现有地址

            var selectedExist = function selectedExist(item) {
              var copyExistAdd = props.existAddress;
              var prevExistAdd = {};
              copyExistAdd.forEach(function(list, index) {
                if (list && list.selectedAddress) {
                  prevExistAdd = list;
                }

                list.selectedAddress = false;
              });
              item.selectedAddress = true;
              selectedExistAddress = item;
              emit('selected', prevExistAdd, item, copyExistAdd);
              handClose();
            }; // 初始化

            var initAddress = function initAddress() {
              for (var i = 0; i < tabName.value.length; i++) {
                selectedRegion[tabName.value[i]] = {};
              }

              tabIndex.value = 0;
              lineAnimation();
            }; // 关闭

            var close = function close() {
              var resCopy = Object.assign(
                {
                  addressIdStr: '',
                  addressStr: ''
                },
                selectedRegion
              );
              var res = {
                data: {},
                type: privateType.value
              };

              if (privateType.value == 'custom') {
                var province = resCopy.province,
                  city = resCopy.city,
                  country = resCopy.country,
                  town = resCopy.town;
                resCopy.addressIdStr = [
                  province.id || 0,
                  city.id || 0,
                  country.id || 0,
                  town.id || 0
                ].join('_');
                resCopy.addressStr = [
                  province.name,
                  city.name,
                  country.name,
                  town.name
                ].join('');
                res.data = resCopy;
              } else {
                res.data = selectedExistAddress;
              }

              initAddress();

              if (closeWay.value == 'self') {
                emit('close', res);
              } else {
                emit('close-mask', {
                  closeWay: closeWay
                });
              }

              emit('update:visible', false);
            }; // 选择其他地址

            var switchModule = function switchModule() {
              if (privateType.value == 'exist') {
                privateType.value = 'custom';
              } else {
                privateType.value = 'exist';
              }

              initAddress();
              emit('switch-module', {
                type: privateType.value
              });
            };

            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ 'E'])(
              function() {
                return props.visible;
              },
              function(value) {
                showPopup.value = value;
              }
            ); // watch(
            //   () => props.type,
            //   (value) => {
            //     privateType.value = value;
            //   }
            // );

            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ 'E'])(
              function() {
                return showPopup.value;
              },
              function(value) {
                if (value == false) {
                  close();
                }
              }
            );
            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ 'E'])(
              function() {
                return props.province;
              },
              function(value) {
                regionList.province = value;
              }
            );
            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ 'E'])(
              function() {
                return props.city;
              },
              function(value) {
                regionList.city = value;
              }
            );
            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ 'E'])(
              function() {
                return props.country;
              },
              function(value) {
                regionList.country = value;
              }
            );
            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ 'E'])(
              function() {
                return props.town;
              },
              function(value) {
                regionList.town = value;
              }
            );
            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ 'E'])(
              function() {
                return props.existAddress;
              },
              function(value) {
                //  existAddress.value = value;
                value.forEach(function(item, index) {
                  if (item.selectedAddress) {
                    selectedExistAddress = item;
                  }
                });
              }
            );
            return Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(
                {
                  classes: classes,
                  showPopup: showPopup,
                  privateType: privateType,
                  tabIndex: tabIndex,
                  tabName: tabName,
                  regionList: regionList,
                  selectedRegion: selectedRegion,
                  selectedExistAddress: selectedExistAddress,
                  switchModule: switchModule,
                  closeWay: closeWay,
                  close: close,
                  getTabName: getTabName,
                  nextAreaList: nextAreaList,
                  regionLine: regionLine,
                  lineDistance: lineDistance,
                  changeRegionTab: changeRegionTab,
                  selectedExist: selectedExist,
                  clickOverlay: clickOverlay,
                  handClose: handClose
                },
                Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* toRefs */ 'q'])(
                  props
                )
              ),
              Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* toRefs */ 'q'])(
                tabItemRef
              )
            );
          }
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/demo.vue?vue&type=template&id=3e528abc&scoped=true':
      /*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/address/demo.vue?vue&type=template&id=3e528abc&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return render;
          }
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );

        var _withId = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* withScopeId */ 'I']
        )('data-v-3e528abc');

        Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* pushScopeId */ 'w'])(
          'data-v-3e528abc'
        );

        var _hoisted_1 = {
          class: 'demo'
        };

        var _hoisted_2 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '选择自定义地址',
          -1
          /* HOISTED */
        );

        var _hoisted_3 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '选择已有地址',
          -1
          /* HOISTED */
        );

        var _hoisted_4 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '自定义图标',
          -1
          /* HOISTED */
        );

        var _hoisted_5 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '自定义地址与已有地址切换',
          -1
          /* HOISTED */
        );

        Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* popScopeId */ 'v'])();

        var render = /*#__PURE__*/ _withId(function(
          _ctx,
          _cache,
          $props,
          $setup,
          $data,
          $options
        ) {
          var _component_nut_cell = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('nut-cell');

          var _component_nut_address = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('nut-address');

          return (
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u'])(),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e'])(
              'view',
              _hoisted_1,
              [
                _hoisted_2,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  {
                    title: '选择地址',
                    desc: _ctx.one,
                    'is-link': '',
                    onClick: _ctx.showAddress
                  },
                  null,
                  8,
                  /* PROPS */
                  ['desc', 'onClick']
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_address,
                  {
                    visible: _ctx.normal,
                    'onUpdate:visible':
                      _cache[1] ||
                      (_cache[1] = function($event) {
                        return (_ctx.normal = $event);
                      }),
                    province: _ctx.province,
                    city: _ctx.city,
                    country: _ctx.country,
                    town: _ctx.town,
                    onChange:
                      _cache[2] ||
                      (_cache[2] = function(cal) {
                        return _ctx.onChange(cal, 'normal');
                      }),
                    onClose: _ctx.close1,
                    'custom-address-title': '请选择所在地区'
                  },
                  null,
                  8,
                  /* PROPS */
                  ['visible', 'province', 'city', 'country', 'town', 'onClose']
                ),
                _hoisted_3,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  {
                    title: '选择地址',
                    desc: _ctx.two,
                    'is-link': '',
                    onClick: _ctx.showAddressExist
                  },
                  null,
                  8,
                  /* PROPS */
                  ['desc', 'onClick']
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_address,
                  {
                    visible: _ctx.exist,
                    'onUpdate:visible':
                      _cache[3] ||
                      (_cache[3] = function($event) {
                        return (_ctx.exist = $event);
                      }),
                    type: 'exist',
                    'exist-address': _ctx.existAddress,
                    onChange:
                      _cache[4] ||
                      (_cache[4] = function(cal) {
                        return _ctx.onChange(cal, 'exist');
                      }),
                    onClose: _ctx.close2,
                    'is-show-custom-address': false,
                    onSelected: _ctx.selected,
                    'exist-address-title': '配送至'
                  },
                  null,
                  8,
                  /* PROPS */
                  ['visible', 'exist-address', 'onClose', 'onSelected']
                ),
                _hoisted_4,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  {
                    title: '选择地址',
                    desc: _ctx.three,
                    'is-link': '',
                    onClick: _ctx.showCustomImg
                  },
                  null,
                  8,
                  /* PROPS */
                  ['desc', 'onClick']
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_address,
                  {
                    visible: _ctx.customImg,
                    'onUpdate:visible':
                      _cache[5] ||
                      (_cache[5] = function($event) {
                        return (_ctx.customImg = $event);
                      }),
                    type: 'exist',
                    'exist-address': _ctx.existAddress,
                    onChange:
                      _cache[6] ||
                      (_cache[6] = function(cal) {
                        return _ctx.onChange(cal, 'customImg');
                      }),
                    onClose: _ctx.close3,
                    'is-show-custom-address': false,
                    onSelected: _ctx.selected,
                    'default-icon': _ctx.defaultIcon,
                    'selected-icon': _ctx.selectedIcon,
                    'close-btn-icon': _ctx.closeBtnIcon
                  },
                  null,
                  8,
                  /* PROPS */
                  [
                    'visible',
                    'exist-address',
                    'onClose',
                    'onSelected',
                    'default-icon',
                    'selected-icon',
                    'close-btn-icon'
                  ]
                ),
                _hoisted_5,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  {
                    title: '选择地址',
                    desc: _ctx.four,
                    'is-link': '',
                    onClick: _ctx.showAddressOther
                  },
                  null,
                  8,
                  /* PROPS */
                  ['desc', 'onClick']
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_address,
                  {
                    visible: _ctx.other,
                    'onUpdate:visible':
                      _cache[7] ||
                      (_cache[7] = function($event) {
                        return (_ctx.other = $event);
                      }),
                    type: 'exist',
                    'exist-address': _ctx.existAddress,
                    province: _ctx.province,
                    city: _ctx.city,
                    country: _ctx.country,
                    town: _ctx.town,
                    'back-btn-icon': _ctx.backBtnIcon,
                    onChange:
                      _cache[8] ||
                      (_cache[8] = function(cal) {
                        return _ctx.onChange(cal, 'other');
                      }),
                    onClose: _ctx.close4,
                    onSelected: _ctx.selected,
                    'custom-and-exist-title': '选择其他地址',
                    onSwitchModule: _ctx.switchModule,
                    onCloseMask: _ctx.closeMask
                  },
                  null,
                  8,
                  /* PROPS */
                  [
                    'visible',
                    'exist-address',
                    'province',
                    'city',
                    'country',
                    'town',
                    'back-btn-icon',
                    'onClose',
                    'onSelected',
                    'onSwitchModule',
                    'onCloseMask'
                  ]
                )
              ]
            )
          );
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/index.taro.vue?vue&type=template&id=5613d305':
      /*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/address/index.taro.vue?vue&type=template&id=5613d305 ***!
  \***********************************************************************************************************************************************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return render;
          }
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/shared/dist/shared.esm-bundler.js'
        );

        var _hoisted_1 = {
          class: 'region-group'
        };
        var _hoisted_2 = {
          class: 'exist-address-group'
        };
        var _hoisted_3 = {
          class: 'exist-ul'
        };
        var _hoisted_4 = {
          class: 'btn'
        };
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_nut_icon = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('nut-icon');

          var _component_view_block = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('view-block');

          var _component_nut_popup = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('nut-popup');

          return (
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u'])(),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e'])(
              _component_nut_popup,
              {
                position: 'bottom',
                onClose: _ctx.close,
                onClickOverlay: _ctx.clickOverlay,
                onOpen:
                  _cache[3] ||
                  (_cache[3] = function($event) {
                    return (_ctx.closeWay = 'self');
                  }),
                visible: _ctx.showPopup,
                'onUpdate:visible':
                  _cache[4] ||
                  (_cache[4] = function($event) {
                    return (_ctx.showPopup = $event);
                  }),
                class: _ctx.classes
              },
              {
                default: Object(
                  vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'G']
                )(function() {
                  return [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_view_block,
                      {
                        class: 'nut-address'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'G']
                        )(function() {
                          return [
                            Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* createVNode */ 'j'
                              ]
                            )(
                              _component_view_block,
                              {
                                class: 'nut-address__header'
                              },
                              {
                                default: Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* withCtx */ 'G'
                                  ]
                                )(function() {
                                  return [
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createVNode */ 'j'
                                      ]
                                    )(
                                      _component_view_block,
                                      {
                                        class: 'arrow-back',
                                        onClick: _ctx.switchModule
                                      },
                                      {
                                        default: Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* withCtx */ 'G'
                                          ]
                                        )(function() {
                                          return [
                                            _ctx.privateType == 'custom' &&
                                            _ctx.backBtnIcon
                                              ? (Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* openBlock */ 'u'
                                                  ]
                                                )(),
                                                Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createBlock */ 'e'
                                                  ]
                                                )(
                                                  _component_nut_icon,
                                                  {
                                                    key: 0,
                                                    name: _ctx.backBtnIcon,
                                                    color: '#cccccc'
                                                  },
                                                  null,
                                                  8,
                                                  /* PROPS */
                                                  ['name']
                                                ))
                                              : Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createCommentVNode */ 'f'
                                                  ]
                                                )('v-if', true)
                                          ];
                                        }),
                                        _: 1
                                        /* STABLE */
                                      },
                                      8,
                                      /* PROPS */
                                      ['onClick']
                                    ),
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createVNode */ 'j'
                                      ]
                                    )(
                                      _component_view_block,
                                      {
                                        class: 'nut-address__header__title'
                                      },
                                      {
                                        default: Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* withCtx */ 'G'
                                          ]
                                        )(function() {
                                          return [
                                            Object(
                                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                                /* createTextVNode */ 'i'
                                              ]
                                            )(
                                              Object(
                                                vue__WEBPACK_IMPORTED_MODULE_1__[
                                                  /* toDisplayString */ 'J'
                                                ]
                                              )(
                                                _ctx.privateType == 'custom'
                                                  ? _ctx.customAddressTitle
                                                  : _ctx.existAddressTitle
                                              ),
                                              1
                                              /* TEXT */
                                            )
                                          ];
                                        }),
                                        _: 1
                                        /* STABLE */
                                      }
                                    ),
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createVNode */ 'j'
                                      ]
                                    )(
                                      _component_view_block,
                                      {
                                        class: 'arrow-close',
                                        onClick:
                                          _cache[1] ||
                                          (_cache[1] = function($event) {
                                            return _ctx.handClose('cross');
                                          })
                                      },
                                      {
                                        default: Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* withCtx */ 'G'
                                          ]
                                        )(function() {
                                          return [
                                            _ctx.closeBtnIcon
                                              ? (Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* openBlock */ 'u'
                                                  ]
                                                )(),
                                                Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createBlock */ 'e'
                                                  ]
                                                )(
                                                  _component_nut_icon,
                                                  {
                                                    key: 0,
                                                    name: _ctx.closeBtnIcon,
                                                    color: '#cccccc',
                                                    size: '18px'
                                                  },
                                                  null,
                                                  8,
                                                  /* PROPS */
                                                  ['name']
                                                ))
                                              : Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createCommentVNode */ 'f'
                                                  ]
                                                )('v-if', true)
                                          ];
                                        }),
                                        _: 1
                                        /* STABLE */
                                      }
                                    )
                                  ];
                                }),
                                _: 1
                                /* STABLE */
                              }
                            ),
                            Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* createCommentVNode */ 'f'
                              ]
                            )(' 请选择 '),
                            _ctx.privateType == 'custom'
                              ? (Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* openBlock */ 'u'
                                  ]
                                )(),
                                Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* createBlock */ 'e'
                                  ]
                                )(
                                  _component_view_block,
                                  {
                                    key: 0,
                                    class: 'custom-address'
                                  },
                                  {
                                    default: Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* withCtx */ 'G'
                                      ]
                                    )(function() {
                                      return [
                                        Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* createVNode */ 'j'
                                          ]
                                        )(
                                          _component_view_block,
                                          {
                                            class: 'region-tab'
                                          },
                                          {
                                            default: Object(
                                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                                /* withCtx */ 'G'
                                              ]
                                            )(function() {
                                              return [
                                                (Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* openBlock */ 'u'
                                                  ]
                                                )(true),
                                                Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createBlock */ 'e'
                                                  ]
                                                )(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* Fragment */ 'b'
                                                  ],
                                                  null,
                                                  Object(
                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                      /* renderList */ 'x'
                                                    ]
                                                  )(
                                                    _ctx.selectedRegion,
                                                    function(item, key, index) {
                                                      return (
                                                        Object(
                                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                                            /* openBlock */ 'u'
                                                          ]
                                                        )(),
                                                        Object(
                                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                                            /* createBlock */ 'e'
                                                          ]
                                                        )(
                                                          _component_view_block,
                                                          {
                                                            class: [
                                                              'tab-item',
                                                              [
                                                                index ==
                                                                _ctx.tabIndex
                                                                  ? 'active'
                                                                  : '',
                                                                key
                                                              ]
                                                            ],
                                                            key: index,
                                                            ref: key,
                                                            onClick: function onClick(
                                                              $event
                                                            ) {
                                                              return _ctx.changeRegionTab(
                                                                item,
                                                                key,
                                                                index
                                                              );
                                                            }
                                                          },
                                                          {
                                                            default: Object(
                                                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                                                /* withCtx */ 'G'
                                                              ]
                                                            )(function() {
                                                              return [
                                                                Object(
                                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                                    /* createVNode */ 'j'
                                                                  ]
                                                                )(
                                                                  'view',
                                                                  null,
                                                                  Object(
                                                                    vue__WEBPACK_IMPORTED_MODULE_1__[
                                                                      /* toDisplayString */ 'J'
                                                                    ]
                                                                  )(
                                                                    _ctx.getTabName(
                                                                      item,
                                                                      index
                                                                    )
                                                                  ),
                                                                  1
                                                                  /* TEXT */
                                                                )
                                                              ];
                                                            }),
                                                            _: 2
                                                            /* DYNAMIC */
                                                          },
                                                          1032,
                                                          /* PROPS, DYNAMIC_SLOTS */
                                                          ['class', 'onClick']
                                                        )
                                                      );
                                                    }
                                                  ),
                                                  128
                                                  /* KEYED_FRAGMENT */
                                                )),
                                                Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createVNode */ 'j'
                                                  ]
                                                )(
                                                  _component_view_block,
                                                  {
                                                    class: 'region-tab-line',
                                                    ref: 'regionLine',
                                                    style: {
                                                      left:
                                                        _ctx.lineDistance + 'px'
                                                    }
                                                  },
                                                  null,
                                                  8,
                                                  /* PROPS */
                                                  ['style']
                                                )
                                              ];
                                            }),
                                            _: 1
                                            /* STABLE */
                                          }
                                        ),
                                        Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* createVNode */ 'j'
                                          ]
                                        )(
                                          _component_view_block,
                                          {
                                            class: 'region-con'
                                          },
                                          {
                                            default: Object(
                                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                                /* withCtx */ 'G'
                                              ]
                                            )(function() {
                                              return [
                                                Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createVNode */ 'j'
                                                  ]
                                                )('ul', _hoisted_1, [
                                                  (Object(
                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                      /* openBlock */ 'u'
                                                    ]
                                                  )(true),
                                                  Object(
                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                      /* createBlock */ 'e'
                                                    ]
                                                  )(
                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                      /* Fragment */ 'b'
                                                    ],
                                                    null,
                                                    Object(
                                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                                        /* renderList */ 'x'
                                                      ]
                                                    )(
                                                      _ctx.regionList[
                                                        _ctx.tabName[
                                                          _ctx.tabIndex
                                                        ]
                                                      ],
                                                      function(item, index) {
                                                        return (
                                                          Object(
                                                            vue__WEBPACK_IMPORTED_MODULE_0__[
                                                              /* openBlock */ 'u'
                                                            ]
                                                          )(),
                                                          Object(
                                                            vue__WEBPACK_IMPORTED_MODULE_0__[
                                                              /* createBlock */ 'e'
                                                            ]
                                                          )(
                                                            'li',
                                                            {
                                                              key: index,
                                                              class: [
                                                                'region-item',
                                                                [
                                                                  _ctx
                                                                    .selectedRegion[
                                                                    _ctx
                                                                      .tabName[
                                                                      _ctx
                                                                        .tabIndex
                                                                    ]
                                                                  ].id ==
                                                                  item.id
                                                                    ? 'active'
                                                                    : ''
                                                                ]
                                                              ],
                                                              onClick: function onClick(
                                                                $event
                                                              ) {
                                                                return _ctx.nextAreaList(
                                                                  item
                                                                );
                                                              }
                                                            },
                                                            [
                                                              _ctx
                                                                .selectedRegion[
                                                                _ctx.tabName[
                                                                  _ctx.tabIndex
                                                                ]
                                                              ].id == item.id
                                                                ? (Object(
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                                      /* openBlock */ 'u'
                                                                    ]
                                                                  )(),
                                                                  Object(
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                                      /* createBlock */ 'e'
                                                                    ]
                                                                  )(
                                                                    _component_nut_icon,
                                                                    {
                                                                      key: 0,
                                                                      class:
                                                                        'region-item-icon',
                                                                      type:
                                                                        'self',
                                                                      name:
                                                                        _ctx.selectedIcon,
                                                                      color:
                                                                        '#FA2C19',
                                                                      size:
                                                                        '13px'
                                                                    },
                                                                    null,
                                                                    8,
                                                                    /* PROPS */
                                                                    ['name']
                                                                  ))
                                                                : Object(
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                                      /* createCommentVNode */ 'f'
                                                                    ]
                                                                  )(
                                                                    'v-if',
                                                                    true
                                                                  ),
                                                              Object(
                                                                vue__WEBPACK_IMPORTED_MODULE_0__[
                                                                  /* createTextVNode */ 'i'
                                                                ]
                                                              )(
                                                                Object(
                                                                  vue__WEBPACK_IMPORTED_MODULE_1__[
                                                                    /* toDisplayString */ 'J'
                                                                  ]
                                                                )(item.name),
                                                                1
                                                                /* TEXT */
                                                              )
                                                            ],
                                                            10,
                                                            /* CLASS, PROPS */
                                                            ['onClick']
                                                          )
                                                        );
                                                      }
                                                    ),
                                                    128
                                                    /* KEYED_FRAGMENT */
                                                  ))
                                                ])
                                              ];
                                            }),
                                            _: 1
                                            /* STABLE */
                                          }
                                        )
                                      ];
                                    }),
                                    _: 1
                                    /* STABLE */
                                  }
                                ))
                              : _ctx.privateType == 'exist'
                              ? (Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* openBlock */ 'u'
                                  ]
                                )(),
                                Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* createBlock */ 'e'
                                  ]
                                )(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* Fragment */ 'b'
                                  ],
                                  {
                                    key: 1
                                  },
                                  [
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createCommentVNode */ 'f'
                                      ]
                                    )(' 配送至 '),
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createVNode */ 'j'
                                      ]
                                    )(
                                      _component_view_block,
                                      {
                                        class: 'exist-address'
                                      },
                                      {
                                        default: Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* withCtx */ 'G'
                                          ]
                                        )(function() {
                                          return [
                                            Object(
                                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                                /* createVNode */ 'j'
                                              ]
                                            )('div', _hoisted_2, [
                                              Object(
                                                vue__WEBPACK_IMPORTED_MODULE_0__[
                                                  /* createVNode */ 'j'
                                                ]
                                              )('ul', _hoisted_3, [
                                                (Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* openBlock */ 'u'
                                                  ]
                                                )(true),
                                                Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createBlock */ 'e'
                                                  ]
                                                )(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* Fragment */ 'b'
                                                  ],
                                                  null,
                                                  Object(
                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                      /* renderList */ 'x'
                                                    ]
                                                  )(_ctx.existAddress, function(
                                                    item,
                                                    index
                                                  ) {
                                                    return (
                                                      Object(
                                                        vue__WEBPACK_IMPORTED_MODULE_0__[
                                                          /* openBlock */ 'u'
                                                        ]
                                                      )(),
                                                      Object(
                                                        vue__WEBPACK_IMPORTED_MODULE_0__[
                                                          /* createBlock */ 'e'
                                                        ]
                                                      )(
                                                        'li',
                                                        {
                                                          class: [
                                                            'exist-item',
                                                            [
                                                              item.selectedAddress
                                                                ? 'active'
                                                                : ''
                                                            ]
                                                          ],
                                                          key: index,
                                                          onClick: function onClick(
                                                            $event
                                                          ) {
                                                            return _ctx.selectedExist(
                                                              item
                                                            );
                                                          }
                                                        },
                                                        [
                                                          Object(
                                                            vue__WEBPACK_IMPORTED_MODULE_0__[
                                                              /* createVNode */ 'j'
                                                            ]
                                                          )(
                                                            _component_nut_icon,
                                                            {
                                                              class:
                                                                'exist-item-icon',
                                                              type: 'self',
                                                              name: item.selectedAddress
                                                                ? _ctx.selectedIcon
                                                                : _ctx.defaultIcon,
                                                              color: item.selectedAddress
                                                                ? '#FA2C19'
                                                                : '',
                                                              size: '13px'
                                                            },
                                                            null,
                                                            8,
                                                            /* PROPS */
                                                            ['name', 'color']
                                                          ),
                                                          Object(
                                                            vue__WEBPACK_IMPORTED_MODULE_0__[
                                                              /* createVNode */ 'j'
                                                            ]
                                                          )(
                                                            'view',
                                                            null,
                                                            Object(
                                                              vue__WEBPACK_IMPORTED_MODULE_1__[
                                                                /* toDisplayString */ 'J'
                                                              ]
                                                            )(
                                                              item.provinceName +
                                                                item.cityName +
                                                                item.countyName +
                                                                item.townName +
                                                                item.addressDetail
                                                            ),
                                                            1
                                                            /* TEXT */
                                                          )
                                                        ],
                                                        10,
                                                        /* CLASS, PROPS */
                                                        ['onClick']
                                                      )
                                                    );
                                                  }),
                                                  128
                                                  /* KEYED_FRAGMENT */
                                                ))
                                              ])
                                            ]),
                                            _ctx.isShowCustomAddress
                                              ? (Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* openBlock */ 'u'
                                                  ]
                                                )(),
                                                Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createBlock */ 'e'
                                                  ]
                                                )(
                                                  'div',
                                                  {
                                                    key: 0,
                                                    class: 'choose-other',
                                                    onClick:
                                                      _cache[2] ||
                                                      (_cache[2] = function() {
                                                        return (
                                                          _ctx.switchModule &&
                                                          _ctx.switchModule.apply(
                                                            _ctx,
                                                            arguments
                                                          )
                                                        );
                                                      })
                                                  },
                                                  [
                                                    Object(
                                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                                        /* createVNode */ 'j'
                                                      ]
                                                    )(
                                                      'div',
                                                      _hoisted_4,
                                                      Object(
                                                        vue__WEBPACK_IMPORTED_MODULE_1__[
                                                          /* toDisplayString */ 'J'
                                                        ]
                                                      )(
                                                        _ctx.customAndExistTitle
                                                      ),
                                                      1
                                                      /* TEXT */
                                                    )
                                                  ]
                                                ))
                                              : Object(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                                    /* createCommentVNode */ 'f'
                                                  ]
                                                )('v-if', true)
                                          ];
                                        }),
                                        _: 1
                                        /* STABLE */
                                      }
                                    )
                                  ],
                                  2112
                                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                                ))
                              : Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* createCommentVNode */ 'f'
                                  ]
                                )('v-if', true)
                          ];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              },
              8,
              /* PROPS */
              ['onClose', 'onClickOverlay', 'visible', 'class']
            )
          );
        }

        /***/
      },

    /***/ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true':
      /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/address/demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss':
      /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/address/index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ './src/pages/address/demo.vue':
      /*!************************************!*\
  !*** ./src/pages/address/demo.vue ***!
  \************************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./demo.vue */ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/address/demo.vue'
        );

        var config = {};

        var inst = Page(
          Object(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__['createPageConfig']
          )(
            _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ],
            'pages/address/demo',
            { root: { cn: [] } },
            config || {}
          )
        );

        /***/
      },

    /***/ './src/pages/address/demo.vue?vue&type=script&lang=ts':
      /*!************************************************************!*\
  !*** ./src/pages/address/demo.vue?vue&type=script&lang=ts ***!
  \************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=script&lang=ts */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/address/demo.vue?vue&type=script&lang=ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/address/demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true':
      /*!*********************************************************************************************!*\
  !*** ./src/pages/address/demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_3e528abc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true */ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/demo.vue?vue&type=style&index=0&id=3e528abc&lang=scss&scoped=true'
        );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_3e528abc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_3e528abc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__
        );
        /* unused harmony reexport * */

        /***/
      },

    /***/ './src/pages/address/demo.vue?vue&type=template&id=3e528abc&scoped=true':
      /*!******************************************************************************!*\
  !*** ./src/pages/address/demo.vue?vue&type=template&id=3e528abc&scoped=true ***!
  \******************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_3e528abc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=template&id=3e528abc&scoped=true */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/demo.vue?vue&type=template&id=3e528abc&scoped=true'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_3e528abc_scoped_true__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/address/index.taro.vue':
      /*!******************************************!*\
  !*** ./src/pages/address/index.taro.vue ***!
  \******************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _index_taro_vue_vue_type_template_id_5613d305__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=template&id=5613d305 */ './src/pages/address/index.taro.vue?vue&type=template&id=5613d305'
        );
        /* harmony import */ var _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=script&lang=ts */ './src/pages/address/index.taro.vue?vue&type=script&lang=ts'
        );
        /* harmony import */ var _index_taro_vue_vue_type_style_index_0_id_5613d305_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss */ './src/pages/address/index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss'
        );

        _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _index_taro_vue_vue_type_template_id_5613d305__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        /* hot reload */
        if (false) {
        }

        _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/address/index.taro.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './src/pages/address/index.taro.vue?vue&type=script&lang=ts':
      /*!******************************************************************!*\
  !*** ./src/pages/address/index.taro.vue?vue&type=script&lang=ts ***!
  \******************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=script&lang=ts */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/address/index.taro.vue?vue&type=script&lang=ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/address/index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss':
      /*!***************************************************************************************!*\
  !*** ./src/pages/address/index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_5613d305_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss */ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/index.taro.vue?vue&type=style&index=0&id=5613d305&lang=scss'
        );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_5613d305_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_5613d305_lang_scss__WEBPACK_IMPORTED_MODULE_0__
        );
        /* unused harmony reexport * */

        /***/
      },

    /***/ './src/pages/address/index.taro.vue?vue&type=template&id=5613d305':
      /*!************************************************************************!*\
  !*** ./src/pages/address/index.taro.vue?vue&type=template&id=5613d305 ***!
  \************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_template_id_5613d305__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=template&id=5613d305 */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/address/index.taro.vue?vue&type=template&id=5613d305'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_template_id_5613d305__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      }
  },
  [['./src/pages/address/demo.vue', 'runtime', 'taro', 'vendors', 'common']]
]);
//# sourceMappingURL=demo.js.map
