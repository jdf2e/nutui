import React from 'react'
import { Drag } from './drag'
import { Button } from '../button/button'
const DragDemo = () => {
  const right = () => {
    return document.documentElement.clientWidth - 300 - 9
  }
  const bottom = () => {
    return document.documentElement.clientHeight - 559
  }
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <div className="demo">
      <h2>基础用法</h2>
      <Drag style={{ top: '120px', left: '8px' }}>
        <span style={btnStyle}>触摸移动</span>
      </Drag>
      <h2 style={{ top: '30px', position: 'relative' }}>限制拖拽方向</h2>
      <Drag direction={'x'} style={{ top: '200px', left: '8px' }}>
        <span style={btnStyle}>只能X轴拖拽</span>
      </Drag>
      <Drag direction={'y'} style={{ top: '200px', right: '50px' }}>
        <span style={btnStyle}>只能Y轴拖拽</span>
      </Drag>
      <h2 style={{ top: '60px', position: 'relative' }}>自动吸边</h2>
      <Drag direction={'x'} attract={true} style={{ top: '275px', left: '8px' }}>
        <span style={btnStyle}>拖动我</span>
      </Drag>
      <h2 style={{ top: '90px', position: 'relative' }}>限制拖动边界</h2>
      <div
        className="drag-boundary"
        style={{
          position: 'absolute',
          top: '360px',
          left: '8px',
          width: '300px',
          height: '200px',
          border: '1px solid red',
        }}
      ></div>
      <Drag
        boundary={{ top: 361, left: 9, bottom: bottom(), right: right() }}
        style={{ top: '400px', left: '50px' }}
      >
        <span style={btnStyle}>限制拖拽边界</span>
      </Drag>
    </div>
  )
}

export default DragDemo
