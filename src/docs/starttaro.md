# 小程序开发

## 安装

* 通过 Npm 或 Yarn 安装

#### 安装 Taro 脚手架

``` bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。

``` bash
npm install -g mirror-config-china
```

#### 检查是否安装成功

``` bash
taro -v
```

#### 项目初始化

使用命令创建模板：

``` bash
taro init myApp
```

#### 按照下方图片依次选择，选择 Vue3 + NutUI 模板

<img src="https://storage.360buyimg.com/jdc-article/taro.jpg" />

#### NPM 使用示例

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import NutUI from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";
createApp(App).use(NutUI);
```

> 注意：这种方式将会导入所有组件

## 推荐使用按需加载

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";
createApp(App).use(Button).use(Cell).use(Icon);
```