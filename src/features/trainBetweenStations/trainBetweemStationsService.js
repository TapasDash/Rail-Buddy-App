import axios from "axios";

// const TRAIN_TIMETABLE_URL = new URL(
//   `https://inr.onrender.com/api/v1/train?stationCode=${encodeURIComponent(
//     fromStation
//   )}&destinationStation=${encodeURIComponent(toStation)}`
// );
const TRAIN_TIMETABLE_URL = `https://inr.onrender.com/api/v1/trains`;

const getTrainBetweenStations = async (fromStation, toStation) => {
  console.log("getTrainBetweenStations", { fromStation, toStation });
  
  console.log({ TRAIN_TIMETABLE_URL });
  const response = await axios.get(`${TRAIN_TIMETABLE_URL}/${fromStation}/${toStation}`); // { stationCode: fromStation, destinationStation: toStation }
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainBetweenStationsService = {
  getTrainBetweenStations,
};

export default trainBetweenStationsService;
