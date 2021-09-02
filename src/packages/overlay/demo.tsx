import React, { useState } from 'react'
import { Overlay } from './overlay'
import Cell from '@/packages/cell'
import Button from '@/packages/button'
import './demo.scss'

const OverlayDemo = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const handleToggleShow2 = () => {
    setVisible2(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const onClose2 = () => {
    setVisible2(false)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Button type="primary" onClick={handleToggleShow}>
            显示遮罩层
          </Button>
          <Overlay visible={visible} onClick={onClose}></Overlay>
        </Cell>
        <h2>嵌套内容</h2>
        <Cell>
          <Button type="success" onClick={handleToggleShow2}>
            嵌套内容
          </Button>
          <Overlay visible={visible2} onClick={onClose2}>
            <div className="wrapper">
              <div className="content">这里是正文</div>
            </div>
          </Overlay>
        </Cell>
      </div>
    </>
  )
}

export default OverlayDemo
