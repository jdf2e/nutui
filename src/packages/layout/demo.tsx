import React from 'react'
import Row from '@/packages/row'
import Col from '@/packages/col'
import './demo.scss'

const LayoutDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础布局</h2>
        <div className="box-item">
          <Row>
            <Col span="24">
              <div className="flex-content">span:24</div>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <div className="flex-content">span:12</div>
            </Col>
            <Col span="12">
              <div className="flex-content flex-content-light">span:12</div>
            </Col>
          </Row>
          <Row>
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content flex-content-light">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
          </Row>
        </div>
        <h2>分栏间隔</h2>
        <div className="box-item">
          <Row gutter="10">
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content flex-content-light">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
          </Row>
        </div>
        <h2>Flex布局</h2>
        <div className="box-item">
          <Row type="flex" wrap="nowrap">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="end">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default LayoutDemo
