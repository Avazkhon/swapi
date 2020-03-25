export default {

  'card-film': {
    display: 'grid',
    'grid-template-areas': `
      "title title people"
      "img items people"
      "discription discription people"
    `,
    'grid-template-rows': '50px 120px 1fr',
    'grid-template-columns': '33% 33% 34%',
    padding: '10px',
    height: '100vh',
    margin: '0 auto',
  },

  title: {
    'grid-area': 'title',
    'text-align': 'center',
  },
  img: {
    'grid-area': 'img',
  },
  items: {
    'grid-area': 'items',
  },
  discription: {
    'grid-area': 'discription',
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
        "discription"
        "people"
      `,
      'grid-template-columns': '100%',
      'grid-template-rows': '1fr',
    },
    img: {
      width: '100%',
    },
  },

  '@media (min-width: 577px)': {
    'card-film': {
      'grid-template-areas': `
        "title title people"
        "img img people"
        "items items people"
        "discription discription people"
      `,
      'grid-template-rows': '50px 120px 50px 1fr',
    },
  },

  '@media (min-width: 1140px)': {
    'card-film': {
      'grid-template-areas': `
        "title title people"
        "img items people"
        "discription discription people"
      `,
      'grid-template-rows': '50px 120px 50px 1fr',
    },
  },
};
