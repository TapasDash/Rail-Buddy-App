import "../styles/trainBetweenStations.scss";

const TrainBetweenStations = () => {
  return (
    <section className="trainBetweenStationsContainer">
      <form>
        <h4>From Station:</h4>
        <input
          type="text"
          placeholder="Station Name/ Station Code"
          name="fromStation"
        />
        <h4>To Station:</h4>
        <input
          type="text"
          placeholder="Station Name/ Station Code"
          name="toStation"
        />
        <button type="submit">Find Trains</button>
      </form>
    </section>
  );
};

export default TrainBetweenStations;
