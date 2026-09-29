import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Resume Skill Matcher Pro</h1>

        <p>
          Analyze your resume skills, calculate your interview readiness,
          and identify missing skills for your dream IT job.
        </p>

        <Link to="/matcher">
          <button>🚀 Analyze My Resume</button>
        </Link>

        {/* Statistics Section */}
        <div className="stats">
          <div className="stat-card">
            <h2>4+</h2>
            <p>IT Job Roles</p>
          </div>

          <div className="stat-card">
            <h2>20+</h2>
            <p>Skills Covered</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>React Project</p>
          </div>
        </div>

        {/* Features Section */}
        <h2 className="section-title">✨ Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>📊 Skill Match</h3>
            <p>Calculates resume matching percentage.</p>
          </div>

          <div className="feature-card">
            <h3>🎯 Missing Skills</h3>
            <p>Shows the skills you need to improve.</p>
          </div>

          <div className="feature-card">
            <h3>💼 Career Guidance</h3>
            <p>Suggests important skills for different IT roles.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ React Router</h3>
            <p>Navigation between pages without page refresh.</p>
          </div>
        </div>

        {/* Supported Job Roles */}
        <h2 className="section-title">💼 Supported Job Roles</h2>

        <div className="roles">
          <span>Frontend Developer</span>
          <span>Backend Developer</span>
          <span>Full Stack Developer</span>
          <span>Data Analyst</span>
        </div>
      </div>
    </>
  );
}

export default Home;