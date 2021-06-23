import React from 'react'
import { Avatar } from './avatar'
import Cell from '@/packages/cell'

const AvatarDemo = () => {
  const AvatarStyle = {
    alignItems: 'flex-end',
  }
  const handleClick = () => {
    console.log('触发点击头像')
  }
  return (
    <>
      <div className="demo">
        <h2>默认用法 (内置&quot;small&quot;,&quot;normal&quot;,&quot;large&quot;三种尺寸规格)</h2>
        <Cell style={AvatarStyle}>
          <Avatar
            size="large"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          ></Avatar>
          <Avatar
            size="normal"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          ></Avatar>
          <Avatar
            size="small"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          ></Avatar>
        </Cell>
        <h2>修改形状</h2>
        <Cell>
          <Avatar shape="square"></Avatar>
          <Avatar shape="round"></Avatar>
        </Cell>
        <h2>修改背景色</h2>
        <Cell>
          <Avatar bgColor="#FA2C19"></Avatar>
        </Cell>
        <h2>修改背景图片</h2>
        <Cell>
          <Avatar icon="https://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"></Avatar>
        </Cell>
        <h2>可以修改头像的内容</h2>
        <Cell>
          <Avatar icon="">N</Avatar>
        </Cell>
        <h2>点击头像触发事件</h2>
        <Cell>
          <Avatar icon="my" onClick={handleClick}></Avatar>
        </Cell>
      </div>
    </>
  )
}

export default AvatarDemo
