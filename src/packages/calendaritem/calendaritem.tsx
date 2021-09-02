import React, { FunctionComponent, ReactHTML, useState } from 'react'
import bem from '@/utils/bem'
import Utils from '../../utils/date'
import requestAniFrame from '../../utils/raf'
import './calendaritem.scss'
import { render } from 'react-dom'

type InputDate = string | string[]
interface CalendarItemProps {
  type: string
  isAutoBackFill: boolean
  poppable: boolean
  title: string
  defaultValue: string | null
  startDate: string
  endDate: string
  choose: (e: MouseEvent) => void
  update: (e: MouseEvent) => void
  close: (e: MouseEvent) => void
}
interface CalendarState {
  weeks: string[]
  yearMonthTitle: string
  currDate: InputDate
  unLoadPrev: boolean
  touchParams: any
  transformY: number
  translateY: number
  scrollDistance: number
  defaultData: InputDate
  chooseData: any
  monthsData: any[]
  dayPrefix: string
  startData: InputDate
  endData: InputDate
  isRange: boolean
  timer: number
}
interface Day {
  day: string | number
  type: string
}
interface MonthInfo {
  curData: string[] | string
  title: string
  monthData: Day[]
}

function pxCheck(value: string | number): string {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}
const defaultProps: CalendarItemProps = {
  type: 'one',
  isAutoBackFill: false,
  poppable: true,
  title: '日历选择',
  defaultValue: null,
  startDate: Utils.getDay(0),
  endDate: Utils.getDay(365),
  choose: () => {},
  update: () => {},
  close: () => {},
}
class CalendarItem extends React.Component<Partial<CalendarItemProps>> {
  state: CalendarState
  static displayName: string
  months: React.RefObject<unknown>
  monthsPanel: React.RefObject<unknown>
  weeksPanel: React.RefObject<unknown>
  constructor(props: CalendarItemProps) {
    super(props)
    this.months = React.createRef()
    this.monthsPanel = React.createRef()
    this.weeksPanel = React.createRef()
    this.state = {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      yearMonthTitle: '',
      currDate: '',
      unLoadPrev: false,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0,
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: 'calendar-month-day',
      startData: '',
      endData: '',
      isRange: props.type === 'range',
      timer: 0,
    }
  }

  b = bem('calendar')

  // choose = (e: MouseEvent) => {
  //   if (this.props?.choose) {
  //     this.props?.choose(e)
  //   }
  // }
  // // 日期转化成数组
  // splitDate = (date: string) => {
  //   return date.split('-')
  // }
  // isStart = (currDate: string) => {
  //   return Utils.isEqual(this.state?.currDate[0], currDate)
  // }
  // isEnd = (currDate: string) => {
  //   return Utils.isEqual(this.state?.currDate[1], currDate)
  // }
  // //计算滚动方向和距离
  // setMove = (move: number, type?: string, time?: number) => {
  //   let updateMove = move + this.state.transformY
  //   const h = this.months?.offsetHeight || 0
  //   const offsetHeight = this?.monthsPanel?.offsetHeight || 0
  //   if (type === 'end') {
  //     // 限定滚动距离
  //     if (updateMove > 0) {
  //       updateMove = 0
  //     }
  //     if (updateMove < 0 && updateMove < -offsetHeight + h) {
  //       updateMove = -offsetHeight + h
  //     }
  //     if (offsetHeight <= h && this.state.monthsData?.length == 1) {
  //       updateMove = 0
  //     }
  //     // setTransform(updateMove, type, time)
  //   } else {
  //     if (updateMove > 0 && updateMove > 100) {
  //       updateMove = 100
  //     }
  //     if (updateMove < -offsetHeight + h - 100 && this.state.monthsData?.length > 1) {
  //       updateMove = -offsetHeight + h - 100
  //     }
  //     if (updateMove < 0 && updateMove < -100 && this.state.monthsData?.length == 1) {
  //       updateMove = -100
  //     }
  //     // setTransform(updateMove)
  //   }
  // }
  // // 设置月份滚动距离和速度
  // setTransform = (translateY = 0, type?: string, time = 1000) => {
  //   if (this.monthsPanel?.value) {
  //     if (type === 'end') {
  //       // this.monthsPanel?.value.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`
  //       clearTimeout(this.state.timer)
  //       const timer = setTimeout(() => {
  //         // loadScroll()
  //       }, time)
  //       this.setState({ timer })
  //     } else {
  //       // this.monthsPanel?.value.style.webkitTransition = ''
  //       // loadScroll()
  //     }
  //     // this.monthsPanel?.value.style.webkitTransform = `translateY(${translateY}px)`
  //     this.setState({
  //       scrollDistance: translateY,
  //     })
  //   }
  // }
  // //监听月份
  // // 监听月份滚动，改变月份标题
  // loadScroll = () => {
  //   if (!this.props.poppable) {
  //     return false
  //   }
  //   requestAniFrame(() => {
  //     if (this.weeksPanel?.value && this.monthsPanel?.value) {
  //       const top = this.weeksPanel?.value.getBoundingClientRect().bottom
  //       const monthsDoms = this.monthsPanel?.value.querySelectorAll('.calendar-month')
  //       for (let i = 0; i < monthsDoms.length; i++) {
  //         if (
  //           monthsDoms[i].getBoundingClientRect().top <= top &&
  //           monthsDoms[i].getBoundingClientRect().bottom >= top
  //         ) {
  //           this.setState({ yearMonthTitle: this.state.monthsData[i].title })
  //         } else if (this.state.scrollDistance === 0) {
  //           this.setState({ yearMonthTitle: monthsData[0].title })
  //         }
  //       }
  //     }
  //   })
  // }

  // // 监听touch开始
  // touchStart = (event: any) => {
  //   const changedTouches = event.changedTouches[0]
  //   let touchParams = Object.assign({}, this.state.touchParams, {
  //     startY: changedTouches.pageY,
  //     startTime: event.timeStamp || Date.now(),
  //   })
  //   // console.log('touchStart:', event, data, this.state.scrollDistance)
  //   this.setState({
  //     touchParams,
  //     transformY: this.state.scrollDistance,
  //   })
  // }

  // // 监听touchmove
  // touchMove = (event: TouchEvent) => {
  //   event.preventDefault()
  //   const changedTouches = event.changedTouches[0]
  //   let touchParams = Object.assign({}, this.state.touchParams, {
  //     lastY: changedTouches.pageY,
  //     lastTime: event.timeStamp || Date.now(),
  //   })
  //   this.setState({ touchParams })
  //   const move = this.state.touchParams.lastY - this.state.touchParams.startY
  //   if (Math.abs(move) < 5) {
  //     return false
  //   }
  //   this.setMove(move)
  // }
  // // 获取当前数据
  // getCurrDate = (day: Day, month: MonthInfo, isRange?: boolean) => {
  //   return isRange
  //     ? month.curData[3] + '-' + month.curData[4] + '-' + Utils.getNumTwoBit(+day.day)
  //     : month.curData[0] + '-' + month.curData[1] + '-' + Utils.getNumTwoBit(+day.day)
  // }
  // // 区间选择&&当前月&&选中态
  // isActive = (day: Day, month: MonthInfo) => {
  //   return (
  //     this.state.isRange &&
  //     day.type == 'curr' &&
  //     this.getClass(day, month) == 'calendar-month-day-active'
  //   )
  // }
  // // 获取样式
  // getClass = (day: Day, month: MonthInfo, isRange?: boolean) => {
  //   const currDate = getCurrDate(day, month, isRange)
  //   if (day.type == 'curr') {
  //     if (
  //       (!this.state.isRange && Utils.isEqual(this.state.currDate as string, currDate)) ||
  //       (this.state.isRange && (this.isStart(currDate) || this.isEnd(currDate)))
  //     ) {
  //       return `${state.dayPrefix}-active`
  //     } else if (
  //       (this.props.startDate && Utils.compareDate(currDate, this.props.startDate)) ||
  //       (this.props.endDate && Utils.compareDate(this.props.endDate, currDate))
  //     ) {
  //       return `${this.state.dayPrefix}-disabled`
  //     } else if (
  //       this.state.isRange &&
  //       Array.isArray(this.state.currDate) &&
  //       Object.values(this.state.currDate).length == 2 &&
  //       Utils.compareDate(this.state.currDate[0], currDate) &&
  //       Utils.compareDate(currDate, this.state.currDate[1])
  //     ) {
  //       return `${this.state.dayPrefix}-choose`
  //     } else {
  //       return null
  //     }
  //   } else {
  //     return `${this.state.dayPrefix}-disabled`
  //   }
  // }
  // // confirm = () => {
  // //   if ((this.state.isRange && this.state.chooseData.length == 2) || !state.isRange) {
  // //     this.choose(this.state.chooseData)
  // //     if (this.props.poppable) {
  // //       this.props.update()
  // //     }
  // //   }
  // // }

  // isStartTip = (day: Day, month: MonthInfo) => {
  //   if (this.isActive(day, month)) {
  //     return this.isStart(this.getCurrDate(day, month))
  //   } else {
  //     return false
  //   }
  // }
  // // 是否有结束提示
  // isEndTip = (day: Day, month: MonthInfo) => {
  //   return this.isActive(day, month)
  // }
  // // 是否有是当前日期
  // isCurrDay = (month: any, day: string) => {
  //   const date = `${month.curData[0]}-${month.curData[1]}-${day}`
  //   return Utils.isEqual(date, Utils.date2Str(new Date()))
  // }
  render() {
    const { type, isAutoBackFill, poppable, title, defaultValue, startDate, endDate } = {
      ...defaultProps,
      ...this.props,
    }
    const {
      weeks,
      yearMonthTitle,
      currDate,
      unLoadPrev,
      touchParams,
      transformY,
      translateY,
      scrollDistance,
      defaultData,
      chooseData,
      monthsData,
      dayPrefix,
      startData,
      endData,
      isRange,
      timer,
    } = this.state

    return (
      <div
        className={`nut-calendar ${!poppable ? 'nut-calendar-tile' : ''} ${
          isAutoBackFill ? 'nut-calendar-nofooter' : ''
        }`}
      >
        <div className={`nut-calendar-header ${!poppable && 'nut-calendar-header-tile'}`}>
          {poppable && (
            <>
              <div className="calendar-title">{title}</div>
              <div className="calendar-curr-month">{yearMonthTitle}</div>
            </>
          )}
          <div
            className="calendar-weeks"
            // ref={this.weeksPanel}
          >
            {weeks.map((item, index) => {
              return (
                <div className="calendar-week-item" key={index}>
                  {item}
                </div>
              )
            })}
          </div>
          {/* <!-- content--> */}
          <div
            className="nut-calendar-content"
            // ref={this.months}
            // onTouchStart={(event) => this.touchStart(event)}
            // onTouchMove={(event) => this.touchMove(event)}
            // onTouchEnd={}
          >
            <div
              className="calendar-months-panel"
              // ref={this.monthsPanel}
            >
              <div className="calendar-loading-tip">
                {!unLoadPrev ? '加载上一个月' : '没有更早月份'}
              </div>
              {monthsData.map((month, index) => {
                return (
                  <div className="calendar-month" key={index}>
                    <div className="calendar-month-title">{month?.title}</div>
                    <div className="calendar-month-con">
                      <div
                        className={`calendar-month-item ${
                          type === 'range' ? 'month-item-range' : ''
                        }`}
                      >
                        {month?.monthData?.length > 0 &&
                          month.monthData.map(
                            (
                              day: { type: string; day: React.ReactNode },
                              i: string | number | null | undefined
                            ) => {
                              return (
                                <div
                                  // className={`calendar-month-day ${this.getClass(day, month)}`}
                                  // onClick={() => this.chooseDay(day, month)}
                                  key={i}
                                >
                                  <div className={'calendar-day'}>
                                    {day.type === 'curr' ? day.day : ''}
                                  </div>
                                  {/* {this.isCurrDay(month, day.day) && (
                                    <div className={'calendar-curr-tips'}>今天</div>
                                  )}
                                  {this.isStartTip(day, month) ? (
                                    <div className="calendar-day-tip">开始</div>
                                  ) : (
                                    this.isEndTip(day, month) && (
                                      <div className="calendar-day-tip">结束</div>
                                    )
                                  )} */}
                                </div>
                              )
                            }
                          )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* foot */}
        {poppable && !isAutoBackFill && (
          <div className="nut-calendar-footer">
            <div
              className="calendar-confirm-btn"
              // onClick={() => this.confirm()}
            >
              确定
            </div>
          </div>
        )}
      </div>
    )
  }
}
CalendarItem.displayName = 'NutIcon'
export { CalendarItem }
