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
        <section id="rules" className="rules section-padding container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{ color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '4px', fontSize: '0.75rem', marginBottom: '1rem' }}>PARTICIPATION DETAILS</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Event Structure & Mode</h2>
            </div>

            {/* Event Modes */}
            {/* Event Modes */}
            <div className="grid-2" style={{ marginBottom: '3rem' }}>
                {modes.map((mode, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '30px',
                            border: '1px solid rgba(0, 162, 255, 0.3)',
                            background: 'linear-gradient(160deg, rgba(0, 10, 24, 0.8) 0%, rgba(0, 20, 40, 0.6) 100%)',
                            boxShadow: '0 0 40px rgba(0, 162, 255, 0.1)',
                            position: 'relative',
                            overflow: 'hidden'
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

            {/* Rules List */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass"
                style={{
                    padding: '3rem',
                    borderRadius: '30px',
                    border: '1px solid rgba(0, 162, 255, 0.3)',
                    background: 'linear-gradient(160deg, rgba(0, 10, 24, 0.8) 0%, rgba(0, 20, 40, 0.6) 100%)',
                    boxShadow: '0 0 40px rgba(0, 162, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)' }}></div>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '200px', height: '200px', background: 'var(--accent-primary)', opacity: '0.08', filter: 'blur(60px)', borderRadius: '50%' }}></div>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Rules & <span className="gradient-text">Regulations</span></h3>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
                </div>

                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '1.5rem',
                    alignItems: 'start'
                }}>
                    {[
                        "The hackathon is open to students of all participating colleges. Valid college ID is mandatory.",
                        "Each team must have exactly 4 members, including at least 1 female and 1 non-tech student (compulsory).",
                        "A participant can be part of only one team. No team changes after registration.",
                        "Registration is paid (non-refundable) and confirmed only after successful payment.",
                        "The hackathon will have 2 rounds:",
                        "Round 1 (Online): Teams must submit a PPT, prototype, and an explanation video. The project must not be previously made.",
                        "Round 2 (Final): Offline on campus (physical presence compulsory).",
                        "All projects must be original and created during the hackathon period. Pre-built or copied projects will be disqualified.",
                        "Participants must bring their own laptops and devices.",
                        "Teams must submit their project, source code, and presentation.",
                        "Projects will be judged on innovation, technical skills, feasibility, and presentation.",
                        "Winner prizes will be awarded and certificates will be provided to all participants.",
                        "All updates will be shared through the official WhatsApp group.",
                        "The judges decision will be final and binding and they are from FAANG Companies like Google, Microsoft, Adobe, Cognizant and many more."
                    ].map((rule, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                            transition={{ delay: index * 0.05 }}
                            style={{
                                display: 'flex',
                                gap: '16px',
                                alignItems: 'start',
                                fontSize: '1.05rem',
                                color: 'rgba(255, 255, 255, 0.85)',
                                lineHeight: '1.6',
                                padding: '10px 16px',
                                borderRadius: '12px',
                                transition: 'background 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 162, 255, 0.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <div style={{
                                minWidth: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                marginTop: '10px',
                                boxShadow: '0 0 8px var(--accent-primary)'
                            }}></div>
                            <span dangerouslySetInnerHTML={{ __html: rule.replace(/exactly 4 members/g, '<strong style="color: #fff; font-weight: 700;">exactly 4 members</strong>').replace(/at least 1 female/g, '<strong style="color: #fff; font-weight: 700;">at least 1 female</strong>').replace(/1 non-tech student \(compulsory\)/g, '<strong style="color: #fff; font-weight: 700;">1 non-tech student (compulsory)</strong>').replace(/only one team/g, '<strong style="color: #fff; font-weight: 700;">only one team</strong>').replace(/Registration is paid \(non-refundable\)/g, '<strong style="color: #fff; font-weight: 700;">Registration is paid (non-refundable)</strong>').replace(/2 rounds/g, '<strong style="color: #fff; font-weight: 700;">2 rounds</strong>').replace(/Round 1 \(Online\)/g, '<strong style="color: #fff; font-weight: 700;">Round 1 (Online)</strong>').replace(/Round 2 \(Final\)/g, '<strong style="color: #fff; font-weight: 700;">Round 2 (Final)</strong>').replace(/innovation, technical skills, feasibility, and presentation/g, '<strong style="color: #fff; font-weight: 700;">innovation, technical skills, feasibility, and presentation</strong>') }} />
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

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
