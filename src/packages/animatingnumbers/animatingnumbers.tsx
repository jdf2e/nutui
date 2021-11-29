import React, { FunctionComponent, Component } from 'react'
import './animatingnumbers.scss'

import { CountUp } from './countup'

export interface AnimatingNumbersProps {}
const defaultProps = {} as AnimatingNumbersProps
type AnimatingNumbersStates = {}

export class AnimatingNumbers extends Component<AnimatingNumbersProps, AnimatingNumbersStates> {
  static defaultProps = defaultProps
  static displayName = 'NutAnimatingNumbers'
  static CountUp = CountUp
  constructor(props: AnimatingNumbersProps) {
    super(props)
    this.state = {}
  }

  render() {
    return <div className="nut-animatingnumbers"></div>
  }
}
