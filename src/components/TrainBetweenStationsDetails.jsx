import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TrainInfoCard from "./TrainInfoCard";

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

  //   useEffect(() => {
  //     if (isError) console.error(message);

  //     // if (!isSuccess) {
  //     //   navigate("/");
  //     // }
  //     // return () => {
  //     //   dispatch(reset());
  //     // };
  //   }, [isError, message]); //isError, message, dispatch, navigate
  // console.log({ trainBetweenStationsData });
  if (isLoading) return <h1>Loading....</h1>;

  // r
  // return (
  //   <section className="fromStation">
  //     <h2>{boardingInfo.stationCode}</h2>
  //     <p>{boardingInfo.stationName}</p>
  //     <h5>{boardingInfo.arrivalTime}</h5>
  //   </section>
  // );
  const cleanTrainStationsData = [];
  trainBetweenStationsData.map((trainData) => {
    console.log({ trainData });
    const {
      stationName,
      stationCode,
      destinationStationName,
      destinationStation,
      trainNo,
      trainName,
      arrivalTime,
      departureTime,
    } = trainData || {};

    const fromStation = {
      code: stationCode,
      name: stationName,
      time: arrivalTime,
    };

    const toStation = {
      code: destinationStation,
      name: destinationStationName,
      time: departureTime,
    };
    cleanTrainStationsData.push({ fromStation, toStation, trainName, trainNo });
  });
  return cleanTrainStationsData.map(
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
