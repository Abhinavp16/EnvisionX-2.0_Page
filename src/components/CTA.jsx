import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CTA = () => {
    const [showNotice, setShowNotice] = React.useState(false);

    const handleRegisterClick = () => {
        setShowNotice(true);
        setTimeout(() => {
            setShowNotice(false);
        }, 3000);
    };

    return (
        <section className="cta section-padding container" style={{ paddingBottom: '100px' }}>
            <AnimatePresence>
                {showNotice && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        style={{
                            position: 'fixed',
                            top: '100px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 2000,
                            width: '90%',
                            maxWidth: '450px'
                        }}
                    >
                        <div className="glass" style={{
                            padding: '1.2rem 1.5rem',
                            border: '1px solid var(--accent-primary)',
                            boxShadow: '0 0 30px rgba(0, 162, 255, 0.3)',
                            textAlign: 'center'
                        }}>
                            <div style={{ color: 'var(--accent-primary)', fontWeight: '800', marginBottom: '8px', fontSize: '1.1rem' }}>Coming Soon!</div>
                            <div style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.9 }}>
                                Registration will begin on 10th Feb from 12:00 noon.
                            </div>
                            <div style={{ marginTop: '12px' }}>
                                <div style={{ height: '3px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: '100%' }}
                                        animate={{ width: '0%' }}
                                        transition={{ duration: 3, ease: 'linear' }}
                                        style={{ height: '100%', background: 'var(--accent-primary)' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass"
                style={{
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    border: '1px solid rgba(0, 162, 255, 0.2)'
                }}
            >
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.2' }}>Ready to shape the future?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}>
                        Registration is now open for university students worldwide. Don’t miss your chance to be part of Envision-X 2.0.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={handleRegisterClick} className="btn-primary" style={{ padding: '1rem 3.5rem', fontSize: '1.1rem' }}>
                            Register Now <ArrowRight size={22} />
                        </button>
                    </div>
                </div>

                {/* Decorative elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 162, 255, 0.1) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 162, 255, 0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
            </motion.div>
        </section>
    );
};

export default CTA;
