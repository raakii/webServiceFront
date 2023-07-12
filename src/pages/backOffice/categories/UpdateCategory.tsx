import { FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from "../../../services/api/categories";
import { StyledButton } from "../../../styles/backOffice/styledButton";
import { StyledForm, StyledInput } from "../../../styles/backOffice/styledForm";
import { StyledWrapper } from "../../../styles/backOffice/StyledWrapper";



  const UpdateCategory: FC = () => {

    const {id = ""}   = useParams();
    const categoryId = Number.parseInt(id);
    

    const { data: category, isLoading } = useGetCategoryByIdQuery(categoryId);
    const [update, { isLoading: isLoadingMutation }] = useUpdateCategoryMutation();

    const [title, setTitle] = useState(category?.libelle || "");
  const [content, setContent] = useState(category?.description || "");
  const [description, setDescription] = useState(category?.description || "");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };


  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedCategory = {
      id: categoryId,
      libelle: title,
      description: description
    };

    update(updatedCategory)
      .unwrap()
      .then(() => {})
      .catch(() => {});
  };
    

  useEffect(() => {
    if (category) {
      setTitle(category?.libelle);
      setContent(category?.description);

    }
  }, [category]);

  if (isLoading) return <div>Loading</div>;

  return (
    <StyledWrapper>
    <StyledForm onSubmit={handleSubmit} >
          <h1 style={{margin: 'auto'}} >Add new Category</h1>
         
          <StyledInput  type="text" name="title" value={title} onChange={handleTitleChange}
              /> <br/>
       
        
          <StyledInput  type="textarea" name="content" value={description}  onChange={handleDescriptionChange} 
                /><br/>
          <StyledButton  primary> {isLoading ? "Loading..." : "Update"} </StyledButton>

      </StyledForm>
      <Link style={{margin: 'auto'}}  to={"/categories"}> <StyledButton > Home </StyledButton> </Link>
  </StyledWrapper>
  );
}

export default UpdateCategory;
