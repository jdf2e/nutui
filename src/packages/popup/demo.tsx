import React, { useState } from 'react'
import Cell from '@/packages/cell'
import Popup from '@/packages/popup'
import './demo.scss'

const PopupDemo = () => {
  const [showBasic, setShowBasic] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [showIconPosition, setShowIconPosition] = useState(false)
  const [showIconDefine, setShowIconDefine] = useState(false)
  const [showBottomRound, setShowBottomRound] = useState(false)

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="展示弹出层"
          isLink
          onClick={() => {
            setShowBasic(true)
          }}
        ></Cell>
        <Popup
          visible={showBasic}
          style={{ padding: '30px 50px' }}
          onClose={() => {
            setShowBasic(false)
          }}
        >
          正文
        </Popup>

        <h2>弹出位置</h2>
        <Cell
          title="顶部弹出"
          isLink
          onClick={() => {
            setShowTop(true)
          }}
        ></Cell>
        <Popup
          visible={showTop}
          style={{ height: '20%' }}
          position="top"
          onClose={() => {
            setShowTop(false)
          }}
        ></Popup>
        <Cell
          title="底部弹出"
          isLink
          onClick={() => {
            setShowBottom(true)
          }}
        ></Cell>
        <Popup
          visible={showBottom}
          style={{ height: '20%' }}
          position="bottom"
          onClose={() => {
            setShowBottom(false)
          }}
        ></Popup>
        <Cell
          title="左侧弹出"
          isLink
          onClick={() => {
            setShowLeft(true)
          }}
        ></Cell>
        <Popup
          visible={showLeft}
          style={{ width: '20%', height: '100%' }}
          position="left"
          onClose={() => {
            setShowLeft(false)
          }}
        ></Popup>
        <Cell
          title="右侧弹出"
          isLink
          onClick={() => {
            setShowRight(true)
          }}
        ></Cell>
        <Popup
          visible={showRight}
          style={{ width: '20%', height: '100%' }}
          position="right"
          onClose={() => {
            setShowRight(false)
          }}
        ></Popup>

        <h2>关闭图标</h2>
        <Cell
          title="关闭图标"
          isLink
          onClick={() => {
            setShowIcon(true)
          }}
        ></Cell>
        <Popup
          closeable
          visible={showIcon}
          style={{ height: '20%' }}
          position="bottom"
          onClose={() => {
            setShowIcon(false)
          }}
        ></Popup>
        <Cell
          title="图标位置"
          isLink
          onClick={() => {
            setShowIconPosition(true)
          }}
        ></Cell>
        <Popup
          closeable
          visible={showIconPosition}
          style={{ height: '20%' }}
          closeIconPosition="top-left"
          position="bottom"
          onClose={() => {
            setShowIconPosition(false)
          }}
        ></Popup>
        <Cell
          title="自定义图标"
          isLink
          onClick={() => {
            setShowIconDefine(true)
          }}
        ></Cell>
        <Popup
          closeable
          visible={showIconDefine}
          style={{ height: '20%' }}
          closeIcon="heart"
          position="bottom"
          onClose={() => {
            setShowIconDefine(false)
          }}
        ></Popup>

        <h2>圆角弹框</h2>
        <Cell
          title="圆角弹框"
          isLink
          onClick={() => {
            setShowBottomRound(true)
          }}
        ></Cell>
        <Popup
          closeable
          visible={showBottomRound}
          style={{ height: '20%' }}
          position="bottom"
          round
          onClose={() => {
            setShowBottomRound(false)
          }}
        ></Popup>
      </div>
    </>
  )
}

export default PopupDemo
