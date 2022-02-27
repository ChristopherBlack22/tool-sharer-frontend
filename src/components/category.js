import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {

    render() {
        const {name, image_url} = this.props.category;
        return (
            <div className="category-card">
                <Link to={`/${name}/tools`} >
                    <h3>{name}</h3>
                    <img src={image_url} width="120" height="120" alt={name} />
                </Link>
            </div>
        )
    }

}

export default Category;