import React, { Component } from 'react'
import im1 from '../images/image1.png'
import im2 from '../images/image2.png'
import im3 from '../images/image3.png'
import im5 from '../images/im5.png'
import im4 from '../images/image4.png'
import Image from './Image'


export default class ImageOne extends Component {
    constructor() {
        super()
        this.state = {
            images: [
                {
                    'id': 3,
                    'name': im3,
                    'project': 'Expenses',
                    'href': 'https://github.com/Roxolana4lana/reduxexpenses',
                    'info': 'The purpose of the project is to count expenses and incomes. Created with create-react-app,react-redux. Backend is not attached to the github, created in python. Fetch requests are done with help of axios, and as far as I used redux store, I easily could get data from all the expenses and incomes to count total and display that info in separate component - Portal. I have created second version of the project, using react hooks instead of redux,and  without usage of classes. Project is done in my react boilerplate (link to github: https://github.com/Roxolana4lana/Hooks2). For navigation purposes I’ve used react-routing.Styling is created with sass, application is responsive. '


                },
                {
                    'id': 1,
                    'name': im1,
                    'project': 'Recipe App',
                    'href': 'https://github.com/Roxolana4lana/recpies',
                    'info': 'Created in, backend is not attached to the github, created in python. Project displays information about recipes(you may add your own recipe or get different recipes from the public api food2fork). For navigation purposes I’ve used react-routing.Styling is created with sass, application is responsive.'

                },
                {
                    'id': 2,
                    'name': im2,
                    'project': 'Weather App',
                    'href': 'https://github.com/Roxolana4lana/weatherApp',
                    'info': 'Created in react, backend is not attached to the github, created in python. Project displays information about the weather and the picture of the given city. I’ve used a public api pixabay and openweatherapp. Styling is created with sass.'

                },

                {
                    'id': 5,
                    'name': im5,
                    'project': 'Image Gallery',
                    'href': 'https://github.com/Roxolana4lana/imageGallery/tree/master/imageapp',
                    'info': 'Website of the gallery,created in react. To show the location of the gallery the  component react-google-maps was used. Styling is created with sass. '

                },
                {
                    'id': 4,
                    'name': im4,
                    'project': 'Portfolio',
                    'href': 'https://github.com/Roxolana4lana/Portfolio/tree/master/portoapp',
                    'info': 'Created with react. For navigation purposes I have used ‘react-scroll’. Styling is created with sass. '

                }
            ],

            image: {
                'id': 1,
                'name': im1,
                'project': 'Wheather App',
                'href': 'https://github.com/Roxolana4lana/weatherApp'
            },
            index: 0
        }
    }

    render() {
        let myImage = this.state.images.map(i => (<div className="MyImage" key={i.id}> <Image href={i.href} name={i.name} title={i.project} path={i.path} info={i.info} /></div >))

        return (
            <div className='wrapper'>
                <h2>My projects</h2>
                <div className='theImage'>
                    {myImage}
                </div >
            </div>
        )
    }
}