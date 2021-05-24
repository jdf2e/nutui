import { withNaming } from '@bem-react/classname'

const cn = withNaming({ n: 'nutui-', e: '__', m: '--', v: '-' })

const b = cn('icon', 'Element')
//
// console.log(b()) // nutui-icon__Element
// console.log(b('Element')) // nutui-icon__Element
// console.log(b({ Modifier: 'value' })) // nutui-icon__Element nutui-icon__Element--Modifier-value
// console.log(b({ disable: true })) // nutui-icon__Element nutui-icon__Element--disable
// console.log(b({ disable: false })) // nutui-icon__Element
//
// console.log(b('Element', ['mixin'])) // nutui-icon__Element mixin
// console.log(b({ disable: false }, ['mixin'])) // nutui-icon__Element mixin
// console.log(b({ disable: true }, ['mixin'])) // nutui-icon__Element nutui-icon__Element--disable mixin

export default cn
