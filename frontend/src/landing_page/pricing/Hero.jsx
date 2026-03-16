import "./Hero.css";
function Hero() {
  return (
    <div className="container my-5">
      <div className="pricingTitle text-center p-5">
        <h3 className="my-3">Charges</h3>
        <p className="fs-5 text-muted">List of all charges and taxes</p>
      </div>
      <br />
      <br />
      <br />
      <div className="row text-center my-5">
        <div className="col p-3">
          <img src="media/images/pricingEquity.svg" className="pricingImg" />
          <div className="pricingInfo">
            <h3 className="mb-4">Free equity delivery</h3>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
        </div>
        <div className="col p-3">
          <img src="media/images/intradayTrades.svg" className="pricingImg" />
          <div className="pricingInfo">
            <h3 className="mb-4">Intraday and F&O trades</h3>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
        </div>
        <div className="col p-3">
          <img src="media/images/pricingMF.svg" className="pricingImg" />
          <div className="pricingInfo">
            <h3 className="mb-4">Free direct MF</h3>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
