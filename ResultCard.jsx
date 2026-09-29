function ResultCard({ data }) {
  let status = "";

  if (data.percentage >= 80) status = "Ready for Interview ✅";
  else if (data.percentage >= 60) status = "Intermediate 🚀";
  else status = "Need More Skills 📚";

  return (
    <div className="result-card">
      <h2>Resume Skill Analysis</h2>

      <div className="score-circle">
        <h1>{data.percentage}%</h1>
        <p>Skill Match</p>
      </div>

      <h3>👤 {data.name}</h3>
      <p><b>Target Role:</b> {data.role}</p>

      <div className="status-box">{status}</div>

      <h3>✅ Matching Skills</h3>
      <div className="skills-container">
        {data.matched.map((skill, index) => (
          <span className="skill matched" key={index}>
            {skill}
          </span>
        ))}
      </div>

      <h3>❌ Missing Skills</h3>
      <div className="skills-container">
        {data.missing.map((skill, index) => (
          <span className="skill missing" key={index}>
            {skill}
          </span>
        ))}
      </div>

      <div className="suggestion-box">
        <h3>💡 Suggestions</h3>
        <p>Learn these missing skills to improve your resume score.</p>

        <ul>
          {data.missing.map((skill, index) => (
            <li key={index}>Learn {skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResultCard;