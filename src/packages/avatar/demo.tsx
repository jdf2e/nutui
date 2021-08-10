import React from 'react'
import { Avatar } from './avatar'

const AvatarDemo = () => {
  const handleClick = () => {
    console.log('触发点击头像')
  }
  return (
    <>
      <div className="demo">
        <h2>默认用法 (内置&quot;small&quot;,&quot;normal&quot;,&quot;large&quot;三种尺寸规格)</h2>
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
        <h2>修改形状</h2>
        <Avatar shape="square"></Avatar>
        <Avatar shape="round"></Avatar>
        <h2>修改背景色</h2>
        <Avatar bgColor="#FA2C19"></Avatar>
        <h2>修改背景图片</h2>
        <Avatar icon="https://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"></Avatar>
        <h2>可以修改头像的内容</h2>
        <Avatar icon="">N</Avatar>
        <h2>点击头像触发事件</h2>
        <Avatar icon="my" onClick={handleClick}></Avatar>
      </div>
    </>
  )
}

export default AvatarDemo
