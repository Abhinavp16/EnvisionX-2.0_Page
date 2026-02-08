import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import videoSource from '../assets/envision.mp4';

const Hero = () => {
    const [isPlaying, setIsPlaying] = React.useState(true);
    const videoRef = React.useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    React.useEffect(() => {
        const attemptPlay = () => {
            if (videoRef.current) {
                videoRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        // Once playing, we can remove the interaction listeners
                        window.removeEventListener('click', attemptPlay);
                        window.removeEventListener('touchstart', attemptPlay);
                    })
                    .catch(error => {
                        console.log("Play failed, waiting for interaction:", error);
                        setIsPlaying(false);
                    });
            }
        };

        // Initial attempt
        attemptPlay();

        // Backup for browser restrictions
        window.addEventListener('click', attemptPlay);
        window.addEventListener('touchstart', attemptPlay);

        return () => {
            window.removeEventListener('click', attemptPlay);
            window.removeEventListener('touchstart', attemptPlay);
        };
    }, []);

    return (
        <section className="hero section-padding" style={{ position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'center' }}>
                    {/* Video Section (Left Side) */}
                    <div className="hero-video-wrapper" style={{ order: window.innerWidth < 768 ? 2 : 1 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="trailer-box glass"
                            style={{
                                width: '100%',
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                aspectRatio: '16/9',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 20px 80px rgba(0, 162, 255, 0.1)',
                                cursor: 'pointer'
                            }}
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                src={videoSource}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    zIndex: 0,
                                    filter: isPlaying ? 'none' : 'brightness(0.5) grayscale(0.5)',
                                    transition: '0.5s filter'
                                }}
                                poster="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                            {!isPlaying && (
                                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                    <button className="play-btn" style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        cursor: 'pointer',
                                        transition: '0.3s'
                                    }}>
                                        <Play fill="white" size={24} />
                                    </button>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8 }}>Watch Overview</span>
                                </div>
                            )}

                            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '40px', height: '40px', borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)', opacity: 0.5, pointerEvents: 'none' }}></div>
                            <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '40px', height: '40px', borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)', opacity: 0.5, pointerEvents: 'none' }}></div>
                        </motion.div>
                    </div>

                    {/* Text Content (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ order: window.innerWidth < 768 ? 1 : 2 }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(0, 162, 255, 0.1)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            border: '1px solid rgba(0, 162, 255, 0.2)',
                            color: 'var(--accent-primary)',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '1.5rem'
                        }}>
                            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></span>
                            Structured Innovation Program
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Envision-X <span className="gradient-text">2.0</span>
                        </h1>

                        <p style={{ maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6' }}>
                            Bridge the gap between academic learning and practical application. Develop innovative solutions through independent research and expert-guided implementation.
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <button className="btn-primary">
                                Apply Now <ArrowRight size={20} />
                            </button>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '30px', height: '1px', background: 'var(--glass-border)' }}></div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase' }}>Registration Ends</div>
                                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--accent-primary)' }}>FEB 20</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>



            {/* Background Glows */}
            <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 162, 255, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 162, 255, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }}></div>
        </section>
    );
};

export default Hero;
