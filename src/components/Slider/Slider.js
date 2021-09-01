import React, { cloneElement, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalFonts from "../../fonts/fonts";

const SliderStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  background: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  font-weight: 300;
  font-family: "Inter", sans-serif;
  overflow: hidden;
`;

const InvalidStructureMessageStyled = styled.div`
  padding: 15px;
`;

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const Slider = (props) => {
  const [animate, setAnimate] = useState({
    translate: 0,
    transition: 0.45,
  });
  const { translate, transition } = animate;
  const prevSlide = usePrevious(props.slide);
  const invalidStructureMessage =
    "Look at the documentation to insert the correct Slider structure!";

  useEffect(() => {
    if (prevSlide !== props.slide) {
      if (props.slide === 1) {
        return setAnimate((animate) => ({ ...animate, translate: 0 }));
      }
      if (props.slide > prevSlide) {
        return setAnimate((animate) => ({
          ...animate,
          translate: `calc(((100% / ${props.totalSlides}) * (${props.slide} - 1)) * -1)`,
        }));
      }
      if (props.slide < prevSlide) {
        return setAnimate((animate) => ({
          ...animate,
          translate: `calc(((100% / ${props.totalSlides}) * (${props.slide} - 1)) * -1)`,
        }));
      }
    }
  }, [props.slide]);

  return (
    <>
      <GlobalFonts />
      <SliderStyled className="slider">
        {props.children !== undefined && props.children.length > 1
          ? props.children.map((child, i) => {
              if (
                child["type"] !== undefined &&
                (child["type"].name === "SlidesContainer" ||
                  child["type"].name === "SliderPagination")
              ) {
                return (
                  <React.Fragment key={i}>
                    {cloneElement(child, {
                      slide: props.slide,
                      totalSlides: props.totalSlides,
                      translate: translate,
                      transition: transition,
                    })}
                  </React.Fragment>
                );
              } else {
                return (
                  <InvalidStructureMessageStyled>
                    {invalidStructureMessage}
                  </InvalidStructureMessageStyled>
                );
              }
            })
          : props.children}
      </SliderStyled>
    </>
  );
};

export default Slider;
