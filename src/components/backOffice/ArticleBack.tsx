import React, { FC } from "react";
import { Link } from "react-router-dom";
import StyledCol from "../../styles/backOffice/styledCol";
import { StyledRow } from "../../styles/backOffice/styledRow";
import { MdDone, MdDelete, MdModeEditOutline } from 'react-icons/md';
import { useDeleteArticleMutation, useUpdateArticleMutation } from "../../services/api/articles";

interface ArticleProps {
    id: number;
    title: string;
    content: string;
    description: string;
    image: any;
    category?: number;
   
  }

const ArticleBack: FC<ArticleProps> = ({  id, title, content, description, image }) => {
    

    const [deletePost, response] = useDeleteArticleMutation();

    return (
        <StyledRow>
            
            <StyledCol>{title}</StyledCol>
            <StyledCol>{description}</StyledCol>
            <StyledCol> 
                <div> <Link to={'/updateArticle/' + id} > <MdModeEditOutline/> </Link>  
                <MdDelete style={{paddingLeft:'20px', paddingRight:'20px'}} 
                onClick={() => deletePost(id)} />  </div>
            </StyledCol>

        </StyledRow>
    )
}

export default ArticleBack;