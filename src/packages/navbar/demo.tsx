import React from 'react'
import { NavBar } from './navbar'

const NavBarDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <NavBar
          title="订单详情"
          icon="share"
          leftShow={true}
          onClickTitle={(e) => alert('标题')}
          onClickBack={(e) => alert('返回')}
          onClickIcon={(e) => alert('icon')}
        ></NavBar>
        <NavBar
          title="浏览记录"
          desc="清空"
          leftShow={true}
          onClickTitle={(e) => alert('标题')}
          onClickBack={(e) => alert('返回')}
          onClickClear={(e) => alert('清空')}
        ></NavBar>
        <NavBar
          title="购物车"
          icon="more"
          desc="编辑"
          titIcon="locationg3"
          onClickTitle={(e) => alert('标题')}
          onClickBack={(e) => alert('返回')}
          onClickClear={(e) => alert('编辑')}
          onClickIcon={(e) => alert('icon')}
        ></NavBar>
      </div>
    </>
  )
}

export default NavBarDemo
