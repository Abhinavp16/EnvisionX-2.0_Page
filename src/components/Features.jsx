import React from 'react';
import { Briefcase, Home, Rocket, Users, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const focusAreas = [
        {
            title: 'Smarter Ways of Working',
            desc: 'Efficiency, simplicity, and productivity. Improve how teams operate by reducing friction, automating tasks, and enhancing collaboration.',
            icon: <Briefcase size={22} />,
            color: '#00a2ff',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000', // Circuit board / Logic
            delay: 0.1
        },
        {
            title: 'Tech for Everyday Living',
            desc: 'Practical solutions for daily life. Enhancing routines, organization, comfort, and safety through assistive smart tools.',
            icon: <Home size={22} />,
            color: '#00ffaa',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000', // Cybersecurity / Smart Tech
            delay: 0.2
        },
        {
            title: 'Future-Ready Products',
            desc: 'Product thinking and real-world viability. Scalable digital solutions addressing industry pain points with growth potential.',
            icon: <Rocket size={22} />,
            color: '#bf00ff',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', // Global Tech / Data
            delay: 0.3
        },
        {
            title: 'Impact & Inclusion',
            desc: 'Purpose-driven innovation. Using technology to create meaningful change in environmental sustainability and inclusive design.',
            icon: <Users size={22} />,
            color: '#ff8800',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000', // AI / Robotics Impact
            delay: 0.4
        },
        {
            title: 'Creative Experiences',
            desc: 'Creativity, design, and engagement. Where imagination meets tech to empower creators through interactive digital platforms.',
            icon: <Palette size={22} />,
            color: '#ff0066',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000', // High-end Digital Setup
            delay: 0.5
        },
    ];

    return (
        <section className="features section-padding container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '4px', fontSize: '0.75rem', marginBottom: '1rem' }}
                >
                    OPEN INNOVATION
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '2.5rem', fontWeight: '800' }}
                >
                    Hackathon Themes
                </motion.h2>
            </div>

            <div className="grid-3" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {focusAreas.map((area, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: area.delay }}
                        whileHover="hover"
                        className="feature-card glass"
                        style={{
                            padding: '2.5rem 2rem',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '30px',
                            border: '1px solid rgba(0, 162, 255, 0.3)',
                            background: 'linear-gradient(160deg, rgba(0, 10, 24, 0.8) 0%, rgba(0, 20, 40, 0.6) 100%)',
                            boxShadow: '0 0 40px rgba(0, 162, 255, 0.1)'
                        }}
                    >
                        {/* Background Image with Overlay */}
                        <motion.div
                            variants={{
                                hover: { scale: 1.1, opacity: 0.35 }
                            }}
                            transition={{ duration: 0.6 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${area.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.15,
                                zIndex: -1,
                                filter: 'grayscale(60%) brightness(0.7)'
                            }}
                        />

                        {/* Theme Glow Accent */}
                        <div style={{
                            position: 'absolute',
                            top: '-20%',
                            right: '-20%',
                            width: '150px',
                            height: '150px',
                            background: `radial-gradient(circle, ${area.color}20 0%, transparent 70%)`,
                            filter: 'blur(30px)',
                            zIndex: 0
                        }} />

                        <motion.div
                            animate={
                                area.title === 'Future-Ready Products'
                                    ? { scale: [1, 1.1, 1], y: [0, -4, 0] }
                                    : area.title === 'Creative Experiences'
                                        ? { rotate: [0, 5, -5, 0], y: [0, -6, 0] }
                                        : { y: [0, -6, 0] }
                            }
                            transition={{
                                duration: area.title === 'Future-Ready Products' ? 2 : 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                background: `${area.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: area.color,
                                marginBottom: '1.5rem',
                                border: `1px solid ${area.color}30`,
                                boxShadow: `0 0 20px ${area.color}15`,
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            {area.icon}
                        </motion.div>

                        <h3 style={{
                            fontSize: '1.4rem',
                            marginBottom: '1rem',
                            fontWeight: '800',
                            position: 'relative',
                            zIndex: 2,
                            color: 'white'
                        }}>
                            {area.title}
                        </h3>

                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            fontSize: '0.95rem',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            {area.desc}
                        </p>

                        {/* Theme Accent Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ delay: area.delay + 0.3, duration: 1 }}
                            style={{
                                height: '2px',
                                background: `linear-gradient(90deg, ${area.color}, transparent)`,
                                marginTop: 'auto',
                                borderRadius: '10px',
                                opacity: 0.5,
                                position: 'relative',
                                zIndex: 2
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .feature-card {
                    transition: border-color 0.3s ease, background 0.3s ease !important;
                }
                .feature-card:hover {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                }
            `}} />
        </section>
    );
};

export default Features;
