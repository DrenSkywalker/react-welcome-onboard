<p align="center">
<br/><br/>
<img src="https://i.ibb.co/LJTFkkr/plane.png" width="150px">
<br/><br/>
</p>

## <p align="center">☁️ Welcome Onboard! ☁️</p>

<p align="center">
<a href="https://drenskywalker.github.io/react-welcome-onboard/"><img src="https://img.shields.io/badge/Try it out!-399AEA?style=flat"></a>
<a href="https://github.com/DrenSkywalker/react-welcome-onboard/wiki"><img src="https://img.shields.io/badge/Wiki-📖-blue?style=social"/></a> 
<img src="https://img.shields.io/badge/Open%20Source-🤍-399AEA">
<img src="https://img.shields.io/github/stars/DrenSkywalker/react-welcome-onboard?color=399AEA&label=Stars">
<img src="https://img.shields.io/npm/dw/react-welcome-onboard?color=399AEA&label=Downloads">
<img src="https://img.shields.io/github/license/DrenSkywalker/react-welcome-onboard?color=399AEA&label=License">
</p>

<p align="center">
A cute and minimal <i>"onboarding"</i> library for React!
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
  Button,
  useSlider
} from "react-welcome-onboard";

export default const App = () => {
  const {
    slide,
    totalSlides,
    incrementSlide,
    decrementSlide,
  } = useSlider(1, 2);

  return (
      <Slider slide={slide} totalSlides={totalSlides}>
        <SlidesContainer>
          <Slide>Slide 1 content</Slide>
          <Slide>Slide 2 content</Slide>
        </SlidesContainer>

        <SliderPagination>
          <Button label="Prev" onClick={decrementSlide}/>
          <Button label="Next" onClick={incrementSlide} />
        </SliderPagination>
      </Slider>
  )
}
```

## ✨ License and Special Thanks

**Welcome Onboard** is released under the _MIT_ license, feel free to use it, share and modify.

☁️ **Buttons** style inspiration from the beautiful [Chakra UI](https://github.com/chakra-ui/chakra-ui)
