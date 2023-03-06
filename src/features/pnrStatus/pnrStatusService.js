import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const getPNRStatus = async (pnrNumber) => {
  console.log(import.meta.env);
  const config = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_REACT_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_REACT_RAPID_API_HOST,
    },
  };

  const response = await axios.get(
    import.meta.env.VITE_REACT_PNR_API_URL + pnrNumber,
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
