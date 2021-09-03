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
  }
  &:hover {
    background: #e2e8f0;
  }
  &:active {
    background: #edf2f7;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
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
      className={`button ${props.isIcon ? "icon" : ""}`}
      isIcon={props.isIcon}
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
