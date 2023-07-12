import React from 'react';
import { StyledSearch } from '../styles/StyledMenu';
import {AiOutlineSearch} from 'react-icons/ai'

function SearchBar() {
  return (
    <StyledSearch  >
        <span>Search an article</span>
        <AiOutlineSearch size={30} />
    </StyledSearch>
  );
}

export default SearchBar;
