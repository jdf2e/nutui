import React from 'react'
import { Rate } from './rate'

const RateDemo = () => {
  const onChange = (val) => {
    alert(val)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Rate modelValue={3}></Rate>
        <h2>半星</h2>
        <Rate allowHalf modelValue="3.5"></Rate>

        <h2>自定义 icon </h2>
        <Rate checkedIcon="heart-fill1" uncheckedIcon="heart" modelValue="3"></Rate>

        <h2>自定义数量</h2>
        <Rate count="6" modelValue="3"></Rate>

        <h2>自定义颜色</h2>
        <Rate activeColor="#FFC800" modelValue="3"></Rate>

        <h2>禁用状态</h2>
        <Rate disabled modelValue="3"></Rate>

        <h2>只读状态</h2>
        <Rate modelValue="3" readonly></Rate>

        <h2>绑定事件</h2>
        <Rate modelValue="3" change={() => onChange}></Rate>
        <h2>自定义尺寸 35px</h2>
        <Rate modelValue="3" iconSize="35"></Rate>
      </div>
    </>
  )
}

export default RateDemo
