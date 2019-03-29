import React, { Component } from 'react'
import video from '../images/video.mp4'


export default class Video extends Component {
    render() {
        return (
            <video className='videoTag' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
        )
    }
}
