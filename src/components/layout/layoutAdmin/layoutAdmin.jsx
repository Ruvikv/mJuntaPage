import React from 'react';
import SidebarAdmin from './sidebarAdmin.jsx';

const Layout = ({ children }) => (
    <div>
        <SidebarAdmin />
        <div>
        {children}
        </div>
    </div>
);

export default Layout;
