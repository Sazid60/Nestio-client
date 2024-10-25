import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            {/* Sidebar */}
            <div>
                <Sidebar/>
            </div>
            {/* Outlet ---> Dynamic Content */}
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;