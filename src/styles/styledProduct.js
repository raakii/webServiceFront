import styled from 'styled-components';

export const StyledSlogan = styled.span`
    font-size: 35px;
    margin: 5%;
    font-weight: bold;
`;

export const StyledProduct = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    width: 70%;
    margin-bottom: 30px;
    
`;

export const StyledImage = styled.div`
    background-color: rgb(246,246,246);
    width : 355px;
    height : 355px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;
    margin-right: 30px
`;

export const StyledFavButton = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: white;
    border-radius: 50%;
    padding: 10px;

`;

export const StyledProductList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
    margin-top: 50px;
    flex-wrap: wrap;
`;