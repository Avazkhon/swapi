export default {
  header: {
    'background-color': '#2F4F4F',
    height: '80px',
  },

  nav: {
    padding: '20px',
    display: 'grid',
  },

  '@media (min-width: 0) and (max-width: 576px)': {
    nav: {
      'grid-template-columns': 'repeat(auto-fill, minmax(80px, 4fr))',
    },
  },
  '@media (min-width: 577px)': {
    nav: {
      'grid-template-columns': 'repeat(auto-fill, minmax(80px, 1fr))',
    },
  },
};
