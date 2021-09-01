import React from "react";
import styled from "styled-components";

const SlideFooterStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const SlideFooter = (props) => {
  return (
    <SlideFooterStyled className="slide-footer">
      {props.children}
    </SlideFooterStyled>
  );
};

export default SlideFooter;
