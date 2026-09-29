import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2>ℹ️ About Resume Skill Matcher</h2>

        <div className="about-card">
          <p>
            Resume Skill Matcher is a React application that compares a user's
            skills with the required skills for different IT job roles.
          </p>

          <h3>Technologies Used</h3>

          <ul>
            <li>React JS</li>
            <li>React Router</li>
            <li>useState Hook</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;