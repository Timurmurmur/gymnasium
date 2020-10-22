import React from 'react'

import classNames from 'classnames'

import './ColorfulRectangle.scss'

const ColorfulRectangle: React.FC<{ className: string }>  = ({ className, children }) => <div className={classNames('colorful-rect', className )}>{children}</div>

export default ColorfulRectangle