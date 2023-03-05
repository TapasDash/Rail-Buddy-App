import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getPNRStatus = async (pnrNumber) => {
  console.log(process.env);
  const config = {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    },
  };

  const response = await axios.get(
    process.env.REACT_APP_PNR_API_URL + pnrNumber,
    config
  );
  // console.log({ response });
  // console.log(response.data.data);
  return response.data.data;
};

const pnrService = {
  getPNRStatus,
};

export default pnrService;
