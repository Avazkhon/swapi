export default {

  user: {
    display: 'grid',
    'grid-template-areas': `
      "img img films"
      "profile profile films"
    `,
    'grid-template-rows': '1fr 1fr 1fr',
    'grid-template-columns': '33% 33% 34%',
    'grid-gap': '10px',
    height: '100vh',
    margin: '0 auto',
    width: '90%',
  },

  profile: {
    'grid-area': 'profile',
  },
  img: {
    'grid-area': 'img',
  },
  films: {
    'grid-area': 'films',
  },

  '@media (min-width: 0) and (max-width: 576px)': {
    user: {
      'grid-template-areas': `
        "img"
        "profile"
        "films"
      `,
      'grid-template-columns': '100%',
    },
  },
  '@media (min-width: 756px)': {
    user: {
      'grid-template-areas': `
        "img films"
        "profile films"
      `,
      'grid-template-rows': '120px 1fr',
      'grid-template-columns': '50% 50%',
    },
  },
};
