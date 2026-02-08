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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                    {/* Main Prizes */}
                    <div className="prize-card">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Trophy size={24} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>TOP PERFORMERS</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem' }}>PRIZE POOL</div>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: '1.5' }}>Awarded based on overall evaluation and rankings by industry experts.</p>
                    </div>

                    {/* Excellence */}
                    <div className="prize-card">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Medal size={24} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>EXCELLENCE</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem' }}>CERTIFICATE</div>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: '1.5' }}>Special recognition and certificates provided to all qualified finalist teams.</p>
                    </div>

                    {/* Participation */}
                    <div className="prize-card">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <ScrollText size={24} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>PARTICIPATION</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem' }}>GLOBAL</div>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: '1.5' }}>Awarded to all teams, including those who do not qualify for final rounds.</p>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Winners and runners-up will receive <strong>special recognition and awards</strong> during the Grand Exhibition.
                </div>
            </motion.div>
        </section>
    );
};

export default Prizes;
