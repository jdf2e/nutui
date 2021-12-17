import React, { HTMLAttributes } from 'react'
interface TriggerProps {
  className?: string | undefined
  // onMouseEnter: () => void
  // onMouseLeave: () => void
  // onFocus: () => void
  // onClick: (e: any) => void
  // onKeyPress?: () => void
  forwardedRef: React.RefObject<HTMLElement>
}
interface TriggerState {}
/**
 * 过滤ref
 */
export function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node)
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    ;(ref as any).current = node
  }
}

/**
 * 将ref合并到一个ref函数中以支持ref传递
 */
export function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node)
    })
  }
}
const ALL_HANDLERS = [
  // 'onClick',
  // 'onMouseDown',
  // 'onTouchStart',
  // 'onMouseEnter',
  // 'onMouseLeave',
  // 'onFocus',
  // 'onBlur',
  // 'onContextMenu',
]

export default class Trigger extends React.Component<TriggerProps, TriggerState> {
  constructor(props: any) {
    super(props)
    // ALL_HANDLERS.forEach((h) => {
    //  ( this as any)[`fire${h}`] = (e: any) => {
    //     this.fireEvents(h, e)
    //   }
    // })
  }
  fireEvents(type: string, e: Event) {
    const childCallback = (this.props.children as React.ReactElement).props[type]
    if (childCallback) {
      childCallback(e)
    }
    const callback = (this.props as any)[type]
    if (callback) {
      callback(e)
    }
  }
  render() {
    const { children, className = '' } = this.props
    const child = React.Children.only(children) as React.ReactElement
    const newChildProps: HTMLAttributes<HTMLElement> & { key: string } = {
      key: 'trigger',
    }
    // newChildProps.onClick = (e: any) => {
    //   this.fireEvents('onClick', e)
    // }
    // newChildProps.onMouseEnter = (e: any) => {
    //   this.fireEvents('onMouseEnter', e)
    // }
    // newChildProps.onMouseLeave = (e: any) => {
    //   this.fireEvents('onMouseLeave', e)
    // }
    // newChildProps.onFocus = (e: any) => {
    //   this.fireEvents('onMouseLeave', e)
    // }
    // newChildProps.onKeyPress = (e: any) => {
    //   this.fireEvents('onMouseLeave', e)
    // }
    if (child && child.props && child.props.className) {
      newChildProps.className = className
    }
    const cloneProps: any = {
      ...newChildProps,
    }
    cloneProps.ref = composeRef(this.props.forwardedRef, (child as any).ref)
    const trigger = React.cloneElement(child, cloneProps)
    return trigger
  }
}
