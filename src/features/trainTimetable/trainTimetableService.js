import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getTrainTimetableData = async (trainNo) => {
  console.log({ trainNo }, process.env);
  const response = await axios.get(
    `${process.env.REACT_APP_TRAIN_TIMETABLE_URL}?trainNo=${trainNo}`
  );
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainTimetableService = {
  getTrainTimetableData,
};

export default trainTimetableService;
