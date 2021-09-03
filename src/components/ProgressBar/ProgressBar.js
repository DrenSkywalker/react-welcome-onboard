import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const ProgressBarStyled = styled.div`
  width: 100%;
  height: 6px;
  flex-shrink: 1;
  background: #edf2f7;
  border-radius: 5px;
`;

const ProgressBarItemStyled = styled.div`
  & {
    width: ${(props) => props.setWidth};
    height: 6px;
    border: none;
    background: rgba(66, 153, 225, 0.6);
    transform: translateX(${(props) => props.translate});
    transition: transform ease-out ${(props) => props.transition}s;
    ${(props) =>
      props.isFirst &&
      css`
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      `}
    ${(props) =>
      props.isLast &&
      css`
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      `}
  }
`;

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const ProgressBar = (props) => {
  const [animate, setAnimate] = useState({
    translate: 0,
    transition: 0.45,
  });
  const { translate, transition } = animate;
  const prevProgressBarItem = usePrevious(props.slide);

  useEffect(() => {
    if (prevProgressBarItem !== props.slide) {
      if (props.slide === 1) {
        return setAnimate((animate) => ({ ...animate, translate: 0 }));
      }
      if (props.slide > prevProgressBarItem) {
        return setAnimate((animate) => ({
          ...animate,
          translate: `calc((100% * (${props.slide} - 1)))`,
        }));
      }
      if (props.slide < prevProgressBarItem) {
        return setAnimate((animate) => ({
          ...animate,
          translate: `calc((100% * (${props.slide} - 1)))`,
        }));
      }
    }
  }, [props.slide]);

  return (
    <ProgressBarStyled className="progress-bar">
      <ProgressBarItemStyled
        setWidth={`calc(100% / ${props.totalSlides})`}
        isFirst={props.slide === 1}
        isLast={props.slide === props.totalSlides}
        translate={translate}
        transition={transition}
        className="progress-bar-item"
      />
    </ProgressBarStyled>
  );
};

export default ProgressBar;
