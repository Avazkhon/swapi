import React from 'react';

import Header from 'container/Header';

const Layout = ({ children }) => (
  <React.StrictMode>
    <Header />
    <content>
      {children}
    </content>
  </React.StrictMode>
);

export default Layout;
