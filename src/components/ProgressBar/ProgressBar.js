import React, { useState, useEffect } from "react";
import styled from "styled-components";
import utils from "./../../utils/utils";

const ProgressBarStyled = styled.div`
  & {
    width: 100%;
    height: 6px;
    flex-shrink: 1;
    position: absolute;
    bottom: 0;
    background: #edf2f7;

    &.vertical {
      width: 6px;
      height: 100%;
      top: 0;
      right: 0;
    }
  }
`;

const ProgressBarItemStyled = styled.div`
  width: ${(props) => props.setWidth};
  height: ${(props) => props.setHeight};
  border: none;
  background: rgba(66, 153, 225, 0.6);
  transform: ${(props) => props.translate};
  transition: transform ease-out ${(props) => props.transition}s;
`;

const ProgressBar = (props) => {
  const { slide, totalSlides, isProgressBarVertical } = props;

  const [animate, setAnimate] = useState({
    translate: !isProgressBarVertical ? "translateX(0)" : "translateY(0)",
    transition: 0.45,
  });
  const { translate, transition } = animate;

  const prev = utils.usePrevious(slide);

  useEffect(() => {
    let translate = !isProgressBarVertical ? "translateX" : "translateY";
    utils.handleTranslate(
      prev,
      slide,
      totalSlides,
      translate,
      setAnimate,
      false
    );
  }, [slide]);

  return (
    <ProgressBarStyled
      className={`slider-progressbar ${
        isProgressBarVertical ? "vertical" : ""
      }`}
      isProgressBarVertical={isProgressBarVertical}
    >
      <ProgressBarItemStyled
        setWidth={
          !isProgressBarVertical ? `calc(100% / ${totalSlides})` : `100%`
        }
        setHeight={
          !isProgressBarVertical ? `100%` : `calc(100% / ${totalSlides})`
        }
        translate={translate}
        transition={transition}
        className="slider-progressbar-item"
      />
    </ProgressBarStyled>
  );
};

export default ProgressBar;
