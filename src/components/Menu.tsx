import { StyledLogo, StyledMenu, StyledNav, StyledTilte } from '../styles/StyledMenu';
import news from '../assets/news.png'
import Nav from './Nav';
import SearchBar from './SearchBar';
import Account from './Account';
import CartButton from './CartButton';

export default function Menu() {
  return (
    <StyledMenu>
        <StyledLogo>
        <img width="200px" src={news} />
        
        </StyledLogo>
        <Nav />
        <SearchBar />
        <Account />
        
    </StyledMenu>
  );
}


