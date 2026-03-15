function Awards() {
  return (
    <div className="container mt-5 mb-5 text-muted">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="award-img" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3 className="mb-3">Largest stock broker in India</h3>
          <p className="mb-5">
            2+ million clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov. securities</p>
                </li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="logos"
              className="mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
