import Navbar from "../components/Navbar";
import ResultCard from "../components/ResultCard";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const resultData = location.state;

  if (!resultData) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h2>No Result Found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <ResultCard data={resultData} />
      </div>
    </>
  );
}

export default Result;