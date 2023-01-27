import "../styles/pnrStatus.scss";

const PnrStatus = () => {
  return (
    <section className="pnrStatusContainer">
      <form>
        <h4>Enter Your PNR Number:</h4>
        <input type="text" placeholder="Enter Your PNR Number" name="pnr" />
        <button type="submit">Get PNR Status</button>
      </form>
    </section>
  );
};

export default PnrStatus;
