import Lottie from "lottie-react";
import train from "./train.json";

import "../../styles/trainLoader.scss"

const TrainLoader = () => (
  <Lottie animationData={train} loop={true} id="loader" />
);

export default TrainLoader;
