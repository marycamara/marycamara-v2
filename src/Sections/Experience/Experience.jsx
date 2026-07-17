import { useState } from 'react';
import './Experience.css';

export default function Experince() {
  const [activeExperince, setActiveExperience] = useState(1);

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
  // Finds the experience that matches the selected button
  const selectedExperience = experiences.find((experience) => experience.id === activeExperince);

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <h1>/ experience</h1>

        {/* Holds buttons on the left and details on the right */}
        <div className="experience-content">
          {/* Left side buttons */}
          <div className="experience-buttons">
            {experiences.map((experience) => (
              <button
                className="experience-button"
                onClick={() =>
                  setActiveExperience(activeExperince === experience.id ? null : experience.id)
                }
              >
                {experience.company}
              </button>
            ))}
          </div>
          {/* Right side details */}
          <div className="experience-details">
            {selectedExperience && (
              <>
                <h3>{selectedExperience.role}</h3>
                <p>{selectedExperience.date}</p>
                <p> {selectedExperience.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
