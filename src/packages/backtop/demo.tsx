import React from 'react'
import { BackTop } from './backtop'

const BackTopDemo = () => {
  const demoStyle = {
    height: '1600px',
  }
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }

  return (
    <>
      <div className="demo" style={demoStyle} id="elId">
        <h2>基础用法</h2>
        <div className="text-data" style={cellStyle}>
          我是测试数据1
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据2
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据3
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据4
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据5
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据6
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据7
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据8
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据9
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据10
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据11
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据12
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据13
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据14
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据15
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据16
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据17
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据18
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据19
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据20
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据21
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据22
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据23
        </div>
        <div className="text-data" style={cellStyle}>
          我是测试数据24
        </div>
        <BackTop
          className="test123"
          elId="elId"
          distance={200}
          bottom={100}
          isAnimation={false}
          style={{ color: 'red' }}
          backTopClick={() => {
            console.log('触发点击')
          }}
        >
          <div>无</div>
        </BackTop>
        <BackTop
          elId="elId"
          distance={200}
          backTopClick={() => {
            console.log('触发返回顶部')
          }}
        />
      </div>
    </>
  )
}

export default BackTopDemo
