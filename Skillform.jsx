import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobSkills from "../data/Skills";

function SkillForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
  e.preventDefault();

  const userSkills = skills.split(",").map((skill) => skill.trim());

  const requiredSkills = jobSkills[role];

  const matched = requiredSkills.filter((skill) =>
    userSkills.includes(skill)
  );

  const missing = requiredSkills.filter(
    (skill) => !userSkills.includes(skill)
  );

  const percentage = Math.round(
    (matched.length / requiredSkills.length) * 100
  );

  navigate("/result", {
    state: {
      name,
      role,
      percentage,
      matched,
      missing,
    },
  });
}

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Job Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="Data Analyst">Data Analyst</option>
      </select>

      <textarea
        placeholder="Enter your skills (Example: HTML, CSS, React)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      ></textarea>

      <button type="submit">Check Match</button>
    </form>
  );
}

export default SkillForm;

