import React from 'react'
import './Header.scss'

function Header({title, desc}) {
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Header
