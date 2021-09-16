import React, { cloneElement } from "react";
import styled from "styled-components";
import GlobalFonts from "../../fonts/fonts";

const SliderStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  font-weight: 300;
  font-family: "Inter", sans-serif;
  overflow: hidden;
`;

const Slider = (props) => {
  const { slide, totalSlides, isSliderVertical } = props;

  return (
    <>
      <GlobalFonts />
      <SliderStyled className={`slider`}>
        {props.children !== undefined && props.children.length > 1 ? (
          props.children.map((child, i) => {
            if (
              child["type"] !== undefined &&
              (child["type"].name === "SlidesContainer" ||
                child["type"].name === "SliderPagination" ||
                child["type"].name === "ProgressBar")
            ) {
              return (
                <React.Fragment key={i}>
                  {cloneElement(child, {
                    slide: slide,
                    totalSlides: totalSlides,
                    isSliderVertical: isSliderVertical,
                  })}
                </React.Fragment>
              );
            }
          })
        ) : props.children !== undefined &&
          props.children["type"].name === "SlidesContainer" ? (
          <React.Fragment>
            {cloneElement(props.children, {
              slide: slide,
              totalSlides: totalSlides,
              isSliderVertical: isSliderVertical,
            })}
          </React.Fragment>
        ) : (
          props.children
        )}
      </SliderStyled>
    </>
  );
};

export default Slider;
