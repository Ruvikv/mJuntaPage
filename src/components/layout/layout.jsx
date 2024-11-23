import React from 'react';
import Sidebar from './sidebar/sidebar';

const Layout = ({ children }) => (
    <div>
        <Sidebar />
        <div>
        {children}
        </div>
    </div>
);

export default Layout;
