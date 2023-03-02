import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTrainTimetableData,
  reset,
} from "../features/trainTimetable/trainTimetableSlice";

import "../styles/trainTimetable.scss";

const TrainTimetable = () => {
  const [trainInfo, setTrainNo] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ trainInfo });
    dispatch(getTrainTimetableData(trainInfo));
    navigate("/train-timetable-details");
  };

  // useEffect(() => {
  //   if (isError) return console.error(message);

  //   if (isSuccess || trainTimetableData) navigate("/train-timetable-details");

  //   // return () => {
  //   //   dispatch(reset());
  //   // };
  // }, [isError, message, dispatch, navigate]);
  return (
    <section className="trainTimetableContainer">
      <form onSubmit={handleSubmit}>
        <h4>Enter Train Name or Train Number:</h4>
        <input
          type="text"
          placeholder="Train Number Or Train Name"
          name="trainInfo"
          onChange={(e) => setTrainNo(e.target.value)}
        />
        <div className="dropdown">
          {trainInfo &&
            data
              .filter((item) => {
                const searchTerm = trainData.fromStation.toLowerCase();
                const fullName = item.name.toLowerCase();
                const { code } = item;
                const regex = new RegExp(`${searchTerm}`, "gi");

                return (
                  (searchTerm &&
                    fullName.match(regex) &&
                    fullName !== searchTerm) ||
                  (code.match(regex) && code !== searchTerm)
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() =>
                    setTrainData((prevFormData) => {
                      return {
                        ...prevFormData,
                        fromStation: `${item.name} - ${item.code}`,
                      };
                    })
                  }
                  className="dropdown-row"
                  key={item.code}
                >
                  {item.name} - {item.code}
                </div>
              ))}
        </div>
        <button type="submit">Find Trains</button>
      </form>
    </section>
  );
};

export default TrainTimetable;
