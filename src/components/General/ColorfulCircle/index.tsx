import React from 'react'

import classNames from 'classnames'

import './ColorfulCircle.scss'

const ColorfulCircle: React.FC<{ className: string }> = ({ className, children }) => <div className={classNames('colorful-circle', className )}><span>{children}</span></div>

export default ColorfulCircle