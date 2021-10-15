import React from 'react'
import { Tabbar, TabbarProps } from './tabbar'
//@ts-ignore todo..
const { TabbarItem } = Tabbar
const TabbarDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Tabbar
          tabSwitch={(child, idx) => {
            alert(idx)
          }}
        >
          <TabbarItem tabTitle="首页" icon="home"></TabbarItem>
          <TabbarItem tabTitle="分类" icon="category"></TabbarItem>
          <TabbarItem tabTitle="发现" icon="find"></TabbarItem>
          <TabbarItem tabTitle="购物车" icon="cart"></TabbarItem>
          <TabbarItem tabTitle="我的" icon="my"></TabbarItem>
        </Tabbar>

        <h2>自定义选中</h2>
        <Tabbar visible={2}>
          <TabbarItem tabTitle="首页" icon="home"></TabbarItem>
          <TabbarItem tabTitle="分类" icon="category"></TabbarItem>
          <TabbarItem tabTitle="发现" icon="find"></TabbarItem>
          <TabbarItem tabTitle="购物车" icon="cart"></TabbarItem>
          <TabbarItem tabTitle="我的" icon="my"></TabbarItem>
        </Tabbar>

        <h2>徽标提示</h2>
        <Tabbar>
          <TabbarItem tabTitle="首页" icon="home" num="11"></TabbarItem>
          <TabbarItem tabTitle="分类" icon="category"></TabbarItem>
          <TabbarItem tabTitle="发现" icon="find"></TabbarItem>
          <TabbarItem tabTitle="购物车" icon="cart" num="110"></TabbarItem>
          <TabbarItem tabTitle="我的" icon="my"></TabbarItem>
        </Tabbar>

        <h2>自定义颜色</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem tabTitle="首页" icon="home"></TabbarItem>
          <TabbarItem tabTitle="分类" icon="category"></TabbarItem>
          <TabbarItem tabTitle="发现" icon="find"></TabbarItem>
          <TabbarItem tabTitle="购物车" icon="cart"></TabbarItem>
          <TabbarItem tabTitle="我的" icon="my"></TabbarItem>
        </Tabbar>
        <h2>三个icon的tabbar</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem tabTitle="首页" icon="home"></TabbarItem>
          <TabbarItem tabTitle="分类" icon="category"></TabbarItem>
          <TabbarItem tabTitle="发现" icon="find"></TabbarItem>
        </Tabbar>
        <h2>固定底部，可自由跳转</h2>
        <Tabbar bottom={true}>
          <TabbarItem tabTitle="首页" href="" icon="home"></TabbarItem>
          <TabbarItem tabTitle="分类" icon="category"></TabbarItem>
          <TabbarItem tabTitle="发现" icon="find"></TabbarItem>
          <TabbarItem tabTitle="购物车" href="https://m.jd.com" icon="cart"></TabbarItem>
          <TabbarItem tabTitle="我的" href="######" icon="my"></TabbarItem>
        </Tabbar>
      </div>
    </>
  )
}

export default TabbarDemo
