import React from "react";
import styled, { css } from "styled-components";

const BulletStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const BulletItemStyled = styled.div`
  & {
    width: 12px;
    height: 12px;
    padding: 0;
    margin: 4px;
    border: none;
    border-radius: 50px;
    background: #edf2f7;
    cursor: pointer;
    transition: 250ms background ease;
    ${(props) =>
      props.isCurrent &&
      css`
        background: rgba(66, 153, 225, 0.6);
        box-shadow: none;
      `}
  }
  &:hover {
    background: #e2e8f0;
    ${(props) =>
      props.isCurrent &&
      css`
        background: rgba(66, 153, 225, 0.6);
        box-shadow: none;
      `}
  }
  &:active {
    background: rgba(66, 153, 225, 0.6);
    box-shadow: none;
  }
`;

const Bullets = (props) => {
  const renderBullets = () => {
    const bullets = [];
    for (let index = 1; index <= props.totalSlides; index++) {
      bullets.push(
        <BulletItemStyled
          key={index}
          isCurrent={index === props.slide}
          onClick={() => props.jumpToSlide(index)}
          className="bullet-item"
        />
      );
    }

    return bullets;
  };

  return <BulletStyled className="bullets">{renderBullets()}</BulletStyled>;
};

export default Bullets;
