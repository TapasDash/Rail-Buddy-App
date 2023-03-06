import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pnrData } from "./pnrData";
import TrainInfoCard from "./TrainInfoCard";

import "../styles/pnrDetails.scss";
import { getPNRStatus, reset } from "../features/pnrStatus/pnrStatusSlice";
import TrainLoader from "../utils/TrainLoader/TrainLoader";

const PnrDetails = () => {
  // const {
  //   boardingInfo,
  //   destinationInfo,
  //   trainInfo: { dt, name, trainNo },
  //   seatInfo: { coach, berth, noOfSeats },
  // } = pnrData;
  // const {
  //   pnrStatusData: {
  //     boardingInfo,
  //     destinationInfo,
  //     trainInfo: { dt, name, trainNo },
  //   },
  // } = useSelector((state) => state.pnrStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pnrStatusData, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.pnrStatus
  );
  console.log({ pnrStatusData });

  if (isLoading) return <TrainLoader />;

  const {
    boardingInfo,
    destinationInfo,
    seatInfo: { coach, berth, noOfSeats },
    trainInfo: { dt, name, trainNo },
    trainRoutes,
  } = pnrStatusData || {};
  const fromStation = {
    code: boardingInfo?.stationCode,
    name: boardingInfo?.stationName,
    time: boardingInfo?.departureTime,
  };

  const toStation = {
    code: destinationInfo?.stationCode,
    name: destinationInfo?.stationName,
    time: boardingInfo?.arrivalTime,
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
      <section className="trainTimetableDetails">
        <table className="trainTable">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Station</th>
              <th>Arrival</th>
              <th>Halt</th>
              <th>Platform</th>
              <th>Distance</th>
              <th>Travelling Day</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>Departure</th>
            </tr>
          </thead>
          <tbody>
            {trainRoutes.map(
              (
                {
                  stationCode,
                  stationName,
                  haltTime,
                  travellingDay,
                  platform,
                  arrivalTime,
                  departureTime,
                  distance,
                },
                index
              ) => (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{stationName}</td>
                    <td>{arrivalTime.substring(0, 5)}</td>
                    <td>{haltTime.substring(3, 5)} min</td>
                    <td>{platform}</td>
                    <td>{distance} km</td>
                    <td>{travellingDay}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>({stationCode})</td>
                    <td>{departureTime.substring(0, 5)}</td>
                  </tr>
                </>
              )
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default PnrDetails;
