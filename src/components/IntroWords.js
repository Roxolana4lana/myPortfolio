import React from 'react'
import Typing from 'react-typing-animation';


const IntroWords = () => {
    return (
        <Typing>
            <Typing.Speed ms={100} />
            <h1>Hello.</h1>
            <Typing.Backspace count={10} />
            <Typing.Delay ms={500} />
            <h1>My name is Roksolana</h1>
        </Typing>
    )
}

export default IntroWords