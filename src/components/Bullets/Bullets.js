import React from "react";
import styled from "styled-components";

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

    &.current {
      background: rgba(66, 153, 225, 0.6);
      box-shadow: none;
    }
  }
  &:hover {
    background: #e2e8f0;

    &.current {
      background: rgba(66, 153, 225, 0.6);
      box-shadow: none;
    }
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
          className={`slider-bullet-item ${
            index === props.slide ? "current" : ""
          }`}
        />
      );
    }

    return bullets;
  };

  return (
    <BulletStyled className={`slider-bullets-container`}>
      {renderBullets()}
    </BulletStyled>
  );
};

export default Bullets;
