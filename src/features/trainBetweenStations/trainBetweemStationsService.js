import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getTrainBetweenStations = async (fromStation, toStation) => {
  console.log("getTrainBetweenStations", { fromStation, toStation });

  const response = await axios.get(
    `${
      import.meta.env.VITE_REACT_TRAIN_TIMETABLE_URL
    }/${fromStation}/${toStation}`
  ); // { stationCode: fromStation, destinationStation: toStation }
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainBetweenStationsService = {
  getTrainBetweenStations,
};

export default trainBetweenStationsService;
