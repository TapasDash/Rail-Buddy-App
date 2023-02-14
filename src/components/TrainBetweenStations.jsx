import { useEffect, useState } from "react";
import { getTrainBetweenStations } from "../features/trainBetweenStations/trainBetweenStationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/trainBetweenStations.scss";
import { trainCodesData } from "./trainCodesData";

const TrainBetweenStations = () => {
  const { data } = trainCodesData;

  const [trainData, setTrainData] = useState({
    fromStation: "",
    toStation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTrainData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    let { fromStation, toStation } = trainData;
    fromStation = fromStation.split("-")[1].trim();
    toStation = toStation.split("-")[1].trim();
    console.log({ fromStation, toStation });
    const trainObj = { fromStation, toStation };
    dispatch(getTrainBetweenStations(trainObj, toStation));
    navigate("/train-btw-stn-details");
  };
  // useEffect(() => {
  //   return () => {
  //     setStation("");
  //   };
  // }, []);

  return (
    <section className="trainBetweenStationsContainer">
      <form onSubmit={handleSubmit}>
        <h4>From Station:</h4>
        <input
          type="text"
          placeholder="Station Name/ Station Code"
          name="fromStation"
          value={trainData.fromStation}
          onChange={handleChange}
        />
        <div className="dropdown">
          {trainData.fromStation &&
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
        <h4>To Station:</h4>
        <input
          type="text"
          placeholder="Station Name/ Station Code"
          name="toStation"
          value={trainData.toStation}
          onChange={handleChange}
        />
        <div className="dropdown">
          {trainData.toStation &&
            data
              .filter((item) => {
                const searchTerm = trainData.toStation.toLowerCase();
                const fullName = item.name.toLowerCase();
                const { code } = item;
                const regex = new RegExp(`${searchTerm}`, "gi");

                return (
                  (fullName.match(regex) && fullName !== searchTerm) ||
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
                        toStation: `${item.name} - ${item.code}`,
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

export default TrainBetweenStations;
