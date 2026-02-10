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

    const handleRegisterClick = () => {
        window.open("https://forms.gle/1dpnYenni1Rfvz5u5", "_blank");
    };

    return (
        <section className="hero section-padding" style={{ position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
            <div className="container">
                <div className="hero-responsive-grid">
                    {/* Top Content (Heading & Description) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text-content"
                    >
                        <div className="innovation-tag">
                            <span className="pulse-dot"></span>
                            Structured Innovation Program
                        </div>

                        <h1 className="hero-title">
                            Envision-X <span className="gradient-text">2.0</span>
                        </h1>

                        <p className="hero-desc">
                            Bridge the gap between academic learning and practical application. Develop innovative solutions through independent research and expert-guided implementation.
                        </p>
                    </motion.div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="trailer-box glass hero-video-box"
                        onClick={togglePlay}
                    >
                        <video
                            ref={videoRef}
                            src={videoSource}
                            className="hero-video"
                            poster="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {!isPlaying && (
                            <div className="play-overlay">
                                <div className="play-btn-large">
                                    <Play fill="white" size={32} />
                                </div>
                                <span className="play-label">Watch Overview</span>
                            </div>
                        )}

                        <div className="corner-decor top-left"></div>
                        <div className="corner-decor bottom-right"></div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-cta-box"
                    >
                        <button onClick={handleRegisterClick} className="btn-primary" style={{ padding: '1rem 3.5rem', fontSize: '1.1rem' }}>
                            Register Now <ArrowRight size={22} />
                        </button>

                        <div className="reg-info">
                            <div className="divider-line"></div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="reg-label">Registration Ends</div>
                                <div className="reg-date">FEB 20</div>
                            </div>
                            <div className="divider-line"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hero-responsive-grid {
                    display: grid;
                    gap: 3rem;
                    align-items: center;
                    grid-template-areas: 
                        "text video"
                        "cta video";
                    grid-template-columns: 1.2fr 1fr;
                }

                .hero-text-content { grid-area: text; text-align: left; }
                .hero-video-box { 
                    grid-area: video; 
                    width: 100%;
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    aspect-ratio: 16/9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 20px 60px rgba(0, 162, 255, 0.15);
                    cursor: pointer;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .hero-cta-box { grid-area: cta; display: flex; flex-direction: column; align-items: flex-start; gap: 2rem; }

                @media (max-width: 992px) {
                    .hero-responsive-grid {
                        grid-template-areas: 
                            "text"
                            "video"
                            "cta";
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 2rem;
                    }
                    .hero-text-content { text-align: center; }
                    .hero-cta-box { align-items: center; }
                    .hero-desc { margin-left: auto; margin-right: auto; }
                    .hero-video-box { border-radius: 16px; }
                }

                @media (max-width: 480px) {
                    .hero-title { font-size: 2.2rem !important; }
                    .hero-desc { font-size: 0.95rem; }
                    .btn-primary { width: 100%; justify-content: center; padding: 0.8rem 2rem !important; }
                    .reg-info { gap: 1rem !important; }
                    .divider-line { width: 20px !important; }
                }

                .innovation-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0, 162, 255, 0.1);
                    padding: 6px 16px;
                    border-radius: 100px;
                    border: 1px solid rgba(0, 162, 255, 0.2);
                    color: var(--accent-primary);
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                }
                .pulse-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent-primary); box-shadow: 0 0 10px var(--accent-primary); }
                .hero-title { font-size: clamp(2.2rem, 5vw, 4.5rem); font-weight: 900; margin-bottom: 1.5rem; line-height: 1.1; }
                .hero-desc { max-width: 600px; margin-bottom: 0; color: var(--text-secondary); font-size: clamp(1rem, 2vw, 1.1rem); line-height: 1.6; }
                .hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; transition: 0.5s filter; }
                .play-overlay { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
                .play-btn-large { width: 60px; height: 60px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3); display: flex; align-items: center; justify-content: center; color: white; }
                .play-label { font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
                .corner-decor { position: absolute; width: 40px; height: 40px; opacity: 0.6; pointer-events: none; }
                .top-left { top: 20px; left: 20px; border-top: 2px solid var(--accent-primary); border-left: 2px solid var(--accent-primary); }
                .bottom-right { bottom: 20px; right: 20px; border-bottom: 2px solid var(--accent-primary); border-right: 2px solid var(--accent-primary); }
                .reg-info { display: flex; align-items: center; gap: 1.5rem; opacity: 0.8; }
                .divider-line { width: 40px; height: 1px; background: var(--glass-border); }
                .reg-label { font-size: 0.75rem; opacity: 0.6; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px; }
                .reg-date { font-weight: 800; font-size: 1.1rem; color: var(--accent-primary); }
            `}} />

            {/* Background Glows */}
            <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 162, 255, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 162, 255, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }}></div>
        </section>
    );
};

export default Hero;
