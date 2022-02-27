import React, { Component } from 'react';
import Category from './category';

class Categories extends Component {
    render() {
        
        if(this.props.fetchingCategories || this.props.categories.length === 0) {
            //first condition stops first render, second stops rending when inital state of a blank array is set
            return(
                <div className="loading" >
                    <em>...LOADING...</em>
                </div>
            )
        } else {
            let categoriesCards;
            categoriesCards = this.props.categories.map(category => {
                return <Category key={category.id} category={category} />
            });
            return (
                <div className="categories" >
                    {categoriesCards}
                </div>
            );
        }
    }
}

export default Categories;