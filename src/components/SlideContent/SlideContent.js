import React from "react";
import styled from "styled-components";

const SlideContentStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

const SlideContent = (props) => {
  return (
    <SlideContentStyled className="slide-content">
      {props.children}
    </SlideContentStyled>
  );
};

export default SlideContent;
