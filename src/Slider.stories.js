import React from "react";
import Button from "./components/Button/Button";
import Bullets from "./components/Bullets/Bullets";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Preferences from "./components/Preferences/Preferences";
import Slider from "./components/Slider/Slider";
import Slide from "./components/Slide/Slide";
import SlidesContainer from "./components/SlidesContainer/SlidesContainer";
import SlideHeader from "./components/SlideHeader/SlideHeader";
import SlideContent from "./components/SlideContent/SlideContent";
import SlideFooter from "./components/SlideFooter/SlideFooter";
import SlideTitle from "./components/SlideTitle/SlideTitle";
import SlideDescription from "./components/SlideDescription/SlideDescription";
import SliderPagination from "./components/SliderPagination/SliderPagination";
import { useSlider, usePreferences } from "./utils/index";

export default { title: "Examples" };

const Template = (props) => {
  const { numberOfSlides, isSliderVertical, isProgressBarVertical } = props;

  const {
    slide,
    totalSlides,
    incrementSlide,
    decrementSlide,
    jumpToSlide,
  } = useSlider(1, numberOfSlides);

  const { preferencesList, setPreference } = usePreferences([
    { label: "adventure", value: "adventure" },
    { label: "comedy", value: "comedy" },
    { label: "fantasy", value: "fantasy" },
    { label: "sci-fi", value: "sci-fi" },
    { label: "thriller", value: "thriller" },
    { label: "horror", value: "horror" },
  ]);

  const renderSlides = () => {
    const slides = [];
    for (let index = 1; index <= numberOfSlides; index++) {
      slides.push(
        <Slide key={index}>
          <SlideHeader>
            <SlideTitle>
              {index === 1 ? <>Slide Example</> : <>Title {index}</>}
            </SlideTitle>
          </SlideHeader>
          <SlideContent>
            <SlideDescription>
              {index === 1 ? (
                <>Icon Button and Categories</>
              ) : (
                <>Description {index}</>
              )}
            </SlideDescription>
            {index === 1 && (
              <>
                <Button isIcon={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </Button>
                <Preferences
                  preferences={preferencesList}
                  setPreference={setPreference}
                />
              </>
            )}
          </SlideContent>
          <SlideFooter>Footer {index}</SlideFooter>
        </Slide>
      );
    }

    return slides;
  };

  return (
    <div
      className="container-slider"
      style={{
        width: "300px",
        height: "500px",
        position: "absolute",
        top: "50%",
        left: "50%",
        display: "flex",
        gap: "20px",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Slider
        slide={slide}
        totalSlides={totalSlides}
        isSliderVertical={isSliderVertical}
      >
        <SlidesContainer>{renderSlides()}</SlidesContainer>
        <SliderPagination>
          <Button onClick={decrementSlide}>Prev</Button>
          <Bullets jumpToSlide={jumpToSlide} />
          <Button label="Next" onClick={incrementSlide} />
        </SliderPagination>
        <ProgressBar isProgressBarVertical={isProgressBarVertical} />
      </Slider>
    </div>
  );
};

/*



*/

export const WelcomeOnboard = Template.bind({});
WelcomeOnboard.args = {
  numberOfSlides: 3,
  isSliderVertical: false,
  isProgressBarVertical: false,
};
