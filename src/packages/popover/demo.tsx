import React, { useState } from 'react'
import { Popover } from './popover'
import Button from '@/packages/button'
import Icon from '@/packages/icon'

const BadgeDemo = () => {
  let selfContentStyle = {
    width: '195px',
    display: 'flex',
    flexWrap: 'wrap',
  } as any
  let selfContentItem = {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as any
  let selfContentDesc = {
    marginTop: '5px',
    width: '60px',
    fontSize: '10px',
    textAlign: 'center',
  } as any
  let hTwo = {
    marginTop: '30px',
    marginBottom: '10px',
    fontSize: '14px',
    color: '#909ca4',
    padding: '0 10px',
    fontWeight: 400,
  } as any
  const itemList = [
    {
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
    },
  ]
  const iconItemList = [
    {
      name: '选项一',
      icon: 'my2',
    },
    {
      name: '选项二',
      icon: 'cart2',
    },
    {
      name: '选项三',
      icon: 'location2',
    },
  ]
  const itemListDisabled = [
    {
      name: '选项一',
      disabled: true,
    },
    {
      name: '选项二',
      disabled: true,
    },
    {
      name: '选项三',
    },
  ]
  const selfContent = [
    {
      name: 'service',
      desc: '选项一',
    },
    {
      name: 'notice',
      desc: '选项二',
    },
    {
      name: 'location',
      desc: '选项三',
    },
    {
      name: 'category',
      desc: '选项四',
    },
    {
      name: 'scan2',
      desc: '选项五',
    },
    {
      name: 'message',
      desc: '选项六',
    },
  ]
  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const [topLocation, setTopLocation] = useState(false)
  const [rightLocation, setRightLocation] = useState(false)
  const [leftLocation, setLeftLocation] = useState(false)
  const [customized, setCustomized] = useState(false)
  return (
    <>
      <div className="demo">
        <div>
          <h6 style={hTwo}>基础用法</h6>
          <Popover
            visible={lightTheme}
            onClick={() => {
              lightTheme ? setLightTheme(false) : setLightTheme(true)
            }}
            list={itemList}
          >
            <Button type="primary" shape="square">
              明朗风格
            </Button>
          </Popover>
          <Popover
            visible={darkTheme}
            theme="dark"
            onClick={() => {
              darkTheme ? setDarkTheme(false) : setDarkTheme(true)
            }}
            list={itemList}
          >
            <Button type="primary" shape="square">
              暗黑风格
            </Button>
          </Popover>
        </div>
        <div>
          <h6 style={hTwo}>选项配置</h6>
          <Popover
            visible={showIcon}
            theme="dark"
            onClick={() => {
              showIcon ? setShowIcon(false) : setShowIcon(true)
            }}
            list={iconItemList}
          >
            <Button type="primary" shape="square">
              展示图标
            </Button>
          </Popover>
          <Popover
            visible={disableAction}
            onClick={() => {
              disableAction ? setDisableAction(false) : setDisableAction(true)
            }}
            list={itemListDisabled}
          >
            <Button type="primary" shape="square">
              禁用选项
            </Button>
          </Popover>
        </div>
        <div>
          <h6 style={hTwo}>自定义内容</h6>
          <Popover
            visible={customized}
            onClick={() => {
              customized ? setCustomized(false) : setCustomized(true)
            }}
          >
            <Button type="primary" shape="square">
              自定义内容
            </Button>
            {customized ? (
              <div className="self-content" style={selfContentStyle}>
                {selfContent.map((item: any) => {
                  return (
                    <div className="self-content-item" style={selfContentItem} key={item.name}>
                      <Icon name={item.name} size="15"></Icon>
                      <div className="self-content-desc" style={selfContentDesc}>
                        {item.desc}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              ''
            )}
          </Popover>
        </div>
        <div>
          <h6 style={hTwo}>位置自定义</h6>
          <Popover
            visible={topLocation}
            location="top"
            theme="dark"
            onClick={() => {
              topLocation ? setTopLocation(false) : setTopLocation(true)
            }}
            list={iconItemList}
          >
            <Button type="primary" shape="square">
              向上弹出
            </Button>
          </Popover>
          <h2 style={hTwo}></h2>
          <Popover
            visible={rightLocation}
            location="right"
            theme="dark"
            onClick={() => {
              rightLocation ? setRightLocation(false) : setRightLocation(true)
            }}
            list={iconItemList}
          >
            <Button type="primary" shape="square">
              向右弹出
            </Button>
          </Popover>
          <Popover
            visible={leftLocation}
            location="left"
            theme="dark"
            onClick={() => {
              leftLocation ? setLeftLocation(false) : setLeftLocation(true)
            }}
            list={iconItemList}
          >
            <Button type="primary" shape="square">
              向左弹出
            </Button>
          </Popover>
        </div>
      </div>
    </>
  )
}

export default BadgeDemo
