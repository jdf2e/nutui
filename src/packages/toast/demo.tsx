import React from 'react'
// import { Toast } from './toast'
import Toast from './index'

const ToastDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <div
          onClick={() => {
            console.log(111, Toast)
            console.log(111, Toast.success('这是一个特别长的提示!!!'))
          }}
        >
          click me
        </div>
        {/* <Toast type={'icon'} msg={'test'} icon={'JD'}></Toast> */}
      </div>
    </>
  )
}

export default ToastDemo
