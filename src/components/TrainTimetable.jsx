import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTrainTimetableData,
  reset,
} from "../features/trainTimetable/trainTimetableSlice";

import "../styles/trainTimetable.scss";

const TrainTimetable = () => {
  const [trainNo, setTrainNo] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { trainTimetableData, isError, message, isSuccess } = useSelector(
    (state) => state.trainTimetable
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ trainNo });
    dispatch(getTrainTimetableData(trainNo));
    navigate("/train-timetable-details");
  };

  useEffect(() => {
    if (isError) return console.error(message);

    if (isSuccess || trainTimetableData) navigate("/train-timetable-details");

    // return () => {
    //   dispatch(reset());
    // };
  }, [isError, message, dispatch, navigate]);
  return (
    <section className="trainTimetableContainer">
      <form>
        <h4>Enter Train Name or Train Number:</h4>
        <input
          type="text"
          placeholder="trainName / Train Number"
          name="trainInfo"
          id=""
          onChange={(e) => setTrainNo(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Find Trains
        </button>
      </form>
    </section>
  );
};

export default TrainTimetable;
