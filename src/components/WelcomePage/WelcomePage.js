import React, { useEffect } from 'react';
import welcomeAnim from '../../gsap/welcomeAnim';

const WelcomePage = () => {
  useEffect(() => {
    welcomeAnim();
  });
  return (
    <section className="welcome-container">
      <div className="welcome">Welcome</div>
      <div className="welcome">Welcome</div>
      <div className="welcome">Welcome</div>
      <div className="welcome">Welcome</div>
      <div className="welcome">Welcome</div>
    </section>
  );
};

export default WelcomePage;
