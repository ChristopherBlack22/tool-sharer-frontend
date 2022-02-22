import React, { Component } from 'react';
import { fetchCategoriesAndTools } from '../actions/categoriesAndTools';
import { connect } from 'react-redux';
import Categories from './categories';

class CategoriesContainer extends Component {

    componentDidMount(){
        this.props.fetchCategoriesAndTools()
    }

    render() {
        return (
            <div>This is the CategoriesContainer
                <Categories categories={this.props.categories} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {categories: state.categories.categoriesArray}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoriesAndTools: () => dispatch(fetchCategoriesAndTools())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);