import Slider from './SliderComponent.js';

document.addEventListener('DOMContentLoaded', function () {
  // new Slider({ target: '#example-slider', settings: {
  //     slidesPerView: 1,
  //     spaceBetween: 1
  //   }});
  //
  // alert(1);
});

const exampleSlider = document.querySelector('#example-slider');

if (exampleSlider) {

  new Slider({ target: '#example-slider', settings: {
      slidesPerView: 1,
      spaceBetween: 1
    }});
}

