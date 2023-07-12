import React from 'react';
import { StyledFilterBar, StyledFilterButton, StyledFilterButton2 } from '../styles/styledFilterBar';
import FilterButton from './FilterButton';
import {MdKeyboardArrowDown } from 'react-icons/md'
 

function FilterBar() {

    const filter: any[] = [   {"id": 1,"tag": "Sport"},
                                 {"id": 2,"tag" :"Santé"},
                                 {"id": 3,"tag":  "Education"}, 
                                 {"id": 4,"tag": "Politique"}];

  return (
    <StyledFilterBar>
        <div>
        {
            filter.map(item => {
                return(
                    <FilterButton  category= {item} icon= { <MdKeyboardArrowDown /> } />
                )
            })
        }
        <FilterButton category= "All Filters" icon= { <MdKeyboardArrowDown />} />
        </div>
        <StyledFilterButton2>
            Sort By
            <MdKeyboardArrowDown />
        </StyledFilterButton2>
    </StyledFilterBar>
  );
}

export default FilterBar;
