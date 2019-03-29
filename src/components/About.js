import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='About'>
                <h3 className='pAbout'>
                    I am working in:
                </h3>
                <div className='myIcons'>
                    <div className="theIcon"> <i className="fab fa-react "></i></div>
                    <div className="theIcon">   <i className="fab fa-sass "></i></div>
                    <div className="theIcon">   <i className="fab fa-css3-alt "></i></div>
                    <div className="theIcon">  <i className="fab fa-html5 "></i></div>
                    <div className="theIcon">  <i className="fab fa-js "></i></div>
                    <div className="theIcon">  <i className="fab fa-git "></i></div>
                </div>
                <div className='addInfo'>
                    <h3>I am also deepening my Knowledge in Redux, Webpack. </h3>
                    <h3>Eager to learn all the novelties in React (like hooks, new components and so on)  Basic knowledge of Node.js, Express, MongoDB. </h3>
                    <h3>I have a good command of English as well as Polish </h3>
                </div>
            </div>
        )
    }
}
