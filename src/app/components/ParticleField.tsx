'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const ParticleField = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'particle-field';
    document.body.appendChild(container);

    // Create particles
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      container.appendChild(p);

      // Floating animation
      gsap.to(p, {
        y: `+=${Math.random() * 50 - 25}`,
        x: `+=${Math.random() * 50 - 25}`,
        repeat: -1,
        yoyo: true,
        duration: 3 + Math.random() * 3,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
      
    }

    return () => container.remove();
  }, []);

  return null;
};

export default ParticleField;
