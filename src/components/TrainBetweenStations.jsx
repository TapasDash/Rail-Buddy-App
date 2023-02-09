import { useEffect, useState } from "react";
import "../styles/trainBetweenStations.scss";
import { trainCodesData } from "./trainCodesData";

const TrainBetweenStations = () => {
  const { data } = trainCodesData;
  const [trainData, setTrainData] = useState({
    fromStation: {
      name: "",
      code: "",
    },
    toStation: {
      name: "",
      code: "",
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [stationName, stationCode] = value.split("-");
    console.log({ stationName, stationCode });
    setTrainData((prevFormData) => {
      return {
        ...prevFormData,
        [`${name}.name`]: stationName,
        [`${name}.code`]: stationCode,
      };
    });
  };

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
          value={trainData.fromStation.name}
          onChange={handleChange}
        />
        <div className="dropdown">
          {trainData.fromStation.name &&
            data
              .filter((item) => {
                const searchTerm = `${trainData.fromStation.name} - ${trainData.fromStation.code} `;
                const fullName = item.name.toLowerCase();
                const { code } = item;

                return (
                  (searchTerm && fullName.includes(searchTerm)) ||
                  (code.includes(searchTerm) &&
                    searchTerm !== item.name &&
                    searchTerm !== item.code)
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() =>
                    setTrainData((prevFormData) => {
                      return {
                        ...prevFormData,
                        fromStation: item.name,
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
          value={`${trainData.toStation.name} - ${trainData.toStation.code} `}
          onChange={handleChange}
        />
        <div className="dropdown">
          {trainData.toStation &&
            data
              .filter((item) => {
                const searchTerm = `${trainData.toStation.name} - ${trainData.toStation.code} `;
                const fullName = item.name.toLowerCase();
                const { code } = item;

                return (
                  (searchTerm &&
                    fullName.includes(searchTerm) &&
                    searchTerm !== item.name) ||
                  (code.includes(searchTerm) && searchTerm !== item.code)
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() =>
                    setTrainData((prevFormData) => {
                      return {
                        ...prevFormData,
                        toStation: item.name,
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
