import React, { useState } from 'react'
import { Collapse } from './collapse'
import { CollapseItem } from './collapseItem'
const CollapseDemo = () => {
  const [currIndex, setCurrIndex] = useState(2)
  const [domData, setDomData] = useState([
    {
      title: '标题1',
      name: '1',
      data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
    },
    {
      title: '标题12',
      name: '2',
      data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
    },
    {
      title: '标题13',
      name: '3',
      data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
    },
  ])
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  const changeData = () => {
    const newData = [
      {
        title: '标题21',
        name: '1',
        data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
      },
      {
        title: '标题22',
        name: '2',
        data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
      },
      {
        title: '标题23',
        name: '3',
        data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
      },
    ]
    setDomData(newData)
    setCurrIndex(3)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Collapse activeName={['1', '2']} icon="arrow-down" iconSize="16" iconColor="#999">
          <CollapseItem title="标题1" name="1">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3" disabled>
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>无icon样式，绑定点击事件</h2>
        <Collapse activeName={['1', '2']} change={(isOpen, name) => changeEnv(isOpen, name)}>
          <CollapseItem title="标题1" name="1">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>手风琴</h2>
        <Collapse activeName={['1']} accordion={true} icon="arrow-down">
          <CollapseItem title="标题1" name="1" subTitle={'文本内容'}>
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>自定义折叠图标</h2>
        <Collapse activeName={['1']} accordion={true} icon="arrow-right2" rotate={90}>
          <CollapseItem title="标题1" name="1" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>自定义title图标</h2>
        <Collapse activeName={['1']} accordion={true} icon="arrow-down">
          <CollapseItem
            title="标题1"
            name="1"
            titleIcon="checked"
            titleSize="16"
            titleColor="red"
            titlePosition="left"
          >
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem
            title="标题2"
            name="2"
            titleIcon={'heart-fill'}
            titleColor={'red'}
            titlePosition={'right'}
          >
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>

        <h2>动态改变数据</h2>
        <Collapse activeName={currIndex} accordion={true}>
          {domData.map((item, index) => {
            return (
              <CollapseItem title={item.title} name={item.name} key={index}>
                {item.data}
              </CollapseItem>
            )
          })}
        </Collapse>
        <button onClick={() => changeData()}>点击我</button>
      </div>
    </>
  )
}

export default CollapseDemo
