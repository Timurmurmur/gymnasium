import React, { useState } from 'react'

import './MyAccordion.scss'

const Content: React.FC = ({children}) => (
    <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
            {children}
        </ul>
    </div>
)

const Item: React.FC<{ bodyComponent: any, icon: any, }> = ({ bodyComponent, icon, children }) => {
  
    const [opened, setOpened] = useState(false)
    
    return (
        <li {...{ className: 'accordion-list__item' }}>
            <div {...{className: `accordion-item, ${opened && 'accordion-item--opened'}`, onClick: () => { setOpened(!opened) }}}>
                <div {...{ className: 'accordion-item__line' }}>
                    {bodyComponent}
                    <span {...{ className: 'accordion-item__icon' }}>
                        {icon}
                    </span>
                </div>
                <div {...{ className: 'accordion-item__inner' }}>
                    <div {...{ className: 'accordion-item__content' }}>
                        {children}
                    </div>
            </div>
        </div>
      </li>
    )
} 

export default {Content, Item}