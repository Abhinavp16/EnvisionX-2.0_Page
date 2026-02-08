import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const highlights = [
        { label: 'COMPETITION', value: 'NATIONAL' },
        { label: 'FRAMEWORK', value: 'PROJECT-BASED' },
        { label: 'EVALUATION', value: 'INDUSTRY-LED' },
    ];

    return (
        <section className="stats container" style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '2.5rem 0' }}>
            <div className="grid-3" style={{ gap: '1rem' }}>
                {highlights.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: '900', marginBottom: '0.4rem', letterSpacing: '1px' }}>{item.value}</div>
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--accent-primary)', letterSpacing: '2px' }}>{item.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
