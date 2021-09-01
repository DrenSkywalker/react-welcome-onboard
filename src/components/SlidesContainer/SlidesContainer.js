import React, { cloneElement } from "react";
import styled from "styled-components";

const SlidesContainerStyled = styled.div`
  width: calc(100% * ${(props) => props.totalSlides});
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.translate});
  transition: transform ease-out ${(props) => props.transition}s;
`;

const SlidesContainer = (props) => {
  return (
    <SlidesContainerStyled
      className="slides-container"
      translate={props.translate}
      transition={props.transition}
      totalSlides={props.totalSlides}
    >
      {props.children !== undefined && props.children.length > 1
        ? props.children.map((child, i) => {
            if (
              child["type"] !== undefined &&
              child["type"].name === "Slide" &&
              child
            ) {
              return (
                <React.Fragment key={i}>
                  {cloneElement(child, {
                    slide: i,
                  })}
                </React.Fragment>
              );
            }
          })
        : props.children}
    </SlidesContainerStyled>
  );
};

export default SlidesContainer;
