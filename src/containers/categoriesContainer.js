import React from 'react';
import Category from '../components/category';

const CategoriesContainer = ({fetchingCategories, categories}) => {

    //stop rendering when categories is initally an empty array or before the fetch is completed. 
    if(fetchingCategories || categories.length === 0) {
        return(
            <div className="loading" >
                <em>...LOADING...</em>
            </div>
        )
    } else {
        let categoriesCards;
        categoriesCards = categories.map(category => {
            return <Category key={category.id} category={category} />
        });
        return (
            <div className="categories" >
                {categoriesCards}
            </div>
        );
    }
    
}

export default CategoriesContainer;