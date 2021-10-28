import React, { useState } from 'react'
import { CircleProgress } from './circleprogress'
import Button from '@/packages/button'
import './demo.scss'

const CricleProgressDemo = () => {
  const [percent, setPercent] = useState(50)
  const [strokeInnerWidth, setStrokeInnerWidth] = useState(10)
  const progressOption = {
    radius: 50,
    strokeOutWidth: 10,
    backColor: '#d9d9d9',
    progressColor: 'red',
  }
  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setStrokeInnerWidth(0)
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    setStrokeInnerWidth(10)
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <div className="demo__piece">
          <CircleProgress progress={10}></CircleProgress>
        </div>

        <h2>环形进度条自定义样式</h2>
        <div className="demo__piece">
          <CircleProgress progress={50} progressOption={progressOption}></CircleProgress>
        </div>

        <h2>环形进度条自定义内容</h2>
        <div className="demo__piece">
          <CircleProgress progress={50} isAuto={true}>
            <div>自定义</div>
          </CircleProgress>
        </div>

        <h2>动态改变环形进度条的进度</h2>
        <div className="demo__piece">
          <CircleProgress
            progress={percent}
            progressOption={progressOption}
            strokeInnerWidth={strokeInnerWidth}
          ></CircleProgress>
        </div>
        <div className="demo__btn">
          <Button type="primary" onClick={setReduceVal}>
            减少
          </Button>
          <Button type="primary" onClick={setAddVal}>
            增加
          </Button>
        </div>
      </div>
    </>
  )
}

export default CricleProgressDemo
