import React, { CSSProperties, FunctionComponent, useEffect, useRef, useState } from 'react'
import './countup.scss'
import bem from '@/utils/bem'

export interface CountUpProps {
  maxLen: number
  endNumer: string
  delaySpeed?: number
  easeSpeed: number
  thousands: boolean
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  maxLen: 0,
  endNumer: '',
  delaySpeed: 300,
  easeSpeed: 1,
  thousands: false,
  className: '',
} as CountUpProps
export const CountUp: FunctionComponent<Partial<CountUpProps>> = (props) => {
  const { maxLen, endNumer, delaySpeed, easeSpeed, className, thousands, ...reset } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('countup')
  const countupRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef(0)
  const numbers = Array.from({ length: 10 }).map((item, index) => {
    return index
  })

  const getShowNumber = () => {
    const splitArr = endNumer.split('.')
    const intNumber =
      maxLen && splitArr[0].length < maxLen
        ? (Array(maxLen).join('0') + splitArr[0]).slice(-maxLen)
        : splitArr[0]
    const currNumber = `${
      thousands ? intNumber.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') : intNumber
    }${splitArr[1] ? '.' : ''}${splitArr[1] || ''}`
    return currNumber.split('')
  }

  const numerArr = getShowNumber()

  const setNumberTransform = () => {
    if (countupRef.current) {
      const numberItems = countupRef.current.querySelectorAll('.nut-countup__number')
      const numberFilterArr: Array<string> = numerArr.filter((item: any) => !isNaN(item))
      for (let [index] of Object.entries(numberItems)) {
        const elem = numberItems[Number(index)] as HTMLElement
        const idx = Number(numberFilterArr[Number(index)])
        if ((idx || idx == 0) && elem) {
          const transform = `translate(0, -${(idx == 0 ? 10 : idx) * 5}%)`
          elem.style.transform = transform
          elem.style.webkitTransform = transform
        }
      }
    }
  }

  const numberEaseStyle: CSSProperties = {
    transition: `transform ${easeSpeed}s ease-in-out`,
  }

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      setNumberTransform()
    }, delaySpeed)
    return () => {
      window.clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    setNumberTransform()
  }, [numerArr])

  return (
    <div className={`${b()} ${className}`} ref={countupRef}>
      <ul className={b('list')}>
        {numerArr.map((item: any, idx: number) => {
          return (
            <li className={`${b('listitem', { number: !isNaN(item) ? true : false })}`} key={idx}>
              {!isNaN(item) ? (
                <span className={b('number')} style={numberEaseStyle}>
                  {[...numbers, ...numbers].map((number, subidx) => {
                    return <span key={subidx}>{number}</span>
                  })}
                </span>
              ) : (
                <span className={b('separator')}>{item}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CountUp.defaultProps = defaultProps
CountUp.displayName = 'NutCountUp'
