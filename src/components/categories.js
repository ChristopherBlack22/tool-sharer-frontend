import React, { Component } from 'react';
import Category from './category';

class Categories extends Component {
    render() {
        return (
            <div>Categories Component</div>
        )








    //     debugger
    //     if(this.props.requestingFromAPI) {
    //         return(
    //             <div><em>LOADING</em></div>
    //         )
    //     } else {
    //         let categoriesCards;
    //         if (this.props.categories.length === 0) {
    //             categoriesCards = "No Categories available"
    //         } else {
    //             categoriesCards = this.props.categories.map(category => {
    //                 return <Category key={category.id} category={category} />
    //             });
    //             return (
    //                 <div>Categories
    //                     {/* {categoriesCards} */}
    //                 </div>
    //             );
    //         }
    //     }
    // }
    }
}

export default Categories;