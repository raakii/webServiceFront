import StyledCol from "../../styles/backOffice/styledCol";
import { StyledHead } from "../../styles/backOffice/styledHead";


export default function Head () {
    return (
        <StyledHead>
        <tr>
            <StyledCol>Title</StyledCol>
            <StyledCol>Description</StyledCol>
            <StyledCol>Date</StyledCol>
        </tr>
    </StyledHead>
    )
    
}