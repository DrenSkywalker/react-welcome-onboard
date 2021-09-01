import React from "react";
import styled from "styled-components";

const SlideDescriptionStyled = styled.div`
  color: #2d3748;
  font-size: 16px;
  font-weight: 400;
`;

const SlideDescription = (props) => {
  return (
    <SlideDescriptionStyled className="slide-description">
      {props.children}
    </SlideDescriptionStyled>
  );
};

export default SlideDescription;
