import axios from "axios";

const PNR_API_URL = "https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/";

const getPNRStatus = async (pnrNumber) => {
  const config = {
    headers: {
      "X-RapidAPI-Key": "e9c35096e0msh6e2669d3e6e81c5p1e9255jsnc13d39da54c2",
      "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com",
    },
  };

  const response = await axios.get(PNR_API_URL + pnrNumber, config);
  console.log({ response })
  console.log(response.data.data)
  return response.data.data;
};

const pnrService = {
  getPNRStatus,
};

export default pnrService;
