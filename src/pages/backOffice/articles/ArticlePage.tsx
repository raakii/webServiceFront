
import { Link } from 'react-router-dom';
import Head from '../../../components/backOffice/Head';
import ArticleBack from '../../../components/backOffice/ArticleBack';
import { useGetAllArticlesQuery } from '../../../services/api/articles';
import { StyledButton } from '../../../styles/backOffice/styledButton';
import { StyledWrapper } from '../../../styles/backOffice/StyledWrapper';



const Articlepage = () => {

    const { data: articles = [], isLoading } = useGetAllArticlesQuery();




    if (isLoading) return <div>Loading...</div>;

  return (
    <StyledWrapper>
        <Head/>
        <div style={{margin: 'auto'}}>
        {articles.map(item => {
                    return (
                        <ArticleBack 
                        title ={item.title}
                        content={item.content}
                        description={item.description}
                        id={item.id}
                        image={item.image}
                        key={item.id}
                      
                        />
                        
                    )
                })} 
                
        <br/>

        <div style={{display: 'flex'}}>
          <Link to={"/addArticle" } ><StyledButton primary >Add new Article</StyledButton></Link>
          <Link to={"/categories" } ><StyledButton primary >Go to Categories</StyledButton></Link>
        </div>

        </div>
    </StyledWrapper>
  );
}

export default Articlepage;
