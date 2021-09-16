import React, { cloneElement } from "react";
import styled from "styled-components";

const SliderPaginationStyled = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: white;
  box-sizing: border-box;
`;

const SliderPagination = (props) => {
  return (
    <SliderPaginationStyled className={`slider-pagination`}>
      {props.children !== undefined && props.children.length > 1
        ? props.children.map((child, i) => {
            if (
              child["type"] !== undefined &&
              (child["type"].name === "Button" ||
                child["type"].name === "Bullets")
            ) {
              return (
                <React.Fragment key={i}>
                  {cloneElement(child, {
                    slide: props.slide,
                    totalSlides: props.totalSlides,
                    isSliderVertical: props.isSliderVertical,
                  })}
                </React.Fragment>
              );
            }
          })
        : props.children}
    </SliderPaginationStyled>
  );
};

export default SliderPagination;
