import React from 'react';

const Stats = () => {
    const highlights = [
        { label: 'COMPETITION', value: 'NATIONAL' },
        { label: 'FRAMEWORK', value: 'PROJECT-BASED' },
        { label: 'EVALUATION', value: 'INDUSTRY-LED' },
    ];

    return (
        <section className="stats container" style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '1.5rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {highlights.map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.3rem', letterSpacing: '1px' }}>{item.value}</div>
                        <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--accent-primary)', letterSpacing: '2px' }}>{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
