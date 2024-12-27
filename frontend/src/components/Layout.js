import React from 'react';
import Header from './Header';  // Import the Header component

const Layout = ({ children }) => {
  return (
    <div>
      {/* The header will be visible on all pages */}
      <Header />

      {/* The content of the page will be rendered here */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
