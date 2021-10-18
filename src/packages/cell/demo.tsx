import React, { MouseEvent } from 'react'
import { Cell } from './cell'
import { CellGroup } from '../cellgroup/cellgroup'

const CellDemo = () => {
  const testClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    console.log('点击事件')
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell title="我是标题" desc="描述文字"></Cell>
        <Cell title="我是标题" subTitle="副标题描述" desc="描述文字"></Cell>
        <Cell
          title="点击测试"
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            testClick(event)
          }
        ></Cell>
        <h2>直接使用插槽(slot)</h2>
        <Cell title="我是标题" desc="描述文字">
          <div>自定义内容</div>
        </Cell>
        <CellGroup title="链接 | 分组用法">
          <Cell title="链接" isLink={true}></Cell>
          <Cell title="URL 跳转" desc="https://jd.com" isLink={true} url="https://jd.com"></Cell>
          <Cell title="路由跳转 ’/‘ " to="/"></Cell>
        </CellGroup>

        <CellGroup title="自定义右侧箭头区域">
          <Cell title="Switch" extra={<div>这里是switch组件</div>}></Cell>
        </CellGroup>
        <h2>展示图标</h2>
        <Cell title="姓名" icon="my" desc="张三" isLink={true}></Cell>
        <h2>只展示 desc ，可通过 desc-text-align 调整内容位置</h2>
        <Cell descTextAlign="left" desc="张三"></Cell>
      </div>
    </>
  )
}

export default CellDemo
