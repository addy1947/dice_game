import React from 'react';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <header className="p-4 flex justify-end">
                <ThemeToggle />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
