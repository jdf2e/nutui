import React from 'react'
import Toast from './index'

const ToastDemo = () => {
  const textToast = (msg: string) => {
    Toast.text(msg)
  }
  const successToast = (msg: string) => {
    Toast.success(msg)
  }
  const errorToast = (msg: string) => {
    Toast.fail(msg)
  }
  const warningToast = (msg: string) => {
    Toast.warn(msg)
  }
  const loadingToast = (msg: string) => {
    Toast.loading(msg)
  }
  const duringToast = (msg: string) => {
    Toast.text(msg, 10)
  }
  const iconToast = (msg: string) => {
    Toast.customIcon(msg, 5, 'JD')
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <div
          onClick={() => {
            textToast('网络失败，请稍后再试~')
          }}
        >
          Text 文字提示
        </div>
        <h2>成功提示</h2>
        <div
          onClick={() => {
            successToast('成功提示')
          }}
        >
          Success 成功提示
        </div>
        <h2>失败提示</h2>
        <div
          onClick={() => {
            errorToast('失败提示')
          }}
        >
          Error 失败提示
        </div>
        <h2>警告提示</h2>
        <div
          onClick={() => {
            warningToast('警告提示')
          }}
        >
          Warning 警告提示
        </div>
        <h2>加载提示</h2>
        <div
          onClick={() => {
            loadingToast('加载中')
          }}
        >
          Loading 加载提示
        </div>
        <h2>展示时长设置</h2>
        <div
          onClick={() => {
            duringToast('设置展示时长为10秒')
          }}
        >
          设置展示时长为10秒提示
        </div>
        <h2>自定义icon图标</h2>
        <div
          onClick={() => {
            iconToast('设置icon为JD图标')
          }}
        >
          传入icon组件中的'JD'图标
        </div>
      </div>
    </>
  )
}

export default ToastDemo
