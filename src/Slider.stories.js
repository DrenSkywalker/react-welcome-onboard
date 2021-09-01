import React from "react";
import Button from "./components/Button/Button";
import Bullets from "./components/Bullets/Bullets";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Slider from "./components/Slider/Slider";
import Slide from "./components/Slide/Slide";
import SlidesContainer from "./components/SlidesContainer/SlidesContainer";
import SlideHeader from "./components/SlideHeader/SlideHeader";
import SlideContent from "./components/SlideContent/SlideContent";
import SlideFooter from "./components/SlideFooter/SlideFooter";
import SlideTitle from "./components/SlideTitle/SlideTitle";
import SlideDescription from "./components/SlideDescription/SlideDescription";
import SliderPagination from "./components/SliderPagination/SliderPagination";
import { useSlider } from "./utils/index";

export default { title: "Examples" };

const Template = (props) => {
  const { numberOfSlides } = props;

  const {
    slide,
    totalSlides,
    incrementSlide,
    decrementSlide,
    jumpToSlide,
  } = useSlider(1, numberOfSlides);

  const renderSlides = () => {
    const slides = [];
    for (let index = 1; index <= numberOfSlides; index++) {
      slides.push(
        <Slide>
          <SlideHeader>
            <SlideTitle>Title {index}</SlideTitle>
          </SlideHeader>
          <SlideContent>
            <SlideDescription>Description {index}</SlideDescription>
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
        transform: "translate(-50%, -50%)",
      }}
    >
      <Slider slide={slide} totalSlides={totalSlides}>
        <SlidesContainer>{renderSlides()}</SlidesContainer>
        <SliderPagination>
          <Button onClick={decrementSlide}>Prev</Button>
          <Bullets jumpToSlide={jumpToSlide} />
          <Button label="Next" onClick={incrementSlide} />
          <ProgressBar />
        </SliderPagination>
      </Slider>
    </div>
  );
};

export const WelcomeOnboard = Template.bind({});
WelcomeOnboard.args = { numberOfSlides: 4 };