import * as React from 'react'
import * as ReactDOM from 'react-dom'
import bem from '@/utils/bem'
import Icon from '../icon/index'
import './toast.scss'
export interface NotificationProps {
  prefixCls?: string
  style?: React.CSSProperties
  icon?: string
  message: string | React.ReactNode
  bottom?: boolean
  duration?: number
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
    bottom: false,
    duration: 1.5,
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
    const { style, icon, message, bottom } = this.props
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

            <span className={toastBem('text')}>{message}</span>
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
