// src/pages/dashboard/products/layout.js
import React from 'react';
import DashboardHeader from '../../../components/DashboardHeader';

export default function Layout({ children }) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}

// src/pages/dashboard/products/page.js needs to be updated to
import React from 'react';
import DashboardProducts from '../../../components/pages/DashboardProducts';

export default function ProductsPage() {
  return <DashboardProducts />;
}