import { StyledProductList } from '../styles/styledProduct';
import Article from './Article';
import { useGetArticlesByPageQuery, useGetAllArticlesQuery, useGetArticlesByCategoryQuery } from '../services/api/articles';
import { StyledButton } from '../styles/backOffice/styledButton';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../features/cartSlice';

import { RootState } from '../store';
import { FC } from "react";


const ProductList:FC  = () => {


  const pageNumber = useSelector((state: RootState) => state.cart.pageNumber);
  const category = useSelector((state: RootState) => state.cart.category);
  console.log(category);
  const dispatch = useDispatch();

  
  const { data: articlesByPage = [] } = useGetArticlesByPageQuery(pageNumber);
  const { data: articlesByCategory = [] } = useGetArticlesByCategoryQuery(category);

  const articles = category?articlesByCategory:articlesByPage;

  
  return (
    <StyledProductList>
        { articles.map(article => {
            return (
                <Article key={article.id} id={article.id} title={article.title} description={article.description} content={article.content} image={article.image} />
            )
        })}

        <div>
          { pageNumber > 0 ? <StyledButton  onClick={ () => dispatch(cartActions.setPrecedentPage())} > Précédent </StyledButton > : ""}
          <StyledButton onClick={() => dispatch(cartActions.setNextPage())} > Suivant </StyledButton>
        </div>
    
    </StyledProductList>
  );
}

export default ProductList;
