import React from 'react';
import { Trophy, Star, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Prizes = () => {
    const mainPrizes = [
        {
            rank: "🥇",
            title: "Champion",
            amount: "₹7,000",
            extras: "Devity Perks + Certificate of Excellence",
            color: "#FFD700", // Gold
            glow: "rgba(255, 215, 0, 0.2)"
        },
        {
            rank: "🥈",
            title: "1st Runner-Up",
            amount: "₹5,000",
            extras: "Devity Perks + Certificate of Excellence",
            color: "#C0C0C0", // Silver
            glow: "rgba(192, 192, 192, 0.2)"
        },
        {
            rank: "🥉",
            title: "2nd Runner-Up",
            amount: "₹3,000",
            extras: "Devity Perks + Certificate of Excellence",
            color: "#CD7F32", // Bronze
            glow: "rgba(205, 127, 50, 0.2)"
        }
    ];

    const certificates = [
        {
            icon: <Star size={24} />,
            title: "Certificate of Excellence",
            desc: "Awarded to the Top 10 Teams in recognition of outstanding performance.",
            emoji: "🌟"
        },
        {
            icon: <FileText size={24} />,
            title: "Certificate of Participation",
            desc: "Awarded to all remaining teams for their active participation in Envision-X 2.0.",
            emoji: "📜"
        }
    ];

    return (
        <section id="prizes" className="prizes section-padding container">
            <div className="text-center mb-8" style={{ marginBottom: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="prize-icon-wrapper"
                    style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 1.5rem',
                        background: 'rgba(0, 162, 255, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--accent-primary)',
                        position: 'relative'
                    }}
                >
                    <Trophy size={38} strokeWidth={1.5} />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem' }}
                >
                    Awards & <span className="gradient-text">Recognition</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}
                >
                    Celebrating excellence and innovation in Envision-X 2.0
                </motion.p>
            </div>

            <div className="grid-3 mb-8" style={{ marginBottom: '3rem' }}>
                {mainPrizes.map((prize, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="glass prize-card-featured"
                        style={{
                            padding: '2rem 1.5rem',
                            textAlign: 'center',
                            position: 'relative',
                            border: `1px solid ${prize.color}22`,
                            boxShadow: `0 10px 40px ${prize.glow}`,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{ fontSize: '2.8rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))' }}>{prize.rank}</div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.6rem', color: prize.color, textTransform: 'uppercase', letterSpacing: '1px' }}>{prize.title}</h3>
                        <div style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '0.8rem' }} className="gradient-text">
                            {prize.amount}
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', fontWeight: '500' }}>
                            {prize.extras}
                        </p>

                        {/* Decorative background glow */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120px',
                            height: '120px',
                            background: prize.color,
                            filter: 'blur(100px)',
                            opacity: 0.08,
                            zIndex: -1
                        }}></div>
                    </motion.div>
                ))}
            </div>

            <div className="grid-2">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="glass cert-card"
                        style={{
                            padding: '1.5rem 2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.2rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '14px',
                            background: 'rgba(0, 162, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '22px',
                            flexShrink: 0,
                            border: '1px solid rgba(0, 162, 255, 0.15)'
                        }}>
                            {cert.emoji}
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', color: 'white' }}>{cert.title}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                {cert.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .prize-icon-wrapper::after {
                    content: '';
                    position: absolute;
                    inset: -8px;
                    border-radius: 50%;
                    border: 1px solid rgba(0, 162, 255, 0.2);
                    animation: pulse-ring 2s infinite;
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(1.3); opacity: 0; }
                }
                .prize-card-featured {
                    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .prize-card-featured:hover {
                    transform: translateY(-12px) scale(1.02);
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.2) !important;
                }
                .cert-card {
                    transition: all 0.4s ease;
                }
                .cert-card:hover {
                    background: rgba(0, 162, 255, 0.05);
                    border-color: rgba(0, 162, 255, 0.2) !important;
                }
                @media (max-width: 992px) {
                    .grid-2 {
                        grid-template-columns: 1fr;
                    }
                }
                @media (max-width: 480px) {
                    .prize-card-featured {
                        padding: 2.5rem 1.5rem !important;
                    }
                    .cert-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 2rem !important;
                    }
                }
            `}} />
        </section>
    );
};

export default Prizes;
