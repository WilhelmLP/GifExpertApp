import React, {Fragment, useState} from 'react'
import AddCategory from './AddCategory';

const GifExpertApp = () => {
    
    //const categories = ['One Punch', 'Naruto', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Naruto', 'Dragon Ball'])

    //const handleAdd = () => setCategories([...categories, 'Evangelion']);

    return ( 
        <Fragment>

        <h2>GiftExpertApp</h2>
        <AddCategory />
        <hr/>

        {/* <button
        onClick={handleAdd}
        >Agregar</button> */}

        <ol>
            {categories.map(category =>{
                return <li key={category}>{category}</li>;
            })}
        </ol>

        </Fragment>
     );
}
 
export default GifExpertApp;