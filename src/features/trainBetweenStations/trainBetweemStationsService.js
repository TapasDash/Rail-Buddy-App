import axios from "axios";

// const TRAIN_TIMETABLE_URL = new URL(
//   `https://inr.onrender.com/api/v1/train?stationCode=${encodeURIComponent(
//     fromStation
//   )}&destinationStation=${encodeURIComponent(toStation)}`
// );
const TRAIN_TIMETABLE_URL = new URL(`https://inr.onrender.com/api/v1/train`);

const getTrainBetweenStations = async (fromStation, toStation) => {
  console.log("getTrainBetweenStations", { fromStation, toStation });
  //   const TRAIN_TIMETABLE_URL = new URL(`https://inr.onrender.com/api/v1/train`);
  //   TRAIN_TIMETABLE_URL.search = `?stationCode=${encodeURIComponent(
  //     fromStation
  //   )}&destinationStation=${encodeURIComponent(toStation)}`;
  //   const searchParams = new URLSearchParams(
  //     `stationCode=${fromStation}&destinationStation=${toStation}`
  //   );
  //   TRAIN_TIMETABLE_URL.searchParams = searchParams;
  //   const search = new URLSearchParams(
  //     `?stationCode=${encodeURIComponent(
  //       fromStation
  //     )}&destinationStation=${encodeURIComponent(toStation)}`
  //   );
  //   TRAIN_TIMETABLE_URL.searchParams = search;

  console.log({ TRAIN_TIMETABLE_URL });
  const response = await axios.get(TRAIN_TIMETABLE_URL, {
    params: {
      stationCode: encodeURIComponent(fromStation),
      destinationStation: encodeURIComponent(toStation),
    },
  }); // { stationCode: fromStation, destinationStation: toStation }
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainBetweenStationsService = {
  getTrainBetweenStations,
};

export default trainBetweenStationsService;
