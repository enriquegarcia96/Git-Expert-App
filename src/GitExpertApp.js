
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GitExpertApp = ({ defaultCategories = [] }) => {

    
    //const [categories, setCategories] = useState(['Smahs']);
    const [categories, setCategories] = useState(defaultCategories);
    
    

    /*
    const handleAdd = () => {
        //setCategories(['Super',...categories]);
        setCategories( cats => [...cats, 'Super Man'] );
    }*/


    return ( 
        <>
            <h2>GitExpertApp</h2>
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr />



            <ol>
                { 
                    categories.map( (category) => (
                         <GifGrid  
                        key={category}
                         category={ category } />
                    ))
                }
            </ol>
        </>
    )
}




export default GitExpertApp
