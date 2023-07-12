import React, { FC } from 'react';
import { StyledFilterButton } from '../styles/styledFilterBar';
import { useDispatch } from 'react-redux';
import { cartActions } from '../features/cartSlice';

interface TagProps {
    category: any,
    icon?: any
  }


const FilterButton:FC<TagProps> = ({category,icon}): JSX.Element => {

  const dispatch = useDispatch();

  const setCategory = (id : number) => {
    console.log(id);
    dispatch(cartActions.setCategory(id));
  }

  return (
    <StyledFilterButton onClick={setCategory(category.id)} >
        {category.tag}
        {icon}
    </StyledFilterButton>
  );
}

export default FilterButton;
