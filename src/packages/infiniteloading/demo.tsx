import React, { useState, useEffect } from 'react'
import { Infiniteloading } from './infiniteloading'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'
import './demo.scss'

const InfiniteloadingDemo = () => {
  const [defultList, setDefultList] = useState<string[]>([])
  const [customList, setCustomList] = useState<string[]>([])
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [customHasMore, setCustomHasMore] = useState(true)
  const [refreshHasMore, setRefreshHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const loadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = defultList.length
      for (let i = curLen; i < curLen + 10; i++) {
        defultList.push(`${i}`)
      }
      if (defultList.length >= 30) {
        setHasMore(false)
      } else {
        setDefultList([...defultList])
      }
      done()
    }, 500)
  }

  const refreshLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = refreshList.length
      for (let i = curLen; i < curLen + 10; i++) {
        refreshList.push(`${i}`)
      }
      if (refreshList.length >= 30) {
        setRefreshHasMore(false)
      } else {
        setRefreshList([...refreshList])
      }
      done()
    }, 500)
  }

  const customLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = customList.length
      for (let i = curLen; i < curLen + 10; i++) {
        customList.push(`${i}`)
      }
      if (customList.length >= 30) {
        setCustomHasMore(false)
      } else {
        setCustomList([...customList])
      }
      done()
    }, 500)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      Toast.text('刷新成功')
      done()
    }, 1000)
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defultList.push(`${i}`)
      customList.push(`${i}`)
      refreshList.push(`${i}`)
    }
    setDefultList([...defultList])
    setCustomList([...customList])
    setRefreshList([...refreshList])
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <ul className="infiniteUl" id="scroll">
            <Infiniteloading
              containerId="scroll"
              useWindow={false}
              hasMore={hasMore}
              loadMore={loadMore}
            >
              {defultList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </Infiniteloading>
          </ul>
        </Cell>

        <h2>下拉刷新</h2>
        <Cell>
          <ul className="infiniteUl" id="refreshScroll">
            <Infiniteloading
              pullIcon="JD"
              containerId="refreshScroll"
              useWindow={false}
              isOpenRefresh={true}
              hasMore={refreshHasMore}
              loadMore={refreshLoadMore}
              refresh={refresh}
            >
              {refreshList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </Infiniteloading>
          </ul>
        </Cell>

        <h2>自定义加载文案</h2>
        <Cell>
          <ul className="infiniteUl" id="customScroll">
            <Infiniteloading
              containerId="customScroll"
              useWindow={false}
              loadTxt="loading"
              loadMoreTxt="没有啦～"
              hasMore={customHasMore}
              loadMore={customLoadMore}
            >
              {customList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </Infiniteloading>
          </ul>
        </Cell>
      </div>
    </>
  )
}

export default InfiniteloadingDemo
