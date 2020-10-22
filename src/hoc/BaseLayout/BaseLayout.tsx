import React, { Component } from 'react'

import './BaseLayout.scss'

class BaseLayout extends Component {

    render() {
        return (
            <div className="cabinet home">
                <main className="wrapper">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default BaseLayout