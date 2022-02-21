import React, { Component } from 'react';
import { fetchCategoriesAndTools } from '../actions/categoriesAndTools';
import { connect } from 'react-redux';

class CategoriesContainer extends Component {

    componentDidMount(){
        this.props.fetchCategoriesAndTools()
    }

    render() {
        return (
            <div>CategoriesContainer</div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoriesAndTools: () => dispatch(fetchCategoriesAndTools())
    }
}

export default connect(null, mapDispatchToProps)(CategoriesContainer);