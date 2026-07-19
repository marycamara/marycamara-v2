import GitHubIcon from '@mui/icons-material/Github';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div className="nav-logo">Mary Camara</div>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
      </ul>

      <div className="nav-icons">
        <a href="marycamara@gmail.com" target="_blank" rel="">
          <EmailRoundedIcon />
        </a>
        <a href="https://github.com/marycamara" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/mary-c-9137b820a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <BorderColorIcon />
        </a>
      </div>
    </nav>
  );
}
