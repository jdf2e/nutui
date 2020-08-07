# 主题定制

NutUI-JDL 默认提供一套 UI 主题，同时允许在一定程度上定制新的主题，以满足业务的多样化视觉需求。

![主题定制](https://storage.360buyimg.com/imgtools/b0684a2fb8-d67c45e0-d885-11ea-812a-91f093c67161.jpeg)


## 样式变量

NutUI-JDL 的样式是基于 **[SCSS](https://sass-lang.com/)** 开发的，定义了一套默认样式变量，定制主题就是编辑这个变量列表。

以下是一些与颜色相关基本样式变量，所有可用的变量请参考配置文件。

```scss
$primary-color: #e1251b !default;
$normal-color: #848484 !default;
$link-color: $primary-color !default;
$link-hover-color: mix($link-color, #000, 80%) !default;
$title-color: #323232 !default;
$text-color: #646464 !default;
$light-color: #f6f6f6 !default;
$dark-color: #dadada !default;
$primary-color-jc-blue: #3c6ef0 !default;
$assist-color-green: #26a872 !default;
$assist-color-orange: #ff6e4c !default;
$assist-color-yellow: #ffba12 !default;
$assist-color-blue: #2ca6e1 !default;
$assist-color-purple: #6236ff !default;
$assist-color-gray: #7c7a8a !default;
$assist-color-light-gray: #d9d9d9 !default;
$text-black-1: #323232 !default;
$text-black-2: #646464 !default;
$text-black-3: #969696 !default;
$text-black-4: #c8c8c8 !default;
$text-jd-red: $primary-color !default;
```


## 定制主题

### 第一步：新建自定义变量 SCSS 文件

在本地项目中新建一个 **SCSS** 文件，包含上述变量，自定义变量值。

### 第二步：修改本地项目 webpack 的配置文件

修改 webpack 配置文件中 **sass-loader** 的配置。在 **options** 的 **data** 属性值中，先后 import 你自定义的 SCSS 文件（如 `custom.scss`）和 NutUI 的样式变量配置文件（路径为 **dist/styles/variable.scss**）。

```javascript
{
    test: /\.(sa|sc)ss$/,
    use: [
        {
            loader: 'sass-loader',
            options: {
                data: `@import "./asset/css/custom.scss"; @import "@nutui/nutui-jdl/dist/styles/index.scss"; `,
            }
        }
    ]
}
```

如果你的项目使用的是VueCLI 3以上版本 请修改 `vue.config.js` 进行配置

``` bash
module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            scss: {
                // @/ 是 src/ 的别名
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                prependData: ` 
                @import "@/assets/custom_theme.scss";
                @import "@nutui/nutui-jdl/dist/styles/index.scss";
                `,
            }
        },
    }
}
```

### 第三步：引用组件样式时引用 SCSS 文件

在主题定制场景下，项目中引用组件时，需要引入 **SCSS** 文件，而不是 **CSS** 文件。分三种情况：

1.引用完整组件库时，需要引入 **nutui.scss** 文件

```javascript
import NutUI from '@nutui/nutui-jdl';
import '@nutui/nutui-jdl/dist/nutui.scss';
```

2.未使用插件，手动按需引用组件时，需手动引入组件对应的 SCSS 文件。

```javascript
import Button from '@nutui/nutui-jdl/dist/packages/button/button.js';
import '@nutui/nutui-jdl/dist/packages/button/button.scss';
```

3.使用了插件 **[@nutui/babel-plugin-seperate-import](https://www.npmjs.com/package/@nutui/babel-plugin-separate-import)** 进行按需引用时，需修改babel的配置文件（如.babelrc），将 **style** 的设置为 **scss**。该插件将会自动引入指定组件对应的 SCSS 文件。

```bash
{
  "plugins": [
    ["@nutui/babel-plugin-separate-import", {
        "libraryName": "@nutui/nutui-jdl",
        "libraryDirectory": "dist/packages",
        "style": "scss"
    }]
  ]
}
```

> VueCLI 3 相关Demo 请查看 [NutUI Demo](https://github.com/jdf2e/nutui-demo)
