import Navbar from "../components/Navbar";
import SkillForm from "../components/SkillForm";

function Matcher() {
  return (
    <>
      <Navbar />

      <div className="container">
  <h2>💼 Resume Analyzer</h2>
  <p>Enter your details and check your ATS-style skill match.</p>

  <SkillForm />
</div>ru
    </>
  );
}

export default Matcher;