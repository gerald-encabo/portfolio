import React from 'react'
import './MenuItems.scss'

function MenuItems({menuItems}) {
    return (
        <div className='menuitem'>
            {
                menuItems.map((item) => {
                    return <div className='menuitem-list' key={item.id}>
                        <div className='menuitem-tile'>
                            <p className='menuitem-title'>{item.title}</p>
                            <img src={item.image} alt={item.alt} className='menuitem-img'/>
                            <ul className='menuitem-link'>
                                <li>
                                    <a href={item.link1} target="_blank">{item.icon1}</a>
                                    <a href={item.link2} target="_blank">{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems
