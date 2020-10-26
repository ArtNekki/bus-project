import 'what-input';

//polyfill
import './utils/polyfill';

//modules
import './modules/PageHeader';
import './modules/Slider';
import './modules/PickupTabs';
import './modules/Map';
import './modules/PickupPoint';
import './modules/Select';
import './modules/Contacts';
import './modules/Tooltip';
import { createPopper } from '@popperjs/core';

import {TweenLite} from "gsap";

document.addEventListener('DOMContentLoaded', function () {
});

let dropDown;

// document.addEventListener('mousemove', function(e) {
//   const navtoggle = e.target.closest('.main-nav__link');
//
//   if (navtoggle) {
//
//     dropDown = navtoggle.nextElementSibling;
//
//     if (dropDown) {
//
//       TweenLite.to(dropDown, 0.25, {
//         display: 'block',
//         opacity: 1
//       });
//
//       // createPopper(navtoggle, dropDown, {
//       //   placement: 'top-start',
//       //   modifiers: [
//       //     {
//       //       name: 'offset',
//       //       options: {
//       //         offset: ({ placement, reference, popper }) => {
//       //           return [0, 40];
//       //         }
//       //       },
//       //     },
//       //   ],
//       // });
//
//     }
//
//   } else {
//     TweenLite.to(dropDown, 0, {
//       display: 'none',
//       opacity: 0
//     });
//   }
// });
