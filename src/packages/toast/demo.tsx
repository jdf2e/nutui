import React from 'react'
import Toast from './index'
import { Cell } from '../cell/cell'

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
    Toast.customIcon(msg, 5, 'JD', () => {
      console.log('closeToast')
    })
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="Text文字提示"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            textToast('网络失败，请稍后再试~')
          }
        ></Cell>

        <h2>成功提示</h2>
        <Cell
          title="Success 成功提示"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            successToast('成功提示')
          }
        ></Cell>

        <h2>失败提示</h2>
        <Cell
          title="Error 失败提示"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            errorToast('失败提示')
          }
        ></Cell>

        <h2>警告提示</h2>
        <Cell
          title=" Warning 警告提示"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            warningToast('警告提示')
          }
        ></Cell>

        <h2>加载提示</h2>
        <Cell
          title=" Loading 加载提示"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            loadingToast('加载中')
          }
        ></Cell>

        <h2>展示时长设置</h2>
        <Cell
          title="设置展示时长为10秒提示"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            duringToast('设置展示时长为10秒')
          }
        ></Cell>
        <h2>自定义icon图标</h2>
        <Cell
          title="传入icon组件中的'JD'图标"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            iconToast('设置icon为JD图标')
          }
        ></Cell>
      </div>
    </>
  )
}

export default ToastDemo
