import React from 'react';

const CTA = () => {
    return (
        <section className="cta section-padding container">
            <div className="glass" style={{ padding: '3.5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to shape the future?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Registration is now open for university students worldwide. Don’t miss your chance to be part of Envision-X 2.0.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn-primary">Register Now</button>
                    </div>
                </div>

                {/* Decorative elements */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0, 162, 255, 0.1) 0%, transparent 70%)', filter: 'blur(30px)' }}></div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        /* No secondary button styles needed */
      `}} />
        </section>
    );
};

export default CTA;
