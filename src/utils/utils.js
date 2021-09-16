import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const handleTranslate = (
  prev,
  slide,
  totalSlides,
  style,
  setAnimate,
  isSlider
) => {
  if (prev !== slide) {
    if (slide === 1) {
      return setAnimate((animate) => ({
        ...animate,
        translate: `${style}(0)`,
      }));
    }
    if (slide > prev || slide < prev) {
      if (isSlider) {
        return setAnimate((animate) => ({
          ...animate,
          translate: `${style}(calc(((100% / ${totalSlides}) * (${slide} - 1)) * -1))`,
        }));
      } else {
        return setAnimate((animate) => ({
          ...animate,
          translate: `${style}(calc((100% * (${slide} - 1))))`,
        }));
      }
    }
  }
};

const utils = { usePrevious, handleTranslate };

export default utils;
