import React from "react";
import styled from "styled-components";

const SlideTitleStyled = styled.div`
  color: #2d3748;
  font-size: 18px;
  font-weight: 600;
`;

const SlideTitle = (props) => {
  return (
    <SlideTitleStyled className={`slide-title`}>
      {props.children}
    </SlideTitleStyled>
  );
};

export default SlideTitle;
