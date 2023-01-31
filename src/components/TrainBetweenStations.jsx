import "../styles/trainBetweenStations.scss";

import data from "./csvjson.json";

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
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
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
