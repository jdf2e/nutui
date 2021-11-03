#  Infiniteloading 滚动加载

### 介绍

列表滚动到底部自动加载更多数据。

### 安装

```javascript
  import { InfiniteLoading } from '@nutui/nutui-react';
```

## 代码演示
    
### 基础用法

```tsx
<ul className="infiniteUl" id="scroll">
  <Infiniteloading
    containerId="scroll"
    useWindow={false}
    hasMore={hasMore}
    loadMore={loadMore}
  >
    {defultList.map((item, index) => {
      return (
        <li className="infiniteLi" key={index}>
          {item}
        </li>
      )
    })}
  </Infiniteloading>
</ul>
```
```tsx
const [defultList, setDefultList] = useState<string[]>([])
const [hasMore, setHasMore] = useState(true)

useEffect(() => {
  init()
}, [])

const loadMore = (done: () => void) => {
  setTimeout(() => {
    const curLen = defultList.length
    for (let i = curLen; i < curLen + 10; i++) {
      defultList.push(`${i}`)
    }
    if (defultList.length >= 30) {
      setHasMore(false)
    } else {
      setDefultList([...defultList])
    }
    done()
  }, 500)
}

const init = () => {
  for (let i = 0; i < 10; i++) {
    defultList.push(`${i}`)
  }
  setDefultList([...defultList])
}
```
### 下拉刷新

```tsx
<ul className="infiniteUl" id="refreshScroll">
  <Infiniteloading
    pullIcon="JD"
    containerId="refreshScroll"
    useWindow={false}
    isOpenRefresh={true}
    hasMore={refreshHasMore}
    loadMore={refreshLoadMore}
    refresh={refresh}
  >
    {refreshList.map((item, index) => {
      return (
        <li className="infiniteLi" key={index}>
          {item}
        </li>
      )
    })}
  </Infiniteloading>
</ul>
```
```tsx
const [refreshList, setRefreshList] = useState<string[]>([])
const [refreshHasMore, setRefreshHasMore] = useState(true)

useEffect(() => {
  init()
}, [])

const refreshLoadMore = (done: () => void) => {
  setTimeout(() => {
    const curLen = refreshList.length
    for (let i = curLen; i < curLen + 10; i++) {
      refreshList.push(`${i}`)
    }
    if (refreshList.length >= 30) {
      setRefreshHasMore(false)
    } else {
      setRefreshList([...refreshList])
    }
    done()
  }, 500)
}

const init = () => {
  for (let i = 0; i < 10; i++) {
    refreshList.push(`${i}`)
  }
  setRefreshList([...refreshList])
}
```
### 自定义加载文案

```tsx
<ul className="infiniteUl" id="scroll">
  <Infiniteloading
    containerId="customScroll"
    useWindow={false}
    loadTxt="loading"
    loadMoreTxt="没有啦～"
    hasMore={customHasMore}
    loadMore={customLoadMore}
  >
    {customList.map((item, index) => {
      return (
        <li className="infiniteLi" key={index}>
          {item}
        </li>
      )
    })}
  </Infiniteloading>
</ul>
```
```tsx
const [customList, setCustomList] = useState<string[]>([])
const [customHasMore, setCustomHasMore] = useState(true)

useEffect(() => {
  init()
}, [])

const customLoadMore = (done: () => void) => {
  setTimeout(() => {
    const curLen = customList.length
    for (let i = curLen; i < curLen + 10; i++) {
      customList.push(`${i}`)
    }
    if (customList.length >= 30) {
      setCustomHasMore(false)
    } else {
      setCustomList([...customList])
    }
    done()
  }, 500)
}

const init = () => {
  for (let i = 0; i < 10; i++) {
    customList.push(`${i}`)
  }
  setCustomList([...customList])
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| hasMore         | 是否还有更多数据               | Boolean | `true`                |
| threshold         | 距离底部多远加载 | Number | `200`               |
| useWindow | 将滚动侦听器添加到 window 否则侦听组件的父节点     | Boolean | `true` |
| useCapture          | 是否使用捕获模式 true 捕获 false 冒泡                        | Boolean | `false`            |
| containerId          | 在 useWindow 属性为 false 的时候，自定义设置节点ID                        | String | `''`            |
| loadMoreTxt          | “没有更多数”据展示文案                        | String | `'哎呀，这里是底部了啦'`            |
| isOpenRefresh        | 是否开启下拉刷新                         | Boolean | `false`                |
| pullIcon        | 下拉刷新[图标名称](#/icon)                        | String | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40/>                |
| pullTxt        | 下拉刷新提示文案                         | String | `松手刷新`                |
| loadIcon        | 上拉加载[图标名称](#/icon)                       | Boolean | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40 />                |
| loadTxt        | 上拉加载提示文案                         | String | `加载中...`                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| loadMore  | 继续加载的回调函数 | done 函数，用于关闭加载中状态 |
| scrollChange  | 实时监听滚动高度 | 滚动高度 |
| refresh  | 下拉刷新事件回调 | done 函数，用于关闭加载中状态 |