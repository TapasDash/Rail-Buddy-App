import { trainData } from "./TrainTimetableData";

import "../styles/trainTimetableDetails.scss";

const TrainTimetableDetails = () => {
  return (
    <section className="trainTimetableDetails">
      <table class="trainTable">
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
          {trainData.map(
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
