import React, { Component } from 'react';
import { Link } from "react-scroll";
import posed from 'react-pose';

const Sidebar = posed.ul({
    open: {
        x: '0%',
        delayChildren: 400,
        staggerChildren: 200
    },
    closed: { x: '-100%', delay: 300 }
});

const Item = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});



class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            display: 'block',
            zIndex: '2',
            doesi: false,
            isOpen: false
        }
    }

    // handleClick = e => {
    //     this.setState(prevState => ({
    //         doesi: !prevState.doesi
    //     }))
    // }

    handleMy = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
    render() {
        // let navbut = this.state.doesi ? (<NavBar />) : null;
        let theButton = !this.state.isOpen ? (< div className='NavButton' >
            <i className="fas fa-bars" onClick={this.handleMy}
                style={{ display: this.state.doesi ? 'none' : 'block' }}>
            </i></div>) : true
        //  <div className='NavBar' style={{ zIndex: '2'}}>
        return (
            <React.Fragment>

                <div className='Nav' style={{ zIndex: '2' }}>
                    {theButton}
                    <Sidebar className='NavBar' pose={this.state.isOpen ? 'open' : 'closed'} onClick={this.handleMy}>
                        <div className='NavButton' onClick={this.handleMy}> <i className="fas fa-times"></i></div>   
                    <Item className='liBar' style={{ listStyleType: 'none' }}>
                            <Link to='home'
                                spy={true}
                                smooth={true}
                                duration={1000}>
                                Main
                            </Link>
                        </Item>
                        <Item className='liBar'>
                            <Link to='about'
                                spy={true}
                                smooth={true}
                                duration={1000}>
                                Skills
                            </Link>
                        </Item>
                        <Item className='liBar'>
                            <Link to='arrow'
                                spy={true}
                                smooth={true}
                                duration={1000}>
                                Projects
                            </Link>
                        </Item>
                        <Item className='liBar'>
                            <Link to='form'
                                spy={true}
                                smooth={true}
                                duration={1000}>
                                Contact
                            </Link>
                        </Item>
                    </Sidebar>

                </div>
            </React.Fragment>
        )
    }
}

export default NavBar