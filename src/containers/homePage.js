import React, { Component } from 'react';
import { fetchCategoriesAndTools } from '../actions/categoriesAndTools';
import { connect } from 'react-redux';
import CategoriesContainer from './categoriesContainer';

class HomePage extends Component {

  componentDidMount(){
    this.props.fetchCategoriesAndTools()
  }

  render() {
    return (
      <div className="home-page">
          <CategoriesContainer categories={this.props.categories} fetchingCategories={this.props.fetchingCategories} />
      </div>      
    )
  }

}

const mapStateToProps = state => {
  return {
      categories: state.categories.categoriesArray,
      fetchingCategories: state.categories.fetchingCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchCategoriesAndTools: () => dispatch(fetchCategoriesAndTools())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);