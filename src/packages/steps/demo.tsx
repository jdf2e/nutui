import React, { useState } from 'react'
import { Steps } from './steps'
import Button from '@/packages/button'
import Step from '@/packages/step'
import './demo.scss'

const StepsDemo = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <div className="demo padding">
        <h2>基本用法</h2>
        <div className="steps-wrapper">
          <Steps current={stepState.current1}>
            <Step activeIndex={1} title="步骤一">
              1
            </Step>
            <Step activeIndex={2} title="步骤二">
              2
            </Step>
            <Step activeIndex={3} title="步骤三">
              3
            </Step>
          </Steps>
          <div className="steps-button">
            <Button type="danger" onClick={() => handleStep('current1')}>
              下一步
            </Button>
          </div>
        </div>
        <h2>标题和描述信息</h2>
        <div className="steps-wrapper">
          <Steps current={stepState.current2}>
            <Step activeIndex={1} title="步骤一" content="步骤描述">
              1
            </Step>
            <Step activeIndex={2} title="步骤二" content="步骤描述"></Step>
            <Step activeIndex={3} title="步骤三" content="步骤描述"></Step>
          </Steps>
          <div className="steps-button" style={{ marginTop: '10px' }}>
            <Button type="danger" onClick={() => handleStep('current2')}>
              下一步
            </Button>
          </div>
        </div>
        <h2>自定义图标</h2>
        <div className="steps-wrapper">
          <Steps current={1}>
            <Step activeIndex={1} title="已完成" icon="service">
              1
            </Step>
            <Step activeIndex={2} title="进行中" icon="people">
              2
            </Step>
            <Step activeIndex={3} title="未开始" icon="location2">
              3
            </Step>
          </Steps>
        </div>
        <h2>竖向步骤条</h2>
        <div className="steps-wrapper" style={{ height: '300px', padding: '15px 30px' }}>
          <Steps direction="vertical" current={2}>
            <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
              1
            </Step>
            <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
              2
            </Step>
            <Step
              activeIndex={3}
              title="未开始"
              content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
            >
              3
            </Step>
          </Steps>
        </div>
        <h2>竖向步骤条</h2>
        <div className="steps-wrapper" style={{ height: '300px', padding: '15px 40px' }}>
          <Steps direction="vertical" progressDot current={2}>
            <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
              1
            </Step>
            <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
              2
            </Step>
            <Step
              activeIndex={3}
              title="未开始"
              renderContent={() => (
                <>
                  <p>收货地址为：</p>
                  <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
                </>
              )}
            >
              3
            </Step>
          </Steps>
        </div>
      </div>
    </>
  )
}

export default StepsDemo
