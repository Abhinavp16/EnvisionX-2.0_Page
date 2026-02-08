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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {focusAreas.map((area, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="feature-card glass"
                        style={{ padding: '2rem 1.5rem', transition: '0.3s' }}
                    >
                        <div style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '10px',
                            background: 'rgba(0, 162, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-primary)',
                            marginBottom: '1.2rem',
                            border: '1px solid rgba(0, 162, 255, 0.2)'
                        }}>
                            {area.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', fontWeight: '700' }}>{area.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem' }}>{area.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
