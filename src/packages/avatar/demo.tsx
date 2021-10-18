import React from 'react'
import { Avatar } from './avatar'
import Cell from '@/packages/cell'
import './demo.scss'

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
          <Avatar icon="my" shape="square"></Avatar>
          <Avatar icon="my" shape="round"></Avatar>
        </Cell>
        <h2>修改背景色</h2>
        <Cell>
          <Avatar className="demo-avatar" bgColor="#FA2C19" icon="my"></Avatar>
        </Cell>
        <h2>修改背景图片</h2>
        <Cell>
          <Avatar icon="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"></Avatar>
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
