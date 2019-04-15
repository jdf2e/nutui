# 国际化

NutUI 2.0 以上版本支持多语言。组件默认使用中文，支持加载其他语言包来实现多语言切换功能。除了组件本身的语言切换以外，用户还可以调用相关的语言转换方法来支持其他功能的国际化。具体使用方法如下：

## 使用方法

### 引用整个组件库

```javascript
import Vue from 'vue';
import NutUI from '@nutui/nutui';

import enUS from '@nutui/nutui/dist/locales/lang/en-US';

Vue.use(NutUI, {
  locale: 'en-US',
  lang: enUS
});
```

### 按需引用组件

通过 **[@nutui/babel-plugin-seperate-import](https://www.npmjs.com/package/@nutui/babel-plugin-separate-import)** 插件，我们可以根据项目需要引用 NutUI 的组件，最终只打包引用的组件，减少引入代码的体积。国际化功能同样支持按需引用的方式。

```javascript
import Vue from 'vue';
import {locale} from '@nutui/nutui';

import enUS from '@nutui/nutui/dist/locales/lang/en-US';

locale('en-US', enUS);
```

> 请注意：通过该插件进行按需引用组件时默认引用的是构建后的文件，此时并不支持国际化的功能。如需使用组件库的国际化功能，需要在 babel 的配置文件（如.babelrc）中将 **@nutui/babel-plugin-seperate-import** 插件的 **sourceCode** 参数值设为 **true** 。这样插件将引用未经构建的源文件，同时引用的组件也不再具有 `install` 方法，请使用 `Vue.component` 对组件进行注册。

```bash
{
  "plugins": [
    ["@nutui/babel-plugin-separate-import", {
      "sourceCode": true,
      "style": "css"
    }]
  ]
}
```

## 兼容 vue-i18n

```javascript
import VueI18n from 'vue-i18n';
import enUS from '@nutui/nutui/dist/locales/lang/en-US';

Vue.use(VueI18n);

Vue.locale = () => {};
const i18n = new VueI18n({
  locale: 'en-US',
  messages: {
    'en-US': enUS
  }
});


const app = new Vue({
  el: '#app',
  i18n
})

```

## 语言切换

使用 **vue-i18n** 时，可以通过调用 **$t** 方法来对某个位置做国际化支持的语言切换。我们也可以调用 NutUI 内置的语言切换方法 **nutTranslate** 来实现相同功能，而且还支持非常灵活的模板化传参方式。我们可以通过 **mixin** 将该语言切换方法混入到每个组件的 **methods**，方便直接调用。

```javascript
import Vue from 'vue';
import {i18n} from '@nutui/nutui';

Vue.mixin({
    methods: {
        nutTranslate() {
            return i18n.apply(this, arguments);
        }
    }
});


// 使用 nutTranslate
// params 参数支持默认值、对象、数组、函数等格式
<nut-cell :title="nutTranslate('demo.cell.title', params)" />
```

一般来说，要实现全面的国际化，我们还需要将用户自己的语言包与组件库的语言包进行合并。

```javascript
import Vue from 'vue';
import {locale} from '@nutui/nutui';
import enUS from '@nutui/nutui/dist/locales/lang/en-US';
import myEnUS from './path/to/lang/en-US';

Object.assign(enUS, myEnUS);

locale('en-US', enUS);
```