import $ from 'jquery';
import gsap from 'gsap';

/**
 * @author kale
 * @description Upon page start function.
 */
function init() {
  $(document).ready(function () {
    animateElements();
  });
}

/**
 * @author kale
 * @description Animate elements on page load.
 */
function animateElements() {
  // gsap.from($('.char') , { opacity: 0, duration: 1, y: 100, stagger: 0.3})
  gsap.from($('#freezetess'), { opacity: 0, duration: 1, y: 100 });
  gsap.from($('#shockitty'), { opacity: 0, duration: 1, x: -100 });
  gsap.from($('#smirkitsune'), { opacity: 0, duration: 1, x: 100 });
  gsap.from($('#logo'), { opacity: 0, duration: 1, y: 250 });
  gsap.from($('#desktop'), { opacity: 0, duration: 2.5 });
  gsap.from($('#portable'), { opacity: 0, duration: 2.5 });
}

init();

export default init;
