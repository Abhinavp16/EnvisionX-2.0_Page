import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/EnvisionXlogo.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar glass" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            maxWidth: '1200px',
            zIndex: 1000,
            padding: '0.6rem 1.2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '100px',
        }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', fontSize: '1.1rem' }}>
                <img src={logo} alt="Envision-X Logo" style={{
                    height: '32px',
                    width: '32px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                }} />
                <span style={{ letterSpacing: '-0.5px' }}>Envision-X <span style={{ color: 'var(--accent-primary)' }}>2.0</span></span>
            </div>

            {/* Desktop Menu */}
            <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', fontWeight: '600' }}>
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="#roadmap" className="nav-link">Timeline</a></li>
                <li><a href="#rules" className="nav-link">Rules</a></li>
                <li><a href="#prizes" className="nav-link">Prizes</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
            </ul>

            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer', color: 'white' }}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="mobile-menu glass" style={{
                    position: 'absolute',
                    top: '70px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    padding: '1.5rem',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    textAlign: 'center',
                    border: '1px solid var(--glass-border)',
                }}>
                    <a href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#roadmap" className="nav-link" onClick={() => setIsOpen(false)}>Timeline</a>
                    <a href="#rules" className="nav-link" onClick={() => setIsOpen(false)}>Rules</a>
                    <a href="#prizes" className="nav-link" onClick={() => setIsOpen(false)}>Prizes</a>
                    <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                .nav-link { 
                    transition: all 0.3s ease; 
                    position: relative;
                    opacity: 0.8;
                }
                .nav-link:hover { 
                    color: var(--accent-primary); 
                    opacity: 1;
                    transform: translateY(-1px);
                }
                
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block !important; }
                    .navbar { border-radius: 20px !important; width: 92% !important; }
                }
            `}} />
        </nav>
    );
};

export default Navbar;
