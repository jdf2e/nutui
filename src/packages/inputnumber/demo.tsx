import React, { useState } from 'react'
import { InputNumber } from './inputnumber'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'

interface IValState {
  val1: number | string
  val2: number | string
  val3: number | string
  val4: number | string
  val5: number | string
  val6: number | string
  val7: number | string
  val8: number | string
}
const InputNumberDemo = () => {
  const [inputState, setInputState] = useState<IValState>({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件触发')
  }
  const onChange = (value: string | number) => {
    Toast.loading('异步演示 2 秒后更改')
    setTimeout(() => {
      inputState.val7 = Number(value)
      setInputState({ ...inputState })
      Toast.hide()
    }, 2000)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <InputNumber modelValue={inputState.val1} />
        </Cell>
        <h2>步长设置</h2>
        <Cell>
          <InputNumber modelValue={inputState.val2} step="5" />
        </Cell>
        <h2>限制输入范围</h2>
        <Cell>
          <InputNumber modelValue={inputState.val3} min="10" max="20" overlimit={overlimit} />
        </Cell>
        <h2>禁用操作</h2>
        <Cell>
          <InputNumber modelValue={inputState.val4} disabled />
        </Cell>
        <h2>只读禁用输入框</h2>
        <Cell>
          <InputNumber modelValue={inputState.val5} readonly />
        </Cell>
        <h2>支持小数</h2>
        <Cell>
          <InputNumber modelValue={inputState.val6} step="0.1" decimalPlaces="1" readonly />
        </Cell>
        <h2>支持异步修改</h2>
        <Cell>
          <InputNumber modelValue={inputState.val7} change={onChange} isAsync={true} />
        </Cell>
        <h2>自定义按钮大小</h2>
        <Cell>
          <InputNumber modelValue={inputState.val8} buttonSize="30" inputWidth="50" />
        </Cell>
      </div>
    </>
  )
}

export default InputNumberDemo
