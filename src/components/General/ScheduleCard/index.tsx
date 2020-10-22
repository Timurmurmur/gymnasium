import React from 'react'

import classNames from 'classnames'

import './ScheduleCard.scss'

const ScheduleCard: React.FC<{ className: string }> = ({ className, children }) => <div className={classNames('schedule-card__order', className )}>{children}</div>

export default ScheduleCard