import React, { useEffect, useState } from 'react'
import { TextArea } from './textarea'

const TextAreaDemo = () => {
  const [value1, UpdateValue1] = useState('基础用法')
  const [value2, UpdateValue2] = useState('')
  const [value3, UpdateValue3] = useState('')
  const change = (value: any, event: Event) => {
    UpdateValue1(value)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <TextArea
          defaultValue={value1}
          className={'text-1'}
          style={{ fontSize: '12px' }}
          change={(value, event) => {
            change(value, event)
          }}
          blur={() => {
            console.log('blur')
          }}
          focus={() => {
            console.log('focus')
          }}
        />
        <h2>显示字数统计</h2>
        <TextArea defaultValue={value2} limitshow maxlength="20" />
        <h2>高度自定义，拉伸</h2>
        <TextArea defaultValue={value3} rows="10" autosize />
        <h2>只读</h2>
        <TextArea readonly defaultValue="textarea只读状态" />
        <h2>禁用</h2>
        <TextArea disabled defaultValue="textarea禁用状态" limitshow maxlength="20" />
        <h2></h2>
      </div>
    </>
  )
}

export default TextAreaDemo
