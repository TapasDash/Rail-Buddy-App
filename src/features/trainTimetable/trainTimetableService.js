import axios from "axios";

const TRAIN_TIMETABLE_URL = "https://inr.onrender.com/api/v1/train";

const getTrainTimetableData = async (trainNo) => {
  const response = await axios.get(`${TRAIN_TIMETABLE_URL}?trainNo=${trainNo}`);
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainTimetableService = {
  getTrainTimetableData,
};

export default trainTimetableService;
