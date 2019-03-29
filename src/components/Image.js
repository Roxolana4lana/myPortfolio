import React, { Component } from 'react'
import ButtonLink from './ButtonLink'
import LinkBut from './LinkBut';


export default class Image extends Component {
    constructor() {
        super()
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            (window.scrollY > 1450) ? this.setState({ scrolled: true }) :
                this.setState({ scrolled: false })
            console.log(window.scrollY)
        })
    }

    render() {
        let scrolled = !this.state.scrolled ? { opacity: 0, transition: '5s' } : { opacity: 1, transition: '5s' }
        return (
            <div className='imageBlock'>
                <div className='seeImage'
                    style={{
                        backgroundImage: `url(${this.props.name})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        position: 'relative'
                    }}>
                </div>
                <div className='imageRight' style={scrolled}><h1>{this.props.title}</h1>
                    <p>{this.props.info}</p>
                    <div className='myButtons'>
                        <ButtonLink href={this.props.href} />
                        {this.props.path ? <LinkBut path={this.props.path} /> : null}
                    </div>
                </div>
            </div>
        )
    }
}
