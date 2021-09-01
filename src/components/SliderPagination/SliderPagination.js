import React, { cloneElement } from "react";
import styled from "styled-components";

const SliderPaginationStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
`;

const SliderPagination = (props) => {
  return (
    <SliderPaginationStyled id="slider-pagination">
      {props.children.map((child, i) => {
        if (
          child["type"] !== undefined &&
          (child["type"].name === "Button" ||
            child["type"].name === "Bullets" ||
            child["type"].name === "ProgressBar")
        ) {
          return (
            <React.Fragment key={i}>
              {cloneElement(child, {
                slide: props.slide,
                totalSlides: props.totalSlides,
              })}
            </React.Fragment>
          );
        }
      })}
    </SliderPaginationStyled>
  );
};

export default SliderPagination;
