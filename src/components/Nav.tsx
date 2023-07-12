import { StyledNav, StyledOl, StyledOl1 } from '../styles/StyledMenu';
import {MdKeyboardArrowDown} from "react-icons/md"

function Nav() {
  return (
    <div>
        <StyledNav>
            <StyledOl1  >
                Categories
                <MdKeyboardArrowDown size={20} />
            </StyledOl1>
            <StyledOl>
                Magazines
            </StyledOl>
            <StyledOl>
                What'sNew
            </StyledOl>
            <StyledOl>
                International
            </StyledOl>
        </StyledNav>
    </div>
  );
}

export default Nav;
