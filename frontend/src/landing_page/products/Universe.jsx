import "./Universe.css";
function Universe() {
  return (
    <div className="container text-center p-5">
      <h4 className="mb-5">The Zerodha Universe</h4>
      <p className="mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="products text-muted text-center p-3">
        <div className="productBlock p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha FundHouse"
            className="productImg my-4"
          />
          <p className="productInfo">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="productBlock p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="SENSIBULL"
            className="productImg my-4"
          />
          <p className="productInfo">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="productBlock p-3">
          <img
            src="media/images/tijori.svg"
            alt="TIJORI"
            className="productImg my-4"
          />
          <p className="productInfo">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="productBlock p-3">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="productImg my-4"
          />
          <p className="productInfo">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="productBlock p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcase"
            className="productImg my-4"
          />
          <p className="productInfo">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETEs.
          </p>
        </div>
        <div className="productBlock p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="ditto"
            className="productImg my-4"
          />
          <p className="productInfo">
            Personalized advice on life and health insurance. No span and no
            mis-selling.
          </p>
        </div>
      </div>
      <button className="signup-btn my-5" style={{ height: 45, width: 200 }}>
        Sign Up for free
      </button>
    </div>
  );
}

export default Universe;
