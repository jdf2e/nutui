#  Switch组件

### 介绍

用来打开或关闭选项。

### 安装



## 代码演示

### 基础用法

``` jsx
<Switch checked={true}></Switch>
```


### 禁用状态

``` jsx
<Switch checked={true} disable></Switch>
```

### change事件

``` jsx
<Switch change={() => change}></Switch>
```
``` javascript
const change = (value: boolean, event: Event) => {
    alert(`触发了change事件，开关状态：${value}`)
  }
```

### 异步控制

``` jsx
<Switch
  checked={checkedAsync}
  change={(value, event) => changeAsync(value, event)}
></Switch>
```
``` javascript
  const [checkedAsync, setCheckedAsync] = useState(true)
  
  const changeAsync = (value: boolean, event: Event) => {
    alert(`2秒后异步触发 ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
```
### 自定义颜色

``` jsx
<Switch activeColor="blue"></Switch>
```
### 支持文字

``` jsx
<Switch activeText="开" inactiveText="关"></Switch>
```




## API

### Props

| 参数           | 说明             | 类型    | 默认值                |
|----------------|------------------|---------|-----------------------|
| checked        | 开关状态         | Boolean | `false`               |
| disable        | 禁用状态         | Boolean | `false`               |
| activeColor   | 打开时的背景颜色 | String  | `#fa2c19`    |
| inactiveColor | 关闭时的背景颜色 | String  | `#ebebeb` |
| activeText    | 打开时文字描述   | String  | -                     |
| inactiveText  | 关闭时文字描述   | String  | -                     |
| isAsync  | 开关状态是否异步修改   | Boolean  | `false`                     |


### Events

| 事件名 | 说明           | 回调参数                      |
|--------|----------------|-------------------------------|
| change | 切换开关时触发 | (value: boolean,event: Event) |
