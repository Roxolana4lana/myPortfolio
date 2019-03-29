import React, { Component } from 'react'

export default class ButtonLink extends Component {
    render() {
        return (
            <button className='hoveredLink' style={{ color: 'white', display: 'inline' }}>
                <a style={{ textDecoration: 'none', color: 'white' }} href={this.props.href}>
                    See the code
                    </a>
            </button>

        )
    }
}
