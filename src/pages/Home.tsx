import React from 'react';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import Mask from '../components/Mask';
import Menu from '../components/Menu';
import ProductList from '../components/ArticleList';
import Slogan from '../components/Slogan';

function Home() {
  return (
    <div>
    
      <Menu />
      <Mask />
      <FilterBar />
      <Slogan />
      <ProductList />
    </div>
  );
}

export default Home;

