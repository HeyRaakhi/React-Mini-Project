import { useState } from "react";
import Navbar from "../components/Navbar";

function CareerTips() {
  const [role, setRole] = useState("");

  const tips = {
    "Frontend Developer": {
      skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
      tip: "Practice responsive websites and React projects."
    },
    "Backend Developer": {
      skills: ["Java", "SQL", "Node.js", "MongoDB", "REST API"],
      tip: "Build APIs and connect databases."
    },
    "Full Stack Developer": {
      skills: ["React", "Node.js", "MongoDB", "Express", "Git"],
      tip: "Build complete web applications from frontend to backend."
    },
    "Data Analyst": {
      skills: ["Python", "SQL", "Excel", "Power BI", "Statistics"],
      tip: "Practice data analysis and dashboard projects."
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>🚀 Career Tips</h2>
        <p>Select a career role to see recommended skills.</p>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Career Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Data Analyst">Data Analyst</option>
        </select>

        {role && (
          <div className="tips-card">
            <h3>{role}</h3>

            <h4>Recommended Skills</h4>
            <ul>
              {tips[role].skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h4>Learning Tip</h4>
            <p>{tips[role].tip}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CareerTips;