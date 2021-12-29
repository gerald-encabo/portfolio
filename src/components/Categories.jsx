import React from 'react'
import './Categories.scss'

function Categories({filter, categories}) {
    return (
        <div className='categories'>
            {
                categories.map((category, count) => {
                    return <a type='button' className='categories-btn active' onClick={() => filter(category)}  key={count}> {category} </a>
                })
            }
        </div>
    )
}

export default Categories
