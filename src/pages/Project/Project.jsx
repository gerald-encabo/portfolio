import React, { useState } from 'react'
import './Project.scss'
import Data from '../../components/Data'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import MenuItems from '../../components/MenuItems'

const allCategories = ['All', ...new Set(Data.map(item => item.category))];

function Project() {

    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(Data);

    const filter = (category) => {

        if(category === 'All'){
            return setMenuItems(Data);
        } 

        const filteredData = Data.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className='project'>
            <div className='project-wrapper container'>
                <Header title={'Project'} desc={'My Project'} />
            </div>
            <div className='project-container container'>
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItems={menuItems} />
            </div>
        </div>
    )

}

export default Project