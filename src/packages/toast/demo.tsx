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
    Toast.text(msg, { duration: 10 })
  }
  const iconToast = (msg: string) => {
    Toast.customIcon(msg, {
      duration: 0, //duration为0则一直展示
      icon: 'JD',
      id: '',
      center: true, // toast是否居中展示
      type: 'text',
      customClass: '', // 自定义样式名
      bottom: 30, // toast不居中时距离底部位置
      size: 'base', // 设置字体大小，默认base,可选large\small\base
      textAlignCenter: true, // 文字是否居中显示,true为居中，false为left
      bgColor: 'rgba(0, 0, 0, .8)',
      cover: true, //是否展示透明遮罩层
      coverColor: 'rgba(0, 0, 0, 0.4)', // 遮罩颜色设定
      closeOnClickOverlay: true, // 点击遮罩可关闭
      onClose: () => {
        console.log('closeToast')
      },
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
        <Cell
          title="关闭正在显示的toast"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => Toast.hide()}
        ></Cell>
        <h2>自定义icon图标</h2>
        <Cell
          title="传入icon组件中的'JD'图标"
          isLink={true}
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            iconToast('设置icon为JD')
          }
        ></Cell>
      </div>
    </>
  )
}

export default ToastDemo
