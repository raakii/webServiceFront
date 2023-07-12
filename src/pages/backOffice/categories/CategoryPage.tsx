
import { Link } from 'react-router-dom';
import Head from '../../../components/backOffice/Head';
import ArticleBack from '../../../components/backOffice/ArticleBack';
import { useGetAllCategoriesQuery } from '../../../services/api/categories';
import { StyledButton } from '../../../styles/backOffice/styledButton';
import { StyledWrapper } from '../../../styles/backOffice/StyledWrapper';



const CategoryPage = () => {

    const { data: categories = [], isLoading } = useGetAllCategoriesQuery();




    if (isLoading) return <div>Loading...</div>;

  return (
    <StyledWrapper>
        <Head/>
        <div style={{margin: 'auto'}}>
        {categories.map(item => {
                    return (
                        <ArticleBack 
                        title ={item.libelle}
                        content={item.description}
                        description={item.description}
                        id={item.id}
                        image={item.image}
                        key={item.id}
                      
                        />
                        
                    )
                })} 
                
        <br/>

        <div style={{display: 'flex'}}>
          <Link to={"/addCategory" } ><StyledButton primary >Add new Category</StyledButton></Link>
          <Link to={"/articles" } ><StyledButton primary >Go to Articles</StyledButton></Link>
        </div>

        </div>
    </StyledWrapper>
  );
}

export default CategoryPage;
