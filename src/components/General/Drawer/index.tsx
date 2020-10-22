import React, { Component } from 'react'

import './Drawer.scss'

class Drawer extends Component<any, any> {

    _handleKeyDown = (event: any) => {
        switch(event.keyCode) {
            case 27:
                this.props.onClose()
                break;
            default: 
                break;
        }
    }

    render() {
        const { placement, closable, onClose, visible, height, width, className, keyboard, mask, left, top, right, bottom, mobile_class } = this.props

        let classPlacement = "app-drawer__left"
        
        if (placement === "top") classPlacement = "app-drawer__top"
        else if (placement === "right") classPlacement = "app-drawer__right"

        return (
            <React.Fragment>
            { visible && 
                <div className={className}>
                    { mask && <div className="app-drawer__mask" onClick={onClose}></div> }
                    <div className={`app-drawer__wrapper ${classPlacement}`} style={{ width: width, height: height, left: left, top: top, right: right, bottom: bottom }}>
                        {closable && <div className={`app-drawer__close ${mobile_class}`} onClick={onClose}><i className="fal fa-times-circle" /></div>}
                        <div className="app-drawer__content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            }
            </React.Fragment>
        )
    }
}

export default Drawer