import React, { Component } from 'react';
import NavBar from './NavBar'


export default class NavButton extends Component {
    constructor() {
        super()
        this.state = {
            doesi: false
        }
    }

    handleClick = e => {
        this.setState(prevState => ({
            doesi: !prevState.doesi
        }))
    }

    render() {
        let navbut = this.state.doesi ? (<NavBar />) : null;
        return (
            <div className='NavButton'>
                <i className="fas fa-bars" onClick={this.handleClick}
                    style={{ display: this.state.doesi ? 'none' : 'block' }}>
                </i>
                {navbut}
            </div>
        )
    }
}