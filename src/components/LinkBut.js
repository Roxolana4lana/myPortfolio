import React from 'react'

export default function LinkBut(props) {
    return (
        <button className='hoveredLink' style={{ color: 'white', display: 'inline' }}>
            <a style={{ textDecoration: 'none', color: 'white' }} href={props.path}>
                See demo
            </a>
        </button>
    )
}
