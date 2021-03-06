import { useState } from "react";

export const useSlider = (initialSlide, totalSlides) => {
  const [slide, setSlide] = useState(initialSlide || 1);

  const jumpToSlide = (value) => {
    slide !== 0 && slide <= totalSlides && value !== 0 && setSlide(value);
  };

  const incrementSlide = () => {
    slide < totalSlides && setSlide((prevState) => prevState + 1);
  };

  const decrementSlide = () => {
    slide !== 1 && setSlide((prevState) => prevState - 1);
  };

  return { slide, totalSlides, jumpToSlide, incrementSlide, decrementSlide };
};

export const usePreferences = (preferences) => {
  const [preferencesList, setPreferencesList] = useState(
    preferences.map((preference) => ({
      ...preference,
      isClicked: false,
    }))
  );

  const setPreference = (preference, isClicked) => {
    setPreferencesList(
      preferencesList.map((pref) =>
        pref.value === preference.value
          ? {
              ...pref,
              isClicked: isClicked,
            }
          : {
              ...pref,
              isClicked: pref.isClicked,
            }
      )
    );
  };

  return { preferencesList, setPreference };
};
