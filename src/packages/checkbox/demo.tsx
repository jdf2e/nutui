import React, { useRef, useState } from 'react'
import Toast from '../toast'
import { Cell } from '../cell/cell'
import { Checkbox } from './checkbox'
import { CheckboxGroup } from '@/packages/checkboxgroup/checkboxgroup'
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
          <Checkbox textPosition={'left'} label={'复选框'} checked={checked}></Checkbox>
        </Cell>
        <Cell className={'nut-cell'}>
          <Checkbox textPosition={'right'} label={'复选框'} checked={false}></Checkbox>
        </Cell>
        <h2>禁用状态</h2>
        <Cell className={'nut-cell'}>
          <Checkbox
            textPosition={'right'}
            label={'未选时禁用状态'}
            checked={false}
            disabled={true}
          ></Checkbox>
        </Cell>
        <Cell className={'nut-cell'}>
          <Checkbox
            textPosition={'right'}
            label={'选中时禁用状态'}
            checked={true}
            disabled={true}
          ></Checkbox>
        </Cell>
        <h2>自定义尺寸</h2>
        <Cell className={'nut-cell'}>
          <Checkbox label={'自定义尺寸25'} iconSize={25}></Checkbox>
        </Cell>
        <Cell className={'nut-cell'}>
          <Checkbox label={'自定义尺寸10'} iconSize={10}></Checkbox>
        </Cell>
        <h2>自定义图标</h2>
        <Cell className={'nut-cell'}>
          <Checkbox checked={false} iconName="checklist" iconActiveName={'checklist'}>
            自定义图标
          </Checkbox>
        </Cell>
        <h2>点击触发change事件</h2>
        <Cell className={'nut-cell'}>
          <Checkbox
            checked={false}
            onChange={(state, label) => {
              Toast.text(`您${state ? '选中' : '取消'}了${label}`)
            }}
          >
            change复选框
          </Checkbox>
        </Cell>
        <h2>checkboxGroup使用</h2>
        <Cell>
          <CheckboxGroup
            checkedValue={checkboxgroup1}
            onChange={(value) => {
              console.log(value)
              setCheckboxgroup1(value)
            }}
          >
            <Checkbox checked={false} label="1">
              组合复选框
            </Checkbox>
            <Checkbox checked={false} label="2">
              组合复选框
            </Checkbox>
            <Checkbox checked={false} label="3">
              组合复选框
            </Checkbox>
            <Checkbox checked={false} label="4">
              组合复选框
            </Checkbox>
          </CheckboxGroup>
          <span>选中：{checkboxgroup1.toString()}</span>
        </Cell>
        <h2>checkboxGroup禁用</h2>
        <Cell>
          <CheckboxGroup checkedValue={checkboxgroup1} disabled>
            <Checkbox checked={false} label="1">
              组合复选框
            </Checkbox>
            <Checkbox checked={false} label="2">
              组合复选框
            </Checkbox>
            <Checkbox checked={false} label="3">
              组合复选框
            </Checkbox>
            <Checkbox checked={false} label="4">
              组合复选框
            </Checkbox>
          </CheckboxGroup>
        </Cell>
        <h2>checkboxGroup 全选/取消</h2>
        <Cell>
          <CheckboxGroup
            style={{}}
            ref={checkboxgroup2Ref}
            checkedValue={checkboxgroup2}
            onChange={(value) => {
              Toast.text(`${value.length === 2 ? '全选' : '取消全选'}`)
            }}
          >
            <Checkbox checked={false} label="1">
              组合复选框
            </Checkbox>
            <Checkbox checked={false} label="2">
              组合复选框
            </Checkbox>
          </CheckboxGroup>
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
