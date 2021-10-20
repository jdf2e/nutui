import React from 'react'
import { Divider } from './divider'
import { Cell } from '../cell/cell'

const DividerDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Divider />
        </Cell>
        <h2>展示文本</h2>
        <Cell>
          <Divider>文本</Divider>
        </Cell>
        <h2>内容位置</h2>
        <Cell>
          <Divider contentPosition="left">文本</Divider>
        </Cell>
        <Cell>
          <Divider contentPosition="right">文本</Divider>
        </Cell>
        <h2>虚线</h2>
        <Cell>
          <Divider dashed={true}>文本</Divider>
        </Cell>
        <h2>自定义样式</h2>
        <Cell>
          <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>
            文本
          </Divider>
        </Cell>
      </div>
    </>
  )
}

export default DividerDemo
