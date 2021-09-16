import React from "react";
import styled from "styled-components";

const SlideFooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const SlideFooter = (props) => {
  return (
    <SlideFooterStyled className={`slide-footer`}>
      {props.children}
    </SlideFooterStyled>
  );
};

export default SlideFooter;
