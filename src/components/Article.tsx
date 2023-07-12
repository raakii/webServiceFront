import React, { FC, useState } from 'react';
import { StyledFavButton, StyledImage, StyledProduct } from '../styles/styledProduct';
import {MdFavoriteBorder, MdKeyboardArrowDown} from 'react-icons/md'
import {BiDollar} from 'react-icons/bi'
import {AiTwotoneStar} from 'react-icons/ai'
import { StyledFilterButton2 } from '../styles/styledFilterBar';
import { useDispatch } from 'react-redux';
import { cartActions } from '../features/cartSlice';

interface ArticleProps {
    id: number;
    title: string;
    content: string;
    description: string;
    category?: number;
    image: any
   
  }

  const Product: FC<ArticleProps> = ({ id, title, content, description, image }) => {

    const dispatch = useDispatch();


    const showContent = () => {
        setShowArticle(!showArticle);
    }

    const [showArticle, setShowArticle] = useState(false);

    return(
        <StyledProduct>
            
            
            <StyledImage>
                <img width='355px' src={image} />
                <StyledFavButton>
                    <MdFavoriteBorder size={25} />
                </StyledFavButton>
            </StyledImage>

            <div style={{display:'flex', flexDirection:'column', margin:'auto'}}>

                <div style={{display: 'flex', justifyContent:'space-between',fontSize: '23px', fontWeight: 'bold', marginTop:'10px'}}>
                    <span>{title} </span>
                </div>
                <span>{showArticle ? content : description}</span>
        
                    <StyledFilterButton2 onClick={showContent}   style={{width: '140px'}} >
                       {showArticle ? "View Less" : "Show Article" }
                    </StyledFilterButton2>
            </div>
    
            
        </StyledProduct>
    );

  }

export default Product;
