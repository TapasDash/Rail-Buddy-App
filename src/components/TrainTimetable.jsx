import "../styles/trainTimetable.scss";

const TrainTimetable = () => {
  return (
    <section className="trainTimetableContainer">
      <form>
        <h4>Enter Train Name or Train Number:</h4>
        <input
          type="text"
          placeholder="Train Name / Train Number"
          name="trainInfo"
          id=""
        />
        <button type="submit">Find Trains</button>
      </form>
    </section>
  );
};

export default TrainTimetable;
