module.exports = {
  email: 'jeetbanik111@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jeetbanik',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jeetbanik/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jeetban1k/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects & Certifications',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#24c9aa',
    navy: '#010a08',
    darkNavy: '#000a07',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
