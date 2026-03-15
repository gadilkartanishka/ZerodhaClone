import "./Hero.css";
function Hero() {
  return (
    <div className="container p-5 mb-5 text-muted">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="hero image"
          className="mb-5"
        />
        <h3 className="mt-5 mb-3">Invest in everything</h3>
        <p className="mb-5 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="signup-btn p-2 fs-5 mb-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;
