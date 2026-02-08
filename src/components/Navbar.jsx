import React from 'react';
import logo from '../assets/EnvisionXlogo.jpeg';

const Navbar = () => {
    return (
        <nav className="navbar glass" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1200px',
            zIndex: 1000,
            padding: '0.8rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '100px',
        }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', fontSize: '1.2rem' }}>
                <img src={logo} alt="Envision-X Logo" style={{
                    height: '32px',
                    width: '32px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                }} />
                <span>Envision-X <span style={{ color: 'var(--accent-primary)' }}>2.0</span></span>
            </div>

            <ul style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="#roadmap" className="nav-link">Timeline</a></li>
                <li><a href="#prizes" className="nav-link">Winners</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
            </ul>

            <div style={{ width: '80px' }}></div> {/* Spacer to keep nav centered or as needed */}

            <style dangerouslySetInnerHTML={{
                __html: `
        .nav-link:hover { color: var(--accent-primary); }
      `}} />
        </nav>
    );
};

export default Navbar;
