import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getTrainTimetableData = async (trainNo) => {
  console.log({ trainNo }, import.meta.env);
  const response = await axios.get(
    `${import.meta.env.VITE_REACT_TRAIN_TIMETABLE_URL}?trainNo=${trainNo}`
  );
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainTimetableService = {
  getTrainTimetableData,
};

export default trainTimetableService;
