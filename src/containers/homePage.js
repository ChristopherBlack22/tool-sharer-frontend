import React, { Component } from 'react';
import { fetchCategories } from '../actions/categories';
import { fetchTools } from '../actions/tools';
import { connect } from 'react-redux';
import CategoriesContainer from './categoriesContainer';

class HomePage extends Component {

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchTools();
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
      fetchCategories: () => dispatch(fetchCategories()),
      fetchTools: () => dispatch(fetchTools())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);