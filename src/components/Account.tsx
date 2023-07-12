import React from 'react';
import { StyledAccount } from '../styles/StyledMenu';
import {BiUser} from 'react-icons/bi'; 

function Account() {
  return (
    <StyledAccount>
        <BiUser size={30} />
        <span> Account </span>
    </StyledAccount>
  );
}

export default Account;
