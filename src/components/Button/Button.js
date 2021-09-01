import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.div`
  & {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background: #edf2f7;
    color: #2d3748;
    font-size: 16px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    transition: 250ms background ease;
    ${(props) =>
      props.isIcon &&
      css`
        max-width: 36px;
        max-height: 36px;
        padding: 8px;
        border-radius: 5px;
      `}
    ${(props) =>
      props.isBullet &&
      css`
        width: 12px;
        height: 12px;
        padding: 0;
        margin: 4px;
        border-radius: 50px;
      `}
    ${(props) =>
      props.isBullet &&
      props.isCurrent &&
      css`
        background: rgba(66, 153, 225, 0.6);
        box-shadow: none;
      `}
  }
  &:hover {
    background: #e2e8f0;
    ${(props) =>
      props.isBullet &&
      props.isCurrent &&
      css`
        background: rgba(66, 153, 225, 0.6);
        box-shadow: none;
      `}
  }
  &:active {
    background: #edf2f7;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
    ${(props) =>
      props.isBullet &&
      css`
        background: rgba(66, 153, 225, 0.6);
        box-shadow: none;
      `}
  }
`;

const IconStyled = styled.div`
  & {
    width: 20px;
    height: 20px;
    fill: black;
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled
      className={`button ${props.isBullet ? "bullet" : ""}`}
      isIcon={props.isIcon}
      isBullet={props.isBullet}
      isCurrent={props.isCurrent}
      onClick={props.onClick}
    >
      {props.label !== undefined ? (
        props.label
      ) : props.children !== undefined && props.isIcon ? (
        <IconStyled className="button-icon">{props.children}</IconStyled>
      ) : (
        props.children
      )}
    </ButtonStyled>
  );
};

export default Button;
