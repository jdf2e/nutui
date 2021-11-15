import React, { useRef, useState } from 'react'
import Toast from '../toast'
import { Cell } from '../cell/cell'
import { CheckBox } from './checkbox'
import { CheckBoxGroup } from '@/packages/checkboxgroup/checkboxgroup'
import Button from '@/packages/button'

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (
    <>
      <div className="demo">
        <h2
          onClick={() => {
            console.log('click')
            setChecked(false)
          }}
        >
          基本用法-左右
        </h2>
        <Cell className={'nut-cell'}>
          <CheckBox textPosition={'left'} label={'复选框'} checked={checked}></CheckBox>
        </Cell>
        <Cell className={'nut-cell'}>
          <CheckBox textPosition={'right'} label={'复选框'} checked={false}></CheckBox>
        </Cell>
        <h2>禁用状态</h2>
        <Cell className={'nut-cell'}>
          <CheckBox
            textPosition={'right'}
            label={'未选时禁用状态'}
            checked={false}
            disabled={true}
          ></CheckBox>
        </Cell>
        <Cell className={'nut-cell'}>
          <CheckBox
            textPosition={'right'}
            label={'选中时禁用状态'}
            checked={true}
            disabled={true}
          ></CheckBox>
        </Cell>
        <h2>自定义尺寸</h2>
        <Cell className={'nut-cell'}>
          <CheckBox label={'自定义尺寸25'} iconSize={25}></CheckBox>
        </Cell>
        <Cell className={'nut-cell'}>
          <CheckBox label={'自定义尺寸10'} iconSize={10}></CheckBox>
        </Cell>
        <h2>自定义图标</h2>
        <Cell className={'nut-cell'}>
          <CheckBox checked={false} iconName="checklist" iconActiveName={'checklist'}>
            自定义图标
          </CheckBox>
        </Cell>
        <h2>点击触发change事件</h2>
        <Cell className={'nut-cell'}>
          <CheckBox
            checked={false}
            onChange={(state, label) => {
              Toast.text(`您${state ? '选中' : '取消'}了${label}`)
            }}
          >
            change复选框
          </CheckBox>
        </Cell>
        <h2>checkboxGroup使用</h2>
        <Cell>
          <CheckBoxGroup
            checkedValue={checkboxgroup1}
            onChange={(value) => {
              console.log(value)
              setCheckboxgroup1(value)
            }}
          >
            <CheckBox checked={false} label="1">
              组合复选框
            </CheckBox>
            <CheckBox checked={false} label="2">
              组合复选框
            </CheckBox>
            <CheckBox checked={false} label="3">
              组合复选框
            </CheckBox>
            <CheckBox checked={false} label="4">
              组合复选框
            </CheckBox>
          </CheckBoxGroup>
          <span>选中：{checkboxgroup1.toString()}</span>
        </Cell>
        <h2>checkboxGroup禁用</h2>
        <Cell>
          <CheckBoxGroup checkedValue={checkboxgroup1} disabled>
            <CheckBox checked={false} label="1">
              组合复选框
            </CheckBox>
            <CheckBox checked={false} label="2">
              组合复选框
            </CheckBox>
            <CheckBox checked={false} label="3">
              组合复选框
            </CheckBox>
            <CheckBox checked={false} label="4">
              组合复选框
            </CheckBox>
          </CheckBoxGroup>
        </Cell>
        <h2>checkboxGroup 全选/取消</h2>
        <Cell>
          <CheckBoxGroup
            style={{}}
            ref={checkboxgroup2Ref}
            checkedValue={checkboxgroup2}
            onChange={(value) => {
              Toast.text(`${value.length === 2 ? '全选' : '取消全选'}`)
            }}
          >
            <CheckBox checked={false} label="1">
              组合复选框
            </CheckBox>
            <CheckBox checked={false} label="2">
              组合复选框
            </CheckBox>
          </CheckBoxGroup>
        </Cell>
        <Cell>
          <Button
            type="primary"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(true)
            }}
          >
            全选
          </Button>
          <Button
            type="info"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(false)
            }}
          >
            取消
          </Button>
        </Cell>
      </div>
    </>
  )
}

export default CheckBoxDemo
