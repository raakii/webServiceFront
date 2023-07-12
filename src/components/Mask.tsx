import React from 'react';
import { LeftMaskStyle, MaskButton, RightMaskStyle, StyledMask } from '../styles/styledMask';
import journal from '../assets/abby.png'

function Mask() {
  return (
    <StyledMask>
        <LeftMaskStyle>
            Get what's new on the World's Actuality
            <MaskButton>Subs now</MaskButton>
        </LeftMaskStyle>
        <RightMaskStyle>
            <img src={journal} width='330px' height='370px' />
        </RightMaskStyle>
    </StyledMask>
  );
}

export default Mask;
