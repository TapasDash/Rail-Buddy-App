import Lottie from "lottie-react";
import train from "./train.json";

const TrainLoader = () => (
  <Lottie animationData={train} loop={true} id="loader" />
);

export default TrainLoader;
