import React, { FunctionComponent } from 'react'
import './signature.scss'

export interface SignatureProps {}
const defaultProps = {} as SignatureProps
export const Signature: FunctionComponent<
  Partial<SignatureProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-signature">Signature</div>
}

Signature.defaultProps = defaultProps
Signature.displayName = 'NutSignature'
