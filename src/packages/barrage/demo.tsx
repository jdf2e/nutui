import React, { useRef } from 'react'
import Cell from '@/packages/cell'
import { Barrage } from './barrage'
import Button from '@/packages/button'
import './demo.scss'

interface danmuRefState {
  add: (word: string) => void
}

const BarrageDemo = () => {
  let list = ['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-']
  const danmuRef = useRef<danmuRefState>(null)
  const addDanmu = () => {
    let n = Math.random()
    if (danmuRef.current) {
      danmuRef.current.add('随机——' + String(n).substr(2, 10))
    }
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Barrage ref={danmuRef} danmu={list}></Barrage>
        </Cell>
        <div className="test" style={{ textAlign: 'center' }}>
          <Button type="danger" onClick={addDanmu}>
            随机添加
          </Button>
        </div>
      </div>
    </>
  )
}

export default BarrageDemo
