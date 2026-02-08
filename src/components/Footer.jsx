import React from 'react';
import logo from '../assets/EnvisionXlogo.jpeg';

const Footer = () => {
    return (
        <footer className="footer container" style={{ padding: '4rem 0 3rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <img src={logo} alt="EnvisionX Logo" style={{ height: '40px', borderRadius: '8px' }} />
                <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>Envision-X <span style={{ color: 'var(--accent-primary)' }}>2.0</span></span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                Made with <span style={{ color: '#ff4d4d' }}>❤️</span> by Devity Tech Team
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem' }}>
                © 2025 Devity. All rights reserved. |
                <a href="#privacy" style={{ marginLeft: '5px', color: 'inherit' }}>Privacy</a> |
                <a href="#terms" style={{ marginLeft: '5px', color: 'inherit' }}>Terms</a> |
                <a href="#cookies" style={{ marginLeft: '5px', color: 'inherit' }}>Cookies</a>
            </div>
        </footer>
    );
};

export default Footer;
