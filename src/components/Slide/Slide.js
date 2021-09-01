import React from "react";
import styled from "styled-components";

const SlideStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Slide = (props) => {
  return <SlideStyled className="slide">{props.children}</SlideStyled>;
};

export default Slide;
