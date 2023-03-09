import axios from "axios";
import useAxios from "axios-hooks";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTrainTimetableData,
  reset,
} from "../features/trainTimetable/trainTimetableSlice";

import "../styles/trainTimetable.scss";

const TrainTimetable = () => {
  const [trainInfo, setTrainInfo] = useState("");
  const [trainInfoData, setTrainInfoData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    return await axios.get(
      `${import.meta.env.VITE_REACT_TRAIN_TIMETABLE_URL}/info`
    );
  };

  useEffect(() => {
    console.log("useEfect ran");
    const fetchAPI = async () => {
      const response = await fetchData();
      setTrainInfoData(response.data.data);
    };

    fetchAPI();
  }, []);

  // console.log({ trainInfoData });
  // const getTrainInfoData = async () => {
  //   console.log("useEffect ran");
  //   const data = await axios.get(
  //     `${import.meta.env.REACT_APP_TRAIN_TIMETABLE_URL}/info`
  //   );

  // };

  // useEffect(async () => {
  //   getTrainInfoData();

  const handleSubmit = (event) => {
    event.preventDefault();
    let [trainNo] = trainInfo.split("-");
    dispatch(getTrainTimetableData(trainNo));
    navigate("/train-timetable-details");
  };

  return (
    <section className="trainTimetableContainer">
      <form onSubmit={handleSubmit}>
        <h4>Enter Train Name or Train Number:</h4>
        <input
          type="text"
          placeholder="Train Number Or Train Name"
          name="trainInfo"
          value={trainInfo}
          onChange={(e) => setTrainInfo(e.target.value)}
        />
        <div className="dropdown">
          {trainInfo &&
            trainInfoData.length &&
            trainInfoData
              .filter((item) => {
                const searchTerm = trainInfo.toLowerCase();
                const trainName = item.trainName.toLowerCase();
                const { _id: trainNo } = item;
                const regex = new RegExp(`${searchTerm}`, "gi");

                return (
                  (searchTerm &&
                    trainName.match(regex) &&
                    trainName !== searchTerm) ||
                  (trainNo.match(regex) && trainNo !== searchTerm)
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() =>
                    setTrainInfo(`${item._id} - ${item.trainName}`)
                  }
                  className="dropdown-row"
                  key={item._id}
                >
                  {item._id} - {item.trainName}
                </div>
              ))}
        </div>
        <button type="submit">Find Trains</button>
      </form>
    </section>
  );
};

export default TrainTimetable;
