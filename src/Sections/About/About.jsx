import './About.css';

export default function About() {
  const technologies = ['React.js', 'JavaScript', 'TypeScript', 'Python'];
  return (
    <section className="about">
      <h1>/ about me</h1>
      <p>
        I am a software engineer at xxx passionate about building user-focused application. I enjoy
        creating clean, accessible and responsive experience using mordern technolgies
      </p>
      <h3>Here are some technologies I have been working with</h3>
      <ul className="about-technology">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <div>
        In my free time, I'm nerdy about tech gadgets, love literary fiction, and love being
        outdoors(running/hiking).
      </div>
    </section>
  );
}
