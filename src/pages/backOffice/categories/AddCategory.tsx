import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useSaveArticleMutation } from "../../../services/api/articles";
import { Article } from "../../../services/api/articles/type";
import { StyledButton } from "../../../styles/backOffice/styledButton";
import { StyledForm, StyledInput } from "../../../styles/backOffice/styledForm";
import { StyledWrapper } from "../../../styles/backOffice/StyledWrapper";



interface AddCategoryProps {
  initialArticle?: Article;
}

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const AddCategory: FC<AddCategoryProps> = ({ initialArticle = { id:0, title: "", content: "", description: "" }}) => {

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

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit} >
            <h1 style={{margin: 'auto'}} >Add new Category</h1>
           
            <StyledInput  type="text" name="title" placeholder="title" onChange={handleInputChange}
                /> <br/>
         
          
            <StyledInput  type="textarea" name="description" placeholder="description" onChange={handleInputChange} 
                  /><br/>

            <StyledButton  primary> {isLoading ? "Loading..." : "Add"} </StyledButton>

        </StyledForm>
        <Link style={{margin: 'auto'}}  to={"/categories"}> <StyledButton > Home </StyledButton> </Link>
    </StyledWrapper>
  );
}

export default AddCategory;
