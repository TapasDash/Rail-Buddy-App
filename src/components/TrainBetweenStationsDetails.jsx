import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/trainInfoCard.scss";
import "../styles/trainBetweenStationsDetails.scss";

import TrainInfoCard from "./TrainInfoCard";
import TrainLoader from "../utils/TrainLoader/TrainLoader";

const TrainBetweenStationsDetails = () => {
  // const {
  //   boardingInfo,
  //   destinationInfo,
  //   trainInfo: { dt, name, trainNo },
  //   seatInfo: { coach, berth, noOfSeats },
  // } = pnrData;
  // const {
  //   trainBetweenStationsData: {
  //     boardingInfo,
  //     destinationInfo,
  //     trainInfo: { dt, name, trainNo },
  //   },
  // } = useSelector((state) => state.pnrStatus);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const { trainBetweenStationsData, isLoading, isError, message } = useSelector(
    (state) => state.trainBetweenStations
  );

  if (isLoading) return <TrainLoader />;

  let cleanedUpTrainStationsData = [];
  trainBetweenStationsData.map((trainData) => {
    console.log({ trainData });
    const { src, dest } = trainData || {};
    const { trainName, trainNo } = src;
    // const {
    //   stationName,
    //   stationCode,
    //   destinationStationName,
    //   destinationStation,
    //   trainNo,
    //   trainName,
    //   arrivalTime,
    //   departureTime,
    // } = trainData || {};

    const fromStation = {
      code: src.stationCode,
      name: src.stationName,
      time: src.arrivalTime,
    };

    const toStation = {
      code: dest.stationCode,
      name: dest.stationName,
      time: dest.arrivalTime,
    };
    cleanedUpTrainStationsData.push({
      fromStation,
      toStation,
      trainName,
      trainNo,
    });
  });

  return cleanedUpTrainStationsData.map(
    ({ fromStation, toStation, trainName, trainNo }) => (
      <TrainInfoCard
        fromStation={fromStation}
        toStation={toStation}
        trainName={trainName}
        trainNo={trainNo}
      />
    )
  );
};
export default TrainBetweenStationsDetails;
