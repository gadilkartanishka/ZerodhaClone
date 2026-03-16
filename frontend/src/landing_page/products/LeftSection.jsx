function LeftSection({ product }) {
  return (
    <div className="container p-5" style={{ lineHeight: 2 }}>
      <div className="row align-items-center">
        <div className="col-7">
          <img
            src={product.imgLink}
            alt={product.heading}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-4 text-muted">
          <h4 className="my-4">{product.heading}</h4>
          <p className="my-3">{product.info}</p>
          {product.showLinks && (
            <div className="my-3">
              <a href="#" style={{ textDecoration: "none" }}>
                {product.linkText} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          )}
          {product.showStores && (
            <>
              <a href="#">
                <img
                  src={product.GooglePlay}
                  alt="Get it on Google Play"
                  className="downloadLinks me-3"
                />
              </a>
              <a href="#">
                <img
                  src={product.AppStore}
                  alt="Get it on App Store"
                  className="downloadLinks"
                />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
