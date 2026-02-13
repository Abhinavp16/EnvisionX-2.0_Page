import React from 'react';
import { CheckCircle2, Star, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Innovation = () => {
    const highlights = [
        "Special recognition by Industry Mentors",
        "Direct referrals for internships & live projects",
        "Opportunity to work on real-world projects with mentors",
        "Industry-level feedback to improve your product",
        "Certificate of Excellence & strong resume boost"
    ];

    const expertRoles = [
        "Evaluate projects on innovation, execution, and impact",
        "Provide expert feedback for solution improvement",
        "Share industry insights and real-world perspectives",
        "Guide on practical implementation and scalability",
        "Ensure fair, unbiased, and professional assessment"
    ];

    return (
        <section className="innovation section-padding container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{ color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '3px', fontSize: '0.75rem', marginBottom: '0.8rem' }}>PROGRAM CORE</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Purpose & Objectives</h2>
            </div>

            <div className="grid-2" style={{ alignItems: 'start' }}>
                {/* Highlights Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass"
                    style={{ padding: '2.5rem', borderRadius: '24px' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <Star size={24} style={{ color: 'var(--accent-primary)' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Key Benefits for Students</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}
                            >
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.95rem' }}>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Industry Experts Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass"
                    style={{ padding: '2.5rem', borderRadius: '24px' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <Users2 size={24} style={{ color: 'var(--accent-primary)' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Role of Industry Experts</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        Industry professionals participate as evaluators and reviewers to bridge the gap between academia and professional excellence.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {expertRoles.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ display: 'flex', alignItems: 'start', gap: '12px', color: 'var(--text-secondary)' }}
                            >
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', marginTop: '8px', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.95rem' }}>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Mission Statement re-integration */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)' }}
            >
                <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto', lineHeight: '1.7', fontSize: '1.1rem' }}>
                    Envision X 2.0 is a <strong>self-learning innovation platform</strong> where students independently build solutions and present their work before industry professionals for evaluation and feedback.
                </p>
            </motion.div>
        </section>
    );
};

export default Innovation;
