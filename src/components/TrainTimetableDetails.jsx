import { useEffect } from "react";
import { reset } from "../features/trainTimetable/trainTimetableSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/trainTimetableDetails.scss";
import TrainLoader from "../utils/trainLoader/trainLoader";

const TrainTimetableDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trainTimetableData, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.trainTimetable);

  if (isLoading) return <TrainLoader />;
  return (
    <section className="trainTimetableDetails">
      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Station</th>
            <th>Arrival</th>
            <th>Distance</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>Departure</th>
          </tr>
        </thead>
        <tbody>
          {trainTimetableData &&
            trainTimetableData.map(
              ({
                seq,
                stationName,
                stationCode,
                arrivalTime,
                departureTime,
                distance,
              }) => (
                <>
                  <tr>
                    <td>{seq}</td>
                    <td>{stationName}</td>
                    <td>{arrivalTime.substring(0, 5)}</td>
                    <td>{distance} km</td>
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
  );
};

export default TrainTimetableDetails;
