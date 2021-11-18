import React, { useEffect, useState } from 'react'
import { AnimatingNumbers } from './animatingnumbers'

const AnimatingNumbersDemo = () => {
  const [endNumer, setEndNumer] = useState('1570.99')
  useEffect(() => {
    setInterval(() => {
      setEndNumer(`${Math.floor(Math.random() * 999999)}.${Math.floor(Math.random() * 89 + 10)}`)
    }, 30000)
  }, [])
  return (
    <>
      <div className="demo">
        <h2>CountUp-基础用法</h2>
        <AnimatingNumbers.CountUp endNumer="678.94" />
        <h2>CountUp-自定义样式，动态修改数据（需要指定最大位数）</h2>
        <AnimatingNumbers.CountUp
          endNumer={endNumer}
          easeSpeed={1.2}
          maxLen={6}
          className="custom-coutup"
        />
      </div>
    </>
  )
}

export default AnimatingNumbersDemo
