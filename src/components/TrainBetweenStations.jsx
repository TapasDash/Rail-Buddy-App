import { useEffect, useState } from "react";
import "../styles/trainBetweenStations.scss";
import { trainCodesData } from "./trainCodesData";

const TrainBetweenStations = () => {
  const { data } = trainCodesData;
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");

  const handleOnChangeFromStation = (e) => setFromStation(e.target.value);
  const handleOnChangeToStation = (e) => setToStation(e.target.value);

  const searchFromStationItem = (searchTerm) => setFromStation(searchTerm);
  const searchToStationItem = (searchTerm) => setToStation(searchTerm);
  // useEffect(() => {
  //   return () => {
  //     setStation("");
  //   };
  // }, []);

  return (
    <section className="trainBetweenStationsContainer">
      <form>
        <h4>From Station:</h4>
        <input
          type="text"
          placeholder="Station Name/ Station Code"
          name="fromStation"
          value={fromStation}
          onChange={(e) => handleOnChangeFromStation(e)}
        />
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = fromStation.toLowerCase();
              const fullName = item.name.toLowerCase();
              const { code } = item;

              return (
                (searchTerm && fullName.includes(searchTerm)) ||
                (code.includes(searchTerm) &&
                  searchTerm !== item.name &&
                  item.code)
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => searchFromStationItem(item.name)}
                className="dropdown-row"
                key={item.code}
              >
                {item.name}-{item.code}
              </div>
            ))}
        </div>
        <h4>To Station:</h4>
        <input
          type="text"
          placeholder="Station Name/ Station Code"
          name="toStation"
          value={toStation}
          onChange={(e) => handleOnChangeToStation(e)}
        />
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = toStation.toLowerCase();
              const fullName = item.name.toLowerCase();
              const { code } = item;

              return (
                (searchTerm && fullName.includes(searchTerm)) ||
                (code.includes(searchTerm) &&
                  searchTerm !== item.name &&
                  item.code)
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => searchToStationItem(item.name)}
                className="dropdown-row"
                key={item.code}
              >
                {item.name}-{item.code}
              </div>
            ))}
        </div>
        <button type="submit">Find Trains</button>
      </form>
    </section>
  );
};

export default TrainBetweenStations;
