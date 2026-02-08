import React from 'react';
import { Rocket, Lightbulb, Code, Globe, Trophy, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Roadmap = () => {
    const events = [
        {
            date: 'Feb 9 - Feb 10',
            title: 'Launch & Theme Release',
            desc: 'Official launch of Envision-X 2.0. Theme announcement, problem statements, and registration opening.',
            icon: <Rocket size={18} />,
            side: 'right'
        },
        {
            date: 'Feb 11 - Feb 19',
            title: 'Idea Submission & Approval',
            desc: 'Participants submit concepts for review. Feedback provided for originality, feasibility, and impact.',
            icon: <Lightbulb size={18} />,
            side: 'left'
        },
        {
            date: 'Feb 20 - Mar 25',
            title: 'Project Development',
            desc: 'Independent building phase. Focused on technical implementation, innovation, and demo preparation.',
            icon: <Code size={18} />,
            side: 'right'
        },
        {
            date: 'Mar 26 - Apr 3',
            title: 'Online Screening (Round 1)',
            desc: 'Teams submit demos online. Judges evaluate innovation, technical execution, and feasibility.',
            icon: <Globe size={18} />,
            side: 'left'
        },
        {
            date: 'April 7, 2026',
            title: 'Industry Exhibition (Round 2)',
            desc: 'Offline 12-hour intensive showcase on campus with industry mentor evaluation and networking.',
            icon: <Trophy size={18} />,
            side: 'right'
        }
    ];

    const cardVariants = {
        hidden: (side) => ({
            opacity: 0,
            x: side === 'right' ? 80 : -80,
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    return (
        <section id="roadmap" className="roadmap section-padding container" style={{ position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '4px', fontSize: '0.75rem', marginBottom: '1rem' }}
                >
                    EVENT STRUCTURE & TIMELINE
                </motion.p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The Roadmap to Success</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem' }}>
                    A systematic five-phase journey designed to take your ideas from concept to industry-ready reality.
                </p>
            </div>

            <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '1rem 0' }}>
                {/* Animated Central Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        width: '2px',
                        background: 'linear-gradient(to bottom, transparent, var(--accent-primary), var(--accent-primary), transparent)',
                        transform: 'translateX(-50%)',
                        boxShadow: '0 0 15px var(--accent-glow)',
                        zIndex: 1
                    }}
                />

                {events.map((event, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        justifyContent: event.side === 'right' ? 'flex-end' : 'flex-start',
                        alignItems: 'center',
                        marginBottom: '3rem',
                        position: 'relative',
                        width: '100%'
                    }}>
                        {/* Timeline Dot with Icon */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--bg-primary)',
                                border: '2px solid var(--accent-primary)',
                                boxShadow: '0 0 15px var(--accent-glow)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                color: 'var(--accent-primary)',
                            }}
                        >
                            {event.icon}
                        </motion.div>

                        {/* Content Card container */}
                        <motion.div
                            custom={event.side}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            style={{
                                width: 'calc(50% - 50px)',
                                position: 'relative'
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass"
                                style={{
                                    padding: '1.25rem 1.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid var(--glass-border)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Side glow accent */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    [event.side === 'right' ? 'left' : 'right']: 0,
                                    width: '3px',
                                    height: '100%',
                                    background: 'var(--accent-primary)',
                                    boxShadow: '0 0 8px var(--accent-primary)'
                                }} />

                                <div style={{
                                    fontSize: '0.85rem',
                                    fontWeight: '800',
                                    color: 'var(--accent-primary)',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '1px'
                                }}>
                                    Phase 0{index + 1} — {event.date}
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', fontWeight: '700' }}>{event.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>{event.desc}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Timeline Notes */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    maxWidth: '800px',
                    margin: '3rem auto 0',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    background: 'rgba(0, 162, 255, 0.05)',
                    border: '1px solid rgba(0, 162, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'start',
                    gap: '12px'
                }}
            >
                <Info size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <strong>Note:</strong> 7 days provided for idea submission after launch. Round 1 evaluation typically takes 2-4 days.
                    Detailed schedules and exact physical presentation slots will be communicated in advance to all shortlisted teams to ensure smooth coordination.
                </p>
            </motion.div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .roadmap { overflow-x: hidden; }
                    .roadmap > div:nth-child(2) { padding-left: 20px !important; }
                    .roadmap [style*="left: 50%"] { left: 0 !important; transform: none !important; }
                    .roadmap [style*="width: calc(50% - 50px)"] { 
                        width: calc(100% - 40px) !important; 
                        margin-left: 40px !important;
                    }
                    .roadmap [style*="justify-content: flex-end"] { justify-content: flex-start !important; }
                    
                    /* Adjust central line for mobile */
                    .roadmap div[style*="width: 2px"] {
                        left: 20px !important;
                        height: 100% !important;
                    }

                    /* Adjust dots for mobile */
                    .roadmap div[style*="width: 40px"] {
                        left: 20px !important;
                        width: 30px !important;
                        height: 30px !important;
                    }
                    .roadmap div[style*="width: 30px"] svg {
                        width: 14px;
                        height: 14px;
                    }
                }
            `}} />
        </section>
    );
};

export default Roadmap;
