import { withNaming } from '@bem-react/classname'

const cn = withNaming({ n: 'nut-', e: '__', m: '--', v: '-' })

// const b = cn('icon', 'Element')
//
// console.log(b()) // nut-icon__Element
// console.log(b('Element')) // nut-icon__Element
// console.log(b({ Modifier: 'value' })) // nut-icon__Element nut-icon__Element--Modifier-value
// console.log(b({ disable: true })) // nut-icon__Element nut-icon__Element--disable
// console.log(b({ disable: false })) // nut-icon__Element
//
// console.log(b('Element', ['mixin'])) // nut-icon__Element mixin
// console.log(b({ disable: false }, ['mixin'])) // nut-icon__Element mixin
// console.log(b({ disable: true }, ['mixin'])) // nut-icon__Element nut-icon__Element--disable mixin

export default cn
