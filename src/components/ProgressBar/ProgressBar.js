import React from "react";
import styled, { css } from "styled-components";

const ProgressBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
`;

const ProgressBarItemStyled = styled.div`
  & {
    width: ${(props) => props.setWidth};
    height: 6px;
    border: none;
    background: #edf2f7;
    transition: 250ms background ease;
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
    ${(props) =>
      props.isCurrent &&
      css`
        background: rgba(66, 153, 225, 0.6);
        box-shadow: none;
      `}
  }
`;

const ProgressBar = (props) => {
  const renderProgressBar = () => {
    const items = [];
    for (let index = 1; index <= props.totalSlides; index++) {
      items.push(
        <ProgressBarItemStyled
          key={index}
          setWidth={`calc(100% / ${props.totalSlides})`}
          isFirst={index === props.totalSlides + 1 - props.totalSlides}
          isLast={index === props.totalSlides}
          isCurrent={index === props.slide}
        />
      );
    }

    return items;
  };

  return (
    <ProgressBarStyled className="progress-bar">
      {renderProgressBar()}
    </ProgressBarStyled>
  );
};

export default ProgressBar;
