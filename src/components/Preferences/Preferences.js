import React from "react";
import styled, { css } from "styled-components";

const PreferencesStyled = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const PreferenceStyled = styled.div`
  & {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background: #edf2f7;
    color: #2d3748;
    font-size: 12px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    transition: 250ms background ease;
    ${(props) =>
      props.isClicked &&
      css`
        background: #edf2f7;
        box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
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

const Preference = (props) => {
  const { preference, setPreference } = props;
  const setButtonClicked = () => {
    preference.isClicked === true
      ? setPreference(preference, false)
      : setPreference(preference, true);
  };

  return (
    <PreferenceStyled
      onClick={() => setButtonClicked()}
      isClicked={preference.isClicked}
      className="slider-preference-item"
    >
      {preference.label}
    </PreferenceStyled>
  );
};

const Preferences = (props) => {
  const { preferences, setPreference } = props;

  return (
    <PreferencesStyled className="slider-preferences-container">
      {preferences.map((preference, i) => (
        <Preference
          key={i}
          preference={preference}
          setPreference={setPreference}
        />
      ))}
    </PreferencesStyled>
  );
};

export default Preferences;
