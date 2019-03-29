import React, { Component } from 'react'
import { animateScroll as scroll } from "react-scroll";
import ImageOne from './ImageOne'


export default class Arrow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ImageOne,
            scrolled: false
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    componentDidMount() {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ? (this.setState({ scrolled: true })) :
                (this.setState({ scrolled: false }))
        })
    }

    render() {
        const scrolled = this.state.scrolled ? 'arrow' : 'notArrow'

        return (
            <div className='Bla'>
                <ImageOne />
                <div className={scrolled}>
                    <i onClick={this.scrollToTop} className="fas fa-arrow-up"></i>
                </div>
            </div>
        )
    }
}
