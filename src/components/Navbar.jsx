import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/EnvisionXlogo.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar glass" style={{
            position: 'fixed',
            top: '15px',
            left: '15px',
            right: '15px',
            margin: '0 auto',
            maxWidth: '1200px',
            zIndex: 1000,
            padding: '0.6rem 1.2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '100px',
            border: '1px solid var(--glass-border)',
        }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '1rem' }}>
                <img src={logo} alt="Envision-X Logo" style={{
                    height: '28px',
                    width: '28px',
                    borderRadius: '6px',
                    objectFit: 'cover'
                }} />
                <span style={{ letterSpacing: '-0.3px' }}>Envision-X <span style={{ color: 'var(--accent-primary)' }}>2.0</span></span>
            </div>

            {/* Desktop Menu */}
            <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', fontWeight: '600' }}>
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="#roadmap" className="nav-link">Timeline</a></li>
                <li><a href="#rules" className="nav-link">Rules</a></li>
                <li><a href="#prizes" className="nav-link">Prizes</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
            </ul>

            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer', color: 'white', padding: '5px' }}>
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: '65px',
                            left: '0',
                            width: '100%',
                            padding: '1.5rem',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            textAlign: 'center',
                            background: 'rgba(5, 10, 16, 0.98)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(0, 162, 255, 0.2)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                            zIndex: 999
                        }}
                    >
                        <motion.a
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            href="/" className="nav-link" style={{ fontSize: '1.1rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}
                        >Home</motion.a>
                        <motion.a
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            href="#roadmap" className="nav-link" style={{ fontSize: '1.1rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}
                        >Timeline</motion.a>
                        <motion.a
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            href="#rules" className="nav-link" style={{ fontSize: '1.1rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}
                        >Rules</motion.a>
                        <motion.a
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 }}
                            href="#prizes" className="nav-link" style={{ fontSize: '1.1rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}
                        >Prizes</motion.a>
                        <motion.a
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            href="#about" className="nav-link" style={{ fontSize: '1.1rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}
                        >About</motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
                .nav-link { 
                    transition: all 0.3s ease; 
                    position: relative;
                    opacity: 0.8;
                    color: white;
                    text-decoration: none;
                }
                .nav-link:hover { 
                    color: var(--accent-primary); 
                    opacity: 1;
                }
                
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block !important; }
                    .navbar { 
                        border-radius: 20px !important; 
                        padding: 0.5rem 1rem !important;
                    }
                }
            `}} />
        </nav>
    );
};

export default Navbar;
