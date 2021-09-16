import React from "react";
import styled, { css } from "styled-components";

const SlideStyled = styled.div`
  & {
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &.vertical {
      height: calc((100% / ${(props) => props.totalSlides}) - 80px);
      margin-bottom: 80px;
    }
  }
`;

const Slide = (props) => {
  const { totalSlides, isSliderVertical } = props;

  return (
    <SlideStyled
      className={`slide ${isSliderVertical ? "vertical" : ""}`}
      totalSlides={totalSlides}
      isSliderVertical={isSliderVertical}
    >
      {props.children}
    </SlideStyled>
  );
};

export default Slide;
