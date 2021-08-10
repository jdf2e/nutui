import React, { useState } from 'react'
import { Button } from './button'
const ButtonDemo = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <div className="demo">
        <h2>按钮类型</h2>
        <Button className="aa" style={{ margin: 8 }} type="primary" shape="round">
          主要按钮
        </Button>
        <Button type="info" style={{ margin: 8 }} shape="round">
          信息按钮
        </Button>
        <Button shape="round" style={{ margin: 8 }}>
          默认按钮
        </Button>
        <Button type="danger" style={{ margin: 8 }} shape="round">
          危险按钮
        </Button>
        <Button type="warning" style={{ margin: 8 }}>
          警告按钮
        </Button>
        <Button type="success" style={{ margin: 8 }}>
          成功按钮
        </Button>

        <h2>朴素按钮</h2>
        <Button plain={true} style={{ margin: 8 }} type="primary">
          朴素按钮
        </Button>
        <Button plain={true} style={{ margin: 8 }} type="info">
          朴素按钮
        </Button>
        <h2>禁用状态</h2>
        <Button disabled style={{ margin: 8 }} type="primary">
          禁用状态
        </Button>
        <Button plain={true} disabled style={{ margin: 8 }} type="info">
          禁用状态
        </Button>
        <Button plain={true} disabled style={{ margin: 8 }} type="primary">
          禁用状态
        </Button>
        <h2>加载状态</h2>
        <Button loading type="info" style={{ margin: 8 }}></Button>
        <Button loading type="warning" style={{ margin: 8 }}>
          加载中
        </Button>
        <Button
          loading={loading}
          type="success"
          onClick={() => {
            setTimeout(() => {
              setLoading(false)
            }, 1500),
              setLoading(!loading)
          }}
          style={{ margin: 8 }}
        >
          Click me!
        </Button>
        <h2>按钮尺寸</h2>
        <Button shape="square" plain type="primary" icon="star-fill" style={{ margin: 8 }}></Button>
        <Button shape="square" type="primary" icon="star" style={{ margin: 8 }}>
          收藏
        </Button>
        <h2>按钮尺寸</h2>
        <Button size="large" type="primary">
          大号按钮
        </Button>
        <Button type="primary" style={{ margin: 8 }}>
          普通按钮
        </Button>
        <Button size="small" style={{ margin: 8 }} type="primary">
          小型按钮
        </Button>
        <h2>块级元素</h2>
        <Button block type="primary">
          块级元素
        </Button>
        <h2>自定义颜色</h2>
        <Button color="#7232dd" style={{ margin: 8 }}>
          单色按钮
        </Button>
        <Button color="#7232dd" plain={true} style={{ margin: 8 }}>
          单色按钮
        </Button>
        <Button color="linear-gradient(to right, #ff6034, #ee0a24)" style={{ margin: 8 }}>
          渐变按钮
        </Button>
      </div>
    </>
  )
}

export default ButtonDemo
