import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import PnrStatus from "./components/PnrStatus";
import TrainBetweenStations from "./components/TrainBetweenStations";
import TrainTimetable from "./components/TrainTimeTable";
import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train-btw-stn" element={<TrainBetweenStations />} />
        <Route path="/train-timetable" element={<TrainTimetable />} />
        <Route path="/pnr-status" element={<PnrStatus />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
