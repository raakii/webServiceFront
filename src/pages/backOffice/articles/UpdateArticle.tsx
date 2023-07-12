import { FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetArticleByIdQuery, useUpdateArticleMutation } from "../../../services/api/articles";
import { StyledButton } from "../../../styles/backOffice/styledButton";
import { StyledForm, StyledInput } from "../../../styles/backOffice/styledForm";
import { StyledWrapper } from "../../../styles/backOffice/StyledWrapper";



  const UpdateArticle: FC = () => {

    const {id = ""}   = useParams();
    const articleId = Number.parseInt(id);
    

    const { data: article, isLoading } = useGetArticleByIdQuery(articleId);
    const [update, { isLoading: isLoadingMutation }] = useUpdateArticleMutation();

    const [title, setTitle] = useState(article?.title || "");
  const [content, setContent] = useState(article?.content || "");
  const [description, setDescription] = useState(article?.description || "");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedArticle = {
      id: articleId,
      title: title,
      content: content,
      description: description
    };

    update(updatedArticle)
      .unwrap()
      .then(() => {})
      .catch(() => {});
  };
    

  useEffect(() => {
    if (article) {
      setTitle(article?.title);
      setContent(article?.content);
      setDescription(article?.description);
    }
  }, [article]);

  if (isLoading) return <div>Loading</div>;

  return (
    <StyledWrapper>
    <StyledForm onSubmit={handleSubmit} >
          <h1 style={{margin: 'auto'}} >Add new Article</h1>
         
          <StyledInput  type="text" name="title" value={title} onChange={handleTitleChange}
              /> <br/>
       
          <StyledInput  type="textarea" name="content" value={content} onChange={handleContentChange} 
                /><br/>
        
          <StyledInput  type="textarea" name="description" value={description}  onChange={handleDescriptionChange} 
                /><br/>
          <StyledButton  primary> {isLoading ? "Loading..." : "Update"} </StyledButton>

      </StyledForm>
      <Link style={{margin: 'auto'}}  to={"/homeback"}> <StyledButton > Home </StyledButton> </Link>
  </StyledWrapper>
  );
}

export default UpdateArticle;
