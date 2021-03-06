export default {

  'films-list': {
    display: 'grid',
    'row-gap': '1em',
  },

  '@media (min-width: 0) and (max-width: 576px)': {
    'films-list': {
      'grid-template-columns': '10fr',
    },
  },
  '@media (min-width: 577px)': {
    'films-list': {
      'grid-template-columns': 'repeat(3, 4fr)',
    },
  },

  card: {
    'text-align': 'center',
  },

  btn: {
    'font-size': '18px',
    margin: '5px 0 0 5px',
    color: '#ffe300',

    '&:hover': {
      cursor: 'pointer',
      opacity: '.5',
    },
  },
};
