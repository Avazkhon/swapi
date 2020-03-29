export default {

  title: {
    'text-align': 'center',
  },

  user: {
    display: 'grid',
    'grid-template-areas': `
      "img img films"
      "profile profile films"
    `,
    'grid-template-rows': '50px 120px 1fr',
    'grid-template-columns': '33% 33% 34%',
    padding: '10px',
    height: '100vh',
    margin: '0 auto',
  },

  profile: {
    'grid-area': 'profile',
    'margin-top': '10px',
  },
  img: {
    'grid-area': 'img',
  },
  films: {
    'grid-area': 'films',
    'margin-top': '10px',
  },

  '@media (min-width: 0) and (max-width: 576px)': {
    user: {
      'grid-template-areas': `
        "img"
        "profile"
        "films"
      `,
      'grid-template-columns': '100%',
      'grid-template-rows': '1fr',
      height: 0,
    },
    img: {
      width: '100%',
    },
  },

  '@media (min-width: 577px)': {
    user: {
      'grid-template-areas': `
        "img"
        "films"
        "profile"
      `,
      'grid-template-rows': '1fr',
      'grid-template-columns': '100%',
    },
  },

  '@media (min-width: 720px)': {
    user: {
      'grid-template-areas': `
        "img films"
        "profile films"
        "profile films"
      `,
      'grid-template-rows': '120px 1fr',
      'grid-template-columns': '50% 50%',
    },
  },
};
