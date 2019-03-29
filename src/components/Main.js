import React, { Component } from 'react'
import Video from './Video'
import IntroWords from './IntroWords'
import NavBar from './NavBar'


export default class Main extends Component {
    render() {
        return (
            <div className="App container">
                <div className='header-video'>
                    <Video />
                </div>
                <div className='header-intro' style={{ Zindex: '1' }}>
                    <div className='header-words'>
                        <IntroWords />
                    </div>
                    <NavBar />
                </div>
            </div>
        )
    }
}