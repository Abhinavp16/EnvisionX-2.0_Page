import React from 'react';
import { GraduationCap, Briefcase, Award, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Rules = () => {
    const sections = [
        {
            title: 'Eligibility',
            desc: 'Open to undergraduate and postgraduate students from any university or discipline. Individual and team participation allowed.',
            icon: <GraduationCap size={20} />,
        },
        {
            title: 'Career Advantages',
            desc: 'Build strong professional portfolios, enhance resumes for industry roles, and demonstrate proactive innovation.',
            icon: <Briefcase size={20} />,
        },
        {
            title: 'Program Benefits',
            desc: 'Hands-on problem solving, expert evaluation, development of technical skills, and certificates of recognition.',
            icon: <Award size={20} />,
        },
    ];

    const modes = [
        {
            title: 'Online Mode',
            subtitle: 'Registration & Evaluation',
            desc: 'Used for registrations, submissions, and Round 1 online evaluation. Enables flexible participation and remote mentorship.',
            icon: <Globe size={20} />,
        },
        {
            title: 'Offline Mode',
            subtitle: 'Showcase & Presentation',
            desc: 'Conducted at the university campus for final project showcasing. Provides hands-on demonstrations and networking.',
            icon: <MapPin size={20} />,
        },
    ];

    return (
        <section id="about" className="rules section-padding container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{ color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '4px', fontSize: '0.75rem', marginBottom: '1rem' }}>PARTICIPATION DETAILS</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Event Structure & Mode</h2>
            </div>

            {/* Event Modes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {modes.map((mode, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid rgba(0, 162, 255, 0.2)',
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)'
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'rgba(0, 162, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-primary)',
                            marginBottom: '1.5rem',
                            boxShadow: '0 0 15px rgba(0, 162, 255, 0.1)'
                        }}>
                            {mode.icon}
                        </div>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-primary)', letterSpacing: '1px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{mode.subtitle}</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '800' }}>{mode.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>{mode.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* General Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="glass"
                        style={{ padding: '2rem 1.5rem', borderRadius: '20px' }}
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
                            {section.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', fontWeight: '700' }}>{section.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem' }}>{section.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Concluding Statement */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--glass-border)' }}
            >
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    "Envision-X 2.0 is a national-level academic initiative aimed at creating a platform where students develop innovative projects independently and present them physically before industry professionals for evaluation."
                </p>
            </motion.div>
        </section>
    );
};

export default Rules;
