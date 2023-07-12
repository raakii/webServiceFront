import { FlexDiv1, FlexDiv2, FlexDiv3, StyledHeader } from "../styles/styledHeader";
import { BsTelephone } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"



export default function Header() {
    return (

        <StyledHeader>
            <FlexDiv1>
                <BsTelephone />
                <span>+001234567890</span>
            </FlexDiv1>

            <FlexDiv2>
                <span>
                    Get 50% off on Our Magazines
                </span>
                <span>|</span>
                <span>
                    Buy now
                </span>
            </FlexDiv2>
            <FlexDiv3>
                <div>
                    Eng
                    <MdKeyboardArrowDown size={20} />
                </div>
                <div>
                    Location
                    <MdKeyboardArrowDown size={20} />
                </div>
            </FlexDiv3>
        </StyledHeader>

    );
}