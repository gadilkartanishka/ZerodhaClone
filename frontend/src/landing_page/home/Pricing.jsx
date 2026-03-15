import "./Pricing.css";
function Pricing() {
  return (
    <div className="container p-5 text-muted">
      <div className="row">
        <div className="col-5">
          <h3 className="mb-4">Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="pricing-link">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 pricing-row">
          <div className="row">
            <div className="pricing-item">
              <img src="media/images/pricing0.svg" alt="" />
              <p>Free account opening</p>
            </div>
            <div className="pricing-item">
              <img src="media/images/pricingEquity.svg" alt="" />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="pricing-item">
              <img src="media/images/intradayTrades.svg" alt="" />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
