import axios from "axios";

const TRAIN_TIMETABLE_URL = "https://inr.onrender.com/api/v1/train";

const getTrainBetweenStations = async (fromStation, toStation) => {
  const response = await axios.get(
    `${TRAIN_TIMETABLE_URL}?stationCode=${fromStation}&destinationStation=${toStation}`
  );
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainBetweenStationsService = {
  getTrainBetweenStations,
};

export default trainBetweenStationsService;
