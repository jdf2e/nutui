import React, {
  CSSProperties,
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'
import Trigger from './Trigger'
import ReactDOM from 'react-dom'
import './popover.scss'
import Icon from '@/packages/icon'
export interface PopoverProps {
  list: Array<any>
  theme: string
  location: string
  visible: boolean
  onClick: (e: MouseEvent) => void
}
export function findDOMNode<T = HTMLElement>(node: React.ReactInstance | HTMLElement): T {
  if (node instanceof HTMLElement) {
    return node as unknown as T
  }
  return ReactDOM.findDOMNode(node) as unknown as T
}
const getEleAttr = (ele: HTMLElement | Element) => {
  if (ele && ele.getBoundingClientRect) {
    return ele.getBoundingClientRect()
  }
  return null
}
export type PopoverType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
const defaultProps = {
  list: [],
  theme: 'light',
  location: 'bottom',
  visible: false,
  onClick: (e: MouseEvent) => {},
} as PopoverProps
export const Popover: FunctionComponent<Partial<PopoverProps>> = (props) => {
  const { children, list, theme, location, visible, onClick } = {
    ...defaultProps,
    ...props,
  }
  const goodItem = useRef(null)
  let aa = goodItem.current && findDOMNode(goodItem.current)
  setTimeout(() => {
    if (aa) {
      setElWidth((getEleAttr(aa) as any).width)
      setElHeight((getEleAttr(aa) as any).height)
    }
  })
  const [classes, setClasses] = useState('')
  const [elWidth, setElWidth] = useState(0)
  const [elHeight, setElHeight] = useState(0)
  const [popoverContent, setPopoverContent] = useState('')
  const [popoverArrow, setPopoverArrow] = useState('')
  useEffect(() => {
    setClasses(classes_self())
    setPopoverContent(popoverContent_self())
    setPopoverArrow(popoverArrow_self())
  }, [list, theme])
  const getStyle = () => {
    const style: CSSProperties = {}
    if (location == 'top') {
      style.bottom = elHeight + 20 + 'px'
      style.left = 0 + 'px'
    } else if (location == 'right') {
      style.top = 0 + 'px'
      style.right = -elWidth - 20 + 'px'
    } else if (location == 'left') {
      style.top = 0 + 'px'
      style.left = -elWidth - 20 + 'px'
    } else {
      style.top = elHeight + 20 + 'px'
      style.left = 0 + 'px'
    }
    console.log(style)
    return style
    // })
  }
  const getArrowStyle = () => {
    const style: CSSProperties = {}
    if (location == 'top') {
      style.bottom = -20 + 'px'
      style.left = elWidth / 2 + 'px'
    } else if (location == 'right') {
      style.top = 20 + 'px'
      style.left = -20 + 'px'
    } else if (location == 'left') {
      style.top = 20 + 'px'
      style.right = -20 + 'px'
    } else {
      style.left = elWidth / 2 + 'px'
      style.top = -20 + 'px'
    }
    return style
  }

  const classes_self = () => {
    const prefixCls = 'nut-popover'
    return `${prefixCls}
    ${theme ? `${prefixCls}--${theme}` : ''}`
  }
  const popoverContent_self = () => {
    const prefixCls = 'popoverContent'
    return `${prefixCls}
    ${location ? `${prefixCls}--${location}` : ''}`
  }
  const popoverArrow_self = () => {
    const prefixCls = 'popoverArrow'
    return `${prefixCls}
    ${location ? `${prefixCls}--${location}` : ''}`
  }

  // const showPopup = props.visible
  const handleClick = (e: any) => {
    if (props.onClick) {
      props.onClick(e)
    }
  }
  return (
    <div className={`${classes}`}>
      <Trigger forwardedRef={goodItem}>
        <div onClick={(e) => handleClick(e)}>
          {Array.isArray(children) ? children[0] : children}
          {visible ? (
            <div className={`${popoverContent}`} style={getStyle()}>
              <div className={`${popoverArrow}`} style={getArrowStyle()}>
                {' '}
              </div>
              {Array.isArray(children) ? children[1] : ''}
              {list.map((item) => {
                return (
                  <div key={item.name} className={`title-item ${item.disabled ? 'disabled' : ''}`}>
                    {item.icon ? <Icon className="item-img" name={item.icon}></Icon> : ''}
                    <div className="title-name">{item.name}</div>
                  </div>
                )
              })}
            </div>
          ) : (
            ''
          )}
        </div>
      </Trigger>
    </div>
  )
}

Popover.defaultProps = defaultProps
Popover.displayName = 'NutPopover'
