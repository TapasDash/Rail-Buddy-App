import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPNRStatus, reset } from "../features/pnrStatus/pnrStatusSlice";
import "../styles/pnrStatus.scss";

const PnrStatus = () => {
  const [pnrNumber, setPnrNumber] = useState("");
  // register authSlice

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pnrStatusData, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.pnrStatus
  );

  const submitPnr = (e) => {
    e.preventDefault();
    dispatch(getPNRStatus(pnrNumber));
    navigate("/pnr-details");
  };

  useEffect(() => {
    if (isError) console.error(message);

    // if (isSuccess || pnrStatusData) {
    //   navigate("/pnr-details");
    // }
    // return () => {
    //   dispatch(reset());
    // };
  }, [isError, message, dispatch, navigate]); //isError, message, dispatch, navigate

  return (
    <section className="pnrStatusContainer">
      <form>
        <h4>Enter Your PNR Number:</h4>
        <input
          type="text"
          placeholder="Enter Your PNR Number"
          name="pnr"
          onChange={(e) => setPnrNumber(e.target.value)}
        />
        <button type="submit" onClick={(e) => submitPnr(e)}>
          Get PNR Status
        </button>
      </form>
    </section>
  );
};

export default PnrStatus;
