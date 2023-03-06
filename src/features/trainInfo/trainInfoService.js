import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getTrainInfo = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_REACT_TRAIN_TIMETABLE_URL}/info`
  );
  console.log({ response });
  console.log(response?.data?.data);
  return response?.data?.data;
};

const trainInfoService = {
  getTrainInfo,
};

export default trainInfoService;
