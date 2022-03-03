import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// class Category extends Component {
const Category = ({category}) => {

    const {name, image_url} = category;
    return (
        <div className="category-card">
            <Link to={`/${name}/tools`} >
                <h3>{name}</h3>
                <img src={image_url} width="150" height="150" alt={name} />
            </Link>
        </div>
    )

}

export default Category;