// filepath: c:\Users\USER\Desktop\ELIGWEB\eligraphicsweb\src\components\Layout.jsx
import React from 'react';
import SideMenu from './SideMenu'; // Adjust path as needed

const Layout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <SideMenu />
    <main style={{ flex: 1 }}>{children}</main>
  </div>
);

export default Layout;