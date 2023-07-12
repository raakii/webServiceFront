import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery, useSaveArticleMutation } from "../../../services/api/articles";
import { Article } from "../../../services/api/articles/type";
import { StyledButton, StyledSelect } from "../../../styles/backOffice/styledButton";
import { StyledForm, StyledInput } from "../../../styles/backOffice/styledForm";
import { StyledWrapper } from "../../../styles/backOffice/StyledWrapper";
import { useDispatch } from "react-redux";



interface AddArticleProps {
  initialArticle?: Article;
}

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const AddArticle: FC<AddArticleProps> = ({ initialArticle = { id:0, title: "", content: "", description: "" }}) => {

    const [article, setArticle] = useState<Article>(initialArticle);
    const [save, { isLoading }] = useSaveArticleMutation();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    save({ ...article})
      .unwrap()
      .then(() => {})
      .catch(() => {});
    setArticle({ id:0 ,  title: "" , content: "", description: "" });
  };

  const dispatch = useDispatch();

  const {data : categories = [] } = useGetAllCategoriesQuery();

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit} >
            <h1 style={{margin: 'auto'}} >Add new Article</h1>
           
            <StyledInput  type="text" name="title" placeholder="title" onChange={handleInputChange}
                /> <br/>
         
            <StyledInput  type="textarea" name="content" placeholder="content" onChange={handleInputChange} 
                  /><br/>
          
            <StyledInput  type="textarea" name="description" placeholder="description" onChange={handleInputChange} 
                  /><br/>

            <StyledSelect  name="category" id="lang">  
            {
              categories.map(item => {
                return (
                  
                    <option value={item.libelle} >{item.libelle}</option>
                  
                )
              })
            }
            </StyledSelect>


            <StyledButton  primary> {isLoading ? "Loading..." : "Add"} </StyledButton>

        </StyledForm>
        <Link style={{margin: 'auto'}}  to={"/articles"}> <StyledButton > Home </StyledButton> </Link>
    </StyledWrapper>
  );
}

export default AddArticle;
