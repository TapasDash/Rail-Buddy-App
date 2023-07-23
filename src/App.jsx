import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import PnrDetails from "./components/PnrDetails";
import PnrStatus from "./components/PnrStatus";
import TrainBetweenStations from "./components/TrainBetweenStations";
import TrainBetweenStationsDetails from "./components/TrainBetweenStationsDetails";
import TrainTimetable from "./components/TrainTimetable";
import TrainTimetableDetails from "./components/TrainTimetableDetails";
import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PnrStatus />} />
        <Route path="/train-btw-stn" element={<TrainBetweenStations />} />
        <Route
          path="/train-btw-stn-details"
          element={<TrainBetweenStationsDetails />}
        />
        <Route path="/train-timetable" element={<TrainTimetable />} />
        <Route
          path="/train-timetable-details"
          element={<TrainTimetableDetails />}
        />
        <Route path="/pnr-details" element={<PnrDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
