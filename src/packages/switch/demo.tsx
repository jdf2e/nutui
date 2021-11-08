import React, { useState } from 'react'
import { Switch } from './switch'

const SwitchDemo = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  const change = (value: boolean, event: React.MouseEvent<Element, MouseEvent>) => {
    alert(`触发了change事件，开关状态：${value}`)
  }
  const changeAsync = (value: boolean, event: any) => {
    alert(`2秒后异步触发 ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <h2>禁用状态</h2>
        <Switch checked={true} disable></Switch>
        <h2>change事件</h2>
        <Switch change={(value, event) => change(value, event)}></Switch>
        <h2>异步控制</h2>
        <Switch
          checked={checkedAsync}
          isAsync={true}
          change={(value, event) => changeAsync(value, event)}
        ></Switch>
        <h2>自定义颜色</h2>
        <Switch activeColor="blue"></Switch>
        <h2>支持文字</h2>
        <Switch activeText="开" inactiveText="关"></Switch>
      </div>
    </>
  )
}

export default SwitchDemo
