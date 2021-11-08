import * as React from 'react'
import * as ReactDOM from 'react-dom'
import bem from '@/utils/bem'
import Icon from '../icon/index'
import './toast.scss'
export interface NotificationProps {
  prefixCls?: string
  style?: React.CSSProperties
  icon?: string
  msg: string | React.ReactNode
  bottom?: boolean
  duration?: number
  center: boolean
  type: string
  customClass: string
  size: string | number
  textAlignCenter: boolean
  loadingRotate: boolean
  bgColor: string
  cover: boolean
  coverColor: string
  closeOnClickOverlay: boolean
  onClose: () => void
  className?: string
}

interface State {
  show: boolean
}

export default class Notification extends React.PureComponent<NotificationProps, State> {
  static defaultProps = {
    // prefixCls: 'nut-toast',
    style: {},
    show: false,
    duration: 3,
    msg: '',
    id: '',
    center: true, // 未实现
    type: 'text',
    customClass: '', // 未实现
    bottom: 30, // 未实现
    size: 'base', // 未实现
    icon: null, // 未实现
    textAlignCenter: true, // 未实现
    loadingRotate: true, // 未实现
    bgColor: 'rgba(0, 0, 0, .8)',
    onClose: null, // 未实现
    cover: false, //透明遮罩层 // 未实现
    coverColor: 'rgba(0, 0, 0, 0)', // 未实现
    closeOnClickOverlay: false, // 未实现
  }
  private closeTimer: number | undefined
  static newInstance: (properties: NotificationProps, callback: any) => void
  constructor(props: NotificationProps) {
    super(props)
    this.close = this.close.bind(this)
    this.startCloseTimer = this.startCloseTimer.bind(this)
    this.clearCloseTimer = this.clearCloseTimer.bind(this)
    this.close = this.close.bind(this)
    this.state = {
      show: true,
    }
  }

  close() {
    this.setState({
      show: false,
    })
    this.clearCloseTimer()
    this.props.onClose()
  }

  startCloseTimer() {
    const { duration } = this.props
    if (duration) {
      this.closeTimer = window.setTimeout(() => {
        this.close()
      }, duration * 1000)
    }
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = -1
    }
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  render() {
    const { style, icon, msg, bottom } = this.props
    const { show } = this.state
    const toastBem = bem('toast')
    return (
      <>
        <div className={toastBem()} style={{ bottom: 'auto', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <div
            className={toastBem('inner')}
            style={{ bottom: 'auto', backgroundColor: 'rgba(0, 0, 0, .8)' }}
          >
            {icon ? (
              <p className={toastBem('icon-wrapper')}>
                <Icon name={icon ? icon : ''} size="20" />
              </p>
            ) : null}

            <span className={toastBem('text')}>{msg}</span>
          </div>
        </div>
      </>
    )
  }
}

Notification.newInstance = (properties, callback) => {
  const element = document.createElement('div')
  document.body.appendChild(element)

  let called = false
  function ref(instance: any) {
    if (called) {
      return
    }
    called = true

    callback({
      component: instance,
      destroy() {
        ReactDOM.unmountComponentAtNode(element)
        element && element.parentNode && element.parentNode.removeChild(element)
      },
    })
  }

  ReactDOM.render(<Notification {...properties} ref={ref} />, element)
}
