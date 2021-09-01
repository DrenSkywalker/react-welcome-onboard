import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const BulletStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Bullets = (props) => {
  const renderBullets = () => {
    const bullets = [];
    for (let index = 1; index <= props.totalSlides; index++) {
      bullets.push(
        <Button
          key={index}
          isBullet={true}
          isCurrent={index === props.slide}
          onClick={() => props.jumpToSlide(index)}
        />
      );
    }

    return bullets;
  };

  return <BulletStyled className="bullets">{renderBullets()}</BulletStyled>;
};

export default Bullets;
