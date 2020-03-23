export default {

  'card-film': {
    display: 'grid',
    'grid-template-areas': `
      "title title people"
      "img items people"
      "opening opening people"
    `,
    'grid-template-rows': '50px 120px 1fr',
    'grid-template-columns': '33% 33% 34%',
    'grid-gap': '10px',
    height: '100vh',
    margin: '0 auto',
    width: '90%',
  },

  title: {
    'grid-area': 'title',
  },
  img: {
    'grid-area': 'img',
  },
  items: {
    'grid-area': 'items',
  },
  opening: {
    'grid-area': 'opening',
  },
  people: {
    'grid-area': 'people',
  },

  '@media (min-width: 0) and (max-width: 576px)': {
    'card-film': {
      'grid-template-areas': `
        "title"
        "img"
        "items"
        "opening"
        "people"
      `,
    },
  },
  '@media (min-width: 756px)': {
    'card-film': {
      'grid-template-areas': `
        "title title people"
        "img img people"
        "items items people"
        "opening opening people"
      `,
      'grid-template-rows': '50px 120px 50px 1fr',
    },
  },
};
