import Particles from 'particlesjs';
import Typed from 'typed.js';

Particles.init({
	selector: '.background',
  color: ['#ffffff', '#f55656'],
  maxParticles: 150,
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 100,
        color: ['#ffffff', '#f55656'],
        connectParticles: true
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 50,
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0
      }
    }
  ]
});

const options = {
  strings: ['You can use ES6 and newer JS verion outside the box', 'You can use CSS and SCSS. It has an Autoprefixer integrated', 'You can use Images, Fonts, and IcoFonts', 'You have Dev Server with live reload'],
  typeSpeed: 150,
  startDelay: 1000,
  loop: true,
  loopCount: Infinity,
}

var typed = new Typed(".hero__subheader", options);