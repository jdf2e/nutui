(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['taro'],
  {
    /***/ './node_modules/@tarojs/mini-runner/dist/template/comp.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/comp.js ***!
  \****************************************************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* eslint-disable no-undef */
        // @ts-ignore

        Component(
          Object(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__[
              'createRecursiveComponentConfig'
            ]
          )()
        );

        /***/
      },

    /***/ './node_modules/@tarojs/mini-runner/dist/template/custom-wrapper.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/custom-wrapper.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /*! all exports used */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /* eslint-disable no-undef */

        var runtime_1 = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        ); // @ts-ignore

        Component(runtime_1.createRecursiveComponentConfig('custom-wrapper'));

        /***/
      },

    /***/ './node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js ***!
  \********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
        );

        var noPromiseApis = new Set([
          'getAccountInfoSync',
          'getEnterOptionsSync',
          'offBLEPeripheralConnectionStateChanged',
          'offBeaconServiceChange',
          'offBeaconUpdate',
          'offDeviceMotionChange',
          'offHCEMessage',
          'offKeyboardHeightChange',
          'offLocalServiceDiscoveryStop',
          'offLocalServiceFound',
          'offLocalServiceLost',
          'offLocalServiceResolveFail',
          'offLocationChange',
          'offThemeChange',
          'offVoIPChatInterrupted',
          'offVoIPChatMembersChanged',
          'offVoIPVideoMembersChanged',
          'offWifiConnected',
          'offWindowResize',
          'onBLEPeripheralConnectionStateChanged',
          'onBackgroundAudioPause',
          'onBackgroundAudioPlay',
          'onBackgroundAudioStop',
          'onBackgroundFetchData',
          'onHCEMessage',
          'onKeyboardHeightChange',
          'onLocalServiceDiscoveryStop',
          'onLocalServiceFound',
          'onLocalServiceLost',
          'onLocalServiceResolveFail',
          'onLocationChange',
          'onThemeChange',
          'onVoIPChatInterrupted',
          'onVoIPChatMembersChanged',
          'onVoIPChatSpeakersChanged',
          'onVoIPVideoMembersChanged',
          'onWifiConnected',
          'onWindowResize',
          'reportMonitor',
          'onGyroscopeChange',
          'offGyroscopeChange',
          'createAudioContext',
          'createLivePusherContext',
          'createMediaContainer',
          'createMediaRecorder',
          'createOffscreenCanvas',
          'createRewardedVideoAd',
          'createUDPSocket',
          'createVideoDecoder',
          'createWorker',
          'getLogManager',
          'getNFCAdapter',
          'getPerformance',
          'getRealtimeLogManager',
          'pauseBackgroundAudio',
          'pauseVoice',
          'reportPerformance',
          'stopBackgroundAudio',
          'stopRecord',
          'stopVoice',
          'onBluetoothDeviceFound',
          'onBluetoothAdapterStateChange',
          'offBluetoothDeviceFound',
          'offBluetoothAdapterStateChange',
          'onBLEConnectionStateChange',
          'onBLECharacteristicValueChange',
          'offBLEConnectionStateChange',
          'offBLECharacteristicValueChange'
        ]);
        var needPromiseApis = new Set([
          'addCard',
          'authPrivateMessage',
          'checkIsOpenAccessibility',
          'checkIsSoterEnrolledInDevice',
          'checkIsSupportSoterAuthentication',
          'chooseInvoice',
          'chooseMedia',
          'chooseMessageFile',
          'compressVideo',
          'connectWifi',
          'createBLEPeripheralServer',
          'disableAlertBeforeUnload',
          'enableAlertBeforeUnload',
          'exitVoIPChat',
          'getBLEDeviceRSSI',
          'getBackgroundAudioPlayerState',
          'getBackgroundFetchData',
          'getBackgroundFetchToken',
          'getGroupEnterInfo',
          'getHCEState',
          'getSelectedTextRange',
          'getShareInfo',
          'getVideoInfo',
          'getWeRunData',
          'join1v1Chat',
          'joinVoIPChat',
          'makeBluetoothPair',
          'openCard',
          'openVideoEditor',
          'playBackgroundAudio',
          'playVoice',
          'previewMedia',
          'requestPayment',
          'saveFileToDisk',
          'scanItem',
          'seekBackgroundAudio',
          'sendHCEMessage',
          'setBLEMTU',
          'setBackgroundFetchToken',
          'setEnable1v1Chat',
          'setTopBarText',
          'setWifiList',
          'setWindowSize',
          'showRedPackage',
          'startGyroscope',
          'startHCE',
          'startLocalServiceDiscovery',
          'startLocationUpdate',
          'startLocationUpdateBackground',
          'startRecord',
          'startSoterAuthentication',
          'startWifi',
          'stopGyroscope',
          'stopHCE',
          'stopLocalServiceDiscovery',
          'stopLocationUpdate',
          'stopWifi',
          'subscribeVoIPVideoMembers',
          'updateShareMenu',
          'updateVoIPChatMuteConfig',
          'updateWeChatApp',
          'sendBizRedPacket',
          'getUserProfile',
          'stopBluetoothDevicesDiscovery',
          'startBluetoothDevicesDiscovery',
          'openBluetoothAdapter',
          'getConnectedBluetoothDevices',
          'getBluetoothDevices',
          'getBluetoothAdapterState',
          'closeBluetoothAdapter',
          'writeBLECharacteristicValue',
          'readBLECharacteristicValue',
          'notifyBLECharacteristicValueChange',
          'getBLEDeviceServices',
          'getBLEDeviceCharacteristics',
          'createBLEConnection',
          'closeBLEConnection'
        ]);

        function initNativeApi(taro) {
          Object(
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* processApis */ 'q']
          )(taro, wx, {
            noPromiseApis: noPromiseApis,
            needPromiseApis: needPromiseApis
          });
          taro.cloud = wx.cloud;
        }

        var components = {
          // ======== 调整属性 ========
          Progress: {
            'border-radius': '0',
            'font-size': '16',
            duration: '30',
            bindActiveEnd: ''
          },
          RichText: {
            space: ''
          },
          Text: {
            'user-select': 'false'
          },
          Map: {
            polygons: '[]',
            subkey: '',
            rotate: '0',
            skew: '0',
            'enable-3D': 'false',
            'show-compass': 'false',
            'show-scale': 'false',
            'enable-overlooking': 'false',
            'enable-zoom': 'true',
            'enable-scroll': 'true',
            'enable-rotate': 'false',
            'enable-satellite': 'false',
            'enable-traffic': 'false',
            setting: '[]',
            bindLabelTap: '',
            bindRegionChange: '',
            bindPoiTap: ''
          },
          Button: {
            lang: 'en',
            'session-from': '',
            'send-message-title': '',
            'send-message-path': '',
            'send-message-img': '',
            'app-parameter': '',
            'show-message-card': 'false',
            'business-id': '',
            bindGetUserInfo: '',
            bindContact: '',
            bindGetPhoneNumber: '',
            bindError: '',
            bindOpenSetting: '',
            bindLaunchApp: ''
          },
          Form: {
            'report-submit-timeout': '0'
          },
          Input: {
            'auto-focus': 'false',
            'always-embed': 'false',
            'adjust-position': 'true',
            'hold-keyboard': 'false',
            bindKeyboardHeightChange: ''
          },
          Picker: {
            'header-text': ''
          },
          PickerView: {
            bindPickStart: '',
            bindPickEnd: ''
          },
          Slider: {
            color: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('#e9e9e9'),
            'selected-color': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('#1aad19')
          },
          Textarea: {
            'show-confirm-bar': 'true',
            'adjust-position': 'true',
            'hold-keyboard': 'false',
            'disable-default-padding': 'false',
            bindKeyboardHeightChange: ''
          },
          ScrollView: {
            'enable-flex': 'false',
            'scroll-anchoring': 'false',
            'refresher-enabled': 'false',
            'refresher-threshold': '45',
            'refresher-default-style': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('black'),
            'refresher-background': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('#FFF'),
            'refresher-triggered': 'false',
            enhanced: 'false',
            bounces: 'true',
            'show-scrollbar': 'true',
            'paging-enabled': 'false',
            'fast-deceleration': 'false',
            bindDragStart: '',
            bindDragging: '',
            bindDragEnd: '',
            bindRefresherPulling: '',
            bindRefresherRefresh: '',
            bindRefresherRestore: '',
            bindRefresherAbort: ''
          },
          Swiper: {
            'snap-to-edge': 'false',
            'easing-function': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('default')
          },
          SwiperItem: {
            'skip-hidden-item-layout': 'false'
          },
          Navigator: {
            target: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('self'),
            'app-id': '',
            path: '',
            'extra-data': '',
            version: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('version')
          },
          Camera: {
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('normal'),
            resolution: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('medium'),
            'frame-size': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('medium'),
            bindInitDone: '',
            bindScanCode: ''
          },
          Image: {
            webp: 'false',
            'show-menu-by-longpress': 'false'
          },
          LivePlayer: {
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('live'),
            'sound-mode': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('speaker'),
            'auto-pause-if-navigate': 'true',
            'auto-pause-if-open-native': 'true',
            'picture-in-picture-mode': '[]',
            bindstatechange: '',
            bindfullscreenchange: '',
            bindnetstatus: '',
            bindAudioVolumeNotify: '',
            bindEnterPictureInPicture: '',
            bindLeavePictureInPicture: ''
          },
          Video: {
            title: '',
            'play-btn-position': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('bottom'),
            'enable-play-gesture': 'false',
            'auto-pause-if-navigate': 'true',
            'auto-pause-if-open-native': 'true',
            'vslide-gesture': 'false',
            'vslide-gesture-in-fullscreen': 'true',
            'ad-unit-id': '',
            'poster-for-crawler': '',
            'show-casting-button': 'false',
            'picture-in-picture-mode': '[]',
            // picture-in-picture-show-progress 属性先注释掉的原因如下：
            // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
            // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
            // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
            // 'picture-in-picture-show-progress': 'false',
            'enable-auto-rotation': 'false',
            'show-screen-lock-button': 'false',
            bindProgress: '',
            bindLoadedMetadata: '',
            bindControlsToggle: '',
            bindEnterPictureInPicture: '',
            bindLeavePictureInPicture: '',
            bindSeekComplete: '',
            bindAdLoad: '',
            bindAdError: '',
            bindAdClose: '',
            bindAdPlay: ''
          },
          Canvas: {
            type: ''
          },
          Ad: {
            'ad-type': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('banner'),
            'ad-theme': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('white')
          },
          // ======== 额外组件 ========
          Editor: {
            'read-only': 'false',
            placeholder: '',
            'show-img-size': 'false',
            'show-img-toolbar': 'false',
            'show-img-resize': 'false',
            focus: 'false',
            bindReady: '',
            bindFocus: '',
            bindBlur: '',
            bindInput: '',
            bindStatusChange: '',
            name: ''
          },
          MatchMedia: {
            'min-width': '',
            'max-width': '',
            width: '',
            'min-height': '',
            'max-height': '',
            height: '',
            orientation: ''
          },
          FunctionalPageNavigator: {
            version: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('release'),
            name: '',
            args: '',
            bindSuccess: '',
            bindFail: '',
            bindCancel: ''
          },
          LivePusher: {
            url: '',
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('RTC'),
            autopush: 'false',
            muted: 'false',
            'enable-camera': 'true',
            'auto-focus': 'true',
            orientation: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('vertical'),
            beauty: '0',
            whiteness: '0',
            aspect: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('9:16'),
            'min-bitrate': '200',
            'max-bitrate': '1000',
            'audio-quality': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('high'),
            'waiting-image': '',
            'waiting-image-hash': '',
            zoom: 'false',
            'device-position': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('front'),
            'background-mute': 'false',
            mirror: 'false',
            'remote-mirror': 'false',
            'local-mirror': 'false',
            'audio-reverb-type': '0',
            'enable-mic': 'true',
            'enable-agc': 'false',
            'enable-ans': 'false',
            'audio-volume-type': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('voicecall'),
            'video-width': '360',
            'video-height': '640',
            'beauty-style': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('smooth'),
            filter: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('standard'),
            animation: '',
            bindStateChange: '',
            bindNetStatus: '',
            bindBgmStart: '',
            bindBgmProgress: '',
            bindBgmComplete: '',
            bindAudioVolumeNotify: ''
          },
          OfficialAccount: {
            bindLoad: '',
            bindError: ''
          },
          OpenData: {
            type: '',
            'open-gid': '',
            lang: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('en'),
            'default-text': '',
            'default-avatar': '',
            bindError: ''
          },
          NavigationBar: {
            title: '',
            loading: 'false',
            'front-color': '',
            'background-color': '',
            'color-animation-duration': '0',
            'color-animation-timing-func': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('linear')
          },
          PageMeta: {
            'background-text-style': '',
            'background-color': '',
            'background-color-top': '',
            'background-color-bottom': '',
            'scroll-top': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )(''),
            'scroll-duration': '300',
            'page-style': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )(''),
            'root-font-size': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )(''),
            bindResize: '',
            bindScroll: '',
            bindScrollDone: ''
          },
          VoipRoom: {
            openid: '',
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('camera'),
            'device-position': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('front'),
            bindError: ''
          },
          AdCustom: {
            'unit-id': '',
            'ad-intervals': '',
            bindLoad: '',
            bindError: ''
          },
          PageContainer: {
            show: 'false',
            duration: '300',
            'z-index': '100',
            overlay: 'true',
            position: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'r']
            )('bottom'),
            round: 'false',
            'close-on-slideDown': 'false',
            'overlay-style': '',
            'custom-style': '',
            bindBeforeEnter: '',
            bindEnter: '',
            bindAfterEnter: '',
            bindBeforeLeave: '',
            bindLeave: '',
            bindAfterLeave: '',
            bindClickOverlay: ''
          }
        };
        var hostConfig = {
          initNativeApi: initNativeApi,
          onTaroElementCreate: function onTaroElementCreate(tagName) {
            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* warn */ 'u'])(
              tagName === 'MAP',
              '微信小程序 map 组件的 `setting` 属性需要传递一个默认值。详情：\n https://developers.weixin.qq.com/miniprogram/dev/component/map.html'
            );
          }
        };
        Object(
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* mergeReconciler */ 'o']
        )(hostConfig);
        Object(
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[
            /* mergeInternalComponents */ 'n'
          ]
        )(components);

        /***/
      },

    /***/ './node_modules/@tarojs/runtime/dist/runtime.esm.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
      /*! exports provided: Current, CurrentReconciler, Events, FormElement, HOOKS_APP_ID, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, cancelAnimationFrame, connectReactPage, connectVuePage, createComponentConfig, createDocument, createEvent, createNativeComponentConfig, createPageConfig, createReactApp, createRecursiveComponentConfig, createVue3App, createVueApp, document, eventCenter, getComputedStyle, getCurrentInstance, hydrate, injectPageInstance, navigator, nextTick, now, options, requestAnimationFrame, stringify, useAddToFavorites, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, window */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(
          global,
          document,
          window,
          requestAnimationFrame,
          cancelAnimationFrame
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Current',
            function() {
              return Current;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'CurrentReconciler',
            function() {
              return CurrentReconciler;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Events',
            function() {
              return Events;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'FormElement',
            function() {
              return FormElement;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'HOOKS_APP_ID',
            function() {
              return HOOKS_APP_ID;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Style',
            function() {
              return Style;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroElement',
            function() {
              return TaroElement;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroEvent',
            function() {
              return TaroEvent;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroNode',
            function() {
              return TaroNode;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroRootElement',
            function() {
              return TaroRootElement;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroText',
            function() {
              return TaroText;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'cancelAnimationFrame',
            function() {
              return caf;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'connectReactPage',
            function() {
              return connectReactPage;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'connectVuePage',
            function() {
              return connectVuePage;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createComponentConfig',
            function() {
              return createComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createDocument',
            function() {
              return createDocument;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createEvent',
            function() {
              return createEvent;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createNativeComponentConfig',
            function() {
              return createNativeComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createPageConfig',
            function() {
              return createPageConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createReactApp',
            function() {
              return createReactApp;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createRecursiveComponentConfig',
            function() {
              return createRecursiveComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createVue3App',
            function() {
              return createVue3App;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createVueApp',
            function() {
              return createVueApp;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'document',
            function() {
              return document$1;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'eventCenter',
            function() {
              return eventCenter;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getComputedStyle',
            function() {
              return getComputedStyle;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getCurrentInstance',
            function() {
              return getCurrentInstance;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'hydrate',
            function() {
              return hydrate;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'injectPageInstance',
            function() {
              return injectPageInstance;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'navigator',
            function() {
              return navigator;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'nextTick',
            function() {
              return nextTick;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'now',
            function() {
              return now;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'options',
            function() {
              return options;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'requestAnimationFrame',
            function() {
              return raf;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'stringify',
            function() {
              return stringify;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useAddToFavorites',
            function() {
              return useAddToFavorites;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useDidHide',
            function() {
              return useDidHide;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useDidShow',
            function() {
              return useDidShow;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useOptionMenuClick',
            function() {
              return useOptionMenuClick;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'usePageScroll',
            function() {
              return usePageScroll;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'usePullDownRefresh',
            function() {
              return usePullDownRefresh;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'usePullIntercept',
            function() {
              return usePullIntercept;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useReachBottom',
            function() {
              return useReachBottom;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useReady',
            function() {
              return useReady;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useResize',
            function() {
              return useResize;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useRouter',
            function() {
              return useRouter;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useScope',
            function() {
              return useScope;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useShareAppMessage',
            function() {
              return useShareAppMessage;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useShareTimeline',
            function() {
              return useShareTimeline;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useTabItemTap',
            function() {
              return useTabItemTap;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useTitleClick',
            function() {
              return useTitleClick;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'window',
            function() {
              return window$1;
            }
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/set */ './node_modules/@babel/runtime/helpers/esm/set.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ './node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/toArray */ './node_modules/@babel/runtime/helpers/esm/toArray.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/typeof */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ './node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/get */ './node_modules/@babel/runtime/helpers/esm/get.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/inherits */ './node_modules/@babel/runtime/helpers/esm/inherits.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ './node_modules/@babel/runtime/helpers/esm/createSuper.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ './node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
          );
          /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/createClass */ './node_modules/@babel/runtime/helpers/esm/createClass.js'
          );
          /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
            /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
          );

          var incrementId = function incrementId() {
            var id = 0;
            return function() {
              return (id++).toString();
            };
          };

          function isElement(node) {
            return (
              node.nodeType === 1
              /* ELEMENT_NODE */
            );
          }

          function isText(node) {
            return (
              node.nodeType === 3
              /* TEXT_NODE */
            );
          }

          function isHasExtractProp(el) {
            var res = Object.keys(el.props).find(function(prop) {
              return !(
                /^(class|style|id)$/.test(prop) || prop.startsWith('data-')
              );
            });
            return Boolean(res);
          }
          /**
           * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
           * @param node 当前组件
           * @param type 事件类型
           */

          function isParentBinded(node, type) {
            var _a;

            var res = false;

            while (
              (node === null || node === void 0
                ? void 0
                : node.parentElement) &&
              node.parentElement._path !== 'root'
            ) {
              if (
                (_a = node.parentElement.__handlers[type]) === null ||
                _a === void 0
                  ? void 0
                  : _a.length
              ) {
                res = true;
                break;
              }

              node = node.parentElement;
            }

            return res;
          }

          function shortcutAttr(key) {
            switch (key) {
              case 'style':
                return 'st';
                /* Style */

              case 'id':
                return 'uid';

              case 'class':
                return 'cl';
                /* Class */

              default:
                return key;
            }
          }

          var TaroEventTarget = /*#__PURE__*/ (function() {
            function TaroEventTarget() {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, TaroEventTarget);

              this.__handlers = {};
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(TaroEventTarget, [
              {
                key: 'addEventListener',
                value: function addEventListener(type, handler, options) {
                  if (type === 'regionchange') {
                    // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
                    this.addEventListener('begin', handler, options);
                    this.addEventListener('end', handler, options);
                    return;
                  }

                  type = type.toLowerCase();
                  var handlers = this.__handlers[type];
                  var isCapture = Boolean(options);
                  var isOnce = false;

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isObject */ 'k'
                      ]
                    )(options)
                  ) {
                    isCapture = Boolean(options.capture);
                    isOnce = Boolean(options.once);
                  }

                  if (isOnce) {
                    var wrapper = function wrapper() {
                      handler.apply(this, arguments); // this 指向 Element

                      this.removeEventListener(type, wrapper);
                    };

                    this.addEventListener(
                      type,
                      wrapper,
                      Object.assign(Object.assign({}, options), {
                        once: false
                      })
                    );
                    return;
                  }

                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ 'u']
                  )(isCapture, 'The event capture feature is unimplemented.');

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isArray */ 'h'
                      ]
                    )(handlers)
                  ) {
                    handlers.push(handler);
                  } else {
                    this.__handlers[type] = [handler];
                  }
                }
              },
              {
                key: 'removeEventListener',
                value: function removeEventListener(type, handler) {
                  type = type.toLowerCase();

                  if (handler == null) {
                    return;
                  }

                  var handlers = this.__handlers[type];

                  if (
                    !Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isArray */ 'h'
                      ]
                    )(handlers)
                  ) {
                    return;
                  }

                  var index = handlers.indexOf(handler);
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ 'u']
                  )(
                    index === -1,
                    "\u4E8B\u4EF6: '".concat(
                      type,
                      "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"
                    )
                  );
                  handlers.splice(index, 1);
                }
              },
              {
                key: 'isAnyEventBinded',
                value: function isAnyEventBinded() {
                  var _this = this;

                  var isAnyEventBinded = Object.keys(this.__handlers).find(
                    function(key) {
                      var handler = _this.__handlers[key];
                      return handler.length;
                    }
                  );
                  return isAnyEventBinded;
                }
              }
            ]);

            return TaroEventTarget;
          })();

          var CurrentReconciler = Object.assign(
            {
              getLifecyle: function getLifecyle(instance, lifecyle) {
                return instance[lifecyle];
              },
              getPathIndex: function getPathIndex(indexOfNode) {
                return '['.concat(indexOfNode, ']');
              },
              getEventCenter: function getEventCenter(Events) {
                return new Events();
              }
            },
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
              /* defaultReconciler */ 'd'
            ]
          );
          var eventSource = new Map();

          var TaroEvent = /*#__PURE__*/ (function() {
            function TaroEvent(type, opts, event) {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, TaroEvent);

              this._stop = false;
              this._end = false;
              this.defaultPrevented = false; // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
              // here use hi-res timestamp

              this.timeStamp = Date.now();
              this.type = type.toLowerCase();
              this.mpEvent = event;
              this.bubbles = Boolean(opts && opts.bubbles);
              this.cancelable = Boolean(opts && opts.cancelable);
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(TaroEvent, [
              {
                key: 'stopPropagation',
                value: function stopPropagation() {
                  this._stop = true;
                }
              },
              {
                key: 'stopImmediatePropagation',
                value: function stopImmediatePropagation() {
                  this._end = this._stop = true;
                }
              },
              {
                key: 'preventDefault',
                value: function preventDefault() {
                  this.defaultPrevented = true;
                }
              },
              {
                key: 'target',
                get: function get() {
                  var _a, _b, _c;

                  var element = document$1.getElementById(
                    (_a = this.mpEvent) === null || _a === void 0
                      ? void 0
                      : _a.target.id
                  );
                  return Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        (_b = this.mpEvent) === null || _b === void 0
                          ? void 0
                          : _b.target
                      ),
                      (_c = this.mpEvent) === null || _c === void 0
                        ? void 0
                        : _c.detail
                    ),
                    {
                      dataset:
                        element !== null
                          ? element.dataset
                          : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                              /* EMPTY_OBJ */ 'a'
                            ]
                    }
                  );
                }
              },
              {
                key: 'currentTarget',
                get: function get() {
                  var _a, _b, _c;

                  var element = document$1.getElementById(
                    (_a = this.mpEvent) === null || _a === void 0
                      ? void 0
                      : _a.currentTarget.id
                  );

                  if (element === null) {
                    return this.target;
                  }

                  return Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        (_b = this.mpEvent) === null || _b === void 0
                          ? void 0
                          : _b.currentTarget
                      ),
                      (_c = this.mpEvent) === null || _c === void 0
                        ? void 0
                        : _c.detail
                    ),
                    {
                      dataset: element.dataset
                    }
                  );
                }
              }
            ]);

            return TaroEvent;
          })();

          function createEvent(event, node) {
            if (typeof event === 'string') {
              return new TaroEvent(event, {
                bubbles: true,
                cancelable: true
              });
            }

            var domEv = new TaroEvent(
              event.type,
              {
                bubbles: true,
                cancelable: true
              },
              event
            );

            for (var key in event) {
              if (
                key === 'currentTarget' ||
                key === 'target' ||
                key === 'type' ||
                key === 'timeStamp'
              ) {
                continue;
              } else {
                domEv[key] = event[key];
              }
            }

            if (
              domEv.type === 'confirm' &&
              (node === null || node === void 0 ? void 0 : node.nodeName) ===
                'input'
            ) {
              // eslint-disable-next-line dot-notation
              domEv['keyCode'] = 13;
            }

            return domEv;
          }

          var eventsBatch = {};

          function eventHandler(event) {
            var _a;

            (_a = CurrentReconciler.modifyEventType) === null || _a === void 0
              ? void 0
              : _a.call(CurrentReconciler, event);

            if (event.currentTarget == null) {
              event.currentTarget = event.target;
            }

            var node = document$1.getElementById(event.currentTarget.id);

            if (node != null) {
              var dispatch = function dispatch() {
                node.dispatchEvent(createEvent(event, node));
              };

              if (typeof CurrentReconciler.batchedEventUpdates === 'function') {
                var type = event.type;

                if (
                  !isParentBinded(node, type) ||
                  (type === 'touchmove' && !!node.props.catchMove)
                ) {
                  // 最上层组件统一 batchUpdate
                  CurrentReconciler.batchedEventUpdates(function() {
                    if (eventsBatch[type]) {
                      eventsBatch[type].forEach(function(fn) {
                        return fn();
                      });
                      delete eventsBatch[type];
                    }

                    dispatch();
                  });
                } else {
                  // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                  (eventsBatch[type] || (eventsBatch[type] = [])).push(
                    dispatch
                  );
                }
              } else {
                dispatch();
              }
            }
          }

          var PROPERTY_THRESHOLD = 2046;
          var SET_DATA = '小程序 setData';
          var PAGE_INIT = '页面初始化';
          var SPECIAL_NODES = ['view', 'text', 'image'];
          /**
           * React also has a fancy function's name for this: `hydrate()`.
           * You may have been heard `hydrate` as a SSR-related function,
           * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
           * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
           */

          function hydrate(node) {
            var _data;

            var _a;

            var nodeName = node.nodeName;

            if (isText(node)) {
              var _ref;

              return (
                (_ref = {}),
                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[
                    /* default */ 'a'
                  ]
                )(
                  _ref,
                  'v',
                  /* Text */
                  node.nodeValue
                ),
                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[
                    /* default */ 'a'
                  ]
                )(
                  _ref,
                  'nn',
                  /* NodeName */
                  nodeName
                ),
                _ref
              );
            }

            var data =
              ((_data = {}),
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[
                  /* default */ 'a'
                ]
              )(
                _data,
                'nn',
                /* NodeName */
                nodeName
              ),
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[
                  /* default */ 'a'
                ]
              )(_data, 'uid', node.uid),
              _data);
            var props = node.props,
              childNodes = node.childNodes;

            if (
              !node.isAnyEventBinded() &&
              SPECIAL_NODES.indexOf(nodeName) > -1
            ) {
              data[
                'nn'
                /* NodeName */
              ] = 'static-'.concat(nodeName);

              if (nodeName === 'view' && !isHasExtractProp(node)) {
                data[
                  'nn'
                  /* NodeName */
                ] = 'pure-view';
              }
            }

            for (var prop in props) {
              var propInCamelCase = Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* toCamelCase */ 's'
                ]
              )(prop);

              if (
                !prop.startsWith('data-') && // 在 node.dataset 的数据
                prop !== 'class' &&
                prop !== 'style' &&
                prop !== 'id' &&
                propInCamelCase !== 'catchMove'
              ) {
                data[propInCamelCase] = props[prop];
              }

              if (
                nodeName === 'view' &&
                propInCamelCase === 'catchMove' &&
                props[prop] !== 'false'
              ) {
                data[
                  'nn'
                  /* NodeName */
                ] = 'catch-view';
              }
            }

            if (childNodes.length > 0) {
              data[
                'cn'
                /* Childnodes */
              ] = childNodes.map(hydrate);
            }

            if (node.className !== '') {
              data[
                'cl'
                /* Class */
              ] = node.className;
            }

            if (node.cssText !== '' && nodeName !== 'swiper-item') {
              data[
                'st'
                /* Style */
              ] = node.cssText;
            }

            (_a = CurrentReconciler.modifyHydrateData) === null || _a === void 0
              ? void 0
              : _a.call(CurrentReconciler, data);
            return data;
          }

          var options = {
            prerender: true,
            debug: false,
            // html 只影响 Element#innerHTML API
            html: {
              skipElements: new Set(['style', 'script']),
              voidElements: new Set([
                '!doctype',
                'area',
                'base',
                'br',
                'col',
                'command',
                'embed',
                'hr',
                'img',
                'input',
                'keygen',
                'link',
                'meta',
                'param',
                'source',
                'track',
                'wbr'
              ]),
              closingElements: new Set([
                'html',
                'head',
                'body',
                'p',
                'dt',
                'dd',
                'li',
                'option',
                'thead',
                'th',
                'tbody',
                'tr',
                'td',
                'tfoot',
                'colgroup'
              ]),
              renderHTMLTag: false
            },
            reconciler: function reconciler(_reconciler) {
              Object.assign(CurrentReconciler, _reconciler);
            }
          };

          function initPosition() {
            return {
              index: 0,
              column: 0,
              line: 0
            };
          }

          function feedPosition(position, str, len) {
            var start = position.index;
            var end = (position.index = start + len);

            for (var i = start; i < end; i++) {
              var char = str.charAt(i);

              if (char === '\n') {
                position.line++;
                position.column = 0;
              } else {
                position.column++;
              }
            }
          }

          function jumpPosition(position, str, end) {
            var len = end - position.index;
            return feedPosition(position, str, len);
          }

          function copyPosition(position) {
            return {
              index: position.index,
              line: position.line,
              column: position.column
            };
          }

          var whitespace = /\s/;

          function isWhitespaceChar(char) {
            return whitespace.test(char);
          }

          var equalSign = /=/;

          function isEqualSignChar(char) {
            return equalSign.test(char);
          }

          function shouldBeIgnore(tagName) {
            var name = tagName.toLowerCase();

            if (options.html.skipElements.has(name)) {
              return true;
            }

            return false;
          }

          var alphanumeric = /[A-Za-z0-9]/;

          function findTextEnd(str, index) {
            while (true) {
              var textEnd = str.indexOf('<', index);

              if (textEnd === -1) {
                return textEnd;
              }

              var char = str.charAt(textEnd + 1);

              if (char === '/' || char === '!' || alphanumeric.test(char)) {
                return textEnd;
              }

              index = textEnd + 1;
            }
          }

          function isWordEnd(cursor, wordBegin, html) {
            if (!isWhitespaceChar(html.charAt(cursor))) return false;
            var len = html.length; // backwrad

            for (var i = cursor - 1; i > wordBegin; i--) {
              var char = html.charAt(i);

              if (!isWhitespaceChar(char)) {
                if (isEqualSignChar(char)) return false;
                break;
              }
            } // forward

            for (var _i = cursor + 1; _i < len; _i++) {
              var _char = html.charAt(_i);

              if (!isWhitespaceChar(_char)) {
                if (isEqualSignChar(_char)) return false;
                return true;
              }
            }
          }

          var Scaner = /*#__PURE__*/ (function() {
            function Scaner(html) {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, Scaner);

              this.tokens = [];
              this.position = initPosition();
              this.html = html;
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(Scaner, [
              {
                key: 'scan',
                value: function scan() {
                  var html = this.html,
                    position = this.position;
                  var len = html.length;

                  while (position.index < len) {
                    var start = position.index;
                    this.scanText();

                    if (position.index === start) {
                      var isComment = html.startsWith('!--', start + 1);

                      if (isComment) {
                        this.scanComment();
                      } else {
                        var tagName = this.scanTag();

                        if (shouldBeIgnore(tagName)) {
                          this.scanSkipTag(tagName);
                        }
                      }
                    }
                  }

                  return this.tokens;
                }
              },
              {
                key: 'scanText',
                value: function scanText() {
                  var type = 'text';
                  var html = this.html,
                    position = this.position;
                  var textEnd = findTextEnd(html, position.index);

                  if (textEnd === position.index) {
                    return;
                  }

                  if (textEnd === -1) {
                    textEnd = html.length;
                  }

                  var start = copyPosition(position);
                  var content = html.slice(position.index, textEnd);
                  jumpPosition(position, html, textEnd);
                  var end = copyPosition(position);
                  this.tokens.push({
                    type: type,
                    content: content,
                    position: {
                      start: start,
                      end: end
                    }
                  });
                }
              },
              {
                key: 'scanComment',
                value: function scanComment() {
                  var type = 'comment';
                  var html = this.html,
                    position = this.position;
                  var start = copyPosition(position);
                  feedPosition(position, html, 4); // "<!--".length

                  var contentEnd = html.indexOf('-->', position.index);
                  var commentEnd = contentEnd + 3; // "-->".length

                  if (contentEnd === -1) {
                    contentEnd = commentEnd = html.length;
                  }

                  var content = html.slice(position.index, contentEnd);
                  jumpPosition(position, html, commentEnd);
                  this.tokens.push({
                    type: type,
                    content: content,
                    position: {
                      start: start,
                      end: copyPosition(position)
                    }
                  });
                }
              },
              {
                key: 'scanTag',
                value: function scanTag() {
                  this.scanTagStart();
                  var tagName = this.scanTagName();
                  this.scanAttrs();
                  this.scanTagEnd();
                  return tagName;
                }
              },
              {
                key: 'scanTagStart',
                value: function scanTagStart() {
                  var type = 'tag-start';
                  var html = this.html,
                    position = this.position;
                  var secondChar = html.charAt(position.index + 1);
                  var close = secondChar === '/';
                  var start = copyPosition(position);
                  feedPosition(position, html, close ? 2 : 1);
                  this.tokens.push({
                    type: type,
                    close: close,
                    position: {
                      start: start
                    }
                  });
                }
              },
              {
                key: 'scanTagEnd',
                value: function scanTagEnd() {
                  var type = 'tag-end';
                  var html = this.html,
                    position = this.position;
                  var firstChar = html.charAt(position.index);
                  var close = firstChar === '/';
                  feedPosition(position, html, close ? 2 : 1);
                  var end = copyPosition(position);
                  this.tokens.push({
                    type: type,
                    close: close,
                    position: {
                      end: end
                    }
                  });
                }
              },
              {
                key: 'scanTagName',
                value: function scanTagName() {
                  var type = 'tag';
                  var html = this.html,
                    position = this.position;
                  var len = html.length;
                  var start = position.index;

                  while (start < len) {
                    var char = html.charAt(start);
                    var isTagChar = !(
                      isWhitespaceChar(char) ||
                      char === '/' ||
                      char === '>'
                    );
                    if (isTagChar) break;
                    start++;
                  }

                  var end = start + 1;

                  while (end < len) {
                    var _char2 = html.charAt(end);

                    var _isTagChar = !(
                      isWhitespaceChar(_char2) ||
                      _char2 === '/' ||
                      _char2 === '>'
                    );

                    if (!_isTagChar) break;
                    end++;
                  }

                  jumpPosition(position, html, end);
                  var tagName = html.slice(start, end);
                  this.tokens.push({
                    type: type,
                    content: tagName
                  });
                  return tagName;
                }
              },
              {
                key: 'scanAttrs',
                value: function scanAttrs() {
                  var html = this.html,
                    position = this.position,
                    tokens = this.tokens;
                  var cursor = position.index;
                  var quote = null; // null, single-, or double-quote

                  var wordBegin = cursor; // index of word start

                  var words = []; // "key", "key=value", "key='value'", etc

                  var len = html.length;

                  while (cursor < len) {
                    var char = html.charAt(cursor);

                    if (quote) {
                      var isQuoteEnd = char === quote;

                      if (isQuoteEnd) {
                        quote = null;
                      }

                      cursor++;
                      continue;
                    }

                    var isTagEnd = char === '/' || char === '>';

                    if (isTagEnd) {
                      if (cursor !== wordBegin) {
                        words.push(html.slice(wordBegin, cursor));
                      }

                      break;
                    }

                    if (isWordEnd(cursor, wordBegin, html)) {
                      if (cursor !== wordBegin) {
                        words.push(html.slice(wordBegin, cursor));
                      }

                      wordBegin = cursor + 1;
                      cursor++;
                      continue;
                    }

                    var isQuoteStart = char === "'" || char === '"';

                    if (isQuoteStart) {
                      quote = char;
                      cursor++;
                      continue;
                    }

                    cursor++;
                  }

                  jumpPosition(position, html, cursor);
                  var wLen = words.length;
                  var type = 'attribute';

                  for (var i = 0; i < wLen; i++) {
                    var word = words[i];
                    var isNotPair = word.includes('=');

                    if (isNotPair) {
                      var secondWord = words[i + 1];

                      if (secondWord && secondWord.startsWith('=')) {
                        if (secondWord.length > 1) {
                          var newWord = word + secondWord;
                          tokens.push({
                            type: type,
                            content: newWord
                          });
                          i += 1;
                          continue;
                        }

                        var thirdWord = words[i + 2];
                        i += 1;

                        if (thirdWord) {
                          var _newWord = word + '=' + thirdWord;

                          tokens.push({
                            type: type,
                            content: _newWord
                          });
                          i += 1;
                          continue;
                        }
                      }
                    }

                    if (word.endsWith('=')) {
                      var _secondWord = words[i + 1];

                      if (_secondWord && !_secondWord.includes('=')) {
                        var _newWord3 = word + _secondWord;

                        tokens.push({
                          type: type,
                          content: _newWord3
                        });
                        i += 1;
                        continue;
                      }

                      var _newWord2 = word.slice(0, -1);

                      tokens.push({
                        type: type,
                        content: _newWord2
                      });
                      continue;
                    }

                    tokens.push({
                      type: type,
                      content: word
                    });
                  }
                }
              },
              {
                key: 'scanSkipTag',
                value: function scanSkipTag(tagName) {
                  var html = this.html,
                    position = this.position;
                  var safeTagName = tagName.toLowerCase();
                  var len = html.length;

                  while (position.index < len) {
                    var nextTag = html.indexOf('</', position.index);

                    if (nextTag === -1) {
                      this.scanText();
                      break;
                    }

                    jumpPosition(position, html, nextTag);
                    var name = this.scanTag();

                    if (safeTagName === name.toLowerCase()) {
                      break;
                    }
                  }
                }
              }
            ]);

            return Scaner;
          })();

          function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(',');

            for (var i = 0; i < list.length; i++) {
              map[list[i]] = true;
            }

            return expectsLowerCase
              ? function(val) {
                  return !!map[val.toLowerCase()];
                }
              : function(val) {
                  return !!map[val];
                };
          }

          var specialMiniElements = {
            img: 'image',
            iframe: 'web-view'
          };
          var internalCompsList = Object.keys(
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
              /* internalComponents */ 'g'
            ]
          )
            .map(function(i) {
              return i.toLowerCase();
            })
            .join(','); // https://developers.weixin.qq.com/miniprogram/dev/component

          var isMiniElements = makeMap(internalCompsList, true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

          var isInlineElements = makeMap(
            'a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b',
            true
          ); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

          var isBlockElements = makeMap(
            'address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt',
            true
          );
          var LEFT_BRACKET = '{';
          var RIGHT_BRACKET = '}';
          var CLASS_SELECTOR = '.';
          var ID_SELECTOR = '#';
          var CHILD_COMBINATOR = '>';
          var GENERAL_SIBLING_COMBINATOR = '~';
          var ADJACENT_SIBLING_COMBINATOR = '+';

          var StyleTagParser = /*#__PURE__*/ (function() {
            function StyleTagParser() {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, StyleTagParser);

              this.styles = [];
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(StyleTagParser, [
              {
                key: 'extractStyle',
                value: function extractStyle(src) {
                  var _this2 = this;

                  var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
                  var html = src; // let html = src.replace(/\n/g, '')

                  html = html.replace(REG_STYLE, function(_, $1) {
                    var style = $1.trim();

                    _this2.stringToSelector(style);

                    return '';
                  });
                  return html.trim();
                }
              },
              {
                key: 'stringToSelector',
                value: function stringToSelector(style) {
                  var _this3 = this;

                  var lb = style.indexOf(LEFT_BRACKET);

                  var _loop = function _loop() {
                    var rb = style.indexOf(RIGHT_BRACKET);
                    var selectors = style.slice(0, lb).trim();
                    var content = style.slice(lb + 1, rb).replace(/ /g, '');

                    if (!/;$/.test(content)) {
                      content += ';';
                    }

                    selectors.split(',').forEach(function(src) {
                      var selectorList = _this3.parseSelector(src);

                      _this3.styles.push({
                        content: content,
                        selectorList: selectorList
                      });
                    });
                    style = style.slice(rb + 1);
                    lb = style.indexOf(LEFT_BRACKET);
                  };

                  while (lb > -1) {
                    _loop();
                  } // console.log('res this.styles: ', this.styles)
                }
              },
              {
                key: 'parseSelector',
                value: function parseSelector(src) {
                  // todo: 属性选择器里可以带空格：[a = "b"]，这里的 split(' ') 需要作兼容
                  var list = src
                    .trim()
                    .replace(/ *([>~+]) */g, ' $1')
                    .replace(/ +/g, ' ')
                    .split(' ');
                  var selectors = list.map(function(item) {
                    var firstChar = item.charAt(0);
                    var selector = {
                      isChild: firstChar === CHILD_COMBINATOR,
                      isGeneralSibling:
                        firstChar === GENERAL_SIBLING_COMBINATOR,
                      isAdjacentSibling:
                        firstChar === ADJACENT_SIBLING_COMBINATOR,
                      tag: null,
                      id: null,
                      class: [],
                      attrs: []
                    };
                    item = item.replace(/^[>~+]/, ''); // 属性选择器

                    item = item.replace(/\[(.+?)\]/g, function(_, $1) {
                      var _$1$split = $1.split('='),
                        _$1$split2 = Object(
                          _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[
                            /* default */ 'a'
                          ]
                        )(_$1$split, 2),
                        key = _$1$split2[0],
                        value = _$1$split2[1];

                      var all = $1.indexOf('=') === -1;
                      var attr = {
                        all: all,
                        key: key,
                        value: all ? null : value
                      };
                      selector.attrs.push(attr);
                      return '';
                    });
                    item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function(
                      _,
                      $1
                    ) {
                      if ($1[0] === ID_SELECTOR) {
                        // id 选择器
                        selector.id = $1.substr(1);
                      } else if ($1[0] === CLASS_SELECTOR) {
                        // class 选择器
                        selector.class.push($1.substr(1));
                      }

                      return '';
                    }); // 标签选择器

                    if (item !== '') {
                      selector.tag = item;
                    }

                    return selector;
                  });
                  return selectors;
                }
              },
              {
                key: 'matchStyle',
                value: function matchStyle(tagName, el, list) {
                  var _this4 = this;

                  // todo: 这里应该要比较选择器权重
                  var res = this.styles.reduce(function(str, _ref2, i) {
                    var content = _ref2.content,
                      selectorList = _ref2.selectorList;
                    var idx = list[i];
                    var selector = selectorList[idx];
                    var nextSelector = selectorList[idx + 1];

                    if (
                      (nextSelector === null || nextSelector === void 0
                        ? void 0
                        : nextSelector.isGeneralSibling) ||
                      (nextSelector === null || nextSelector === void 0
                        ? void 0
                        : nextSelector.isAdjacentSibling)
                    ) {
                      selector = nextSelector;
                      idx += 1;
                      list[i] += 1;
                    }

                    var isMatch = _this4.matchCurrent(tagName, el, selector);

                    if (isMatch && selector.isGeneralSibling) {
                      var prev = getPreviousElement(el);

                      while (prev) {
                        if (
                          prev.h5tagName &&
                          _this4.matchCurrent(
                            prev.h5tagName,
                            prev,
                            selectorList[idx - 1]
                          )
                        ) {
                          isMatch = true;
                          break;
                        }

                        prev = getPreviousElement(prev);
                        isMatch = false;
                      }
                    }

                    if (isMatch && selector.isAdjacentSibling) {
                      var _prev = getPreviousElement(el);

                      if (!_prev || !_prev.h5tagName) {
                        isMatch = false;
                      } else {
                        var isSiblingMatch = _this4.matchCurrent(
                          _prev.h5tagName,
                          _prev,
                          selectorList[idx - 1]
                        );

                        if (!isSiblingMatch) {
                          isMatch = false;
                        }
                      }
                    }

                    if (isMatch) {
                      if (idx === selectorList.length - 1) {
                        return str + content;
                      } else if (idx < selectorList.length - 1) {
                        list[i] += 1;
                      }
                    } else {
                      // 直接子代组合器: >
                      if (selector.isChild && idx > 0) {
                        list[i] -= 1;

                        if (
                          _this4.matchCurrent(
                            tagName,
                            el,
                            selectorList[list[i]]
                          )
                        ) {
                          list[i] += 1;
                        }
                      }
                    }

                    return str;
                  }, '');
                  return res;
                }
              },
              {
                key: 'matchCurrent',
                value: function matchCurrent(tagName, el, selector) {
                  // 标签选择器
                  if (selector.tag && selector.tag !== tagName) return false; // id 选择器

                  if (selector.id && selector.id !== el.id) return false; // class 选择器

                  if (selector.class.length) {
                    var classList = el.className.split(' ');

                    for (var i = 0; i < selector.class.length; i++) {
                      var cls = selector.class[i];

                      if (classList.indexOf(cls) === -1) {
                        return false;
                      }
                    }
                  } // 属性选择器

                  if (selector.attrs.length) {
                    for (var _i2 = 0; _i2 < selector.attrs.length; _i2++) {
                      var _selector$attrs$_i = selector.attrs[_i2],
                        all = _selector$attrs$_i.all,
                        key = _selector$attrs$_i.key,
                        value = _selector$attrs$_i.value;

                      if (all && !el.hasAttribute(key)) {
                        return false;
                      } else {
                        var attr = el.getAttribute(key);

                        if (attr !== unquote(value || '')) {
                          return false;
                        }
                      }
                    }
                  }

                  return true;
                }
              }
            ]);

            return StyleTagParser;
          })();

          function getPreviousElement(el) {
            var parent = el.parentElement;
            if (!parent) return null;
            var prev = el.previousSibling;
            if (!prev) return null;

            if (
              prev.nodeType === 1
              /* ELEMENT_NODE */
            ) {
              return prev;
            } else {
              return getPreviousElement(prev);
            }
          }

          var closingTagAncestorBreakers = {
            li: ['ul', 'ol', 'menu'],
            dt: ['dl'],
            dd: ['dl'],
            tbody: ['table'],
            thead: ['table'],
            tfoot: ['table'],
            tr: ['table'],
            td: ['table']
          };

          function hasTerminalParent(tagName, stack) {
            var tagParents = closingTagAncestorBreakers[tagName];

            if (tagParents) {
              var currentIndex = stack.length - 1;

              while (currentIndex >= 0) {
                var parentTagName = stack[currentIndex].tagName;

                if (parentTagName === tagName) {
                  break;
                }

                if (tagParents && tagParents.includes(parentTagName)) {
                  return true;
                }

                currentIndex--;
              }
            }

            return false;
          }

          function unquote(str) {
            var car = str.charAt(0);
            var end = str.length - 1;
            var isQuoteStart = car === '"' || car === "'";

            if (isQuoteStart && car === str.charAt(end)) {
              return str.slice(1, end);
            }

            return str;
          }

          function getTagName(tag) {
            if (options.html.renderHTMLTag) {
              return tag;
            }

            if (specialMiniElements[tag]) {
              return specialMiniElements[tag];
            } else if (isMiniElements(tag)) {
              return tag;
            } else if (isBlockElements(tag)) {
              return 'view';
            } else if (isInlineElements(tag)) {
              return 'text';
            }

            return 'view';
          }

          function splitEqual(str) {
            var sep = '=';
            var idx = str.indexOf(sep);
            if (idx === -1) return [str];
            var key = str.slice(0, idx).trim();
            var value = str.slice(idx + sep.length).trim();
            return [key, value];
          }

          function format(children, styleOptions, parent) {
            return children
              .filter(function(child) {
                // 过滤注释和空文本节点
                if (child.type === 'comment') {
                  return false;
                } else if (child.type === 'text') {
                  return child.content !== '';
                }

                return true;
              })
              .map(function(child) {
                // 文本节点
                if (child.type === 'text') {
                  var text = document$1.createTextNode(child.content);

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isFunction */ 'j'
                      ]
                    )(options.html.transformText)
                  ) {
                    return options.html.transformText(text, child);
                  }

                  parent === null || parent === void 0
                    ? void 0
                    : parent.appendChild(text);
                  return text;
                }

                var el = document$1.createElement(getTagName(child.tagName));
                el.h5tagName = child.tagName;
                parent === null || parent === void 0
                  ? void 0
                  : parent.appendChild(el);

                if (!options.html.renderHTMLTag) {
                  el.className = 'h5-'.concat(child.tagName);
                }

                for (var i = 0; i < child.attributes.length; i++) {
                  var attr = child.attributes[i];

                  var _splitEqual = splitEqual(attr),
                    _splitEqual2 = Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[
                        /* default */ 'a'
                      ]
                    )(_splitEqual, 2),
                    key = _splitEqual2[0],
                    value = _splitEqual2[1];

                  if (key === 'class') {
                    el.className += ' ' + unquote(value);
                  } else if (key[0] === 'o' && key[1] === 'n') {
                    continue;
                  } else {
                    el.setAttribute(key, value == null ? true : unquote(value));
                  }
                }

                var styleTagParser = styleOptions.styleTagParser,
                  descendantList = styleOptions.descendantList;
                var list = descendantList.slice();
                var style = styleTagParser.matchStyle(child.tagName, el, list);
                el.setAttribute('style', style + el.style.cssText); // console.log('style, ', style)

                format(
                  child.children,
                  {
                    styleTagParser: styleTagParser,
                    descendantList: list
                  },
                  el
                );

                if (
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* isFunction */ 'j'
                    ]
                  )(options.html.transformElement)
                ) {
                  return options.html.transformElement(el, child);
                }

                return el;
              });
          }

          function parser(html) {
            var styleTagParser = new StyleTagParser();
            html = styleTagParser.extractStyle(html);
            var tokens = new Scaner(html).scan();
            var root = {
              tagName: '',
              children: [],
              type: 'element',
              attributes: []
            };
            var state = {
              tokens: tokens,
              options: options,
              cursor: 0,
              stack: [root]
            };
            parse(state);
            return format(root.children, {
              styleTagParser: styleTagParser,
              descendantList: Array(styleTagParser.styles.length).fill(0)
            });
          }

          function parse(state) {
            var tokens = state.tokens,
              stack = state.stack;
            var cursor = state.cursor;
            var len = tokens.length;
            var nodes = stack[stack.length - 1].children;

            while (cursor < len) {
              var token = tokens[cursor];

              if (token.type !== 'tag-start') {
                // comment or text
                nodes.push(token);
                cursor++;
                continue;
              }

              var tagToken = tokens[++cursor];
              cursor++;
              var tagName = tagToken.content.toLowerCase();

              if (token.close) {
                var index = stack.length;
                var shouldRewind = false;

                while (--index > -1) {
                  if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                  }
                }

                while (cursor < len) {
                  var endToken = tokens[cursor];
                  if (endToken.type !== 'tag-end') break;
                  cursor++;
                }

                if (shouldRewind) {
                  stack.splice(index);
                  break;
                } else {
                  continue;
                }
              }

              var isClosingTag = options.html.closingElements.has(tagName);
              var shouldRewindToAutoClose = isClosingTag;

              if (shouldRewindToAutoClose) {
                shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
              }

              if (shouldRewindToAutoClose) {
                var currentIndex = stack.length - 1;

                while (currentIndex > 0) {
                  if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    var previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                  }

                  currentIndex = currentIndex - 1;
                }
              }

              var attributes = [];
              var attrToken = void 0;

              while (cursor < len) {
                attrToken = tokens[cursor];
                if (attrToken.type === 'tag-end') break;
                attributes.push(attrToken.content);
                cursor++;
              }

              cursor++;
              var children = [];
              var element = {
                type: 'element',
                tagName: tagToken.content,
                attributes: attributes,
                children: children
              };
              nodes.push(element);
              var hasChildren = !(
                attrToken.close || options.html.voidElements.has(tagName)
              );

              if (hasChildren) {
                stack.push({
                  tagName: tagName,
                  children: children
                });
                var innerState = {
                  tokens: tokens,
                  cursor: cursor,
                  stack: stack
                };
                parse(innerState);
                cursor = innerState.cursor;
              }
            }

            state.cursor = cursor;
          }

          function setInnerHTML(element, html) {
            element.childNodes.forEach(function(node) {
              element.removeChild(node);
            });
            var children = parser(html);

            for (var i = 0; i < children.length; i++) {
              element.appendChild(children[i]);
            }
          }

          var nodeId = incrementId();

          var TaroNode = /*#__PURE__*/ (function(_TaroEventTarget) {
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroNode, _TaroEventTarget);

            var _super = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroNode);

            function TaroNode(nodeType, nodeName) {
              var _this5;

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, TaroNode);

              _this5 = _super.call(this);
              _this5.parentNode = null;
              _this5.childNodes = [];

              _this5.hydrate = function(node) {
                return function() {
                  return hydrate(node);
                };
              };

              _this5.nodeType = nodeType;
              _this5.nodeName = nodeName;
              _this5.uid = '_n_'.concat(nodeId());
              eventSource.set(
                _this5.uid,
                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                    /* default */ 'a'
                  ]
                )(_this5)
              );
              return _this5;
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(TaroNode, [
              {
                key: '_path',
                get: function get() {
                  if (this.parentNode !== null) {
                    var indexOfNode = this.parentNode.childNodes.indexOf(this);
                    var index = CurrentReconciler.getPathIndex(indexOfNode);
                    return ''
                      .concat(
                        this.parentNode._path,
                        '.',
                        'cn',
                        /* Childnodes */
                        '.'
                      )
                      .concat(index);
                  }

                  return '';
                }
              },
              {
                key: '_root',
                get: function get() {
                  if (this.parentNode !== null) {
                    return this.parentNode._root;
                  }

                  return null;
                }
              },
              {
                key: 'parentElement',
                get: function get() {
                  var parentNode = this.parentNode;

                  if (
                    parentNode != null &&
                    parentNode.nodeType === 1
                    /* ELEMENT_NODE */
                  ) {
                    return parentNode;
                  }

                  return null;
                }
              },
              {
                key: 'nextSibling',
                get: function get() {
                  var parentNode = this.parentNode;

                  if (parentNode) {
                    return (
                      parentNode.childNodes[
                        this.findIndex(parentNode.childNodes, this) + 1
                      ] || null
                    );
                  }

                  return null;
                }
              },
              {
                key: 'previousSibling',
                get: function get() {
                  var parentNode = this.parentNode;

                  if (parentNode) {
                    return (
                      parentNode.childNodes[
                        this.findIndex(parentNode.childNodes, this) - 1
                      ] || null
                    );
                  }

                  return null;
                }
              },
              {
                key: 'insertBefore',
                value: function insertBefore(newChild, refChild, isReplace) {
                  var _this6 = this;

                  var _a;

                  newChild.remove();
                  newChild.parentNode = this;
                  var payload;

                  if (refChild) {
                    var index = this.findIndex(this.childNodes, refChild);
                    this.childNodes.splice(index, 0, newChild);

                    if (isReplace === true) {
                      payload = {
                        path: newChild._path,
                        value: this.hydrate(newChild)
                      };
                    } else {
                      payload = {
                        path: ''.concat(
                          this._path,
                          '.',
                          'cn'
                          /* Childnodes */
                        ),
                        value: function value() {
                          return _this6.childNodes.map(hydrate);
                        }
                      };
                    }
                  } else {
                    this.childNodes.push(newChild);
                    payload = {
                      path: newChild._path,
                      value: this.hydrate(newChild)
                    };
                  }

                  (_a = CurrentReconciler.insertBefore) === null ||
                  _a === void 0
                    ? void 0
                    : _a.call(CurrentReconciler, this, newChild, refChild);
                  this.enqueueUpdate(payload);

                  if (!eventSource.has(newChild.uid)) {
                    eventSource.set(newChild.uid, newChild);
                  }

                  return newChild;
                }
              },
              {
                key: 'appendChild',
                value: function appendChild(child) {
                  var _a;

                  this.insertBefore(child);
                  (_a = CurrentReconciler.appendChild) === null || _a === void 0
                    ? void 0
                    : _a.call(CurrentReconciler, this, child);
                }
              },
              {
                key: 'replaceChild',
                value: function replaceChild(newChild, oldChild) {
                  var _a;

                  if (oldChild.parentNode === this) {
                    this.insertBefore(newChild, oldChild, true);
                    oldChild.remove(true);
                    return oldChild;
                  }

                  (_a = CurrentReconciler.removeChild) === null || _a === void 0
                    ? void 0
                    : _a.call(CurrentReconciler, this, newChild, oldChild);
                }
              },
              {
                key: 'removeChild',
                value: function removeChild(child, isReplace) {
                  var _this7 = this;

                  var index = this.findIndex(this.childNodes, child);
                  this.childNodes.splice(index, 1);

                  if (isReplace !== true) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'cn'
                        /* Childnodes */
                      ),
                      value: function value() {
                        return _this7.childNodes.map(hydrate);
                      }
                    });
                  }

                  child.parentNode = null;
                  eventSource.delete(child.uid); // @TODO: eventSource memory overflow
                  // child._empty()

                  return child;
                }
              },
              {
                key: 'remove',
                value: function remove(isReplace) {
                  if (this.parentNode) {
                    this.parentNode.removeChild(this, isReplace);
                  }
                }
              },
              {
                key: 'firstChild',
                get: function get() {
                  return this.childNodes[0] || null;
                }
              },
              {
                key: 'lastChild',
                get: function get() {
                  var c = this.childNodes;
                  return c[c.length - 1] || null;
                }
              },
              {
                key: 'hasChildNodes',
                value: function hasChildNodes() {
                  return this.childNodes.length > 0;
                }
              },
              {
                key: 'enqueueUpdate',
                value: function enqueueUpdate(payload) {
                  if (this._root === null) {
                    return;
                  }

                  this._root.enqueueUpdate(payload);
                }
                /**
                 * like jQuery's $.empty()
                 */
              },
              {
                key: '_empty',
                value: function _empty() {
                  while (this.childNodes.length > 0) {
                    var child = this.childNodes[0];
                    child.parentNode = null;
                    eventSource.delete(child.uid);
                    this.childNodes.shift();
                  }
                }
                /**
                 * @textContent 目前只能置空子元素
                 * @TODO 等待完整 innerHTML 实现
                 */
              },
              {
                key: 'textContent',
                set: function set(text) {
                  this._empty();

                  if (text === '') {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'cn'
                        /* Childnodes */
                      ),
                      value: function value() {
                        return [];
                      }
                    });
                  } else {
                    this.appendChild(document$1.createTextNode(text));
                  }
                }
              },
              {
                key: 'innerHTML',
                get: function get() {
                  return '';
                },
                set: function set(html) {
                  setInnerHTML(this, html);
                }
              },
              {
                key: 'findIndex',
                value: function findIndex(childeNodes, refChild) {
                  var index = childeNodes.indexOf(refChild);
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* ensure */ 'e'
                    ]
                  )(
                    index !== -1,
                    'The node to be replaced is not a child of this node.'
                  );
                  return index;
                }
              },
              {
                key: 'cloneNode',
                value: function cloneNode() {
                  var isDeep =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : false;
                  var constructor = this.constructor;
                  var newNode;

                  if (
                    this.nodeType === 1
                    /* ELEMENT_NODE */
                  ) {
                    newNode = new constructor(this.nodeType, this.nodeName);
                  } else if (
                    this.nodeType === 3
                    /* TEXT_NODE */
                  ) {
                    newNode = new constructor('');
                  }

                  for (var key in this) {
                    var value = this[key];

                    if (
                      ['props', 'dataset'].includes(key) &&
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                          /* default */ 'a'
                        ]
                      )(value) === 'object'
                    ) {
                      newNode[key] = Object.assign({}, value);
                    } else if (key === '_value') {
                      newNode[key] = value;
                    } else if (key === 'style') {
                      newNode.style._value = Object.assign({}, value._value);
                      newNode.style._usedStyleProp = new Set(
                        Array.from(value._usedStyleProp)
                      );
                    }
                  }

                  if (isDeep) {
                    newNode.childNodes = this.childNodes.map(function(node) {
                      return node.cloneNode(true);
                    });
                  }

                  return newNode;
                }
              },
              {
                key: 'contains',
                value: function contains(node) {
                  var isContains = false;
                  this.childNodes.some(function(childNode) {
                    var uid = childNode.uid;

                    if (
                      uid === node.uid ||
                      uid === node.id ||
                      childNode.contains(node)
                    ) {
                      isContains = true;
                      return true;
                    }
                  });
                  return isContains;
                }
              },
              {
                key: 'addEventListener',
                value: function addEventListener(type, handler, options) {
                  var _a;

                  (_a = CurrentReconciler.modifyAddEventType) === null ||
                  _a === void 0
                    ? void 0
                    : _a.call(CurrentReconciler, this, type);

                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(TaroNode.prototype),
                    'addEventListener',
                    this
                  ).call(this, type, handler, options);
                }
              }
            ]);

            return TaroNode;
          })(TaroEventTarget);

          var TaroText = /*#__PURE__*/ (function(_TaroNode) {
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroText, _TaroNode);

            var _super2 = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroText);

            function TaroText(text) {
              var _this8;

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, TaroText);

              _this8 = _super2.call(
                this,
                3,
                /* TEXT_NODE */
                '#text'
              );
              _this8._value = text;
              return _this8;
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(TaroText, [
              {
                key: 'textContent',
                get: function get() {
                  return this._value;
                },
                set: function set(text) {
                  this._value = text;
                  this.enqueueUpdate({
                    path: ''.concat(
                      this._path,
                      '.',
                      'v'
                      /* Text */
                    ),
                    value: text
                  });
                }
              },
              {
                key: 'nodeValue',
                get: function get() {
                  return this._value;
                },
                set: function set(text) {
                  this.textContent = text;
                }
              }
            ]);

            return TaroText;
          })(TaroNode);
          /*
           *
           * https://www.w3.org/Style/CSS/all-properties.en.html
           */

          var styleProperties = [
            'alignContent',
            'alignItems',
            'alignSelf',
            'alignmentAdjust',
            'alignmentBaseline',
            'all',
            'animation',
            'animationDelay',
            'animationDirection',
            'animationDuration',
            'animationFillMode',
            'animationIterationCount',
            'animationName',
            'animationPlayState',
            'animationTimingFunction',
            'appearance',
            'azimuth',
            'backfaceVisibility',
            'background',
            'backgroundAttachment',
            'backgroundBlendMode',
            'backgroundClip',
            'backgroundColor',
            'backgroundImage',
            'backgroundOrigin',
            'backgroundPosition',
            'backgroundRepeat',
            'backgroundSize',
            'baselineShift',
            'blockOverflow',
            'blockSize',
            'bookmarkLabel',
            'bookmarkLevel',
            'bookmarkState',
            'border',
            'borderBlock',
            'borderBlockColor',
            'borderBlockEnd',
            'borderBlockEndColor',
            'borderBlockEndStyle',
            'borderBlockEndWidth',
            'borderBlockStart',
            'borderBlockStartColor',
            'borderBlockStartStyle',
            'borderBlockStartWidth',
            'borderBlockStyle',
            'borderBlockWidth',
            'borderBottom',
            'borderBottomColor',
            'borderBottomFitLength',
            'borderBottomFitWidth',
            'borderBottomImage',
            'borderBottomLeftFitWidth',
            'borderBottomLeftImage',
            'borderBottomLeftRadius',
            'borderBottomRightFitLength',
            'borderBottomRightFitWidth',
            'borderBottomRightImage',
            'borderBottomRightRadius',
            'borderBottomStyle',
            'borderBottomWidth',
            'borderBottomlEftFitLength',
            'borderBoundary',
            'borderBreak',
            'borderCollapse',
            'borderColor',
            'borderCornerFit',
            'borderCornerImage',
            'borderCornerImageTransform',
            'borderEndEndRadius',
            'borderEndStartRadius',
            'borderFit',
            'borderFitLength',
            'borderFitWidth',
            'borderImage',
            'borderImageOutset',
            'borderImageRepeat',
            'borderImageSlice',
            'borderImageSource',
            'borderImageTransform',
            'borderImageWidth',
            'borderInline',
            'borderInlineColor',
            'borderInlineEnd',
            'borderInlineEndColor',
            'borderInlineEndStyle',
            'borderInlineEndWidth',
            'borderInlineStart',
            'borderInlineStartColor',
            'borderInlineStartStyle',
            'borderInlineStartWidth',
            'borderInlineStyle',
            'borderInlineWidth',
            'borderLeft',
            'borderLeftColor',
            'borderLeftFitLength',
            'borderLeftFitWidth',
            'borderLeftImage',
            'borderLeftStyle',
            'borderLeftWidth',
            'borderRadius',
            'borderRight',
            'borderRightColor',
            'borderRightFitLength',
            'borderRightFitWidth',
            'borderRightImage',
            'borderRightStyle',
            'borderRightWidth',
            'borderSpacing',
            'borderStartEndRadius',
            'borderStartStartRadius',
            'borderStyle',
            'borderTop',
            'borderTopColor',
            'borderTopFitLength',
            'borderTopFitWidth',
            'borderTopImage',
            'borderTopLeftFitLength',
            'borderTopLeftFitWidth',
            'borderTopLeftImage',
            'borderTopLeftRadius',
            'borderTopRightFitLength',
            'borderTopRightFitWidth',
            'borderTopRightImage',
            'borderTopRightRadius',
            'borderTopStyle',
            'borderTopWidth',
            'borderWidth',
            'bottom',
            'boxDecorationBreak',
            'boxShadow',
            'boxSizing',
            'boxSnap',
            'breakAfter',
            'breakBefore',
            'breakInside',
            'captionSide',
            'caret',
            'caretColor',
            'caretShape',
            'chains',
            'clear',
            'clip',
            'clipPath',
            'clipRule',
            'color',
            'colorAdjust',
            'colorInterpolationFilters',
            'colorScheme',
            'columnCount',
            'columnFill',
            'columnGap',
            'columnRule',
            'columnRuleColor',
            'columnRuleStyle',
            'columnRuleWidth',
            'columnSpan',
            'columnWidth',
            'columns',
            'contain',
            'content',
            'continue',
            'counterIncrement',
            'counterReset',
            'counterSet',
            'cue',
            'cueAfter',
            'cueBefore',
            'cursor',
            'direction',
            'display',
            'dominantBaseline',
            'dropInitialAfterAdjust',
            'dropInitialAfterAlign',
            'dropInitialBeforeAdjust',
            'dropInitialBeforeAlign',
            'dropInitialSize',
            'dropInitialValue',
            'elevation',
            'emptyCells',
            'filter',
            'flex',
            'flexBasis',
            'flexDirection',
            'flexFlow',
            'flexGrow',
            'flexShrink',
            'flexWrap',
            'float',
            'floodColor',
            'floodOpacity',
            'flow',
            'flowFrom',
            'flowInto',
            'font',
            'fontFamily',
            'fontFeatureSettings',
            'fontKerning',
            'fontLanguageOverride',
            'fontMaxSize',
            'fontMinSize',
            'fontOpticalSizing',
            'fontPalette',
            'fontSize',
            'fontSizeAdjust',
            'fontStretch',
            'fontStyle',
            'fontSynthesis',
            'fontSynthesisSmallCaps',
            'fontSynthesisStyle',
            'fontSynthesisWeight',
            'fontVariant',
            'fontVariantAlternates',
            'fontVariantCaps',
            'fontVariantEastAsian',
            'fontVariantEmoji',
            'fontVariantLigatures',
            'fontVariantNumeric',
            'fontVariantPosition',
            'fontVariationSettings',
            'fontWeight',
            'footnoteDisplay',
            'footnotePolicy',
            'forcedColorAdjust',
            'gap',
            'glyphOrientationVertical',
            'grid',
            'gridArea',
            'gridAutoColumns',
            'gridAutoFlow',
            'gridAutoRows',
            'gridColumn',
            'gridColumnEnd',
            'gridColumnStart',
            'gridRow',
            'gridRowEnd',
            'gridRowStart',
            'gridTemplate',
            'gridTemplateAreas',
            'gridTemplateColumns',
            'gridTemplateRows',
            'hangingPunctuation',
            'height',
            'hyphenateCharacter',
            'hyphenateLimitChars',
            'hyphenateLimitLast',
            'hyphenateLimitLines',
            'hyphenateLimitZone',
            'hyphens',
            'imageOrientation',
            'imageResolution',
            'initialLetters',
            'initialLettersAlign',
            'initialLettersWrap',
            'inlineBoxAlign',
            'inlineSize',
            'inlineSizing',
            'inset',
            'insetBlock',
            'insetBlockEnd',
            'insetBlockStart',
            'insetInline',
            'insetInlineEnd',
            'insetInlineStart',
            'isolation',
            'justifyContent',
            'justifyItems',
            'justifySelf',
            'left',
            'letterSpacing',
            'lightingColor',
            'lineBreak',
            'lineClamp',
            'lineGrid',
            'lineHeight',
            'linePadding',
            'lineSnap',
            'lineStacking',
            'lineStackingRuby',
            'lineStackingShift',
            'lineStackingStrategy',
            'listStyle',
            'listStyleImage',
            'listStylePosition',
            'listStyleType',
            'margin',
            'marginBlock',
            'marginBlockEnd',
            'marginBlockStart',
            'marginBottom',
            'marginInline',
            'marginInlineEnd',
            'marginInlineStart',
            'marginLeft',
            'marginRight',
            'marginTop',
            'marginTrim',
            'markerSide',
            'mask',
            'maskBorder',
            'maskBorderMode',
            'maskBorderOutset',
            'maskBorderRepeat',
            'maskBorderSlice',
            'maskBorderSource',
            'maskBorderWidth',
            'maskClip',
            'maskComposite',
            'maskImage',
            'maskMode',
            'maskOrigin',
            'maskPosition',
            'maskRepeat',
            'maskSize',
            'maskType',
            'maxBlockSize',
            'maxHeight',
            'maxInlineSize',
            'maxLines',
            'maxWidth',
            'minBlockSize',
            'minHeight',
            'minInlineSize',
            'minWidth',
            'mixBlendMode',
            'navDown',
            'navLeft',
            'navRight',
            'navUp',
            'objectFit',
            'objectPosition',
            'offset',
            'offsetAfter',
            'offsetAnchor',
            'offsetBefore',
            'offsetDistance',
            'offsetEnd',
            'offsetPath',
            'offsetPosition',
            'offsetRotate',
            'offsetStart',
            'opacity',
            'order',
            'orphans',
            'outline',
            'outlineColor',
            'outlineOffset',
            'outlineStyle',
            'outlineWidth',
            'overflow',
            'overflowBlock',
            'overflowInline',
            'overflowWrap',
            'overflowX',
            'overflowY',
            'padding',
            'paddingBlock',
            'paddingBlockEnd',
            'paddingBlockStart',
            'paddingBottom',
            'paddingInline',
            'paddingInlineEnd',
            'paddingInlineStart',
            'paddingLeft',
            'paddingRight',
            'paddingTop',
            'page',
            'pageBreakAfter',
            'pageBreakBefore',
            'pageBreakInside',
            'pause',
            'pauseAfter',
            'pauseBefore',
            'perspective',
            'perspectiveOrigin',
            'pitch',
            'pitchRange',
            'placeContent',
            'placeItems',
            'placeSelf',
            'playDuring',
            'pointerEvents',
            'position',
            'quotes',
            'regionFragment',
            'resize',
            'richness',
            'right',
            'rowGap',
            'rubyAlign',
            'rubyMerge',
            'rubyPosition',
            'running',
            'scrollBehavior',
            'scrollMargin',
            'scrollMarginBlock',
            'scrollMarginBlockEnd',
            'scrollMarginBlockStart',
            'scrollMarginBottom',
            'scrollMarginInline',
            'scrollMarginInlineEnd',
            'scrollMarginInlineStart',
            'scrollMarginLeft',
            'scrollMarginRight',
            'scrollMarginTop',
            'scrollPadding',
            'scrollPaddingBlock',
            'scrollPaddingBlockEnd',
            'scrollPaddingBlockStart',
            'scrollPaddingBottom',
            'scrollPaddingInline',
            'scrollPaddingInlineEnd',
            'scrollPaddingInlineStart',
            'scrollPaddingLeft',
            'scrollPaddingRight',
            'scrollPaddingTop',
            'scrollSnapAlign',
            'scrollSnapStop',
            'scrollSnapType',
            'shapeImageThreshold',
            'shapeInside',
            'shapeMargin',
            'shapeOutside',
            'speak',
            'speakHeader',
            'speakNumeral',
            'speakPunctuation',
            'speechRate',
            'stress',
            'stringSet',
            'tabSize',
            'tableLayout',
            'textAlign',
            'textAlignAll',
            'textAlignLast',
            'textCombineUpright',
            'textDecoration',
            'textDecorationColor',
            'textDecorationLine',
            'textDecorationStyle',
            'textEmphasis',
            'textEmphasisColor',
            'textEmphasisPosition',
            'textEmphasisStyle',
            'textGroupAlign',
            'textHeight',
            'textIndent',
            'textJustify',
            'textOrientation',
            'textOverflow',
            'textShadow',
            'textSpaceCollapse',
            'textSpaceTrim',
            'textSpacing',
            'textTransform',
            'textUnderlinePosition',
            'textWrap',
            'top',
            'transform',
            'transformBox',
            'transformOrigin',
            'transformStyle',
            'transition',
            'transitionDelay',
            'transitionDuration',
            'transitionProperty',
            'transitionTimingFunction',
            'unicodeBidi',
            'userSelect',
            'verticalAlign',
            'visibility',
            'voiceFamily',
            'volume',
            'whiteSpace',
            'widows',
            'width',
            'willChange',
            'wordBreak',
            'wordSpacing',
            'wordWrap',
            'wrapAfter',
            'wrapBefore',
            'wrapFlow',
            'wrapInside',
            'wrapThrough',
            'writingMode',
            'zIndex'
          ];

          function setStyle(newVal, styleKey) {
            var old = this[styleKey];

            if (newVal) {
              this._usedStyleProp.add(styleKey);
            }

            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ 'u']
            )(
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isString */ 'l']
              )(newVal) && newVal.length > PROPERTY_THRESHOLD,
              'Style \u5C5E\u6027 '.concat(
                styleKey,
                ' \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002'
              )
            );

            if (old !== newVal) {
              this._value[styleKey] = newVal;

              this._element.enqueueUpdate({
                path: ''.concat(
                  this._element._path,
                  '.',
                  'st'
                  /* Style */
                ),
                value: this.cssText
              });
            }
          }

          function initStyle(ctor) {
            var properties = {};

            var _loop2 = function _loop2(i) {
              var styleKey = styleProperties[i];
              properties[styleKey] = {
                get: function get() {
                  return this._value[styleKey] || '';
                },
                set: function set(newVal) {
                  setStyle.call(this, newVal, styleKey);
                }
              };
            };

            for (var i = 0; i < styleProperties.length; i++) {
              _loop2(i);
            }

            Object.defineProperties(ctor.prototype, properties);
          }

          function isCssVariable(propertyName) {
            return /^--/.test(propertyName);
          }

          var Style = /*#__PURE__*/ (function() {
            function Style(element) {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, Style);

              this._element = element;
              this._usedStyleProp = new Set();
              this._value = {};
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(Style, [
              {
                key: 'setCssVariables',
                value: function setCssVariables(styleKey) {
                  var _this9 = this;

                  this.hasOwnProperty(styleKey) ||
                    Object.defineProperty(this, styleKey, {
                      enumerable: true,
                      configurable: true,
                      get: function get() {
                        return _this9._value[styleKey] || '';
                      },
                      set: function set(newVal) {
                        setStyle.call(_this9, newVal, styleKey);
                      }
                    });
                }
              },
              {
                key: 'cssText',
                get: function get() {
                  var _this10 = this;

                  var text = '';

                  this._usedStyleProp.forEach(function(key) {
                    var val = _this10[key];
                    if (!val) return;
                    var styleName = isCssVariable(key)
                      ? key
                      : Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                            /* toDashed */ 't'
                          ]
                        )(key);
                    text += ''.concat(styleName, ': ').concat(val, ';');
                  });

                  return text;
                },
                set: function set(str) {
                  var _this11 = this;

                  if (str == null) {
                    str = '';
                  }

                  this._usedStyleProp.forEach(function(prop) {
                    _this11.removeProperty(prop);
                  });

                  if (str === '') {
                    return;
                  }

                  var rules = str.split(';');

                  for (var i = 0; i < rules.length; i++) {
                    var rule = rules[i].trim();

                    if (rule === '') {
                      continue;
                    } // 可能存在 'background: url(http:x/y/z)' 的情况

                    var _rule$split = rule.split(':'),
                      _rule$split2 = Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_3__[
                          /* default */ 'a'
                        ]
                      )(_rule$split),
                      propName = _rule$split2[0],
                      valList = _rule$split2.slice(1);

                    var val = valList.join(':');

                    if (
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isUndefined */ 'm'
                        ]
                      )(val)
                    ) {
                      continue;
                    }

                    this.setProperty(propName.trim(), val.trim());
                  }
                }
              },
              {
                key: 'setProperty',
                value: function setProperty(propertyName, value) {
                  if (propertyName[0] === '-') {
                    // 支持 webkit 属性或 css 变量
                    this.setCssVariables(propertyName);
                  } else {
                    propertyName = Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* toCamelCase */ 's'
                      ]
                    )(propertyName);
                  }

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isUndefined */ 'm'
                      ]
                    )(value)
                  ) {
                    return;
                  }

                  if (value === null || value === '') {
                    this.removeProperty(propertyName);
                  } else {
                    this[propertyName] = value;
                  }
                }
              },
              {
                key: 'removeProperty',
                value: function removeProperty(propertyName) {
                  propertyName = Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* toCamelCase */ 's'
                    ]
                  )(propertyName);

                  if (!this._usedStyleProp.has(propertyName)) {
                    return '';
                  }

                  var value = this[propertyName];
                  this[propertyName] = '';

                  this._usedStyleProp.delete(propertyName);

                  return value;
                }
              },
              {
                key: 'getPropertyValue',
                value: function getPropertyValue(propertyName) {
                  propertyName = Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* toCamelCase */ 's'
                    ]
                  )(propertyName);
                  var value = this[propertyName];

                  if (!value) {
                    return '';
                  }

                  return value;
                }
              }
            ]);

            return Style;
          })();

          initStyle(Style);

          function returnTrue() {
            return true;
          }

          function treeToArray(root, predict) {
            var array = [];
            var filter =
              predict !== null && predict !== void 0 ? predict : returnTrue;
            var object = root;

            while (object) {
              if (
                object.nodeType === 1 &&
                /* ELEMENT_NODE */
                filter(object)
              ) {
                array.push(object);
              }

              object = following(object, root);
            }

            return array;
          }

          function following(el, root) {
            var firstChild = el.firstChild;

            if (firstChild) {
              return firstChild;
            }

            var current = el;

            do {
              if (current === root) {
                return null;
              }

              var nextSibling = current.nextSibling;

              if (nextSibling) {
                return nextSibling;
              }

              current = current.parentElement;
            } while (current);

            return null;
          }

          var ClassList = /*#__PURE__*/ (function(_Set) {
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(ClassList, _Set);

            var _super3 = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(ClassList);

            function ClassList(className, el) {
              var _thisSuper, _this12;

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, ClassList);

              _this12 = _super3.call(this);
              className
                .trim()
                .split(/\s+/)
                .forEach(
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    ((_thisSuper = Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                        /* default */ 'a'
                      ]
                    )(_this12)),
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype)),
                    'add',
                    _thisSuper
                  ).bind(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                        /* default */ 'a'
                      ]
                    )(_this12)
                  )
                );
              _this12.el = el;
              return _this12;
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(ClassList, [
              {
                key: 'value',
                get: function get() {
                  return Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                      /* default */ 'a'
                    ]
                  )(this).join(' ');
                }
              },
              {
                key: 'add',
                value: function add(s) {
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'add',
                    this
                  ).call(this, s);

                  this._update();

                  return this;
                }
              },
              {
                key: 'length',
                get: function get() {
                  return this.size;
                }
              },
              {
                key: 'remove',
                value: function remove(s) {
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'delete',
                    this
                  ).call(this, s);

                  this._update();
                }
              },
              {
                key: 'toggle',
                value: function toggle(s) {
                  if (
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'has',
                      this
                    ).call(this, s)
                  ) {
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'delete',
                      this
                    ).call(this, s);
                  } else {
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'add',
                      this
                    ).call(this, s);
                  }

                  this._update();
                }
              },
              {
                key: 'replace',
                value: function replace(s1, s2) {
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'delete',
                    this
                  ).call(this, s1);

                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'add',
                    this
                  ).call(this, s2);

                  this._update();
                }
              },
              {
                key: 'contains',
                value: function contains(s) {
                  return Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'has',
                    this
                  ).call(this, s);
                }
              },
              {
                key: 'toString',
                value: function toString() {
                  return this.value;
                }
              },
              {
                key: '_update',
                value: function _update() {
                  this.el.className = this.value;
                }
              }
            ]);

            return ClassList;
          })(
            /*#__PURE__*/ Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__[
                /* default */ 'a'
              ]
            )(Set)
          );
          /* eslint-disable no-dupe-class-members */

          var TaroElement = /*#__PURE__*/ (function(_TaroNode2) {
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroElement, _TaroNode2);

            var _super4 = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroElement);

            function TaroElement(nodeType, nodeName) {
              var _this13;

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, TaroElement);

              var _a;

              _this13 = _super4.call(
                this,
                nodeType || 1,
                /* ELEMENT_NODE */
                nodeName
              );
              _this13.props = {};
              _this13.dataset =
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* EMPTY_OBJ */ 'a'
                ];
              _this13.tagName = nodeName.toUpperCase();
              _this13.style = new Style(
                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                    /* default */ 'a'
                  ]
                )(_this13)
              );
              (_a = CurrentReconciler.onTaroElementCreate) === null ||
              _a === void 0
                ? void 0
                : _a.call(CurrentReconciler, _this13.tagName, nodeType);
              return _this13;
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(TaroElement, [
              {
                key: 'id',
                get: function get() {
                  return this.getAttribute('id');
                },
                set: function set(val) {
                  this.setAttribute('id', val);
                }
              },
              {
                key: 'classList',
                get: function get() {
                  return new ClassList(this.className, this);
                }
              },
              {
                key: 'className',
                get: function get() {
                  return this.getAttribute('class') || '';
                },
                set: function set(val) {
                  this.setAttribute('class', val);
                }
              },
              {
                key: 'cssText',
                get: function get() {
                  return this.getAttribute('style') || '';
                }
              },
              {
                key: 'children',
                get: function get() {
                  return this.childNodes.filter(isElement);
                }
              },
              {
                key: 'hasAttribute',
                value: function hasAttribute(qualifiedName) {
                  return !Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* isUndefined */ 'm'
                    ]
                  )(this.props[qualifiedName]);
                }
              },
              {
                key: 'hasAttributes',
                value: function hasAttributes() {
                  return this.attributes.length > 0;
                }
              },
              {
                key: 'focus',
                value: function focus() {
                  this.setAttribute('focus', true);
                }
              },
              {
                key: 'blur',
                value: function blur() {
                  this.setAttribute('focus', false);
                }
              },
              {
                key: 'setAttribute',
                value: function setAttribute(qualifiedName, value) {
                  var _a, _b;

                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ 'u']
                  )(
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isString */ 'l'
                      ]
                    )(value) && value.length > PROPERTY_THRESHOLD,
                    '\u5143\u7D20 '
                      .concat(this.nodeName, ' \u7684 \u5C5E\u6027 ')
                      .concat(
                        qualifiedName,
                        ' \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002'
                      )
                  );
                  var isPureView =
                    this.nodeName === 'view' &&
                    !isHasExtractProp(this) &&
                    !this.isAnyEventBinded();

                  switch (qualifiedName) {
                    case 'style':
                      this.style.cssText = value;
                      break;

                    case 'id':
                      eventSource.delete(this.uid);
                      value = String(value);
                      this.props[qualifiedName] = this.uid = value;
                      eventSource.set(value, this);
                      break;

                    default:
                      this.props[qualifiedName] = value;

                      if (qualifiedName.startsWith('data-')) {
                        if (
                          this.dataset ===
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                            /* EMPTY_OBJ */ 'a'
                          ]
                        ) {
                          this.dataset = Object.create(null);
                        }

                        this.dataset[
                          Object(
                            _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                              /* toCamelCase */ 's'
                            ]
                          )(qualifiedName.replace(/^data-/, ''))
                        ] = value;
                      }

                      break;
                  }

                  qualifiedName = shortcutAttr(qualifiedName);
                  (_a = CurrentReconciler.setAttribute) === null ||
                  _a === void 0
                    ? void 0
                    : _a.call(CurrentReconciler, this, qualifiedName, value);
                  var payload = {
                    path: ''
                      .concat(this._path, '.')
                      .concat(
                        Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                            /* toCamelCase */ 's'
                          ]
                        )(qualifiedName)
                      ),
                    value: value
                  };
                  (_b = CurrentReconciler.modifySetAttrPayload) === null ||
                  _b === void 0
                    ? void 0
                    : _b.call(CurrentReconciler, this, qualifiedName, payload);
                  this.enqueueUpdate(payload); // pure-view => static-view

                  if (isPureView && isHasExtractProp(this)) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: 'static-view'
                    });
                  }
                }
              },
              {
                key: 'removeAttribute',
                value: function removeAttribute(qualifiedName) {
                  var _a, _b;

                  var isStaticView =
                    this.nodeName === 'view' &&
                    isHasExtractProp(this) &&
                    !this.isAnyEventBinded();

                  if (qualifiedName === 'style') {
                    this.style.cssText = '';
                  } else {
                    if (!this.props.hasOwnProperty(qualifiedName)) {
                      return;
                    }

                    delete this.props[qualifiedName];
                  }

                  qualifiedName = shortcutAttr(qualifiedName);
                  (_a = CurrentReconciler.removeAttribute) === null ||
                  _a === void 0
                    ? void 0
                    : _a.call(CurrentReconciler, this, qualifiedName);
                  var payload = {
                    path: ''
                      .concat(this._path, '.')
                      .concat(
                        Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                            /* toCamelCase */ 's'
                          ]
                        )(qualifiedName)
                      ),
                    value: ''
                  };
                  (_b = CurrentReconciler.modifyRmAttrPayload) === null ||
                  _b === void 0
                    ? void 0
                    : _b.call(CurrentReconciler, this, qualifiedName, payload);
                  this.enqueueUpdate(payload); // static-view => pure-view

                  if (isStaticView && !isHasExtractProp(this)) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: 'pure-view'
                    });
                  }
                }
              },
              {
                key: 'getAttribute',
                value: function getAttribute(qualifiedName) {
                  var attr =
                    qualifiedName === 'style'
                      ? this.style.cssText
                      : this.props[qualifiedName];
                  return attr !== null && attr !== void 0 ? attr : '';
                }
              },
              {
                key: 'attributes',
                get: function get() {
                  var _this14 = this;

                  var propKeys = Object.keys(this.props);
                  var style = this.style.cssText;
                  var attrs = propKeys.map(function(p) {
                    return {
                      name: p,
                      value: _this14.props[p]
                    };
                  });
                  return attrs.concat(
                    style
                      ? {
                          name: 'style',
                          value: style
                        }
                      : []
                  );
                }
              },
              {
                key: 'getElementsByTagName',
                value: function getElementsByTagName(tagName) {
                  var _this15 = this;

                  return treeToArray(this, function(el) {
                    return (
                      el.nodeName === tagName ||
                      (tagName === '*' && _this15 !== el)
                    );
                  });
                }
              },
              {
                key: 'getElementsByClassName',
                value: function getElementsByClassName(className) {
                  return treeToArray(this, function(el) {
                    var classList = el.classList;
                    var classNames = className.trim().split(/\s+/);
                    return classNames.every(function(c) {
                      return classList.has(c);
                    });
                  });
                }
              },
              {
                key: 'dispatchEvent',
                value: function dispatchEvent(event) {
                  var cancelable = event.cancelable;

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isFunction */ 'j'
                      ]
                    )(CurrentReconciler.modifyDispatchEvent)
                  ) {
                    CurrentReconciler.modifyDispatchEvent(event, this.tagName);
                  }

                  var listeners = this.__handlers[event.type];

                  if (
                    !Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isArray */ 'h'
                      ]
                    )(listeners)
                  ) {
                    return;
                  }

                  for (var i = listeners.length; i--; ) {
                    var listener = listeners[i];
                    var result = void 0;

                    if (listener._stop) {
                      listener._stop = false;
                    } else {
                      result = listener.call(this, event);
                    }

                    if ((result === false || event._end) && cancelable) {
                      event.defaultPrevented = true;
                    }

                    if (event._end && event._stop) {
                      break;
                    }
                  }

                  if (event._stop) {
                    this._stopPropagation(event);
                  } else {
                    event._stop = true;
                  }

                  return listeners != null;
                }
              },
              {
                key: 'textContent',
                get: function get() {
                  var text = '';

                  for (var i = 0; i < this.childNodes.length; i++) {
                    var element = this.childNodes[i];
                    text += element.textContent;
                  }

                  return text;
                },
                set: function set(text) {
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_0__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(TaroElement.prototype),
                    'textContent',
                    text,
                    this,
                    true
                  );
                }
              },
              {
                key: '_stopPropagation',
                value: function _stopPropagation(event) {
                  // eslint-disable-next-line @typescript-eslint/no-this-alias
                  var target = this; // eslint-disable-next-line no-cond-assign

                  while ((target = target.parentNode)) {
                    var listeners = target.__handlers[event.type];

                    if (
                      !Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isArray */ 'h'
                        ]
                      )(listeners)
                    ) {
                      continue;
                    }

                    for (var i = listeners.length; i--; ) {
                      var l = listeners[i];
                      l._stop = true;
                    }
                  }
                }
              },
              {
                key: 'addEventListener',
                value: function addEventListener(type, handler, options) {
                  var name = this.nodeName;

                  if (
                    !this.isAnyEventBinded() &&
                    SPECIAL_NODES.indexOf(name) > -1
                  ) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: name
                    });
                  }

                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(TaroElement.prototype),
                    'addEventListener',
                    this
                  ).call(this, type, handler, options);
                }
              },
              {
                key: 'removeEventListener',
                value: function removeEventListener(type, handler) {
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(TaroElement.prototype),
                    'removeEventListener',
                    this
                  ).call(this, type, handler);

                  var name = this.nodeName;

                  if (
                    !this.isAnyEventBinded() &&
                    SPECIAL_NODES.indexOf(name) > -1
                  ) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: isHasExtractProp(this)
                        ? 'static-'.concat(name)
                        : 'pure-'.concat(name)
                    });
                  }
                }
              }
            ]);

            return TaroElement;
          })(TaroNode);

          var FormElement = /*#__PURE__*/ (function(_TaroElement) {
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(FormElement, _TaroElement);

            var _super5 = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(FormElement);

            function FormElement() {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, FormElement);

              return _super5.apply(this, arguments);
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(FormElement, [
              {
                key: 'value',
                get: function get() {
                  // eslint-disable-next-line dot-notation
                  var val = this.props['value'];
                  return val == null ? '' : val;
                },
                set: function set(val) {
                  this.setAttribute('value', val);
                }
              },
              {
                key: 'dispatchEvent',
                value: function dispatchEvent(event) {
                  var _a;

                  if (
                    (event.type === 'input' || event.type === 'change') &&
                    event.mpEvent
                  ) {
                    var val = event.mpEvent.detail.value;
                    this.props.value = val;
                  }

                  (_a = CurrentReconciler.modifyFormEvent) === null ||
                  _a === void 0
                    ? void 0
                    : _a.call(CurrentReconciler, this, event);
                  return Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(FormElement.prototype),
                    'dispatchEvent',
                    this
                  ).call(this, event);
                }
              }
            ]);

            return FormElement;
          })(TaroElement);
          /**
           * Checks if `value` is classified as an `Array` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array, else `false`.
           * @example
           *
           * _.isArray([1, 2, 3]);
           * // => true
           *
           * _.isArray(document.body.children);
           * // => false
           *
           * _.isArray('abc');
           * // => false
           *
           * _.isArray(_.noop);
           * // => false
           */

          var isArray = Array.isArray;
          /** Detect free variable `global` from Node.js. */

          var freeGlobal =
            (typeof global === 'undefined'
              ? 'undefined'
              : Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                    /* default */ 'a'
                  ]
                )(global)) == 'object' &&
            global &&
            global.Object === Object &&
            global;
          /** Detect free variable `self`. */

          var freeSelf =
            (typeof self === 'undefined'
              ? 'undefined'
              : Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                    /* default */ 'a'
                  ]
                )(self)) == 'object' &&
            self &&
            self.Object === Object &&
            self;
          /** Used as a reference to the global object. */

          var root = freeGlobal || freeSelf || Function('return this')();
          /** Built-in value references. */

          var _Symbol = root.Symbol;
          /** Used for built-in method references. */

          var objectProto = Object.prototype;
          /** Used to check objects for own properties. */

          var hasOwnProperty = objectProto.hasOwnProperty;
          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */

          var nativeObjectToString = objectProto.toString;
          /** Built-in value references. */

          var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
          /**
           * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the raw `toStringTag`.
           */

          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];

            try {
              value[symToStringTag] = undefined;
              var unmasked = true;
            } catch (e) {}

            var result = nativeObjectToString.call(value);

            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }

            return result;
          }
          /** Used for built-in method references. */

          var objectProto$1 = Object.prototype;
          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */

          var nativeObjectToString$1 = objectProto$1.toString;
          /**
           * Converts `value` to a string using `Object.prototype.toString`.
           *
           * @private
           * @param {*} value The value to convert.
           * @returns {string} Returns the converted string.
           */

          function objectToString(value) {
            return nativeObjectToString$1.call(value);
          }
          /** `Object#toString` result references. */

          var nullTag = '[object Null]',
            undefinedTag = '[object Undefined]';
          /** Built-in value references. */

          var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
          /**
           * The base implementation of `getTag` without fallbacks for buggy environments.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */

          function baseGetTag(value) {
            if (value == null) {
              return value === undefined ? undefinedTag : nullTag;
            }

            return symToStringTag$1 && symToStringTag$1 in Object(value)
              ? getRawTag(value)
              : objectToString(value);
          }
          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */

          function isObjectLike(value) {
            return (
              value != null &&
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                  /* default */ 'a'
                ]
              )(value) == 'object'
            );
          }
          /** `Object#toString` result references. */

          var symbolTag = '[object Symbol]';
          /**
           * Checks if `value` is classified as a `Symbol` primitive or object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
           * @example
           *
           * _.isSymbol(Symbol.iterator);
           * // => true
           *
           * _.isSymbol('abc');
           * // => false
           */

          function isSymbol(value) {
            return (
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                  /* default */ 'a'
                ]
              )(value) == 'symbol' ||
              (isObjectLike(value) && baseGetTag(value) == symbolTag)
            );
          }
          /** Used to match property names within property paths. */

          var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            reIsPlainProp = /^\w*$/;
          /**
           * Checks if `value` is a property name and not a property path.
           *
           * @private
           * @param {*} value The value to check.
           * @param {Object} [object] The object to query keys on.
           * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
           */

          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }

            var type = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
            )(value);

            if (
              type == 'number' ||
              type == 'symbol' ||
              type == 'boolean' ||
              value == null ||
              isSymbol(value)
            ) {
              return true;
            }

            return (
              reIsPlainProp.test(value) ||
              !reIsDeepProp.test(value) ||
              (object != null && value in Object(object))
            );
          }
          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */

          function isObject(value) {
            var type = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
            )(value);

            return value != null && (type == 'object' || type == 'function');
          }
          /** `Object#toString` result references. */

          var asyncTag = '[object AsyncFunction]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            proxyTag = '[object Proxy]';
          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */

          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            } // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.

            var tag = baseGetTag(value);
            return (
              tag == funcTag ||
              tag == genTag ||
              tag == asyncTag ||
              tag == proxyTag
            );
          }
          /** Used to detect overreaching core-js shims. */

          var coreJsData = root['__core-js_shared__'];
          /** Used to detect methods masquerading as native. */

          var maskSrcKey = (function() {
            var uid = /[^.]+$/.exec(
              (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
            );
            return uid ? 'Symbol(src)_1.' + uid : '';
          })();
          /**
           * Checks if `func` has its source masked.
           *
           * @private
           * @param {Function} func The function to check.
           * @returns {boolean} Returns `true` if `func` is masked, else `false`.
           */

          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          /** Used for built-in method references. */

          var funcProto = Function.prototype;
          /** Used to resolve the decompiled source of functions. */

          var funcToString = funcProto.toString;
          /**
           * Converts `func` to its source code.
           *
           * @private
           * @param {Function} func The function to convert.
           * @returns {string} Returns the source code.
           */

          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {}

              try {
                return func + '';
              } catch (e) {}
            }

            return '';
          }
          /**
           * Used to match `RegExp`
           * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
           */

          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
          /** Used to detect host constructors (Safari). */

          var reIsHostCtor = /^\[object .+?Constructor\]$/;
          /** Used for built-in method references. */

          var funcProto$1 = Function.prototype,
            objectProto$2 = Object.prototype;
          /** Used to resolve the decompiled source of functions. */

          var funcToString$1 = funcProto$1.toString;
          /** Used to check objects for own properties. */

          var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
          /** Used to detect if a method is native. */

          var reIsNative = RegExp(
            '^' +
              funcToString$1
                .call(hasOwnProperty$1)
                .replace(reRegExpChar, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );
          /**
           * The base implementation of `_.isNative` without bad shim checks.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a native function,
           *  else `false`.
           */

          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }

            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          /**
           * Gets the value at `key` of `object`.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */

          function getValue(object, key) {
            return object == null ? undefined : object[key];
          }
          /**
           * Gets the native function at `key` of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the method to get.
           * @returns {*} Returns the function if it's native, else `undefined`.
           */

          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }
          /* Built-in method references that are verified to be native. */

          var nativeCreate = getNative(Object, 'create');
          /**
           * Removes all key-value entries from the hash.
           *
           * @private
           * @name clear
           * @memberOf Hash
           */

          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */

          function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
          }
          /** Used to stand-in for `undefined` hash values. */

          var HASH_UNDEFINED = '__lodash_hash_undefined__';
          /** Used for built-in method references. */

          var objectProto$3 = Object.prototype;
          /** Used to check objects for own properties. */

          var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */

          function hashGet(key) {
            var data = this.__data__;

            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }

            return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
          }
          /** Used for built-in method references. */

          var objectProto$4 = Object.prototype;
          /** Used to check objects for own properties. */

          var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */

          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate
              ? data[key] !== undefined
              : hasOwnProperty$3.call(data, key);
          }
          /** Used to stand-in for `undefined` hash values. */

          var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */

          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] =
              nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
            return this;
          }
          /**
           * Creates a hash object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */

          function Hash(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;
            this.clear();

            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          } // Add methods to `Hash`.

          Hash.prototype.clear = hashClear;
          Hash.prototype['delete'] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          /**
           * Removes all key-value entries from the list cache.
           *
           * @private
           * @name clear
           * @memberOf ListCache
           */

          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          /**
           * Performs a
           * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * comparison between two values to determine if they are equivalent.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           * @example
           *
           * var object = { 'a': 1 };
           * var other = { 'a': 1 };
           *
           * _.eq(object, object);
           * // => true
           *
           * _.eq(object, other);
           * // => false
           *
           * _.eq('a', 'a');
           * // => true
           *
           * _.eq('a', Object('a'));
           * // => false
           *
           * _.eq(NaN, NaN);
           * // => true
           */

          function eq(value, other) {
            return value === other || (value !== value && other !== other);
          }
          /**
           * Gets the index at which the `key` is found in `array` of key-value pairs.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} key The key to search for.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */

          function assocIndexOf(array, key) {
            var length = array.length;

            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }

            return -1;
          }
          /** Used for built-in method references. */

          var arrayProto = Array.prototype;
          /** Built-in value references. */

          var splice = arrayProto.splice;
          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */

          function listCacheDelete(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              return false;
            }

            var lastIndex = data.length - 1;

            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }

            --this.size;
            return true;
          }
          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */

          function listCacheGet(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
          }
          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */

          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */

          function listCacheSet(key, value) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }

            return this;
          }
          /**
           * Creates an list cache object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */

          function ListCache(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;
            this.clear();

            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          } // Add methods to `ListCache`.

          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype['delete'] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          /* Built-in method references that are verified to be native. */

          var Map$1 = getNative(root, 'Map');
          /**
           * Removes all key-value entries from the map.
           *
           * @private
           * @name clear
           * @memberOf MapCache
           */

          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              hash: new Hash(),
              map: new (Map$1 || ListCache)(),
              string: new Hash()
            };
          }
          /**
           * Checks if `value` is suitable for use as unique object key.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
           */

          function isKeyable(value) {
            var type = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
            )(value);

            return type == 'string' ||
              type == 'number' ||
              type == 'symbol' ||
              type == 'boolean'
              ? value !== '__proto__'
              : value === null;
          }
          /**
           * Gets the data for `map`.
           *
           * @private
           * @param {Object} map The map to query.
           * @param {string} key The reference key.
           * @returns {*} Returns the map data.
           */

          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key)
              ? data[typeof key == 'string' ? 'string' : 'hash']
              : data.map;
          }
          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */

          function mapCacheDelete(key) {
            var result = getMapData(this, key)['delete'](key);
            this.size -= result ? 1 : 0;
            return result;
          }
          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */

          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */

          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */

          function mapCacheSet(key, value) {
            var data = getMapData(this, key),
              size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
          }
          /**
           * Creates a map cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */

          function MapCache(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;
            this.clear();

            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          } // Add methods to `MapCache`.

          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype['delete'] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          /** Error message constants. */

          var FUNC_ERROR_TEXT = 'Expected a function';
          /**
           * Creates a function that memoizes the result of `func`. If `resolver` is
           * provided, it determines the cache key for storing the result based on the
           * arguments provided to the memoized function. By default, the first argument
           * provided to the memoized function is used as the map cache key. The `func`
           * is invoked with the `this` binding of the memoized function.
           *
           * **Note:** The cache is exposed as the `cache` property on the memoized
           * function. Its creation may be customized by replacing the `_.memoize.Cache`
           * constructor with one whose instances implement the
           * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
           * method interface of `clear`, `delete`, `get`, `has`, and `set`.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Function
           * @param {Function} func The function to have its output memoized.
           * @param {Function} [resolver] The function to resolve the cache key.
           * @returns {Function} Returns the new memoized function.
           * @example
           *
           * var object = { 'a': 1, 'b': 2 };
           * var other = { 'c': 3, 'd': 4 };
           *
           * var values = _.memoize(_.values);
           * values(object);
           * // => [1, 2]
           *
           * values(other);
           * // => [3, 4]
           *
           * object.a = 2;
           * values(object);
           * // => [1, 2]
           *
           * // Modify the result cache.
           * values.cache.set(object, ['a', 'b']);
           * values(object);
           * // => ['a', 'b']
           *
           * // Replace `_.memoize.Cache`.
           * _.memoize.Cache = WeakMap;
           */

          function memoize(func, resolver) {
            if (
              typeof func != 'function' ||
              (resolver != null && typeof resolver != 'function')
            ) {
              throw new TypeError(FUNC_ERROR_TEXT);
            }

            var memoized = function memoized() {
              var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

              if (cache.has(key)) {
                return cache.get(key);
              }

              var result = func.apply(this, args);
              memoized.cache = cache.set(key, result) || cache;
              return result;
            };

            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          } // Expose `MapCache`.

          memoize.Cache = MapCache;
          /** Used as the maximum memoize cache size. */

          var MAX_MEMOIZE_SIZE = 500;
          /**
           * A specialized version of `_.memoize` which clears the memoized function's
           * cache when it exceeds `MAX_MEMOIZE_SIZE`.
           *
           * @private
           * @param {Function} func The function to have its output memoized.
           * @returns {Function} Returns the new memoized function.
           */

          function memoizeCapped(func) {
            var result = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }

              return key;
            });
            var cache = result.cache;
            return result;
          }
          /** Used to match property names within property paths. */

          var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
          /** Used to match backslashes in property paths. */

          var reEscapeChar = /\\(\\)?/g;
          /**
           * Converts `string` to a property path array.
           *
           * @private
           * @param {string} string The string to convert.
           * @returns {Array} Returns the property path array.
           */

          var stringToPath = memoizeCapped(function(string) {
            var result = [];

            if (
              string.charCodeAt(0) === 46
              /* . */
            ) {
              result.push('');
            }

            string.replace(rePropName, function(
              match,
              number,
              quote,
              subString
            ) {
              result.push(
                quote ? subString.replace(reEscapeChar, '$1') : number || match
              );
            });
            return result;
          });
          /**
           * A specialized version of `_.map` for arrays without support for iteratee
           * shorthands.
           *
           * @private
           * @param {Array} [array] The array to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the new mapped array.
           */

          function arrayMap(array, iteratee) {
            var index = -1,
              length = array == null ? 0 : array.length,
              result = Array(length);

            while (++index < length) {
              result[index] = iteratee(array[index], index, array);
            }

            return result;
          }
          /** Used as references for various `Number` constants. */

          var INFINITY = 1 / 0;
          /** Used to convert symbols to primitives and strings. */

          var symbolProto = _Symbol ? _Symbol.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
          /**
           * The base implementation of `_.toString` which doesn't convert nullish
           * values to empty strings.
           *
           * @private
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           */

          function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
              return value;
            }

            if (isArray(value)) {
              // Recursively convert values (susceptible to call stack limits).
              return arrayMap(value, baseToString) + '';
            }

            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : '';
            }

            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }
          /**
           * Converts `value` to a string. An empty string is returned for `null`
           * and `undefined` values. The sign of `-0` is preserved.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to convert.
           * @returns {string} Returns the converted string.
           * @example
           *
           * _.toString(null);
           * // => ''
           *
           * _.toString(-0);
           * // => '-0'
           *
           * _.toString([1, 2, 3]);
           * // => '1,2,3'
           */

          function toString(value) {
            return value == null ? '' : baseToString(value);
          }
          /**
           * Casts `value` to a path array if it's not one.
           *
           * @private
           * @param {*} value The value to inspect.
           * @param {Object} [object] The object to query keys on.
           * @returns {Array} Returns the cast property path array.
           */

          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }

            return isKey(value, object)
              ? [value]
              : stringToPath(toString(value));
          }
          /** Used as references for various `Number` constants. */

          var INFINITY$1 = 1 / 0;
          /**
           * Converts `value` to a string key if it's not a string or symbol.
           *
           * @private
           * @param {*} value The value to inspect.
           * @returns {string|symbol} Returns the key.
           */

          function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) {
              return value;
            }

            var result = value + '';
            return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
          }
          /**
           * The base implementation of `_.get` without support for default values.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {Array|string} path The path of the property to get.
           * @returns {*} Returns the resolved value.
           */

          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0,
              length = path.length;

            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }

            return index && index == length ? object : undefined;
          }
          /**
           * Gets the value at `path` of `object`. If the resolved value is
           * `undefined`, the `defaultValue` is returned in its place.
           *
           * @static
           * @memberOf _
           * @since 3.7.0
           * @category Object
           * @param {Object} object The object to query.
           * @param {Array|string} path The path of the property to get.
           * @param {*} [defaultValue] The value returned for `undefined` resolved values.
           * @returns {*} Returns the resolved value.
           * @example
           *
           * var object = { 'a': [{ 'b': { 'c': 3 } }] };
           *
           * _.get(object, 'a[0].b.c');
           * // => 3
           *
           * _.get(object, ['a', '0', 'b', 'c']);
           * // => 3
           *
           * _.get(object, 'a.b.c', 'default');
           * // => 'default'
           */

          function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
          }

          var Performance = /*#__PURE__*/ (function() {
            function Performance() {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, Performance);

              this.recorder = new Map();
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(Performance, [
              {
                key: 'start',
                value: function start(id) {
                  if (!options.debug) {
                    return;
                  }

                  this.recorder.set(id, Date.now());
                }
              },
              {
                key: 'stop',
                value: function stop(id) {
                  if (!options.debug) {
                    return;
                  }

                  var now = Date.now();
                  var prev = this.recorder.get(id);
                  var time = now - prev; // eslint-disable-next-line no-console

                  console.log(
                    ''.concat(id, ' \u65F6\u957F\uFF1A ').concat(time, 'ms')
                  );
                }
              }
            ]);

            return Performance;
          })();

          var perf = new Performance();

          var Events = /*#__PURE__*/ (function() {
            function Events(opts) {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, Events);

              if (typeof opts !== 'undefined' && opts.callbacks) {
                this.callbacks = opts.callbacks;
              } else {
                this.callbacks = {};
              }
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(Events, [
              {
                key: 'on',
                value: function on(eventName, callback, context) {
                  var event, node, tail, list;

                  if (!callback) {
                    return this;
                  }

                  eventName = eventName.split(Events.eventSplitter);
                  this.callbacks || (this.callbacks = {});
                  var calls = this.callbacks;

                  while ((event = eventName.shift())) {
                    list = calls[event];
                    node = list ? list.tail : {};
                    node.next = tail = {};
                    node.context = context;
                    node.callback = callback;
                    calls[event] = {
                      tail: tail,
                      next: list ? list.next : node
                    };
                  }

                  return this;
                }
              },
              {
                key: 'once',
                value: function once(events, callback, context) {
                  var _this16 = this;

                  var wrapper = function wrapper() {
                    for (
                      var _len = arguments.length,
                        args = new Array(_len),
                        _key = 0;
                      _key < _len;
                      _key++
                    ) {
                      args[_key] = arguments[_key];
                    }

                    callback.apply(_this16, args);

                    _this16.off(events, wrapper, context);
                  };

                  this.on(events, wrapper, context);
                  return this;
                }
              },
              {
                key: 'off',
                value: function off(events, callback, context) {
                  var event, calls, node, tail, cb, ctx;

                  if (!(calls = this.callbacks)) {
                    return this;
                  }

                  if (!(events || callback || context)) {
                    delete this.callbacks;
                    return this;
                  }

                  events = events
                    ? events.split(Events.eventSplitter)
                    : Object.keys(calls);

                  while ((event = events.shift())) {
                    node = calls[event];
                    delete calls[event];

                    if (!node || !(callback || context)) {
                      continue;
                    }

                    tail = node.tail;

                    while ((node = node.next) !== tail) {
                      cb = node.callback;
                      ctx = node.context;

                      if (
                        (callback && cb !== callback) ||
                        (context && ctx !== context)
                      ) {
                        this.on(event, cb, ctx);
                      }
                    }
                  }

                  return this;
                }
              },
              {
                key: 'trigger',
                value: function trigger(events) {
                  var event, node, calls, tail;

                  if (!(calls = this.callbacks)) {
                    return this;
                  }

                  events = events.split(Events.eventSplitter);
                  var rest = [].slice.call(arguments, 1);

                  while ((event = events.shift())) {
                    if ((node = calls[event])) {
                      tail = node.tail;

                      while ((node = node.next) !== tail) {
                        node.callback.apply(node.context || this, rest);
                      }
                    }
                  }

                  return this;
                }
              }
            ]);

            return Events;
          })();

          Events.eventSplitter = /\s+/;
          var eventCenter = CurrentReconciler.getEventCenter(Events);
          var eventIncrementId = incrementId();

          var TaroRootElement = /*#__PURE__*/ (function(_TaroElement2) {
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroRootElement, _TaroElement2);

            var _super6 = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroRootElement);

            function TaroRootElement() {
              var _this17;

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, TaroRootElement);

              _this17 = _super6.call(
                this,
                1,
                /* ELEMENT_NODE */
                'root'
              );
              _this17.pendingUpdate = false;
              _this17.updatePayloads = [];
              _this17.pendingFlush = false;
              _this17.updateCallbacks = [];
              _this17.ctx = null;
              return _this17;
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(TaroRootElement, [
              {
                key: '_path',
                get: function get() {
                  return 'root';
                }
              },
              {
                key: '_root',
                get: function get() {
                  return this;
                }
              },
              {
                key: 'enqueueUpdate',
                value: function enqueueUpdate(payload) {
                  this.updatePayloads.push(payload);

                  if (this.pendingUpdate || this.ctx === null) {
                    return;
                  }

                  this.performUpdate();
                }
              },
              {
                key: 'performUpdate',
                value: function performUpdate() {
                  var _this18 = this;

                  var initRender =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : false;
                  var prerender =
                    arguments.length > 1 ? arguments[1] : undefined;
                  this.pendingUpdate = true;
                  var ctx = this.ctx;
                  setTimeout(function() {
                    var _a, _b;

                    perf.start(SET_DATA);
                    var data = Object.create(null);
                    var resetPaths = new Set(
                      initRender ? ['root.cn.[0]', 'root.cn[0]'] : []
                    );

                    while (_this18.updatePayloads.length > 0) {
                      var _this18$updatePayload = _this18.updatePayloads.shift(),
                        path = _this18$updatePayload.path,
                        value = _this18$updatePayload.value;

                      if (
                        path.endsWith(
                          'cn'
                          /* Childnodes */
                        )
                      ) {
                        resetPaths.add(path);
                      }

                      data[path] = value;
                    }

                    var _loop3 = function _loop3(_path) {
                      resetPaths.forEach(function(p) {
                        // 已经重置了数组，就不需要分别再设置了
                        if (_path.includes(p) && _path !== p) {
                          delete data[_path];
                        }
                      });
                      var value = data[_path];

                      if (
                        Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                            /* isFunction */ 'j'
                          ]
                        )(value)
                      ) {
                        data[_path] = value();
                      }
                    };

                    for (var _path in data) {
                      _loop3(_path);
                    }

                    (_a = CurrentReconciler.prepareUpdateData) === null ||
                    _a === void 0
                      ? void 0
                      : _a.call(CurrentReconciler, data, _this18);

                    if (initRender) {
                      (_b = CurrentReconciler.appendInitialPage) === null ||
                      _b === void 0
                        ? void 0
                        : _b.call(CurrentReconciler, data, _this18);
                    }

                    if (
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(prerender)
                    ) {
                      prerender(data);
                    } else {
                      _this18.pendingUpdate = false;
                      var customWrapperUpdate = [];
                      var normalUpdate = {};

                      if (!initRender) {
                        for (var p in data) {
                          var dataPathArr = p.split('.');
                          var hasCustomWrapper = false;

                          for (var i = dataPathArr.length; i > 0; i--) {
                            var allPath = dataPathArr.slice(0, i).join('.');
                            var getData = get(
                              ctx.__data__ || ctx.data,
                              allPath
                            );

                            if (
                              getData &&
                              getData.nn &&
                              getData.nn === 'custom-wrapper'
                            ) {
                              var customWrapperId = getData.uid;
                              var customWrapper = ctx.selectComponent(
                                '#'.concat(customWrapperId)
                              );
                              var splitedPath = dataPathArr.slice(i).join('.');

                              if (customWrapper) {
                                hasCustomWrapper = true;
                                customWrapperUpdate.push({
                                  ctx: ctx.selectComponent(
                                    '#'.concat(customWrapperId)
                                  ),
                                  data: Object(
                                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[
                                      /* default */ 'a'
                                    ]
                                  )({}, 'i.'.concat(splitedPath), data[p])
                                });
                              }

                              break;
                            }
                          }

                          if (!hasCustomWrapper) {
                            normalUpdate[p] = data[p];
                          }
                        }
                      }

                      var updateArrLen = customWrapperUpdate.length;

                      if (updateArrLen) {
                        var eventId = ''
                          .concat(_this18._path, '_update_')
                          .concat(eventIncrementId());
                        var executeTime = 0;
                        eventCenter.once(
                          eventId,
                          function() {
                            executeTime++;

                            if (executeTime === updateArrLen + 1) {
                              perf.stop(SET_DATA);

                              if (!_this18.pendingFlush) {
                                _this18.flushUpdateCallback();
                              }

                              if (initRender) {
                                perf.stop(PAGE_INIT);
                              }
                            }
                          },
                          eventCenter
                        );
                        customWrapperUpdate.forEach(function(item) {
                          item.ctx.setData(item.data, function() {
                            eventCenter.trigger(eventId);
                          });
                        });
                        ctx.setData(normalUpdate, function() {
                          eventCenter.trigger(eventId);
                        });
                      } else {
                        ctx.setData(data, function() {
                          perf.stop(SET_DATA);

                          if (!_this18.pendingFlush) {
                            _this18.flushUpdateCallback();
                          }

                          if (initRender) {
                            perf.stop(PAGE_INIT);
                          }
                        });
                      }
                    }
                  }, 0);
                }
              },
              {
                key: 'enqueueUpdateCallback',
                value: function enqueueUpdateCallback(cb, ctx) {
                  this.updateCallbacks.push(function() {
                    ctx ? cb.call(ctx) : cb();
                  });
                }
              },
              {
                key: 'flushUpdateCallback',
                value: function flushUpdateCallback() {
                  this.pendingFlush = false;
                  var copies = this.updateCallbacks.slice(0);
                  this.updateCallbacks.length = 0;

                  for (var i = 0; i < copies.length; i++) {
                    copies[i]();
                  }
                }
              }
            ]);

            return TaroRootElement;
          })(TaroElement);

          var isBrowser = typeof document !== 'undefined' && !!document.scripts;
          var doc = isBrowser
            ? document
            : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ 'a'];
          var win = isBrowser
            ? window
            : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ 'a'];

          var TaroDocument = /*#__PURE__*/ (function(_TaroElement3) {
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroDocument, _TaroElement3);

            var _super7 = Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroDocument);

            function TaroDocument() {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(this, TaroDocument);

              return _super7.call(
                this,
                9,
                /* DOCUMENT_NODE */
                '#document'
              );
            }

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                /* default */ 'a'
              ]
            )(TaroDocument, [
              {
                key: 'createElement',
                value: function createElement(type) {
                  if (type === 'root') {
                    return new TaroRootElement();
                  }

                  if (
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* controlledComponent */ 'c'
                    ].has(type)
                  ) {
                    return new FormElement(
                      1,
                      /* ELEMENT_NODE */
                      type
                    );
                  }

                  return new TaroElement(
                    1,
                    /* ELEMENT_NODE */
                    type
                  );
                } // an ugly fake createElementNS to deal with @vue/runtime-dom's
                // support mounting app to svg container since vue@3.0.8
              },
              {
                key: 'createElementNS',
                value: function createElementNS(_svgNS, type) {
                  return this.createElement(type);
                }
              },
              {
                key: 'createTextNode',
                value: function createTextNode(text) {
                  return new TaroText(text);
                }
              },
              {
                key: 'getElementById',
                value: function getElementById(id) {
                  var el = eventSource.get(id);
                  return Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* isUndefined */ 'm'
                    ]
                  )(el)
                    ? null
                    : el;
                }
              },
              {
                key: 'getElementsByTagName',
                value: function getElementsByTagName(tagName) {
                  var _this19 = this;

                  var elements = [];
                  eventSource.forEach(function(node) {
                    if (
                      node.nodeType !== 1
                      /* ELEMENT_NODE */
                    ) {
                      return;
                    }

                    if (
                      node.nodeName === tagName ||
                      (tagName === '*' && node !== _this19)
                    ) {
                      elements.push(node);
                    }
                  });
                  return elements;
                }
              },
              {
                key: 'querySelector',
                value: function querySelector(query) {
                  // 为了 Vue3 的乞丐版实现
                  if (/^#/.test(query)) {
                    return this.getElementById(query.slice(1));
                  }

                  return null;
                } // @TODO: @PERF: 在 hydrate 移除掉空的 node
              },
              {
                key: 'createComment',
                value: function createComment() {
                  return new TaroText('');
                }
              }
            ]);

            return TaroDocument;
          })(TaroElement);

          function createDocument() {
            var doc = new TaroDocument();
            doc.appendChild((doc.documentElement = doc.createElement('html')));
            doc.documentElement.appendChild(
              (doc.head = doc.createElement('head'))
            );
            var body = doc.createElement('body');
            doc.documentElement.appendChild(body);
            doc.body = body;
            var app = doc.createElement('app');
            app.id = 'app';
            var container = doc.createElement('container'); // 多包一层主要为了兼容 vue

            container.appendChild(app);
            doc.documentElement.lastChild.appendChild(container);
            doc.createEvent = createEvent;
            return doc;
          }

          var document$1 = isBrowser ? doc : createDocument();
          var machine = 'Macintosh';
          var arch = 'Intel Mac OS X 10_14_5';
          var engine =
            'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
          var navigator = isBrowser
            ? win.navigator
            : {
                appCodeName: 'Mozilla',
                appName: 'Netscape',
                appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
                cookieEnabled: true,
                mimeTypes: [],
                onLine: true,
                platform: 'MacIntel',
                plugins: [],
                product: 'Taro',
                productSub: '20030107',
                userAgent:
                  'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
                vendor: 'Joyent',
                vendorSub: ''
              }; // https://github.com/myrne/performance-now

          var now;

          (function() {
            var loadTime;

            if (
              typeof performance !== 'undefined' &&
              performance !== null &&
              performance.now
            ) {
              now = function now() {
                return performance.now();
              };
            } else if (Date.now) {
              now = function now() {
                return Date.now() - loadTime;
              };

              loadTime = Date.now();
            } else {
              now = function now() {
                return new Date().getTime() - loadTime;
              };

              loadTime = new Date().getTime();
            }
          })();

          var lastTime = 0; // https://gist.github.com/paulirish/1579671
          // https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0

          var raf =
            typeof requestAnimationFrame !== 'undefined' &&
            requestAnimationFrame !== null
              ? requestAnimationFrame
              : function(callback) {
                  var _now = now();

                  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.

                  return setTimeout(function() {
                    callback((lastTime = nextTime));
                  }, nextTime - _now);
                };
          var caf =
            typeof cancelAnimationFrame !== 'undefined' &&
            cancelAnimationFrame !== null
              ? cancelAnimationFrame
              : clearTimeout;

          if (global) {
            raf = raf.bind(global);
            caf = caf.bind(global);
          }

          function getComputedStyle(element) {
            return element.style;
          }

          var window$1 = isBrowser
            ? win
            : {
                navigator: navigator,
                document: document$1
              };

          if (!isBrowser) {
            var globalProperties = [].concat(
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                  /* default */ 'a'
                ]
              )(Object.getOwnPropertyNames(global || win)),
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                  /* default */ 'a'
                ]
              )(Object.getOwnPropertySymbols(global || win))
            );
            globalProperties.forEach(function(property) {
              if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
                window$1[property] = global[property];
              }
            });
          }

          if (true) {
            window$1.requestAnimationFrame = raf;
            window$1.cancelAnimationFrame = caf;
            window$1.getComputedStyle = getComputedStyle;

            window$1.addEventListener = function() {};

            window$1.removeEventListener = function() {};

            if (!('Date' in window$1)) {
              window$1.Date = Date;
            }

            if (!('setTimeout' in window$1)) {
              window$1.setTimeout = setTimeout;
            }
          }

          var Current = {
            app: null,
            router: null,
            page: null
          };

          var getCurrentInstance = function getCurrentInstance() {
            return Current;
          };
          /* eslint-disable dot-notation */

          var instances = new Map();

          function injectPageInstance(inst, id) {
            var _a;

            (_a = CurrentReconciler.mergePageInstance) === null || _a === void 0
              ? void 0
              : _a.call(CurrentReconciler, instances.get(id), inst);
            instances.set(id, inst);
          }

          function getPageInstance(id) {
            return instances.get(id);
          }

          function addLeadingSlash(path) {
            if (path == null) {
              return '';
            }

            return path.charAt(0) === '/' ? path : '/' + path;
          }

          var pageId = incrementId();

          function safeExecute(path, lifecycle) {
            for (
              var _len2 = arguments.length,
                args = new Array(_len2 > 2 ? _len2 - 2 : 0),
                _key2 = 2;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2 - 2] = arguments[_key2];
            }

            var instance = instances.get(path);

            if (instance == null) {
              return;
            }

            var func = CurrentReconciler.getLifecyle(instance, lifecycle);

            if (
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ 'h']
              )(func)
            ) {
              var res = func.map(function(fn) {
                return fn.apply(instance, args);
              });
              return res[0];
            }

            if (
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* isFunction */ 'j'
                ]
              )(func)
            ) {
              return;
            }

            return func.apply(instance, args);
          }

          function stringify(obj) {
            if (obj == null) {
              return '';
            }

            var path = Object.keys(obj)
              .map(function(key) {
                return key + '=' + obj[key];
              })
              .join('&');
            return path === '' ? path : '?' + path;
          }

          function getPath(id, options) {
            var path = id;

            if (!isBrowser) {
              path = id + stringify(options);
            }

            return path;
          }

          function getOnReadyEventKey(path) {
            return path + '.' + 'onReady';
          }

          function getOnShowEventKey(path) {
            return path + '.' + 'onShow';
          }

          function getOnHideEventKey(path) {
            return path + '.' + 'onHide';
          }

          function createPageConfig(component, pageName, data, pageConfig) {
            var _a, _b;

            var id =
              pageName !== null && pageName !== void 0
                ? pageName
                : 'taro_page_'.concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

            var pageElement = null;
            var unmounting = false;
            var prepareMountList = [];
            var config = {
              onLoad: function onLoad(options, cb) {
                var _this20 = this;

                perf.start(PAGE_INIT);
                Current.page = this;
                this.config = pageConfig || {};

                if (this.options == null) {
                  this.options = options;
                }

                var path = getPath(id, options);
                var router = isBrowser ? path : this.route || this.__route__;
                Current.router = {
                  params: options,
                  path: addLeadingSlash(router),
                  onReady: getOnReadyEventKey(id),
                  onShow: getOnShowEventKey(id),
                  onHide: getOnHideEventKey(id)
                };

                var mount = function mount() {
                  Current.app.mount(component, path, function() {
                    pageElement = document$1.getElementById(path);
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* ensure */ 'e'
                      ]
                    )(pageElement !== null, '没有找到页面实例。');
                    safeExecute(path, 'onLoad', options);

                    if (!isBrowser) {
                      pageElement.ctx = _this20;
                      pageElement.performUpdate(true, cb);
                    }
                  });
                };

                if (unmounting) {
                  prepareMountList.push(mount);
                } else {
                  mount();
                }
              },
              onReady: function onReady() {
                var path = getPath(id, this.options);
                raf(function() {
                  eventCenter.trigger(getOnReadyEventKey(id));
                });
                safeExecute(path, 'onReady');
                this.onReady.called = true;
              },
              onUnload: function onUnload() {
                var path = getPath(id, this.options);
                unmounting = true;
                Current.app.unmount(path, function() {
                  unmounting = false;
                  instances.delete(path);

                  if (pageElement) {
                    pageElement.ctx = null;
                  }

                  if (prepareMountList.length) {
                    prepareMountList.forEach(function(fn) {
                      return fn();
                    });
                    prepareMountList = [];
                  }
                });
              },
              onShow: function onShow() {
                Current.page = this;
                this.config = pageConfig || {};
                var path = getPath(id, this.options);
                var router = isBrowser ? path : this.route || this.__route__;
                Current.router = {
                  params: this.options,
                  path: addLeadingSlash(router),
                  onReady: getOnReadyEventKey(id),
                  onShow: getOnShowEventKey(id),
                  onHide: getOnHideEventKey(id)
                };
                raf(function() {
                  eventCenter.trigger(getOnShowEventKey(id));
                });
                safeExecute(path, 'onShow');
              },
              onHide: function onHide() {
                Current.page = null;
                Current.router = null;
                var path = getPath(id, this.options);
                safeExecute(path, 'onHide');
                eventCenter.trigger(getOnHideEventKey(id));
              },
              onPullDownRefresh: function onPullDownRefresh() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPullDownRefresh');
              },
              onReachBottom: function onReachBottom() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onReachBottom');
              },
              onPageScroll: function onPageScroll(options) {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPageScroll', options);
              },
              onResize: function onResize(options) {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onResize', options);
              },
              onTabItemTap: function onTabItemTap(options) {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onTabItemTap', options);
              },
              onTitleClick: function onTitleClick() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onTitleClick');
              },
              onOptionMenuClick: function onOptionMenuClick() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onOptionMenuClick');
              },
              onPopMenuClick: function onPopMenuClick() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPopMenuClick');
              },
              onPullIntercept: function onPullIntercept() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPullIntercept');
              },
              onAddToFavorites: function onAddToFavorites() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onAddToFavorites');
              }
            }; // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。

            if (
              component.onShareAppMessage ||
              ((_a = component.prototype) === null || _a === void 0
                ? void 0
                : _a.onShareAppMessage) ||
              component.enableShareAppMessage
            ) {
              config.onShareAppMessage = function(options) {
                var target = options.target;

                if (target != null) {
                  var _id = target.id;
                  var element = document$1.getElementById(_id);

                  if (element != null) {
                    options.target.dataset = element.dataset;
                  }
                }

                var path = getPath(id, this.options);
                return safeExecute(path, 'onShareAppMessage', options);
              };
            }

            if (
              component.onShareTimeline ||
              ((_b = component.prototype) === null || _b === void 0
                ? void 0
                : _b.onShareTimeline) ||
              component.enableShareTimeline
            ) {
              config.onShareTimeline = function() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onShareTimeline');
              };
            }

            config.eh = eventHandler;

            if (
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* isUndefined */ 'm'
                ]
              )(data)
            ) {
              config.data = data;
            }

            if (isBrowser) {
              config.path = id;
            }

            return config;
          }

          function createComponentConfig(component, componentName, data) {
            var _a, _b, _c;

            var id =
              componentName !== null && componentName !== void 0
                ? componentName
                : 'taro_component_'.concat(pageId());
            var componentElement = null;
            var config = {
              attached: function attached() {
                var _this21 = this;

                perf.start(PAGE_INIT);
                var path = getPath(id, {
                  id: this.getPageId()
                });
                Current.app.mount(component, path, function() {
                  componentElement = document$1.getElementById(path);
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* ensure */ 'e'
                    ]
                  )(componentElement !== null, '没有找到组件实例。');
                  safeExecute(path, 'onLoad');

                  if (!isBrowser) {
                    componentElement.ctx = _this21;
                    componentElement.performUpdate(true);
                  }
                });
              },
              detached: function detached() {
                var path = getPath(id, {
                  id: this.getPageId()
                });
                Current.app.unmount(path, function() {
                  instances.delete(path);

                  if (componentElement) {
                    componentElement.ctx = null;
                  }
                });
              },
              pageLifetimes: {
                show: function show() {
                  safeExecute(id, 'onShow');
                },
                hide: function hide() {
                  safeExecute(id, 'onHide');
                }
              },
              methods: {
                eh: eventHandler
              }
            };

            if (
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* isUndefined */ 'm'
                ]
              )(data)
            ) {
              config.data = data;
            }

            config['options'] =
              (_a =
                component === null || component === void 0
                  ? void 0
                  : component['options']) !== null && _a !== void 0
                ? _a
                : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                    /* EMPTY_OBJ */ 'a'
                  ];
            config['externalClasses'] =
              (_b =
                component === null || component === void 0
                  ? void 0
                  : component['externalClasses']) !== null && _b !== void 0
                ? _b
                : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                    /* EMPTY_OBJ */ 'a'
                  ];
            config['behaviors'] =
              (_c =
                component === null || component === void 0
                  ? void 0
                  : component['behaviors']) !== null && _c !== void 0
                ? _c
                : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                    /* EMPTY_OBJ */ 'a'
                  ];
            return config;
          }

          function createRecursiveComponentConfig(componentName) {
            return {
              properties: {
                i: {
                  type: Object,
                  value: Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[
                      /* default */ 'a'
                    ]
                  )(
                    {},
                    'nn',
                    /* NodeName */
                    'view'
                  )
                },
                l: {
                  type: String,
                  value: ''
                }
              },
              observers: {
                i: function i(val) {
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ 'u']
                  )(
                    val[
                      'nn'
                      /* NodeName */
                    ] === '#text',
                    '\u8BF7\u5728\u6B64\u5143\u7D20\u5916\u518D\u5957\u4E00\u5C42\u975E Text \u5143\u7D20\uFF1A<text>'.concat(
                      val[
                        'v'
                        /* Text */
                      ],
                      '</text>\uFF0C\u8BE6\u60C5\uFF1Ahttps://github.com/NervJS/taro/issues/6054'
                    )
                  );
                }
              },
              options: {
                addGlobalClass: true,
                virtualHost: componentName !== 'custom-wrapper'
              },
              methods: {
                eh: eventHandler
              }
            };
          }

          var HOOKS_APP_ID = 'taro-app';

          var taroHooks = function taroHooks(lifecycle) {
            return function(fn) {
              var id = R.useContext(PageContext) || HOOKS_APP_ID; // hold fn ref and keep up to date

              var fnRef = R.useRef(fn);
              if (fnRef.current !== fn) fnRef.current = fn;
              R.useLayoutEffect(function() {
                var inst = getPageInstance(id);
                var first = false;

                if (inst == null) {
                  first = true;
                  inst = Object.create(null);
                }

                inst = inst; // callback is immutable but inner function is up to date

                var callback = function callback() {
                  return fnRef.current.apply(fnRef, arguments);
                };

                if (
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* isFunction */ 'j'
                    ]
                  )(inst[lifecycle])
                ) {
                  inst[lifecycle] = [inst[lifecycle], callback];
                } else {
                  inst[lifecycle] = [].concat(
                    Object(
                      _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                        /* default */ 'a'
                      ]
                    )(inst[lifecycle] || []),
                    [callback]
                  );
                }

                if (first) {
                  injectPageInstance(inst, id);
                }

                return function() {
                  var inst = getPageInstance(id);
                  var list = inst[lifecycle];

                  if (list === callback) {
                    inst[lifecycle] = undefined;
                  } else if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isArray */ 'h'
                      ]
                    )(list)
                  ) {
                    inst[lifecycle] = list.filter(function(item) {
                      return item !== callback;
                    });
                  }
                };
              }, []);
            };
          };

          var useDidShow = taroHooks('componentDidShow');
          var useDidHide = taroHooks('componentDidHide');
          var usePullDownRefresh = taroHooks('onPullDownRefresh');
          var useReachBottom = taroHooks('onReachBottom');
          var usePageScroll = taroHooks('onPageScroll');
          var useResize = taroHooks('onResize');
          var useShareAppMessage = taroHooks('onShareAppMessage');
          var useTabItemTap = taroHooks('onTabItemTap');
          var useTitleClick = taroHooks('onTitleClick');
          var useOptionMenuClick = taroHooks('onOptionMenuClick');
          var usePullIntercept = taroHooks('onPullIntercept');
          var useShareTimeline = taroHooks('onShareTimeline');
          var useAddToFavorites = taroHooks('onAddToFavorites');
          var useReady = taroHooks('onReady');

          var useRouter = function useRouter() {
            var dynamic =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;
            return dynamic
              ? Current.router
              : R.useMemo(function() {
                  return Current.router;
                }, []);
          };

          var useScope = function useScope() {
            return undefined;
          };

          function isClassComponent(R, component) {
            var _a;

            return (
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* isFunction */ 'j'
                ]
              )(component.render) ||
              !!((_a = component.prototype) === null || _a === void 0
                ? void 0
                : _a.isReactComponent) ||
              component.prototype instanceof R.Component
            ); // compat for some others react-like library
          } // 初始值设置为 any 主要是为了过 TS 的校验

          var R =
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ 'a'];
          var PageContext =
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ 'a'];

          function connectReactPage(R, id) {
            var h = R.createElement;
            return function(component) {
              // eslint-disable-next-line dot-notation
              var isReactComponent = isClassComponent(R, component);

              var inject = function inject(node) {
                return node && injectPageInstance(node, id);
              };

              var refs = isReactComponent
                ? {
                    ref: inject
                  }
                : {
                    forwardedRef: inject,
                    // 兼容 react-redux 7.20.1+
                    reactReduxForwardedRef: inject
                  };

              if (
                PageContext ===
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* EMPTY_OBJ */ 'a'
                ]
              ) {
                PageContext = R.createContext('');
              }

              return /*#__PURE__*/ (function(_R$Component) {
                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                    /* default */ 'a'
                  ]
                )(Page, _R$Component);

                var _super8 = Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                    /* default */ 'a'
                  ]
                )(Page);

                function Page() {
                  var _this22;

                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                      /* default */ 'a'
                    ]
                  )(this, Page);

                  _this22 = _super8.apply(this, arguments);
                  _this22.state = {
                    hasError: false
                  };
                  return _this22;
                }

                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                    /* default */ 'a'
                  ]
                )(
                  Page,
                  [
                    {
                      key: 'componentDidCatch',
                      // React 16 uncaught error 会导致整个应用 crash，
                      value:
                        // 目前把错误缩小到页面
                        function componentDidCatch(error, info) {
                          console.warn(error);
                          console.error(info.componentStack);
                        }
                    },
                    {
                      key: 'render',
                      value: function render() {
                        var children = this.state.hasError
                          ? []
                          : h(
                              PageContext.Provider,
                              {
                                value: id
                              },
                              h(
                                component,
                                Object.assign(
                                  Object.assign({}, this.props),
                                  refs
                                )
                              )
                            );

                        if (isBrowser) {
                          return h(
                            'div',
                            {
                              id: id,
                              className: 'taro_page'
                            },
                            children
                          );
                        }

                        return h(
                          'root',
                          {
                            id: id
                          },
                          children
                        );
                      }
                    }
                  ],
                  [
                    {
                      key: 'getDerivedStateFromError',
                      value: function getDerivedStateFromError(error) {
                        console.warn(error);
                        return {
                          hasError: true
                        };
                      }
                    }
                  ]
                );

                return Page;
              })(R.Component);
            };
          }

          var ReactDOM;

          function setReconciler() {
            var hostConfig = {
              getLifecyle: function getLifecyle(instance, lifecycle) {
                if (lifecycle === 'onShow') {
                  lifecycle = 'componentDidShow';
                } else if (lifecycle === 'onHide') {
                  lifecycle = 'componentDidHide';
                }

                return instance[lifecycle];
              },
              mergePageInstance: function mergePageInstance(prev, next) {
                if (!prev || !next) return; // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
                // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev

                if ('constructor' in prev) return;
                Object.keys(prev).forEach(function(item) {
                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isFunction */ 'j'
                      ]
                    )(next[item])
                  ) {
                    next[item] = [next[item]].concat(
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                          /* default */ 'a'
                        ]
                      )(prev[item])
                    );
                  } else {
                    next[item] = [].concat(
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                          /* default */ 'a'
                        ]
                      )(next[item] || []),
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                          /* default */ 'a'
                        ]
                      )(prev[item])
                    );
                  }
                });
              },
              modifyEventType: function modifyEventType(event) {
                event.type = event.type.replace(/-/g, '');
              },
              batchedEventUpdates: function batchedEventUpdates(cb) {
                ReactDOM.unstable_batchedUpdates(cb);
              }
            };

            if (isBrowser) {
              hostConfig.createPullDownComponent = function(el, _, R) {
                var isReactComponent = isClassComponent(R, el);
                return R.forwardRef(function(props, ref) {
                  var newProps = Object.assign({}, props);
                  var refs = isReactComponent
                    ? {
                        ref: ref
                      }
                    : {
                        forwardedRef: ref,
                        // 兼容 react-redux 7.20.1+
                        reactReduxForwardedRef: ref
                      };
                  return R.createElement(
                    'taro-pull-to-refresh',
                    null,
                    R.createElement(
                      el,
                      Object.assign(Object.assign({}, newProps), refs)
                    )
                  );
                });
              };

              hostConfig.findDOMNode = function(inst) {
                return ReactDOM.findDOMNode(inst);
              };
            }

            options.reconciler(hostConfig);
          }

          var pageKeyId = incrementId();

          function createReactApp(App, react, reactdom, config) {
            R = react;
            ReactDOM = reactdom;
            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ 'e']
            )(
              !!ReactDOM,
              "构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 'react'/'nerv' "
            );
            var ref = R.createRef();
            var isReactComponent = isClassComponent(R, App);
            setReconciler();
            var wrapper;

            var AppWrapper = /*#__PURE__*/ (function(_R$Component2) {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                  /* default */ 'a'
                ]
              )(AppWrapper, _R$Component2);

              var _super9 = Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                  /* default */ 'a'
                ]
              )(AppWrapper);

              function AppWrapper() {
                var _this23;

                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                    /* default */ 'a'
                  ]
                )(this, AppWrapper);

                _this23 = _super9.apply(this, arguments); // run createElement() inside the render function to make sure that owner is right

                _this23.pages = [];
                _this23.elements = [];
                return _this23;
              }

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(AppWrapper, [
                {
                  key: 'mount',
                  value: function mount(component, id, cb) {
                    var key = id + pageKeyId();

                    var page = function page() {
                      return R.createElement(component, {
                        key: key,
                        tid: id
                      });
                    };

                    this.pages.push(page);
                    this.forceUpdate(cb);
                  }
                },
                {
                  key: 'unmount',
                  value: function unmount(id, cb) {
                    for (var i = 0; i < this.elements.length; i++) {
                      var element = this.elements[i];

                      if (element.props.tid === id) {
                        this.elements.splice(i, 1);
                        break;
                      }
                    }

                    this.forceUpdate(cb);
                  }
                },
                {
                  key: 'render',
                  value: function render() {
                    while (this.pages.length > 0) {
                      var page = this.pages.pop();
                      this.elements.push(page());
                    }

                    var props = null;

                    if (isReactComponent) {
                      props = {
                        ref: ref
                      };
                    }

                    return R.createElement(
                      App,
                      props,
                      isBrowser
                        ? R.createElement('div', null, this.elements.slice())
                        : this.elements.slice()
                    );
                  }
                }
              ]);

              return AppWrapper;
            })(R.Component);

            var app = Object.create(
              {
                render: function render(cb) {
                  wrapper.forceUpdate(cb);
                },
                mount: function mount(component, id, cb) {
                  var page = connectReactPage(R, id)(component);
                  wrapper.mount(page, id, cb);
                },
                unmount: function unmount(id, cb) {
                  wrapper.unmount(id, cb);
                }
              },
              {
                config: {
                  writable: true,
                  enumerable: true,
                  configurable: true,
                  value: config
                },
                onLaunch: {
                  enumerable: true,
                  writable: true,
                  value: function value(options) {
                    var _this24 = this;

                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    ); // eslint-disable-next-line react/no-render-return-value

                    wrapper = ReactDOM.render(
                      R.createElement(AppWrapper),
                      document$1.getElementById('app')
                    );
                    var app = ref.current; // For taroize
                    // 把 App Class 上挂载的额外属性同步到全局 app 对象中

                    if (
                      app === null || app === void 0
                        ? void 0
                        : app.taroGlobalData
                    ) {
                      var globalData = app.taroGlobalData;
                      var keys = Object.keys(globalData);
                      var descriptors = Object.getOwnPropertyDescriptors(
                        globalData
                      );
                      keys.forEach(function(key) {
                        Object.defineProperty(_this24, key, {
                          configurable: true,
                          enumerable: true,
                          get: function get() {
                            return globalData[key];
                          },
                          set: function set(value) {
                            globalData[key] = value;
                          }
                        });
                      });
                      Object.defineProperties(this, descriptors);
                    }

                    this.$app = app;

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(app.onLaunch)
                    ) {
                      app.onLaunch(options);
                    }
                  }
                },
                onShow: {
                  enumerable: true,
                  writable: true,
                  value: function value(options) {
                    var app = ref.current;
                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(app.componentDidShow)
                    ) {
                      app.componentDidShow(options);
                    } // app useDidShow

                    triggerAppHook('componentDidShow');
                  }
                },
                onHide: {
                  enumerable: true,
                  writable: true,
                  value: function value(options) {
                    var app = ref.current;

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(app.componentDidHide)
                    ) {
                      app.componentDidHide(options);
                    } // app useDidHide

                    triggerAppHook('componentDidHide');
                  }
                },
                onPageNotFound: {
                  enumerable: true,
                  writable: true,
                  value: function value(res) {
                    var app = ref.current;

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(app.onPageNotFound)
                    ) {
                      app.onPageNotFound(res);
                    }
                  }
                }
              }
            );

            function triggerAppHook(lifecycle) {
              var instance = getPageInstance(HOOKS_APP_ID);

              if (instance) {
                var _app = ref.current;
                var func = CurrentReconciler.getLifecyle(instance, lifecycle);

                if (Array.isArray(func)) {
                  func.forEach(function(cb) {
                    return cb.apply(_app);
                  });
                }
              }
            }

            Current.app = app;
            return Current.app;
          }

          var getNativeCompId = incrementId();

          function initNativeComponentEntry(R, ReactDOM) {
            var NativeComponentWrapper = /*#__PURE__*/ (function(
              _R$Component3
            ) {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                  /* default */ 'a'
                ]
              )(NativeComponentWrapper, _R$Component3);

              var _super10 = Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                  /* default */ 'a'
                ]
              )(NativeComponentWrapper);

              function NativeComponentWrapper() {
                var _this25;

                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                    /* default */ 'a'
                  ]
                )(this, NativeComponentWrapper);

                _this25 = _super10.apply(this, arguments);
                _this25.root = R.createRef();
                _this25.ctx = _this25.props.getCtx();
                return _this25;
              }

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(NativeComponentWrapper, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    this.ctx.component = this;
                    var rootElement = this.root.current;
                    rootElement.ctx = this.ctx;
                    rootElement.performUpdate(true);
                  }
                },
                {
                  key: 'render',
                  value: function render() {
                    return R.createElement(
                      'root',
                      {
                        ref: this.root
                      },
                      this.props.renderComponent(this.ctx)
                    );
                  }
                }
              ]);

              return NativeComponentWrapper;
            })(R.Component);

            var Entry = /*#__PURE__*/ (function(_R$Component4) {
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[
                  /* default */ 'a'
                ]
              )(Entry, _R$Component4);

              var _super11 = Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[
                  /* default */ 'a'
                ]
              )(Entry);

              function Entry() {
                var _this26;

                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[
                    /* default */ 'a'
                  ]
                )(this, Entry);

                _this26 = _super11.apply(this, arguments);
                _this26.state = {
                  components: []
                };
                return _this26;
              }

              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(Entry, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    Current.app = this;
                  }
                },
                {
                  key: 'mount',
                  value: function mount(Component, compId, getCtx) {
                    var isReactComponent = isClassComponent(R, Component);

                    var inject = function inject(node) {
                      return node && injectPageInstance(node, compId);
                    };

                    var refs = isReactComponent
                      ? {
                          ref: inject
                        }
                      : {
                          forwardedRef: inject,
                          reactReduxForwardedRef: inject
                        };
                    var item = {
                      compId: compId,
                      element: R.createElement(NativeComponentWrapper, {
                        key: compId,
                        getCtx: getCtx,
                        renderComponent: function renderComponent(ctx) {
                          return R.createElement(
                            Component,
                            Object.assign(
                              Object.assign(
                                {},
                                (ctx.data || (ctx.data = {})).props
                              ),
                              refs
                            )
                          );
                        }
                      })
                    };
                    this.setState({
                      components: [].concat(
                        Object(
                          _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                            /* default */ 'a'
                          ]
                        )(this.state.components),
                        [item]
                      )
                    });
                  }
                },
                {
                  key: 'unmount',
                  value: function unmount(compId) {
                    var components = this.state.components;
                    var index = components.findIndex(function(item) {
                      return item.compId === compId;
                    });
                    var next = [].concat(
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                          /* default */ 'a'
                        ]
                      )(components.slice(0, index)),
                      Object(
                        _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[
                          /* default */ 'a'
                        ]
                      )(components.slice(index + 1))
                    );
                    this.setState({
                      components: next
                    });
                  }
                },
                {
                  key: 'render',
                  value: function render() {
                    var components = this.state.components;
                    return components.map(function(_ref3) {
                      var element = _ref3.element;
                      return element;
                    });
                  }
                }
              ]);

              return Entry;
            })(R.Component);

            setReconciler();
            var app = document$1.getElementById('app');
            ReactDOM.render(R.createElement(Entry, {}), app);
          }

          function createNativeComponentConfig(
            Component,
            react,
            reactdom,
            componentConfig
          ) {
            R = react;
            ReactDOM = reactdom;
            var config = {
              properties: {
                props: {
                  type: null,
                  value: null,
                  observer: function observer(_newVal, oldVal) {
                    oldVal && this.component.forceUpdate();
                  }
                }
              },
              created: function created() {
                if (!Current.app) {
                  initNativeComponentEntry(R, ReactDOM);
                }
              },
              attached: function attached() {
                var _this27 = this;

                setCurrent();
                this.compId = getNativeCompId();
                this.config = componentConfig;
                Current.app.mount(Component, this.compId, function() {
                  return _this27;
                });
              },
              ready: function ready() {
                safeExecute(this.compId, 'onReady');
              },
              detached: function detached() {
                Current.app.unmount(this.compId);
              },
              pageLifetimes: {
                show: function show() {
                  safeExecute(this.compId, 'onShow');
                },
                hide: function hide() {
                  safeExecute(this.compId, 'onHide');
                }
              },
              methods: {
                eh: eventHandler
              }
            };

            function setCurrent() {
              var pages = getCurrentPages();
              var currentPage = pages[pages.length - 1];
              if (Current.page === currentPage) return;
              Current.page = currentPage;
              var route = currentPage.route || currentPage.__route__;
              var router = {
                params: currentPage.options || {},
                path: addLeadingSlash(route),
                onReady: '',
                onHide: '',
                onShow: ''
              };
              Current.router = router;

              if (!currentPage.options) {
                // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
                Object.defineProperty(currentPage, 'options', {
                  enumerable: true,
                  configurable: true,
                  get: function get() {
                    return this._optionsValue;
                  },
                  set: function set(value) {
                    router.params = value;
                    this._optionsValue = value;
                  }
                });
              }
            }

            return config;
          }

          function connectVuePage(Vue, id) {
            return function(component) {
              var injectedPage = Vue.extend({
                props: {
                  tid: String
                },
                mixins: [
                  component,
                  {
                    created: function created() {
                      injectPageInstance(this, id);
                    }
                  }
                ]
              });
              var options = {
                render: function render(h) {
                  return h(
                    isBrowser ? 'div' : 'root',
                    {
                      attrs: {
                        id: id,
                        class: isBrowser ? 'taro_page' : ''
                      }
                    },
                    [
                      h(injectedPage, {
                        props: {
                          tid: id
                        }
                      })
                    ]
                  );
                }
              };
              return options;
            };
          }

          function setReconciler$1() {
            var hostConfig = {
              getLifecyle: function getLifecyle(instance, lifecycle) {
                return instance.$options[lifecycle];
              },
              removeAttribute: function removeAttribute(dom, qualifiedName) {
                var compName = Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                    /* capitalize */ 'b'
                  ]
                )(
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* toCamelCase */ 's'
                    ]
                  )(dom.tagName.toLowerCase())
                );

                if (
                  compName in
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* internalComponents */ 'g'
                    ] &&
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* hasOwn */ 'f'
                    ]
                  )(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* internalComponents */ 'g'
                    ][compName],
                    qualifiedName
                  ) &&
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* isBooleanStringLiteral */ 'i'
                    ]
                  )(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* internalComponents */ 'g'
                    ][compName][qualifiedName]
                  )
                ) {
                  // avoid attribute being removed because set false value in vue
                  dom.setAttribute(qualifiedName, false);
                } else {
                  delete dom.props[qualifiedName];
                }
              }
            };

            if (isBrowser) {
              hostConfig.createPullDownComponent = function(el, path, vue) {
                var injectedPage = vue.extend({
                  props: {
                    tid: String
                  },
                  mixins: [
                    el,
                    {
                      created: function created() {
                        injectPageInstance(this, path);
                      }
                    }
                  ]
                });
                var options = {
                  name: 'PullToRefresh',
                  render: function render(h) {
                    return h(
                      'taro-pull-to-refresh',
                      {
                        class: ['hydrated']
                      },
                      [h(injectedPage, this.$slots.default)]
                    );
                  }
                };
                return options;
              };

              hostConfig.findDOMNode = function(el) {
                return el.$el;
              };
            }

            options.reconciler(hostConfig);
          }

          var Vue;

          function createVueApp(App, vue, config) {
            Vue = vue;
            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ 'e']
            )(!!Vue, "构建 Vue 项目请把 process.env.FRAMEWORK 设置为 'vue'");
            setReconciler$1();
            Vue.config.getTagNamespace =
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* noop */ 'p'];
            var elements = [];
            var pages = [];
            var appInstance;
            var wrapper = new Vue({
              render: function render(h) {
                while (pages.length > 0) {
                  var page = pages.pop();
                  elements.push(page(h));
                }

                return h(
                  App,
                  {
                    ref: 'app'
                  },
                  elements.slice()
                );
              },
              methods: {
                mount: function mount(component, id, cb) {
                  pages.push(function(h) {
                    return h(component, {
                      key: id
                    });
                  });
                  this.updateSync(cb);
                },
                updateSync: function updateSync(cb) {
                  this._update(this._render(), false);

                  this.$children.forEach(function(child) {
                    return child._update(child._render(), false);
                  });
                  cb();
                },
                unmount: function unmount(id, cb) {
                  for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];

                    if (element.key === id) {
                      elements.splice(i, 1);
                      break;
                    }
                  }

                  this.updateSync(cb);
                }
              }
            });
            var app = Object.create(
              {
                mount: function mount(component, id, cb) {
                  var page = connectVuePage(Vue, id)(component);
                  wrapper.mount(page, id, cb);
                },
                unmount: function unmount(id, cb) {
                  wrapper.unmount(id, cb);
                }
              },
              {
                config: {
                  writable: true,
                  enumerable: true,
                  configurable: true,
                  value: config
                },
                onLaunch: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );
                    wrapper.$mount(document$1.getElementById('app'));
                    appInstance = wrapper.$refs.app;

                    if (
                      appInstance != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(appInstance.$options.onLaunch)
                    ) {
                      appInstance.$options.onLaunch.call(appInstance, options);
                    }
                  }
                },
                onShow: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );

                    if (
                      appInstance != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(appInstance.$options.onShow)
                    ) {
                      appInstance.$options.onShow.call(appInstance, options);
                    }
                  }
                },
                onHide: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    if (
                      appInstance != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                          /* isFunction */ 'j'
                        ]
                      )(appInstance.$options.onHide)
                    ) {
                      appInstance.$options.onHide.call(appInstance, options);
                    }
                  }
                }
              }
            );
            Current.app = app;
            return Current.app;
          }

          function createVue3Page(h, id) {
            return function(component) {
              var _a;

              var inject = {
                props: {
                  tid: String
                },
                created: function created() {
                  injectPageInstance(this, id); // vue3 组件 created 时机比小程序页面 onShow 慢，因此在 created 后再手动触发一次 onShow。

                  this.$nextTick(function() {
                    safeExecute(id, 'onShow');
                  });
                }
              };

              if (
                Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                    /* isArray */ 'h'
                  ]
                )(component.mixins)
              ) {
                var mixins = component.mixins;
                var idx = mixins.length - 1;

                if (
                  !((_a = mixins[idx].props) === null || _a === void 0
                    ? void 0
                    : _a.tid)
                ) {
                  // mixins 里还没注入过，直接推入数组
                  component.mixins.push(inject);
                } else {
                  // mixins 里已经注入过，代替前者
                  component.mixins[idx] = inject;
                }
              } else {
                component.mixins = [inject];
              }

              return h(
                isBrowser ? 'div' : 'root',
                {
                  key: id,
                  id: id,
                  class: isBrowser ? 'taro_page' : ''
                },
                [
                  h(component, {
                    tid: id
                  })
                ]
              );
            };
          }

          function setReconciler$2() {
            var hostConfig = {
              getLifecyle: function getLifecyle(instance, lifecycle) {
                return instance.$options[lifecycle];
              },
              removeAttribute: function removeAttribute(dom, qualifiedName) {
                var compName = Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                    /* capitalize */ 'b'
                  ]
                )(
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* toCamelCase */ 's'
                    ]
                  )(dom.tagName.toLowerCase())
                );

                if (
                  compName in
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* internalComponents */ 'g'
                    ] &&
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* hasOwn */ 'f'
                    ]
                  )(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* internalComponents */ 'g'
                    ][compName],
                    qualifiedName
                  ) &&
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* isBooleanStringLiteral */ 'i'
                    ]
                  )(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                      /* internalComponents */ 'g'
                    ][compName][qualifiedName]
                  )
                ) {
                  // avoid attribute being removed because set false value in vue
                  dom.setAttribute(qualifiedName, false);
                } else {
                  delete dom.props[qualifiedName];
                }
              },
              modifyEventType: function modifyEventType(event) {
                event.type = event.type.replace(/-/g, '');
              }
            };

            if (isBrowser) {
              hostConfig.createPullDownComponent = function(
                component,
                path,
                h
              ) {
                var inject = {
                  props: {
                    tid: String
                  },
                  created: function created() {
                    injectPageInstance(this, path);
                  }
                };
                component.mixins = Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                    /* isArray */ 'h'
                  ]
                )(component.mixins)
                  ? component.mixins.push(inject)
                  : [inject];
                return {
                  render: function render() {
                    return h(
                      'taro-pull-to-refresh',
                      {
                        class: 'hydrated'
                      },
                      [h(component, this.$slots.default)]
                    );
                  }
                };
              };

              hostConfig.findDOMNode = function(el) {
                return el.$el;
              };
            }

            options.reconciler(hostConfig);
          }

          function createVue3App(app, h, config) {
            var pages = [];
            var appInstance;
            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ 'e']
            )(
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                  /* isFunction */ 'j'
                ]
              )(app._component),
              '入口组件不支持使用函数式组件'
            );
            setReconciler$2();

            app._component.render = function() {
              return pages.slice();
            };

            var appConfig = Object.create(
              {
                mount: function mount(component, id, cb) {
                  var page = createVue3Page(h, id)(component);
                  pages.push(page);
                  this.updateAppInstance(cb);
                },
                unmount: function unmount(id, cb) {
                  pages = pages.filter(function(page) {
                    return page.key !== id;
                  });
                  this.updateAppInstance(cb);
                },
                updateAppInstance: function updateAppInstance(cb) {
                  appInstance.$forceUpdate();
                  appInstance.$nextTick(cb);
                }
              },
              {
                config: {
                  writable: true,
                  enumerable: true,
                  configurable: true,
                  value: config
                },
                onLaunch: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    var _a;

                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );
                    appInstance = app.mount('#app');
                    var onLaunch =
                      (_a =
                        appInstance === null || appInstance === void 0
                          ? void 0
                          : appInstance.$options) === null || _a === void 0
                        ? void 0
                        : _a.onLaunch;
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isFunction */ 'j'
                      ]
                    )(onLaunch) && onLaunch.call(appInstance, options);
                  }
                },
                onShow: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    var _a;

                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );
                    var onShow =
                      (_a =
                        appInstance === null || appInstance === void 0
                          ? void 0
                          : appInstance.$options) === null || _a === void 0
                        ? void 0
                        : _a.onShow;
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isFunction */ 'j'
                      ]
                    )(onShow) && onShow.call(appInstance, options);
                  }
                },
                onHide: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    var _a;

                    var onHide =
                      (_a =
                        appInstance === null || appInstance === void 0
                          ? void 0
                          : appInstance.$options) === null || _a === void 0
                        ? void 0
                        : _a.onHide;
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[
                        /* isFunction */ 'j'
                      ]
                    )(onHide) && onHide.call(appInstance, options);
                  }
                }
              }
            );
            Current.app = appConfig;
            return Current.app;
          }

          function removeLeadingSlash(path) {
            if (path == null) {
              return '';
            }

            return path.charAt(0) === '/' ? path.slice(1) : path;
          }

          var nextTick = function nextTick(cb, ctx) {
            var _a, _b, _c;

            var router = Current.router;

            var timerFunc = function timerFunc() {
              setTimeout(function() {
                ctx ? cb.call(ctx) : cb();
              }, 1);
            };

            if (router !== null) {
              var pageElement = null;
              var path = getPath(
                removeLeadingSlash(router.path),
                router.params
              );
              pageElement = document$1.getElementById(path);

              if (pageElement !== null) {
                if (isBrowser) {
                  // eslint-disable-next-line dot-notation
                  (_c =
                    (_b =
                      (_a = pageElement.firstChild) === null || _a === void 0
                        ? void 0
                        : _a['componentOnReady']) === null || _b === void 0
                      ? void 0
                      : _b.call(_a).then(function() {
                          timerFunc();
                        })) !== null && _c !== void 0
                    ? _c
                    : timerFunc();
                } else {
                  pageElement.enqueueUpdateCallback(cb, ctx);
                }
              } else {
                timerFunc();
              }
            } else {
              timerFunc();
            }
          };

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js'
          ),
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['document'],
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['window'],
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['requestAnimationFrame'],
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['cancelAnimationFrame']
        ));

        /***/
      },

    /***/ './node_modules/@tarojs/shared/dist/shared.esm.js':
      /*!********************************************************!*\
  !*** ./node_modules/@tarojs/shared/dist/shared.esm.js ***!
  \********************************************************/
      /*! exports provided: BaseTemplate, EMPTY_ARR, EMPTY_OBJ, RecursiveTemplate, UnRecursiveTemplate, animationEvents, box, cacheDataGet, cacheDataHas, cacheDataSet, capitalize, controlledComponent, defaultReconciler, ensure, events, focusComponents, getUniqueKey, hasOwn, internalComponents, isArray, isBoolean, isBooleanStringLiteral, isFunction, isNull, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, nestElements, noop, processApis, queryToJson, setUniqueKeyToRoute, singleQuote, specialEvents, styles, toCamelCase, toDashed, toKebabCase, touchEvents, unbox, unsupport, voidElements, warn */
      /*! exports used: EMPTY_OBJ, capitalize, controlledComponent, defaultReconciler, ensure, hasOwn, internalComponents, isArray, isBooleanStringLiteral, isFunction, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, noop, processApis, singleQuote, toCamelCase, toDashed, warn */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* unused harmony export BaseTemplate */
        /* unused harmony export EMPTY_ARR */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return EMPTY_OBJ;
          }
        );
        /* unused harmony export RecursiveTemplate */
        /* unused harmony export UnRecursiveTemplate */
        /* unused harmony export animationEvents */
        /* unused harmony export box */
        /* unused harmony export cacheDataGet */
        /* unused harmony export cacheDataHas */
        /* unused harmony export cacheDataSet */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'b',
          function() {
            return capitalize;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'c',
          function() {
            return controlledComponent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'd',
          function() {
            return defaultReconciler;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'e',
          function() {
            return ensure;
          }
        );
        /* unused harmony export events */
        /* unused harmony export focusComponents */
        /* unused harmony export getUniqueKey */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'f',
          function() {
            return hasOwn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'g',
          function() {
            return internalComponents;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'h',
          function() {
            return isArray;
          }
        );
        /* unused harmony export isBoolean */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'i',
          function() {
            return isBooleanStringLiteral;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'j',
          function() {
            return isFunction;
          }
        );
        /* unused harmony export isNull */
        /* unused harmony export isNumber */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'k',
          function() {
            return isObject;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'l',
          function() {
            return isString;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'm',
          function() {
            return isUndefined;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'n',
          function() {
            return mergeInternalComponents;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'o',
          function() {
            return mergeReconciler;
          }
        );
        /* unused harmony export nestElements */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'p',
          function() {
            return noop;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'q',
          function() {
            return processApis;
          }
        );
        /* unused harmony export queryToJson */
        /* unused harmony export setUniqueKeyToRoute */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'r',
          function() {
            return singleQuote;
          }
        );
        /* unused harmony export specialEvents */
        /* unused harmony export styles */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          's',
          function() {
            return toCamelCase;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          't',
          function() {
            return toDashed;
          }
        );
        /* unused harmony export toKebabCase */
        /* unused harmony export touchEvents */
        /* unused harmony export unbox */
        /* unused harmony export unsupport */
        /* unused harmony export voidElements */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'u',
          function() {
            return warn;
          }
        );
        /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        );
        /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/inherits */ './node_modules/@babel/runtime/helpers/esm/inherits.js'
        );
        /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ './node_modules/@babel/runtime/helpers/esm/createSuper.js'
        );
        /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ './node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
        );
        /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/createClass */ './node_modules/@babel/runtime/helpers/esm/createClass.js'
        );
        /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/typeof */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
        );

        function isString(o) {
          return typeof o === 'string';
        }

        function isUndefined(o) {
          return typeof o === 'undefined';
        }

        function isNull(o) {
          return o === null;
        }

        function isObject(o) {
          return (
            o !== null &&
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__[
                /* default */ 'a'
              ]
            )(o) === 'object'
          );
        }

        function isBoolean(o) {
          return o === true || o === false;
        }

        function isFunction(o) {
          return typeof o === 'function';
        }

        function isNumber(o) {
          return typeof o === 'number';
        }

        function isBooleanStringLiteral(o) {
          return o === 'true' || o === 'false';
        }

        var isArray = Array.isArray;
        var styles = {
          style: 'i.'.concat(
            'st'
            /* Style */
          ),
          class: 'i.'.concat(
            'cl'
            /* Class */
          )
        };
        var events = {
          bindtap: 'eh'
        };
        var touchEvents = {
          bindTouchStart: '',
          bindTouchMove: '',
          bindTouchEnd: '',
          bindTouchCancel: '',
          bindLongTap: ''
        };
        var animationEvents = {
          bindAnimationStart: '',
          bindAnimationIteration: '',
          bindAnimationEnd: '',
          bindTransitionEnd: ''
        };
        var specialEvents = new Set(['htouchmove', 'vtouchmove']);

        function singleQuote(s) {
          return "'".concat(s, "'");
        }

        var View = Object.assign(
          Object.assign(
            {
              'hover-class': singleQuote('none'),
              'hover-stop-propagation': 'false',
              'hover-start-time': '50',
              'hover-stay-time': '400',
              animation: ''
            },
            touchEvents
          ),
          animationEvents
        );
        var Icon = {
          type: '',
          size: '23',
          color: ''
        };
        var MapComp = Object.assign(
          {
            longitude: '',
            latitude: '',
            scale: '16',
            markers: '[]',
            covers: '',
            polyline: '[]',
            circles: '[]',
            controls: '[]',
            'include-points': '[]',
            'show-location': '',
            'layer-style': '1',
            bindMarkerTap: '',
            bindControlTap: '',
            bindCalloutTap: '',
            bindUpdated: ''
          },
          touchEvents
        );
        var Progress = {
          percent: '',
          'stroke-width': '6',
          color: singleQuote('#09BB07'),
          activeColor: singleQuote('#09BB07'),
          backgroundColor: singleQuote('#EBEBEB'),
          active: 'false',
          'active-mode': singleQuote('backwards'),
          'show-info': 'false'
        };
        var RichText = {
          nodes: '[]'
        };
        var Text = {
          selectable: 'false',
          space: '',
          decode: 'false'
        };
        var Button = {
          size: singleQuote('default'),
          type: '',
          plain: 'false',
          disabled: '',
          loading: 'false',
          'form-type': '',
          'open-type': '',
          'hover-class': singleQuote('button-hover'),
          'hover-stop-propagation': 'false',
          'hover-start-time': '20',
          'hover-stay-time': '70',
          name: ''
        };
        var Checkbox = {
          value: '',
          disabled: '',
          checked: 'false',
          color: singleQuote('#09BB07'),
          name: ''
        };
        var CheckboxGroup = {
          bindChange: '',
          name: ''
        };
        var Form = {
          'report-submit': 'false',
          bindSubmit: '',
          bindReset: '',
          name: ''
        };
        var Input = {
          value: '',
          type: singleQuote(''),
          password: 'false',
          placeholder: '',
          'placeholder-style': '',
          'placeholder-class': singleQuote('input-placeholder'),
          disabled: '',
          maxlength: '140',
          'cursor-spacing': '0',
          focus: 'false',
          'confirm-type': singleQuote('done'),
          'confirm-hold': 'false',
          cursor: 'i.value.length',
          'selection-start': '-1',
          'selection-end': '-1',
          bindInput: '',
          bindFocus: '',
          bindBlur: '',
          bindConfirm: '',
          name: ''
        };
        var Label = {
          for: '',
          name: ''
        };
        var Picker = {
          mode: singleQuote('selector'),
          disabled: '',
          range: '',
          'range-key': '',
          value: '',
          start: '',
          end: '',
          fields: singleQuote('day'),
          'custom-item': '',
          name: '',
          bindCancel: '',
          bindChange: '',
          bindColumnChange: ''
        };
        var PickerView = {
          value: '',
          'indicator-style': '',
          'indicator-class': '',
          'mask-style': '',
          'mask-class': '',
          bindChange: '',
          name: ''
        };
        var PickerViewColumn = {
          name: ''
        };
        var Radio = {
          value: '',
          checked: 'false',
          disabled: '',
          color: singleQuote('#09BB07'),
          name: ''
        };
        var RadioGroup = {
          bindChange: '',
          name: ''
        };
        var Slider = {
          min: '0',
          max: '100',
          step: '1',
          disabled: '',
          value: '0',
          activeColor: singleQuote('#1aad19'),
          backgroundColor: singleQuote('#e9e9e9'),
          'block-size': '28',
          'block-color': singleQuote('#ffffff'),
          'show-value': 'false',
          bindChange: '',
          bindChanging: '',
          name: ''
        };
        var Switch = {
          checked: 'false',
          disabled: '',
          type: singleQuote('switch'),
          color: singleQuote('#04BE02'),
          bindChange: '',
          name: ''
        };
        var Textarea = {
          value: '',
          placeholder: '',
          'placeholder-style': '',
          'placeholder-class': singleQuote('textarea-placeholder'),
          disabled: '',
          maxlength: '140',
          'auto-focus': 'false',
          focus: 'false',
          'auto-height': 'false',
          fixed: 'false',
          'cursor-spacing': '0',
          cursor: '-1',
          'selection-start': '-1',
          'selection-end': '-1',
          bindFocus: '',
          bindBlur: '',
          bindLineChange: '',
          bindInput: '',
          bindConfirm: '',
          name: ''
        };
        var CoverImage = {
          src: '',
          bindLoad: 'eh',
          bindError: 'eh'
        };
        var CoverView = Object.assign(
          {
            'scroll-top': 'false'
          },
          touchEvents
        );
        var MovableArea = {
          'scale-area': 'false'
        };
        var MovableView = Object.assign(
          Object.assign(
            {
              direction: 'none',
              inertia: 'false',
              'out-of-bounds': 'false',
              x: '',
              y: '',
              damping: '20',
              friction: '2',
              disabled: '',
              scale: 'false',
              'scale-min': '0.5',
              'scale-max': '10',
              'scale-value': '1',
              animation: 'true',
              bindChange: '',
              bindScale: '',
              htouchmove: '',
              vtouchmove: '',
              width: singleQuote('10px'),
              height: singleQuote('10px')
            },
            touchEvents
          ),
          animationEvents
        );
        var ScrollView = Object.assign(
          Object.assign(
            {
              'scroll-x': 'false',
              'scroll-y': 'false',
              'upper-threshold': '50',
              'lower-threshold': '50',
              'scroll-top': '',
              'scroll-left': '',
              'scroll-into-view': '',
              'scroll-with-animation': 'false',
              'enable-back-to-top': 'false',
              bindScrollToUpper: '',
              bindScrollToLower: '',
              bindScroll: ''
            },
            touchEvents
          ),
          animationEvents
        );
        var Swiper = Object.assign(
          {
            'indicator-dots': 'false',
            'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
            'indicator-active-color': singleQuote('#000000'),
            autoplay: 'false',
            current: '0',
            interval: '5000',
            duration: '500',
            circular: 'false',
            vertical: 'false',
            'previous-margin': "'0px'",
            'next-margin': "'0px'",
            'display-multiple-items': '1',
            bindChange: '',
            bindTransition: '',
            bindAnimationFinish: ''
          },
          touchEvents
        );
        var SwiperItem = {
          'item-id': ''
        };
        var Navigator = {
          url: '',
          'open-type': singleQuote('navigate'),
          delta: '1',
          'hover-class': singleQuote('navigator-hover'),
          'hover-stop-propagation': 'false',
          'hover-start-time': '50',
          'hover-stay-time': '600',
          bindSuccess: '',
          bindFail: '',
          bindComplete: ''
        };
        var Audio = {
          id: '',
          src: '',
          loop: 'false',
          controls: 'false',
          poster: '',
          name: '',
          author: '',
          bindError: '',
          bindPlay: '',
          bindPause: '',
          bindTimeUpdate: '',
          bindEnded: ''
        };
        var Camera = {
          'device-position': singleQuote('back'),
          flash: singleQuote('auto'),
          bindStop: '',
          bindError: ''
        };
        var Image = Object.assign(
          {
            src: '',
            mode: singleQuote('scaleToFill'),
            'lazy-load': 'false',
            bindError: '',
            bindLoad: ''
          },
          touchEvents
        );
        var LivePlayer = {
          src: '',
          autoplay: 'false',
          muted: 'false',
          orientation: singleQuote('vertical'),
          'object-fit': singleQuote('contain'),
          'background-mute': 'false',
          'min-cache': '1',
          'max-cache': '3',
          animation: '',
          bindStateChange: '',
          bindFullScreenChange: '',
          bindNetStatus: ''
        };
        var Video = {
          src: '',
          duration: '',
          controls: 'true',
          'danmu-list': '',
          'danmu-btn': '',
          'enable-danmu': '',
          autoplay: 'false',
          loop: 'false',
          muted: 'false',
          'initial-time': '0',
          'page-gesture': 'false',
          direction: '',
          'show-progress': 'true',
          'show-fullscreen-btn': 'true',
          'show-play-btn': 'true',
          'show-center-play-btn': 'true',
          'enable-progress-gesture': 'true',
          'object-fit': singleQuote('contain'),
          poster: '',
          'show-mute-btn': 'false',
          animation: '',
          bindPlay: '',
          bindPause: '',
          bindEnded: '',
          bindTimeUpdate: '',
          bindFullScreenChange: '',
          bindWaiting: '',
          bindError: ''
        };
        var Canvas = Object.assign(
          {
            'canvas-id': '',
            'disable-scroll': 'false',
            bindError: ''
          },
          touchEvents
        );
        var Ad = {
          'unit-id': '',
          'ad-intervals': '',
          bindLoad: '',
          bindError: '',
          bindClose: ''
        };
        var WebView = {
          src: '',
          bindMessage: '',
          bindLoad: '',
          bindError: ''
        };
        var Block = {}; // For Vue，因为 slot 标签被 vue 占用了

        var SlotView = {
          name: ''
        }; // For React
        // Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
        // 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
        // 不给 View 直接加 slot 属性的原因是性能损耗

        var Slot = {
          name: ''
        };
        var internalComponents = {
          View: View,
          Icon: Icon,
          Progress: Progress,
          RichText: RichText,
          Text: Text,
          Button: Button,
          Checkbox: Checkbox,
          CheckboxGroup: CheckboxGroup,
          Form: Form,
          Input: Input,
          Label: Label,
          Picker: Picker,
          PickerView: PickerView,
          PickerViewColumn: PickerViewColumn,
          Radio: Radio,
          RadioGroup: RadioGroup,
          Slider: Slider,
          Switch: Switch,
          CoverImage: CoverImage,
          Textarea: Textarea,
          CoverView: CoverView,
          MovableArea: MovableArea,
          MovableView: MovableView,
          ScrollView: ScrollView,
          Swiper: Swiper,
          SwiperItem: SwiperItem,
          Navigator: Navigator,
          Audio: Audio,
          Camera: Camera,
          Image: Image,
          LivePlayer: LivePlayer,
          Video: Video,
          Canvas: Canvas,
          Ad: Ad,
          WebView: WebView,
          Block: Block,
          Map: MapComp,
          Slot: Slot,
          SlotView: SlotView
        };
        var controlledComponent = new Set([
          'input',
          'checkbox',
          'picker',
          'picker-view',
          'radio',
          'slider',
          'switch',
          'textarea'
        ]);
        var focusComponents = new Set(['input', 'textarea']);
        var voidElements = new Set([
          'progress',
          'icon',
          'rich-text',
          'input',
          'textarea',
          'slider',
          'switch',
          'audio',
          'ad',
          'official-account',
          'open-data',
          'navigation-bar'
        ]);
        var nestElements = new Map([
          ['view', -1],
          ['catch-view', -1],
          ['cover-view', -1],
          ['static-view', -1],
          ['pure-view', -1],
          ['block', -1],
          ['text', -1],
          ['static-text', 6],
          ['slot', 8],
          ['slot-view', 8],
          ['label', 6],
          ['form', 4],
          ['scroll-view', 4],
          ['swiper', 4],
          ['swiper-item', 4]
        ]);
        var EMPTY_OBJ = {};
        var EMPTY_ARR = [];

        var noop = function noop() {};

        var defaultReconciler = {};
        /**
         * box creates a boxed value.
         *
         * @typeparam T Value type.
         * @param v Value.
         * @returns Boxed value.
         */

        var box = function box(v) {
          return {
            v: v
          };
        };
        /**
         * box creates a boxed value.
         *
         * @typeparam T Value type.
         * @param b Boxed value.
         * @returns Value.
         */

        var unbox = function unbox(b) {
          return b.v;
        };

        function toDashed(s) {
          return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        }

        function toCamelCase(s) {
          var camel = '';
          var nextCap = false;

          for (var i = 0; i < s.length; i++) {
            if (s[i] !== '-') {
              camel += nextCap ? s[i].toUpperCase() : s[i];
              nextCap = false;
            } else {
              nextCap = true;
            }
          }

          return camel;
        }

        var toKebabCase = function toKebabCase(string) {
          return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        };

        function capitalize(s) {
          return s.charAt(0).toUpperCase() + s.slice(1);
        }

        var hasOwnProperty = Object.prototype.hasOwnProperty;

        var hasOwn = function hasOwn(val, key) {
          return hasOwnProperty.call(val, key);
        };

        var reportIssue =
          '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
        /**
         * ensure takes a condition and throw a error if the condition fails,
         * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
         * @param condition condition.
         * @param msg error message.
         */

        function ensure(condition, msg) {
          if (!condition) {
            throw new Error(msg + '\n' + reportIssue);
          }
        }

        function warn(condition, msg) {
          if (true) {
            if (condition) {
              console.warn(msg);
            }
          }
        }

        function queryToJson(str) {
          var dec = decodeURIComponent;
          var qp = str.split('&');
          var ret = {};
          var name;
          var val;

          for (var i = 0, l = qp.length, item; i < l; ++i) {
            item = qp[i];

            if (item.length) {
              var s = item.indexOf('=');

              if (s < 0) {
                name = dec(item);
                val = '';
              } else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
              }

              if (typeof ret[name] === 'string') {
                // inline'd type check
                ret[name] = [ret[name]];
              }

              if (Array.isArray(ret[name])) {
                ret[name].push(val);
              } else {
                ret[name] = val;
              }
            }
          }

          return ret; // Object
        }

        var _uniqueId = 1;

        var _loadTime = new Date().getTime().toString();

        function getUniqueKey() {
          return _loadTime + _uniqueId++;
        }

        var cacheData = {};

        function cacheDataSet(key, val) {
          cacheData[key] = val;
        }

        function cacheDataGet(key, delelteAfterGet) {
          var temp = cacheData[key];
          delelteAfterGet && delete cacheData[key];
          return temp;
        }

        function cacheDataHas(key) {
          return key in cacheData;
        }

        function mergeInternalComponents(components) {
          Object.keys(components).forEach(function(name) {
            if (name in internalComponents) {
              Object.assign(internalComponents[name], components[name]);
            } else {
              internalComponents[name] = components[name];
            }
          });
        }

        function mergeReconciler(hostConfig) {
          Object.assign(defaultReconciler, hostConfig);
        }

        function unsupport(api) {
          return function() {
            console.warn(
              '\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 '.concat(api)
            );
          };
        }

        function setUniqueKeyToRoute(key, obj) {
          var routerParamsPrivateKey = '__key_';
          var useDataCacheApis = [
            'navigateTo',
            'redirectTo',
            'reLaunch',
            'switchTab'
          ];

          if (useDataCacheApis.indexOf(key) > -1) {
            var url = (obj.url = obj.url || '');
            var hasMark = url.indexOf('?') > -1;
            var cacheKey = getUniqueKey();
            obj.url +=
              (hasMark ? '&' : '?') +
              ''.concat(routerParamsPrivateKey, '=').concat(cacheKey);
          }
        }
        /**
         * 这里我们需要关心的小程序种类有两类：
         * 1. 模板递归：
         *  - 支持：tmpl0 套 tmpl0
         *  - 不支持：这就使得我们必须生成多级的模板，tmpl0 套 tmpl1，tmpl1 套 tmpl2……
         *           直到超过阈值 N (N = config.miniapp.baseLevel) tmplN 会套组件 comp，组件 comp 重新再套 tmpl0。
         * 2. 小程序脚本语言（wxs, sjs, etc...）：
         *  - 支持：可以在模板使用函数缩减模板大小或提高性能（存疑），例如判断一个值是不是假值（falsy value）。
         *         将来或许会把数据序列化^1 的操作也放到小程序脚本语言里。
         *  - 不支持：使用纯 *xml 语法
         *
         * ^1: packages/taro-runtime/src/hydrate.ts
         */

        var weixinAdapter = {
          if: 'wx:if',
          else: 'wx:else',
          elseif: 'wx:elif',
          for: 'wx:for',
          forItem: 'wx:for-item',
          forIndex: 'wx:for-index',
          key: 'wx:key',
          xs: 'wxs',
          type: 'weapp'
        };

        var BaseTemplate = /*#__PURE__*/ (function() {
          function BaseTemplate() {
            var _this = this;

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
                /* default */ 'a'
              ]
            )(this, BaseTemplate);

            this.exportExpr = 'module.exports =';
            this.supportXS = false;
            this.Adapter = weixinAdapter;
            /** 组件列表 */

            this.internalComponents = internalComponents;
            /** 可以 focus 聚焦的组件 */

            this.focusComponents = focusComponents;
            /** 不需要渲染子节点的元素 */

            this.voidElements = voidElements;
            /** 可以递归调用自身的组件 */

            this.nestElements = nestElements;

            this.buildPageTemplate = function(baseTempPath) {
              var template = '<import src="'
                .concat(baseTempPath, '"/>\n<template is="taro_tmpl" data="{{')
                .concat(_this.dataKeymap('root:root'), '}}" />');
              return template;
            };

            this.buildBaseComponentTemplate = function(ext) {
              var data =
                !_this.isSupportRecursive && _this.supportXS
                  ? _this.dataKeymap('i:i,l:l')
                  : _this.dataKeymap('i:i');
              return '<import src="./base'
                .concat(
                  ext,
                  '" />\n<template is="tmpl_0_',
                  'container',
                  /* Container */
                  '" data="{{'
                )
                .concat(data, '}}" />');
            };

            this.buildCustomComponentTemplate = function(ext) {
              var Adapter = _this.Adapter;
              var data =
                !_this.isSupportRecursive && _this.supportXS
                  ? ''.concat(_this.dataKeymap("i:item,l:''"))
                  : _this.dataKeymap('i:item');
              return '<import src="./base'
                .concat(ext, '" />\n  <block ')
                .concat(
                  Adapter.for,
                  '="{{i.',
                  'cn',
                  /* Childnodes */
                  '}}" '
                )
                .concat(
                  Adapter.key,
                  '="uid">\n    <template is="tmpl_0_container" data="{{'
                )
                .concat(data, '}}" />\n  </block>');
            };

            this.buildXScript = function() {
              return ''
                .concat(_this.exportExpr, ' {\n  a: ')
                .concat(
                  _this.buildXSTmplName(),
                  ",\n  b: function (a, b) {\n    return a === undefined ? b : a\n  },\n  c: function(i, prefix) {\n    var s = i.focus !== undefined ? 'focus' : 'blur'\n    return prefix + i.",
                  'nn',
                  /* NodeName */
                  " + '_' + s\n  },\n  d: function (i, v) {\n    return i === undefined ? v : i\n  },\n  e: function (n) {\n    return 'tmpl_' + n + '_",
                  'container',
                  /* Container */
                  "'\n  },\n  "
                )
                .concat(_this.buildXSTmpExtra(), '\n}');
            };
          }

          Object(
            _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[
              /* default */ 'a'
            ]
          )(BaseTemplate, [
            {
              key: 'buildAttribute',
              value: function buildAttribute(attrs, nodeName) {
                var _this2 = this;

                return Object.keys(attrs)
                  .map(function(k) {
                    return ''
                      .concat(k, '="')
                      .concat(
                        k.startsWith('bind') ||
                          k.startsWith('on') ||
                          k.startsWith('catch')
                          ? attrs[k]
                          : '{'.concat(
                              _this2.getAttrValue(attrs[k], k, nodeName),
                              '}'
                            ),
                        '" '
                      );
                  })
                  .join('');
              }
            },
            {
              key: 'replacePropName',
              value: function replacePropName(name, value, _componentName) {
                if (value === 'eh') return name.toLowerCase();
                return name;
              }
            },
            {
              key: 'createMiniComponents',
              value: function createMiniComponents(components) {
                var _this3 = this;

                var result = Object.create(null);

                for (var key in components) {
                  if (hasOwn(components, key)) {
                    (function() {
                      var component = components[key];
                      var compName = toDashed(key);
                      var newComp = Object.create(null);

                      if (isFunction(_this3.modifyCompProps)) {
                        component = _this3.modifyCompProps(compName, component);
                      }

                      for (var prop in component) {
                        if (hasOwn(component, prop)) {
                          var propValue = component[prop];

                          if (
                            prop.startsWith('bind') ||
                            specialEvents.has(prop)
                          ) {
                            propValue = 'eh';
                          } else if (propValue === '') {
                            propValue = 'i.'.concat(toCamelCase(prop));
                          } else if (
                            isBooleanStringLiteral(propValue) ||
                            isNumber(+propValue)
                          ) {
                            propValue = _this3.supportXS
                              ? 'xs.b(i.'
                                  .concat(toCamelCase(prop), ',')
                                  .concat(propValue, ')')
                              : 'i.'
                                  .concat(toCamelCase(prop), '===undefined?')
                                  .concat(propValue, ':i.')
                                  .concat(toCamelCase(prop));
                          } else {
                            propValue = 'i.'
                              .concat(toCamelCase(prop), '||')
                              .concat(propValue || singleQuote(''));
                          }

                          prop = _this3.replacePropName(
                            prop,
                            propValue,
                            compName
                          );
                          newComp[prop] = propValue;
                        }
                      }

                      if (compName !== 'block') {
                        Object.assign(newComp, styles, _this3.getEvents());
                      }

                      if (compName === 'swiper-item') {
                        delete newComp.style;
                      }

                      if (compName === 'view') {
                        var reg = /^(bind|on)(touchmove|TouchMove)$/;
                        var comp = Object.assign({}, newComp);
                        Object.keys(comp).forEach(function(originKey) {
                          if (!reg.test(originKey)) return;
                          var key = originKey.replace(reg, 'catch$2');
                          comp[key] = comp[originKey];
                          delete comp[originKey];
                        });
                        result['catch-view'] = comp;
                      }

                      if (
                        compName === 'view' ||
                        compName === 'text' ||
                        compName === 'image'
                      ) {
                        var _comp = {};
                        Object.keys(newComp).forEach(function(key) {
                          var value = newComp[key];
                          if (value !== 'eh') _comp[key] = value;
                        });
                        result['static-'.concat(compName)] = _comp;

                        if (compName === 'view') {
                          result['pure-view'] = {
                            style: _comp.style,
                            class: _comp.class
                          };
                        }
                      }

                      if (compName === 'slot' || compName === 'slot-view') {
                        result[compName] = {
                          slot: 'i.name'
                        };
                      } else {
                        result[compName] = newComp;
                      }
                    })();
                  }
                }

                return result;
              }
            },
            {
              key: 'buildBaseTemplate',
              value: function buildBaseTemplate() {
                var Adapter = this.Adapter;
                var data =
                  !this.isSupportRecursive && this.supportXS
                    ? ''.concat(this.dataKeymap("i:item,l:''"))
                    : this.dataKeymap('i:item');
                return ''
                  .concat(
                    this.buildXsTemplate(),
                    '\n<template name="taro_tmpl">\n  <block '
                  )
                  .concat(Adapter.for, '="{{root.cn}}" ')
                  .concat(
                    Adapter.key,
                    '="uid">\n    <template is="tmpl_0_',
                    'container',
                    /* Container */
                    '" data="{{'
                  )
                  .concat(data, '}}" />\n  </block>\n</template>\n');
              }
            },
            {
              key: 'buildThirdPartyAttr',
              value: function buildThirdPartyAttr(attrs) {
                return Array.from(attrs).reduce(function(str, attr) {
                  if (attr.startsWith('@')) {
                    // vue2
                    var value = attr.slice(1);

                    if (value.indexOf('-') > -1) {
                      value = ':'.concat(value);
                    }

                    return str + 'bind'.concat(value, '="eh" ');
                  } else if (attr.startsWith('bind')) {
                    return str + ''.concat(attr, '="eh" ');
                  } else if (attr.startsWith('on')) {
                    // react, vue3
                    var _value = toKebabCase(attr.slice(2));

                    if (_value.indexOf('-') > -1) {
                      // 兼容如 vant 某些组件的 bind:a-b 这类属性
                      _value = ':'.concat(_value);
                    }

                    return str + 'bind'.concat(_value, '="eh" ');
                  }

                  return (
                    str +
                    ''.concat(attr, '="{{i.').concat(toCamelCase(attr), '}}" ')
                  );
                }, '');
              }
            },
            {
              key: 'buildComponentTemplate',
              value: function buildComponentTemplate(comp, level) {
                return this.focusComponents.has(comp.nodeName)
                  ? this.buildFocusComponentTemplte(comp, level)
                  : this.buildStandardComponentTemplate(comp, level);
              }
            },
            {
              key: 'buildFocusComponentTemplte',
              value: function buildFocusComponentTemplte(comp, level) {
                var attrs = Object.assign({}, comp.attributes);
                var templateName = this.supportXS
                  ? "xs.c(i, 'tmpl_".concat(level, "_')")
                  : "i.focus ? 'tmpl_"
                      .concat(level, '_')
                      .concat(comp.nodeName, "_focus' : 'tmpl_")
                      .concat(level, '_')
                      .concat(comp.nodeName, "_blur'");
                delete attrs.focus;
                return '\n<template name="tmpl_'
                  .concat(level, '_')
                  .concat(comp.nodeName, '">\n  <template is="{{')
                  .concat(templateName, '}}" data="{{')
                  .concat(
                    this.dataKeymap('i:i'),
                    '}}" />\n</template>\n\n<template name="tmpl_'
                  )
                  .concat(level, '_')
                  .concat(comp.nodeName, '_focus">\n  <')
                  .concat(comp.nodeName, ' ')
                  .concat(
                    this.buildAttribute(comp.attributes, comp.nodeName),
                    ' id="{{i.uid}}" />\n</template>\n\n<template name="tmpl_'
                  )
                  .concat(level, '_')
                  .concat(comp.nodeName, '_blur">\n  <')
                  .concat(comp.nodeName, ' ')
                  .concat(
                    this.buildAttribute(attrs, comp.nodeName),
                    ' id="{{i.uid}}" />\n</template>\n'
                  );
              }
            },
            {
              key: 'buildStandardComponentTemplate',
              value: function buildStandardComponentTemplate(comp, level) {
                var isSupportRecursive = this.isSupportRecursive,
                  Adapter = this.Adapter;
                var nextLevel = isSupportRecursive ? 0 : level + 1;
                var data =
                  !this.isSupportRecursive && this.supportXS
                    ? ''.concat(this.dataKeymap('i:item,l:l'))
                    : this.dataKeymap('i:item');
                var child = this.supportXS
                  ? '<template is="{{xs.e('
                      .concat(isSupportRecursive ? 0 : 'cid+1', ')}}" data="{{')
                      .concat(data, '}}" />')
                  : '<template is="tmpl_'
                      .concat(
                        nextLevel,
                        '_',
                        'container',
                        /* Container */
                        '" data="{{'
                      )
                      .concat(data, '}}" />');

                if (isFunction(this.modifyLoopBody)) {
                  child = this.modifyLoopBody(child, comp.nodeName);
                }

                var children = this.voidElements.has(comp.nodeName)
                  ? ''
                  : '\n    <block '
                      .concat(
                        Adapter.for,
                        '="{{i.',
                        'cn',
                        /* Childnodes */
                        '}}" '
                      )
                      .concat(Adapter.key, '="uid">\n      ')
                      .concat(child, '\n    </block>\n  ');

                if (isFunction(this.modifyLoopContainer)) {
                  children = this.modifyLoopContainer(children, comp.nodeName);
                }

                var nodeName = '';

                switch (comp.nodeName) {
                  case 'slot':
                  case 'slot-view':
                  case 'catch-view':
                  case 'static-view':
                  case 'pure-view':
                    nodeName = 'view';
                    break;

                  case 'static-text':
                    nodeName = 'text';
                    break;

                  case 'static-image':
                    nodeName = 'image';
                    break;

                  default:
                    nodeName = comp.nodeName;
                    break;
                }

                var res = '\n<template name="tmpl_'
                  .concat(level, '_')
                  .concat(comp.nodeName, '">\n  <')
                  .concat(nodeName, ' ')
                  .concat(
                    this.buildAttribute(comp.attributes, comp.nodeName),
                    ' id="{{i.uid}}">'
                  )
                  .concat(children, '</')
                  .concat(nodeName, '>\n</template>\n');

                if (isFunction(this.modifyTemplateResult)) {
                  res = this.modifyTemplateResult(
                    res,
                    comp.nodeName,
                    level,
                    children
                  );
                }

                return res;
              }
            },
            {
              key: 'buildPlainTextTemplate',
              value: function buildPlainTextTemplate(level) {
                return '\n<template name="tmpl_'
                  .concat(level, '_#text" data="{{')
                  .concat(
                    this.dataKeymap('i:i'),
                    '}}">\n  <block>{{i.',
                    'v',
                    /* Text */
                    '}}</block>\n</template>\n'
                  );
              }
            },
            {
              key: 'buildThirdPartyTemplate',
              value: function buildThirdPartyTemplate(level, componentConfig) {
                var _this4 = this;

                var Adapter = this.Adapter,
                  isSupportRecursive = this.isSupportRecursive,
                  supportXS = this.supportXS,
                  nestElements = this.nestElements;
                var nextLevel = isSupportRecursive ? 0 : level + 1;
                var template = '';
                var data =
                  !isSupportRecursive && supportXS
                    ? ''.concat(this.dataKeymap('i:item,l:l'))
                    : this.dataKeymap('i:item');
                componentConfig.thirdPartyComponents.forEach(function(
                  attrs,
                  compName
                ) {
                  if (compName === 'custom-wrapper') {
                    template += '\n<template name="tmpl_'
                      .concat(level, '_')
                      .concat(compName, '">\n  <')
                      .concat(
                        compName,
                        ' i="{{i}}" l="{{l}}" id="{{i.uid}}">\n  </'
                      )
                      .concat(compName, '>\n</template>\n  ');
                  } else {
                    if (
                      !isSupportRecursive &&
                      supportXS &&
                      nestElements.has(compName) &&
                      level + 1 > nestElements.get(compName)
                    )
                      return;
                    var child = supportXS
                      ? '<template is="{{xs.e('
                          .concat(
                            isSupportRecursive ? 0 : 'cid+1',
                            ')}}" data="{{'
                          )
                          .concat(data, '}}" />')
                      : '<template is="tmpl_'
                          .concat(
                            nextLevel,
                            '_',
                            'container',
                            /* Container */
                            '" data="{{'
                          )
                          .concat(data, '}}" />');
                    template += '\n<template name="tmpl_'
                      .concat(level, '_')
                      .concat(compName, '">\n  <')
                      .concat(compName, ' ')
                      .concat(
                        _this4.buildThirdPartyAttr(attrs),
                        ' id="{{i.uid}}">\n    <block '
                      )
                      .concat(
                        Adapter.for,
                        '="{{i.',
                        'cn',
                        /* Childnodes */
                        '}}" '
                      )
                      .concat(Adapter.key, '="uid">\n      ')
                      .concat(child, '\n    </block>\n  </')
                      .concat(compName, '>\n</template>\n  ');
                  }
                });
                return template;
              }
            },
            {
              key: 'buildContainerTemplate',
              value: function buildContainerTemplate(level) {
                var restart =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : false;
                var tmpl = '';

                if (restart) {
                  tmpl = '<block '
                    .concat(
                      this.Adapter.if,
                      '="{{i.nn === \'#text\'}}">\n    <template is="tmpl_0_#text" data="{{i:i}}" />\n  </block>\n  <block '
                    )
                    .concat(this.Adapter.else, '>\n    ')
                    .concat(
                      !this.isSupportRecursive && this.supportXS
                        ? '<comp i="{{i}}" l="{{l}}" />'
                        : '<comp i="{{i}}" />',
                      '\n  </block>'
                    );
                } else {
                  var xs = !this.isSupportRecursive
                    ? 'xs.a('.concat(
                        level,
                        ', i.',
                        'nn',
                        /* NodeName */
                        ', l)'
                      )
                    : 'xs.a('.concat(
                        level,
                        ', i.',
                        'nn',
                        /* NodeName */
                        ')'
                      );
                  var data = !this.isSupportRecursive
                    ? ''.concat(
                        this.dataKeymap(
                          'i:i,cid:'.concat(
                            level,
                            ',l:xs.f(l,i.',
                            'nn',
                            /* NodeName */
                            ')'
                          )
                        )
                      )
                    : ''.concat(this.dataKeymap('i:i'));
                  tmpl = this.supportXS
                    ? '<template is="{{'
                        .concat(xs, '}}" data="{{')
                        .concat(data, '}}" />')
                    : '<template is="{{\'tmpl_'
                        .concat(
                          level,
                          "_' + i.",
                          'nn',
                          /* NodeName */
                          '}}" data="{{'
                        )
                        .concat(this.dataKeymap('i:i'), '}}" />');
                }

                return '\n<template name="tmpl_'
                  .concat(
                    level,
                    '_',
                    'container',
                    /* Container */
                    '">\n  '
                  )
                  .concat(tmpl, '\n</template>\n');
              }
            },
            {
              key: 'dataKeymap',
              value: function dataKeymap(keymap) {
                return keymap;
              }
            },
            {
              key: 'getEvents',
              value: function getEvents() {
                return events;
              }
            },
            {
              key: 'getAttrValue',
              value: function getAttrValue(value, _key, _nodeName) {
                return '{'.concat(value, '}');
              }
            },
            {
              key: 'buildXsTemplate',
              value: function buildXsTemplate() {
                return '';
              }
            },
            {
              key: 'mergeComponents',
              value: function mergeComponents(ctx, patch) {
                ctx.helper.recursiveMerge(this.internalComponents, patch);
              }
            },
            {
              key: 'buildXSTmplName',
              value: function buildXSTmplName() {
                return "function (l, n) {\n    return 'tmpl_' + l + '_' + n\n  }";
              }
            },
            {
              key: 'buildXSTmpExtra',
              value: function buildXSTmpExtra() {
                return '';
              }
            }
          ]);

          return BaseTemplate;
        })();

        var RecursiveTemplate = /*#__PURE__*/ (function(_BaseTemplate) {
          Object(
            _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ]
          )(RecursiveTemplate, _BaseTemplate);

          var _super = Object(
            _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[
              /* default */ 'a'
            ]
          )(RecursiveTemplate);

          function RecursiveTemplate() {
            var _this5;

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
                /* default */ 'a'
              ]
            )(this, RecursiveTemplate);

            _this5 = _super.apply(this, arguments);
            _this5.isSupportRecursive = true;

            _this5.buildTemplate = function(componentConfig) {
              var template = _this5.buildBaseTemplate();

              if (!_this5.miniComponents) {
                _this5.miniComponents = _this5.createMiniComponents(
                  _this5.internalComponents
                );
              }

              var ZERO_FLOOR = 0;
              var components = Object.keys(_this5.miniComponents).filter(
                function(c) {
                  return componentConfig.includes.size &&
                    !componentConfig.includeAll
                    ? componentConfig.includes.has(c)
                    : true;
                }
              );
              template = components.reduce(function(current, nodeName) {
                var attributes = _this5.miniComponents[nodeName];
                return (
                  current +
                  _this5.buildComponentTemplate(
                    {
                      nodeName: nodeName,
                      attributes: attributes
                    },
                    ZERO_FLOOR
                  )
                );
              }, template);
              template += _this5.buildPlainTextTemplate(ZERO_FLOOR);
              template += _this5.buildThirdPartyTemplate(
                ZERO_FLOOR,
                componentConfig
              );
              template += _this5.buildContainerTemplate(ZERO_FLOOR);
              return template;
            };

            return _this5;
          }

          return RecursiveTemplate;
        })(BaseTemplate);

        var UnRecursiveTemplate = /*#__PURE__*/ (function(_BaseTemplate2) {
          Object(
            _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ]
          )(UnRecursiveTemplate, _BaseTemplate2);

          var _super2 = Object(
            _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[
              /* default */ 'a'
            ]
          )(UnRecursiveTemplate);

          function UnRecursiveTemplate() {
            var _this6;

            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
                /* default */ 'a'
              ]
            )(this, UnRecursiveTemplate);

            _this6 = _super2.apply(this, arguments);
            _this6.isSupportRecursive = false;
            _this6._baseLevel = 16;

            _this6.buildTemplate = function(componentConfig) {
              _this6.componentConfig = componentConfig;

              if (!_this6.miniComponents) {
                _this6.miniComponents = _this6.createMiniComponents(
                  _this6.internalComponents
                );
              }

              var components = Object.keys(_this6.miniComponents).filter(
                function(c) {
                  return componentConfig.includes.size &&
                    !componentConfig.includeAll
                    ? componentConfig.includes.has(c)
                    : true;
                }
              );

              var template = _this6.buildBaseTemplate();

              for (var i = 0; i < _this6.baseLevel; i++) {
                template += _this6.supportXS
                  ? _this6.buildOptimizeFloor(
                      i,
                      components,
                      _this6.baseLevel === i + 1
                    )
                  : _this6.buildFloor(
                      i,
                      components,
                      _this6.baseLevel === i + 1
                    );
              }

              return template;
            };

            return _this6;
          }

          Object(
            _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[
              /* default */ 'a'
            ]
          )(UnRecursiveTemplate, [
            {
              key: 'baseLevel',
              get: function get() {
                return this._baseLevel;
              },
              set: function set(lv) {
                this._baseLevel = lv;
              }
            },
            {
              key: 'buildFloor',
              value: function buildFloor(level, components) {
                var _this7 = this;

                var restart =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : false;
                if (restart) return this.buildContainerTemplate(level, restart);
                var template = components.reduce(function(current, nodeName) {
                  var attributes = _this7.miniComponents[nodeName];
                  return (
                    current +
                    _this7.buildComponentTemplate(
                      {
                        nodeName: nodeName,
                        attributes: attributes
                      },
                      level
                    )
                  );
                }, '');
                template += this.buildPlainTextTemplate(level);
                template += this.buildThirdPartyTemplate(
                  level,
                  this.componentConfig
                );
                template += this.buildContainerTemplate(level, restart);
                return template;
              }
            },
            {
              key: 'buildOptimizeFloor',
              value: function buildOptimizeFloor(level, components) {
                var _this8 = this;

                var restart =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : false;
                if (restart) return this.buildContainerTemplate(level, restart);
                var template = components.reduce(function(current, nodeName) {
                  if (level !== 0) {
                    if (!_this8.nestElements.has(nodeName)) {
                      // 不可嵌套自身的组件只需输出一层模板
                      return current;
                    } else {
                      // 部分可嵌套自身的组件实际上不会嵌套过深，这里按阈值限制层数
                      var max = _this8.nestElements.get(nodeName);

                      if (max > 0 && level >= max) {
                        return current;
                      }
                    }
                  }

                  var attributes = _this8.miniComponents[nodeName];
                  return (
                    current +
                    _this8.buildComponentTemplate(
                      {
                        nodeName: nodeName,
                        attributes: attributes
                      },
                      level
                    )
                  );
                }, '');
                if (level === 0) template += this.buildPlainTextTemplate(level);
                template += this.buildThirdPartyTemplate(
                  level,
                  this.componentConfig
                );
                template += this.buildContainerTemplate(level);
                return template;
              }
            },
            {
              key: 'buildXSTmplName',
              value: function buildXSTmplName() {
                var isLoopComps = [].concat(
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                      /* default */ 'a'
                    ]
                  )(Array.from(this.nestElements.keys())),
                  Object(
                    _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                      /* default */ 'a'
                    ]
                  )(
                    Array.from(this.componentConfig.thirdPartyComponents.keys())
                  )
                );
                var isLoopCompsSet = new Set(isLoopComps);
                var hasMaxComps = [];
                this.nestElements.forEach(function(max, comp) {
                  if (max > 1) {
                    hasMaxComps.push(comp);
                  } else if (max === 1 && isLoopCompsSet.has(comp)) {
                    isLoopCompsSet.delete(comp);
                  }
                });
                return 'function (l, n, s) {\n    var a = '
                  .concat(
                    JSON.stringify(Array.from(isLoopCompsSet)),
                    '\n    var b = '
                  )
                  .concat(
                    JSON.stringify(hasMaxComps),
                    "\n    if (a.indexOf(n) === -1) {\n      l = 0\n    }\n    if (b.indexOf(n) > -1) {\n      var u = s.split(',')\n      var depth = 0\n      for (var i = 0; i < u.length; i++) {\n        if (u[i] === n) depth++\n      }\n      l = depth\n    }\n    return 'tmpl_' + l + '_' + n\n  }"
                  );
              }
            },
            {
              key: 'buildXSTmpExtra',
              value: function buildXSTmpExtra() {
                var hasMaxComps = [];
                this.nestElements.forEach(function(max, comp) {
                  if (max > 1) hasMaxComps.push(comp);
                });
                return 'f: function (l, n) {\n    var b = '.concat(
                  JSON.stringify(hasMaxComps),
                  "\n    if (b.indexOf(n) > -1) {\n      if (l) l += ','\n      l += n\n    }\n    return l\n  }"
                );
              }
            }
          ]);

          return UnRecursiveTemplate;
        })(BaseTemplate);

        var noPromiseApis = new Set([
          'clearStorageSync',
          'getBatteryInfoSync',
          'getExtConfigSync',
          'getFileSystemManager',
          'getLaunchOptionsSync',
          'getStorageInfoSync',
          'getStorageSync',
          'getSystemInfoSync',
          'offAccelerometerChange',
          'offAppHide',
          'offAppShow',
          'offAudioInterruptionBegin',
          'offAudioInterruptionEnd',
          'offBLECharacteristicValueChange',
          'offBLEConnectionStateChange',
          'offBluetoothAdapterStateChange',
          'offBluetoothDeviceFound',
          'offCompassChange',
          'offError',
          'offGetWifiList',
          'offGyroscopeChange',
          'offMemoryWarning',
          'offNetworkStatusChange',
          'offPageNotFound',
          'offUnhandledRejection',
          'offUserCaptureScreen',
          'onAccelerometerChange',
          'onAppHide',
          'onAppShow',
          'onAudioInterruptionBegin',
          'onAudioInterruptionEnd',
          'onBLECharacteristicValueChange',
          'onBLEConnectionStateChange',
          'onBeaconServiceChange',
          'onBeaconUpdate',
          'onBluetoothAdapterStateChange',
          'onBluetoothDeviceFound',
          'onCompassChange',
          'onDeviceMotionChange',
          'onError',
          'onGetWifiList',
          'onGyroscopeChange',
          'onMemoryWarning',
          'onNetworkStatusChange',
          'onPageNotFound',
          'onSocketClose',
          'onSocketError',
          'onSocketMessage',
          'onSocketOpen',
          'onUnhandledRejection',
          'onUserCaptureScreen',
          'removeStorageSync',
          'reportAnalytics',
          'setStorageSync',
          'arrayBufferToBase64',
          'base64ToArrayBuffer',
          'canIUse',
          'createAnimation',
          'createCameraContext',
          'createCanvasContext',
          'createInnerAudioContext',
          'createIntersectionObserver',
          'createInterstitialAd',
          'createLivePlayerContext',
          'createMapContext',
          'createSelectorQuery',
          'createVideoContext',
          'getBackgroundAudioManager',
          'getMenuButtonBoundingClientRect',
          'getRecorderManager',
          'getUpdateManager'
        ]);
        var needPromiseApis = new Set([
          'addPhoneContact',
          'authorize',
          'canvasGetImageData',
          'canvasPutImageData',
          'canvasToTempFilePath',
          'checkSession',
          'chooseAddress',
          'chooseImage',
          'chooseInvoiceTitle',
          'chooseLocation',
          'chooseVideo',
          'clearStorage',
          'closeBLEConnection',
          'closeBluetoothAdapter',
          'closeSocket',
          'compressImage',
          'connectSocket',
          'createBLEConnection',
          'downloadFile',
          'getAvailableAudioSources',
          'getBLEDeviceCharacteristics',
          'getBLEDeviceServices',
          'getBatteryInfo',
          'getBeacons',
          'getBluetoothAdapterState',
          'getBluetoothDevices',
          'getClipboardData',
          'getConnectedBluetoothDevices',
          'getConnectedWifi',
          'getExtConfig',
          'getFileInfo',
          'getImageInfo',
          'getLocation',
          'getNetworkType',
          'getSavedFileInfo',
          'getSavedFileList',
          'getScreenBrightness',
          'getSetting',
          'getStorage',
          'getStorageInfo',
          'getSystemInfo',
          'getUserInfo',
          'getWifiList',
          'hideHomeButton',
          'hideShareMenu',
          'hideTabBar',
          'hideTabBarRedDot',
          'loadFontFace',
          'login',
          'makePhoneCall',
          'navigateBack',
          'navigateBackMiniProgram',
          'navigateTo',
          'navigateToBookshelf',
          'navigateToMiniProgram',
          'notifyBLECharacteristicValueChange',
          'hideKeyboard',
          'hideLoading',
          'hideNavigationBarLoading',
          'hideToast',
          'openBluetoothAdapter',
          'openDocument',
          'openLocation',
          'openSetting',
          'pageScrollTo',
          'previewImage',
          'queryBookshelf',
          'reLaunch',
          'readBLECharacteristicValue',
          'redirectTo',
          'removeSavedFile',
          'removeStorage',
          'removeTabBarBadge',
          'requestSubscribeMessage',
          'saveFile',
          'saveImageToPhotosAlbum',
          'saveVideoToPhotosAlbum',
          'scanCode',
          'sendSocketMessage',
          'setBackgroundColor',
          'setBackgroundTextStyle',
          'setClipboardData',
          'setEnableDebug',
          'setInnerAudioOption',
          'setKeepScreenOn',
          'setNavigationBarColor',
          'setNavigationBarTitle',
          'setScreenBrightness',
          'setStorage',
          'setTabBarBadge',
          'setTabBarItem',
          'setTabBarStyle',
          'showActionSheet',
          'showFavoriteGuide',
          'showLoading',
          'showModal',
          'showShareMenu',
          'showTabBar',
          'showTabBarRedDot',
          'showToast',
          'startBeaconDiscovery',
          'startBluetoothDevicesDiscovery',
          'startDeviceMotionListening',
          'startPullDownRefresh',
          'stopBeaconDiscovery',
          'stopBluetoothDevicesDiscovery',
          'stopCompass',
          'startCompass',
          'startAccelerometer',
          'stopAccelerometer',
          'showNavigationBarLoading',
          'stopDeviceMotionListening',
          'stopPullDownRefresh',
          'switchTab',
          'uploadFile',
          'vibrateLong',
          'vibrateShort',
          'writeBLECharacteristicValue'
        ]);

        function getCanIUseWebp(taro) {
          return function() {
            if (typeof taro.getSystemInfoSync !== 'function') {
              console.error('不支持 API canIUseWebp');
              return false;
            }

            var _taro$getSystemInfoSy = taro.getSystemInfoSync(),
              platform = _taro$getSystemInfoSy.platform;

            var platformLower = platform.toLowerCase();

            if (platformLower === 'android' || platformLower === 'devtools') {
              return true;
            }

            return false;
          };
        }

        function getNormalRequest(global) {
          return function request(options) {
            options = options || {};

            if (typeof options === 'string') {
              options = {
                url: options
              };
            }

            var originSuccess = options.success;
            var originFail = options.fail;
            var originComplete = options.complete;
            var requestTask;
            var p = new Promise(function(resolve, reject) {
              options.success = function(res) {
                originSuccess && originSuccess(res);
                resolve(res);
              };

              options.fail = function(res) {
                originFail && originFail(res);
                reject(res);
              };

              options.complete = function(res) {
                originComplete && originComplete(res);
              };

              requestTask = global.request(options);
            });

            p.abort = function(cb) {
              cb && cb();

              if (requestTask) {
                requestTask.abort();
              }

              return p;
            };

            return p;
          };
        }

        function processApis(taro, global) {
          var config =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          var patchNoPromiseApis = config.noPromiseApis || [];
          var patchNeedPromiseApis = config.needPromiseApis || [];

          var _noPromiseApis = new Set(
            [].concat(
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(patchNoPromiseApis),
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(noPromiseApis)
            )
          );

          var _needPromiseApis = new Set(
            [].concat(
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(patchNeedPromiseApis),
              Object(
                _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(needPromiseApis)
            )
          );

          var apis = [].concat(
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(_noPromiseApis),
            Object(
              _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(_needPromiseApis)
          );
          apis.forEach(function(key) {
            if (_needPromiseApis.has(key)) {
              var originKey = key;

              taro[originKey] = function() {
                var options =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};

                for (
                  var _len = arguments.length,
                    args = new Array(_len > 1 ? _len - 1 : 0),
                    _key2 = 1;
                  _key2 < _len;
                  _key2++
                ) {
                  args[_key2 - 1] = arguments[_key2];
                }

                var key = originKey; // 第一个参数 options 为字符串，单独处理

                if (typeof options === 'string') {
                  if (args.length) {
                    return global[key].apply(global, [options].concat(args));
                  }

                  return global[key](options);
                } // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段

                if (config.transformMeta) {
                  var transformResult = config.transformMeta(key, options);
                  key = transformResult.key;
                  options = transformResult.options; // 新 key 可能不存在

                  if (!global.hasOwnProperty(key)) {
                    return unsupport(key)();
                  }
                }

                var task = null;
                var obj = Object.assign({}, options); // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。

                setUniqueKeyToRoute(key, options); // Promise 化

                var p = new Promise(function(resolve, reject) {
                  obj.success = function(res) {
                    var _a, _b;

                    (_a = config.modifyAsyncResult) === null || _a === void 0
                      ? void 0
                      : _a.call(config, key, res);
                    (_b = options.success) === null || _b === void 0
                      ? void 0
                      : _b.call(options, res);

                    if (key === 'connectSocket') {
                      resolve(
                        Promise.resolve().then(function() {
                          return Object.assign(task, res);
                        })
                      );
                    } else {
                      resolve(res);
                    }
                  };

                  obj.fail = function(res) {
                    var _a;

                    (_a = options.fail) === null || _a === void 0
                      ? void 0
                      : _a.call(options, res);
                    reject(res);
                  };

                  obj.complete = function(res) {
                    var _a;

                    (_a = options.complete) === null || _a === void 0
                      ? void 0
                      : _a.call(options, res);
                  };

                  if (args.length) {
                    task = global[key].apply(global, [obj].concat(args));
                  } else {
                    task = global[key](obj);
                  }
                }); // 给 promise 对象挂载属性

                if (key === 'uploadFile' || key === 'downloadFile') {
                  p.progress = function(cb) {
                    task === null || task === void 0
                      ? void 0
                      : task.onProgressUpdate(cb);
                    return p;
                  };

                  p.abort = function(cb) {
                    cb === null || cb === void 0 ? void 0 : cb();
                    task === null || task === void 0 ? void 0 : task.abort();
                    return p;
                  };
                }

                return p;
              };
            } else {
              // API 不存在
              if (!global.hasOwnProperty(key)) {
                taro[key] = unsupport(key);
                return;
              }

              taro[key] = function() {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2),
                    _key3 = 0;
                  _key3 < _len2;
                  _key3++
                ) {
                  args[_key3] = arguments[_key3];
                }

                if (config.handleSyncApis) {
                  return config.handleSyncApis(key, global, args);
                } else {
                  return global[key].apply(global, args);
                }
              };
            }
          });
          !config.isOnlyPromisify && equipCommonApis(taro, global, config);
        }
        /**
         * 挂载常用 API
         * @param taro Taro 对象
         * @param global 小程序全局对象，如微信的 wx，支付宝的 my
         */

        function equipCommonApis(taro, global) {
          var apis =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          taro.canIUseWebp = getCanIUseWebp(taro);
          taro.getCurrentPages =
            getCurrentPages || unsupport('getCurrentPages');
          taro.getApp = getApp || unsupport('getApp');
          taro.env = global.env || {};

          try {
            taro.requirePlugin = requirePlugin || unsupport('requirePlugin');
          } catch (error) {
            taro.requirePlugin = unsupport('requirePlugin');
          } // request & interceptors

          var request = apis.request ? apis.request : getNormalRequest(global);

          function taroInterceptor(chain) {
            return request(chain.requestParams);
          }

          var link = new taro.Link(taroInterceptor);
          taro.request = link.request.bind(link);
          taro.addInterceptor = link.addInterceptor.bind(link);
          taro.cleanInterceptors = link.cleanInterceptors.bind(link);
          taro.miniGlobal = global;
        }

        /***/
      }
  }
]);
//# sourceMappingURL=taro.js.map
