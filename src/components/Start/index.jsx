
import { useNavigate } from "react-router-dom";
import "./index.css";

function Start() {
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <div className="start-card">
        <h1>Live Quiz</h1>
        <p>Total Questions: 10</p>

        <p>
          Open multiple tabs to experience real-time updates
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/questions")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Start;
