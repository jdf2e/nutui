# 主题定制

NutUI 默认提供一套 UI 主题，同时允许在一定程度上定制新的主题，以满足业务的多样化视觉需求。

<br/>

<img src="https://img12.360buyimg.com/imagetools/jfs/t1/157759/16/13989/142151/6052efc7Ef8f4bff4/f3dd6422949ba4b7.jpg" width="700" alt="NutUI 主题定制">



## 样式变量

NutUI 的样式是基于 **[SCSS](https://sass-lang.com/)** 开发的，定义了一套默认样式变量，定制主题就是编辑这个变量列表。

> 现阶段需要开发者手动配置，可视化生成配置目前正在开发中。

以下是一些与颜色相关基本样式变量，所有可用的变量请参考[配置文件 variables.scss](https://github.com/jdf2e/nutui/blob/next/src/styles/variables.scss)。

```scss
// 主色调
$primary-color: #fa2c19;
$primary-color-end: #fa6419;
...
```

> 在主题定制场景下，项目中引用组件时，需要引入 **SCSS** 文件，而不是 **CSS** 文件。

需要引入 **nutui.scss** 文件

```javascript
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.scss';
```

## 定制主题

### 第一步：新建自定义变量 SCSS 文件

在本地项目中新建一个 **SCSS** 文件，包含上述变量，自定义变量值。

### 第二步：修改本地项目 webpack 或者 vite 的配置文件

修改 webpack 配置文件中 **sass-loader** 的配置。在 **options** 的 **data** 属性值中，先后 import 你自定义的 SCSS 文件（如 `custom.scss`）和 NutUI 的样式变量配置文件（路径为 **dist/styles/variable.scss**）。

#### vite 版本

``` javascript
// https://vitejs.dev/config/
export default defineConfig({
  //...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./asset/css/custom.scss";@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
})
```

#### vue/cli 2版本

``` javascript
{
    test: /\.(sa|sc)ss$/,
    use: [
        {
            loader: 'sass-loader',
            options: {
                data: `@import "./asset/css/custom.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
            }
        }
    ]
}
```

#### vue/cli 3 以上版本修改 **vue.config.js** 进行配置

``` javascript
module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            scss: {
                // @/ 是 src/ 的别名
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                prependData: `@import "@/assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
            }
        },
    }
}
```