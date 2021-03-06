import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {

    const {name, image_url} = category;
    return (
        <div className="category">
            <Link to={`/${name}/tools`} >
                <h2>{name}</h2>
                <img src={image_url} width="175" height="175" alt={name} />
            </Link>
        </div>
    )

}

export default Category;