import React from 'react';
import { Trophy, Medal, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';

const Prizes = () => {
    return (
        <section id="prizes" className="prizes section-padding container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass"
                style={{ padding: '3.5rem 2.5rem', borderRadius: '32px', textAlign: 'center' }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'rgba(0, 162, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--accent-primary)',
                        boxShadow: '0 0 20px rgba(0, 162, 255, 0.2)'
                    }}>
                        <Trophy size={32} />
                    </div>
                </div>

                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Awards & Recognition</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Recognizing excellence and innovation at every stage of the program.
                </p>

                <div className="grid-3">
                    {/* Main Prizes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="prize-card glass"
                        style={{ padding: '2rem 1.5rem', border: '1px solid rgba(0, 162, 255, 0.1)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <Trophy size={28} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem', letterSpacing: '1px' }}>TOP PERFORMERS</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '0.8rem' }}>PRIZE POOL</div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Awarded based on overall evaluation and rankings by industry experts.</p>
                    </motion.div>

                    {/* Excellence */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prize-card glass"
                        style={{ padding: '2rem 1.5rem', border: '1px solid rgba(0, 162, 255, 0.1)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <Medal size={28} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem', letterSpacing: '1px' }}>EXCELLENCE</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '0.8rem' }}>CERTIFICATE</div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Special recognition and certificates provided to all qualified finalist teams.</p>
                    </motion.div>

                    {/* Participation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prize-card glass"
                        style={{ padding: '2rem 1.5rem', border: '1px solid rgba(0, 162, 255, 0.1)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <ScrollText size={28} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem', letterSpacing: '1px' }}>PARTICIPATION</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '0.8rem' }}>GLOBAL</div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Awarded to all teams, including those who do not qualify for final rounds.</p>
                    </motion.div>
                </div>

                <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Winners and runners-up will receive <strong>special recognition and awards</strong> during the Grand Exhibition.
                </div>
            </motion.div>
        </section>
    );
};

export default Prizes;
