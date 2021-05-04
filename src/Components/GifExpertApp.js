import React, {Fragment, useState} from 'react'
import AddCategory from './AddCategory';
import {GifGrid} from './GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Naruto'])

    return ( 
        <Fragment>

        <h2>GiftExpertApp</h2>
        <AddCategory 
            setCategories={setCategories}
        />
        <hr/>

        <ol>
            {categories.map(category => 
                <GifGrid 
                    key = {category}
                    category={category}
                />
            )}
        </ol>

        </Fragment>
     );
}
 
export default GifExpertApp;