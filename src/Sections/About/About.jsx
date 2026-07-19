import './About.css';

export default function About() {
  const technologies = ['React.js', 'JavaScript', 'TypeScript', 'Python'];
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h1>/ about me</h1>
        <p>
          I am a software engineer at xxx passionate about building user-focused application. I
          enjoy creating clean, accessible and responsive experience using mordern technolgies
        </p>
        <p>Here are some technologies I have been working with</p>
        <ul className="about-technology">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <p>
          In my free time, I'm nerdy about tech gadgets, love literary fiction, and love being
          outdoors(running/hiking).
        </p>
      </div>
    </section>
  );
}
