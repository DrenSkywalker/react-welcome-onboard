import React from "react";
import styled from "styled-components";

const SlideHeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const SlideHeader = (props) => {
  return (
    <SlideHeaderStyled className={`slide-header`}>
      {props.children}
    </SlideHeaderStyled>
  );
};

export default SlideHeader;
