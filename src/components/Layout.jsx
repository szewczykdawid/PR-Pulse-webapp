import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="header">
                <div className="container header-content">
                    <div className="flex items-center">
                        <Link to="/" className="logo-container">
                            <div className="logo-icon">
                                <Activity size={24} />
                            </div>
                            <span>PR Pulse</span>
                        </Link>
                    </div>
                    <nav className="nav-links">
                        <Link to="/" className="nav-item">Support</Link>
                        <Link to="/privacy" className="nav-item">Privacy</Link>
                        <Link to="/terms" className="nav-item">Terms</Link>
                    </nav>
                </div>
            </header>

            <main className="main-wrapper">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <p>© {new Date().getFullYear()} PR Pulse. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/privacy" className="nav-item">Privacy Policy</Link>
                        <Link to="/terms" className="nav-item">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
