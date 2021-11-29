import React, { useState } from 'react'
import { Tag } from './tag'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'
const TagDemo = () => {
  const [isShow, setIsShow] = useState(true)
  const close = () => {
    setIsShow(false)
  }
  return (
    <>
      <div className="demo">
        <CellGroup title="基础用法">
          <Cell title="primary类型" extra={<Tag type="primary">标签</Tag>}></Cell>
          <Cell title="success类型" extra={<Tag type="success">标签</Tag>}></Cell>
          <Cell title="danger类型" extra={<Tag type="danger">标签</Tag>}></Cell>
          <Cell title="warning类型" extra={<Tag type="warning">标签</Tag>}></Cell>
        </CellGroup>

        <CellGroup title="样式风格">
          <Cell title="空心样式" extra={<Tag plain>标签</Tag>}></Cell>
          <Cell
            title="圆角样式"
            extra={
              <Tag round type="primary">
                标签
              </Tag>
            }
          ></Cell>
          <Cell
            title="标记样式"
            extra={
              <Tag mark type="primary">
                标签
              </Tag>
            }
          ></Cell>
          <Cell
            title="可关闭标签"
            extra={
              <Tag isShow={isShow} closeable onClick={close} type="primary">
                标签
              </Tag>
            }
          ></Cell>
        </CellGroup>

        <CellGroup title="自定义">
          <Cell title="背景颜色" extra={<Tag color="#FA685D">标签</Tag>}></Cell>
          <Cell
            title="文字颜色"
            extra={
              <Tag color="#E9E9E9" textColor="#999999">
                标签
              </Tag>
            }
          ></Cell>
          <Cell
            title="空心颜色"
            extra={
              <Tag color="#FA2400" plain>
                标签
              </Tag>
            }
          ></Cell>
        </CellGroup>
      </div>
    </>
  )
}

export default TagDemo
