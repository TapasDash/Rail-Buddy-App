import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/trainTimetable.scss";

const TrainTimetable = () => {
  const [trainData, setTrainData] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="trainTimetableContainer">
      <form>
        <h4>Enter Train Name or Train Number:</h4>
        <input
          type="text"
          placeholder="trainName / Train Number"
          name="trainInfo"
          id=""
        />
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>
          Find Trains
        </button>
      </form>
    </section>
  );
};

export default TrainTimetable;
