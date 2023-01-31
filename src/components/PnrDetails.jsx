import React from "react";
import { useSelector } from "react-redux";
import { pnrData } from "./pnrData";
import TrainInfoCard from "./TrainInfoCard";

import "../styles/pnrDetails.scss";

const PnrDetails = () => {
  const {
    boardingInfo,
    destinationInfo,
    trainInfo: { dt, name, trainNo },
    seatInfo: { coach, berth, noOfSeats },
  } = pnrData;
  // const {
  //   pnrStatusData: {
  //     boardingInfo,
  //     destinationInfo,
  //     trainInfo: { dt, name, trainNo },
  //   },
  // } = useSelector((state) => state.pnrStatus);
  const fromStation = {
    code: boardingInfo.stationCode,
    name: boardingInfo.stationName,
    time: boardingInfo.departureTime,
  };

  const toStation = {
    code: destinationInfo.stationCode,
    name: destinationInfo.stationName,
    time: boardingInfo.arrivalTime,
  };

  // r
  // return (
  //   <section className="fromStation">
  //     <h2>{boardingInfo.stationCode}</h2>
  //     <p>{boardingInfo.stationName}</p>
  //     <h5>{boardingInfo.arrivalTime}</h5>
  //   </section>
  // );
  return (
    <>
      <TrainInfoCard
        fromStation={fromStation}
        toStation={toStation}
        trainNo={trainNo}
        trainName={name}
      />
      <div className="seatInfo">
        <div>
          <h3>Coach</h3>
          <p>{coach}</p>
        </div>
        <div>
          <h3>Berth</h3>
          <p>{berth}</p>
        </div>
        <div>
          <h3>No Of Seats</h3>
          <p>{noOfSeats}</p>
        </div>
      </div>
    </>
  );
};

export default PnrDetails;
