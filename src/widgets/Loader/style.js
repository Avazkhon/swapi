export default {
  loader: {
    position: 'absolute',
    margin: '25%',
    border: '16px solid #f3f3f3',
    'border-top': '16px solid #3489db',
    'border-radius': '50%',
    width: '120px',
    height: '120px',
    animation: '$spin 0.5s linear infinite',
  },

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },

  '@media (min-width: 577px)': {
    loader: {
      margin: '15% 45%',
    },
  },
};
