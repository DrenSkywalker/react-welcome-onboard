import React from "react";
import styled from "styled-components";

const SlideContentStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  overflow: hidden;
  flex: 1 1 100%;
`;

const SlideContent = (props) => {
  return (
    <SlideContentStyled className={`slide-content`}>
      {props.children}
    </SlideContentStyled>
  );
};

export default SlideContent;
