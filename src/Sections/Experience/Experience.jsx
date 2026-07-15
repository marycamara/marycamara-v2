import { useState } from 'react';
import './Experience.css';

export default function Experince() {
  const [activeExperince, setActiveExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'XXX',
      date: '2025 - Present',
      description:
        'Working on frontend application using react, javascript, and mordern web technologies',
    },
    {
      id: 2,
      role: 'IT Support',
      company: 'Delaware North',
      date: '2022 -2025',
      description: 'Providing technical support, troubleshooting hardware and software issues',
    },
  ];
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h1>/ experience</h1>
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <button
              className="experience-button"
              onClick={() =>
                setActiveExperience(activeExperince === experience.id ? null : experience.id)
              }
            >
              {experience.company}
            </button>
            {activeExperince === experience.id && (
              <div className="experience-details">
                <h3>{experience.role}</h3>
                <p>{experience.date}</p>
                <p> {experience.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
