import React, { useRef } from 'react'
import Cell from '@/packages/cell'
import { Barrage } from './barrage'
import Button from '@/packages/button'
import './demo.scss'

interface barrageRefState {
  add: (word: string) => void
}

const BarrageDemo = () => {
  let list = ['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-']
  const barrageRef = useRef<barrageRefState>(null)
  const addBarrage = () => {
    let n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add('随机——' + String(n).substr(2, 10))
    }
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Barrage ref={barrageRef} barrageList={list}></Barrage>
        </Cell>
        <div className="test" style={{ textAlign: 'center' }}>
          <Button type="danger" onClick={addBarrage}>
            随机添加
          </Button>
        </div>
      </div>
    </>
  )
}

export default BarrageDemo
