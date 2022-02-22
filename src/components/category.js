import React, { Component } from 'react';

class Category extends Component {

    render() {
        return (
            <div className="category-card" >
                <h3>{this.props.category.name}</h3>
                <img src={this.props.category.image_url} width="120" height="120" />
            </div>
        )
    }

}

export default Category;