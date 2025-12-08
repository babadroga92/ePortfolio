import React from "react";

function Welcome() {
  return (
    <div className="content">
      <header className="content-header hero-header">
        <div className="hero-text">
          <h1>Hey, I&apos;m Nemanja.</h1>
          <p className="lead">
            Outside of work, I&apos;m a national master in chess and have coached kids
            since 2016. I love tennis—Federer will always be my favorite player, even
            if Djokovic is still the GOAT—and one of my favorite memories is watching
            their 2015 US Open final in person thanks to my amazing wife, Lorena.
            I&apos;m also drawn to coding and most things tech, and I spend my time
            traveling, reading history, working out, and trying to live a clean,
            simple life.
          </p>
        </div>

        <div className="hero-image">
          <img src="/family.jpeg" alt="Nemanja" />
        </div>
      </header>

      <div className="decor-divider"></div>

      <section className="content-section">
        <h2>Personal Narrative</h2>
        <p>
          {/* TODO: replace this with your real 1200-word essay */}
          Placeholder text for the 1200-word personal narrative essay.
        </p>
        <p>
          Placeholder text paragraphs.
        </p>
      </section>
    </div>
  );
}

export default Welcome;
