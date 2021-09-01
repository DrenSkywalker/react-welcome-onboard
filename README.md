<p align="center">
<br/><br/>
<img src="https://img-premium.flaticon.com/png/512/870/premium/870194.png?token=exp=1630536771~hmac=74068509e17bcfce1aafccc0e69bdc7b" width="150px">
<br/><br/>
</p>

# <p align="center">Welcome Onboard!</p>

<p align="center">
A cute and minimal "onboarding" library for React!
<br/><br/>
</p>

## ⚙️ Installation

```ruby
$ npm i react-welcome-onboard
$ yarn add react-welcome-onboard
```

## ✈️ Using _Welcome Onboard_

```js
import React from 'react';
import {
  Slider,
  SlidesContainer,
  SliderPagination,
  Slide,
  SlideHeader,
  SlideTitle,
  SlideContent,
  SlideDescription,
  SlideFooter,
  Button,
  Bullets,
  ProgressBar
} from "react-welcome-onboard";

export default const App = () => {
  const {
    slide,
    totalSlides,
    incrementSlide,
    decrementSlide,
    jumpToSlide,
  } = useSlider(1, 2);

  return (
      <Slider slide={slide} totalSlides={totalSlides}>
        <SlidesContainer>
          <Slide>
            <SlideHeader>
              <SlideTitle>Title 1</SlideTitle>
            </SlideHeader>
            <SlideContent>
              <SlideDescription>Description 1</SlideDescription>
            </SlideContent>
            <SlideFooter>Footer 1</SlideFooter>
          </Slide>

          <Slide>
            <SlideHeader>
              <SlideTitle>Title 2</SlideTitle>
            </SlideHeader>
            <SlideContent>
              <SlideDescription>Description 2</SlideDescription>
            </SlideContent>
            <SlideFooter>Footer 2</SlideFooter>
          </Slide>
        </SlidesContainer>

        <SliderPagination>
          <Button onClick={decrementSlide}>Prev</Button>
          <Bullets jumpToSlide={jumpToSlide} />
          <Button label="Next" onClick={incrementSlide} />
          <ProgressBar />
        </SliderPagination>
      </Slider>
  )
}
```

## 📚 All About the Modules

### ☁️ "useSlider" hook!

Use the **useSlider** to determine the _initial_ slide and the _total_ slides inside your slider.

You can also import the functions you need for the pagination:

- **incrementSlide** and **decrementSlide**: they work together and can be used within the given _Button_ component to switch slide;
- **jumpToSlide**: works alone within the given _Bullets_ component. This functions allows you to jump on a specific slide by clicking on its bullet.

### ☁️ Structure of "Slider"

**Slider** is the main component containing the structure.  
Inside we can find:

#### SlidesContainer

This component contains all of our **Slides**.

#### Slide

Each **Slide** can optionally contain a **SlideHeader**, a **SlideContent** and a **SlideFooter**.  
Inside each of these components, can optionally be found a **SlideTitle** and a **SlideDescription**.

#### SliderPagination

This is the pagination component, which can contain two **Buttons** and / or the **Bullets**.  
It can also optionally contain the **ProgressionBar**.

#### Buttons

**Buttons** come with two different functions: _incrementSlide_ and _decrementSlide_.  
These functions are mandatory to switch between slides.

#### Bullets

**Bullets** come with the _jumpToSlide_ functions which allows the user to jump to a specific slide.

#### ProgressBar

This completely optional component simply shows the sliding progression.

## ✨ License and Special Thanks

**Welcome Onboard** is released under the _MIT_ license, feel free to use it, share and modify.

☁️ **Buttons** style inspiration from the beautiful [Chakra UI](https://github.com/chakra-ui/chakra-ui)
