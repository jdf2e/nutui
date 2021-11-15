import * as React from 'react'
import * as ReactDOM from 'react-dom'
import bem from '@/utils/bem'
import Icon from '../icon/index'
import './toast.scss'
import classNames from 'classnames'
export interface NotificationProps {
  id?: string
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
  private closeTimer: number | undefined
  static newInstance: (properties: NotificationProps, callback: any) => void
  constructor(props: NotificationProps) {
    super(props)
    this.close = this.close.bind(this)
    this.startCloseTimer = this.startCloseTimer.bind(this)
    this.clearCloseTimer = this.clearCloseTimer.bind(this)
    this.close = this.close.bind(this)
    this.clickCover = this.clickCover.bind(this)
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
  clickCover() {
    const { closeOnClickOverlay } = this.props
    if (closeOnClickOverlay) {
      this.close()
    }
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  render() {
    const {
      style,
      icon,
      msg,
      bottom,
      center,
      bgColor,
      coverColor,
      textAlignCenter,
      size,
      customClass,
      cover,
      type,
    } = this.props
    const { show } = this.state
    const toastBem = bem('toast')

    const classes = classNames({
      ['nut-toast-center']: center,
      ['nut-toast-has-icon']: icon,
      ['nut-toast-cover']: cover,
      ['nut-toast-loading']: type === 'loading',
      customClass,
      ['nut-toast-' + size]: true,
    })
    return (
      <>
        <div
          className={`${toastBem()} ${classes}`}
          style={{
            bottom: center ? 'auto' : bottom + 'px',
            backgroundColor: cover ? coverColor : '',
          }}
          onClick={() => {
            this.clickCover()
          }}
        >
          <div
            className={toastBem('inner')}
            style={{ textAlign: textAlignCenter ? 'center' : 'left', backgroundColor: bgColor }}
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
  if (properties.id) {
    element.setAttribute('id', `${properties.id}`)
  }
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
