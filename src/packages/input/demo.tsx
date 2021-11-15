import React, { useEffect, useState } from 'react'
import { Input } from './input'

const InputDemo = () => {
  const [value1, UpdateValue1] = useState('')
  const [value2, UpdateValue2] = useState('')
  const [value3, UpdateValue3] = useState('')
  const [value4, UpdateValue4] = useState('')
  const [value5, UpdateValue5] = useState('')
  useEffect(() => {
    setTimeout(() => {
      UpdateValue1('异步文本')
    }, 5000)
  }, [])
  const change = (value: string, event: Event) => {
    UpdateValue2(value)
  }
  const focus = (value: string, event: Event) => {
    console.log('focus:', value, event)
  }
  const blur = (value: string, event: Event) => {
    console.log('blur:', value, event)
  }
  const clear = (value: string) => {
    console.log('clear:', value)
    UpdateValue2('')
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Input label="文本(异步)" defaultValue={value1} focus={focus} blur={blur} />

        <Input label="文本" defaultValue={value2} change={change} clear={clear} requireShow />
        <h2>禁用输入框</h2>
        <Input label="文本" defaultValue="禁止修改" disabled={true} />
        <Input label="文本" defaultValue="readonly只读" readonly={true} />
        <h2>限制输入长度</h2>
        <Input label="限制7" defaultValue={value3} maxLength="7" />
        <h2>自定义类型</h2>
        <Input label="密码" defaultValue={value4} type="password" />
        <Input label="整数" defaultValue={value5} type="number" />
        <Input label="数字" defaultValue="" type="digit" placeholder="支持小数点的输入" />
      </div>
    </>
  )
}

export default InputDemo
