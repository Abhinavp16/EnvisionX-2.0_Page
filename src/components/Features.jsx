import React from 'react';
import { Cpu, Leaf, HeartPulse, ShieldCheck, Globe, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const focusAreas = [
        {
            title: 'AI & Smart Systems',
            desc: 'Technology, Artificial Intelligence, and Automation.',
            icon: <Cpu size={20} />,
        },
        {
            title: 'Sustainability',
            desc: 'Environmental Solutions and Social Innovation.',
            icon: <Leaf size={20} />,
        },
        {
            title: 'Healthcare & Tech',
            desc: 'Health systems, FinTech, and Education.',
            icon: <HeartPulse size={20} />,
        },
    ];

    return (
        <section className="features section-padding container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p style={{ color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '4px', fontSize: '0.75rem', marginBottom: '1rem' }}>UNLIMITED DOMAINS</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Program Focus Areas</h2>
            </div>
            <div className="grid-3">
                {focusAreas.map((area, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="feature-card glass"
                        style={{ padding: '2.5rem 2rem' }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: 'rgba(0, 162, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-primary)',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(0, 162, 255, 0.2)',
                            boxShadow: '0 0 20px rgba(0, 162, 255, 0.1)'
                        }}>
                            {area.icon}
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '800' }}>{area.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{area.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
