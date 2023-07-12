import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { StyledCartButton } from '../styles/StyledMenu';

function CartButton() {
  return (
    <StyledCartButton>
       <Link style={{display:'flex', color: 'black'}} to={"/cart"} >
          <AiOutlineShoppingCart size={25} /> 
          <span>Cart</span>
        </Link>
    </StyledCartButton>
  );
}

export default CartButton;
