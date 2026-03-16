import "./Hero.css";
function Hero() {
  return (
    <div className="container my-5 ">
      <div className="hero-data text-center p-5 text-muted">
        <h3>Zerodha Products</h3>
        <p className="fs-5 my-3">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="" className="hero-link">
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
      <hr className="my-5" />
    </div>
  );
}

export default Hero;
