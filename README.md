<p align="center">
<br/><br/>
<img src="https://i.ibb.co/LJTFkkr/plane.png" width="150px">
<br/><br/>
</p>

## <p align="center">☁️ Welcome Onboard! ☁️</p>

<p align="center">
<a href="https://drenskywalker.github.io/react-welcome-onboard/"><img src="https://img.shields.io/badge/Try it out!-399AEA?style=flat"></a>
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

## 📚 Modules: "useSlider" Hook

Use the **useSlider** hook to handle the slider's state.

```js
const { slide, totalSlides, incrementSlide, decrementSlide } = useSlider(1, 2);
```

This hook contains two arguments:

- **initial slide**: the starting slide, in our example our slider begins with the first slide;
- **total slides**: maximum slides present in the slider, in our example our slider contains a total slides of 2.

**useSlider** allows the user to use various functions for pagination:

- **incrementSlide** and **decrementSlide**: they work together and can be used within the given _Button_ component to switch slide;
- **jumpToSlide**: works alone within the given _Bullets_ component. This functions allows you to jump on a specific slide by clicking on its bullet.

## 📚 Modules: Slider Component

**Slider** is the main component containing the structure.  
Inside we can find:

### ☁️ SlidesContainer

This component contains all of our **Slides**.

### ☁️ Slide

Each **Slide** can optionally contain:

- a **SlideHeader**;
- a **SlideContent**;
- and a **SlideFooter**.

Inside each of these components, can optionally be found

- a **SlideTitle**;
- and a **SlideDescription**.

```html
<Slide>
  <SlideHeader>
    <SlideTitle>Title</SlideTitle>
  </SlideHeader>
  <SlideContent>
    <SlideDescription>Description</SlideDescription>
  </SlideContent>
  <SlideFooter>Footer</SlideFooter>
</Slide>
```

### ☁️ SliderPagination

This is the pagination container, which can contain:

- two **Buttons** and / or the **Bullets** component;
- it can also contain the **ProgressionBar**: a completely optional component simply showing the sliding progression.

```js
<SliderPagination>
  <Button label="Prev" onClick="{decrementSlide}" />
  <Bullets jumpToSlide="{jumpToSlide}" />
  <Button label="Next" onClick="{incrementSlide}" />
  <ProgressBar />
</SliderPagination>
```

### ☁️ Buttons

**Buttons** come with two different functions: _incrementSlide_ and _decrementSlide_ used to switch between slides.

You can attach a label or pass a content inside of them:

```js
<Button onClick="{decrementSlide}">Prev</Button>
<Button label="Next" onClick="{incrementSlide}" />
```

You can also create a "button icon":

```js
<Button isIcon={true}>your svg / img</Button>
```

### ☁️ Bullets

**Bullets** come with the _jumpToSlide_ functions which allows the user to jump to a specific slide.

## 📚 Modules: "usePreferences" Hook

Use the **usePreferences** hook to handle the user preferences.

```js
const { preferencesList, setPreference } = usePreferences([
  { label: "adventure", value: "adventure" },
  { label: "comedy", value: "comedy" },
  { label: "fantasy", value: "fantasy" },
  { label: "sci-fi", value: "sci-fi" },
  { label: "thriller", value: "thriller" },
  { label: "horror", value: "horror" },
]);
```

This hook contains one argument:

- **preferences list**: an array of objects containing all the preferences. Each objects has a _label_ and a _value_;

Users can use the _preferenceList_ variable to check if a preference is selected or not: it returns the preferences array.

You can place the preferences buttons inside your slide of choice by using:

```js
<Preferences preferences={preferencesList} setPreference={setPreference} />
```

## 🌈 Customize Everything

Every component has its own _className_, so you can easily customize each module as you prefer.

Here's a list of _classNames_ used:

| Component          | ClassName         | Component         | ClassName                    |
| ------------------ | ----------------- | ----------------- | ---------------------------- |
| `Slider`           | slider            | `Button`          | slider-button                |
| `SlidesContainer`  | slides-container  | `ButtonIcon`      | slider-button-icon           |
| `SliderPagination` | slider-pagination | `Bullets`         | slider-bullets-container     |
| `Slide`            | slide             | `BulletItem`      | slider-bullet-item           |
| `SlideHeader`      | slide-header      | `ProgressBar`     | slider-progressbar           |
| `SlideContent`     | slide-content     | `ProgressBarItem` | slider-progressbar-item      |
| `SlideFooter`      | slide-footer      | `Preferences`     | slider-preferences-container |
| `SlideTitle`       | slide-title       | `PreferenceItem`  | slider-preference-item       |
| `SlideDescription` | slide-description |                   |                              |

## ✨ License and Special Thanks

**Welcome Onboard** is released under the _MIT_ license, feel free to use it, share and modify.

☁️ **Buttons** style inspiration from the beautiful [Chakra UI](https://github.com/chakra-ui/chakra-ui)
