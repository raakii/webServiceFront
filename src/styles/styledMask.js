import styled from 'styled-components';

export const StyledMask = styled.div`
    background-color: rgb(231,231,231);
    margin-right: 5%;
    margin-left: 5%;
    height: 350px;
    display: flex;
    justify-content: space-between;
`;

export const LeftMaskStyle = styled.div`
    color: black;
    font-size: 50px;
    font-weight: bold;
    width: 40%;
    padding-top: 60px;
    padding-bottom: 70px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const RightMaskStyle = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: 220px;
    
`;

export const MaskButton = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 20px;
    width: 160px;
    border-radius: 35px;
    
`;