import React, { cloneElement, useState, useEffect } from "react";
import styled from "styled-components";
import utils from "./../../utils/utils";

const SlidesContainerStyled = styled.div`
  & {
    width: calc(100% * ${(props) => props.totalSlides});
    height: 100%;
    display: flex;
    flex-direction: row;
    transform: ${(props) => props.translate};
    transition: transform ease-out ${(props) => props.transition}s;

    &.vertical {
      width: 100%;
      height: calc(100% * ${(props) => props.totalSlides});
      flex-direction: column;
    }
  }
`;

const SlidesContainer = (props) => {
  const { slide, totalSlides, isSliderVertical } = props;

  const [animate, setAnimate] = useState({
    translate: !isSliderVertical ? "translateX(0)" : "translateY(0)",
    transition: 0.45,
  });
  const { translate, transition } = animate;

  const prev = utils.usePrevious(slide);

  useEffect(() => {
    let translate = !isSliderVertical ? "translateX" : "translateY";
    utils.handleTranslate(
      prev,
      slide,
      totalSlides,
      translate,
      setAnimate,
      true
    );
  }, [slide]);

  return (
    <SlidesContainerStyled
      className={`slides-container ${isSliderVertical ? "vertical" : ""}`}
      translate={translate}
      transition={transition}
      totalSlides={totalSlides}
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
                    totalSlides: totalSlides,
                    isSliderVertical: isSliderVertical,
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
