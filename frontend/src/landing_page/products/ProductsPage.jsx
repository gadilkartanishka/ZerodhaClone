import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        product={{
          heading: "Kite",
          info: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
          imgLink: "media/images/kite.png",
          showLinks: true,
          linkText: "Try Demo",
          GooglePlay: "media/images/googlePlayBadge.svg",
          AppStore: "media/images/appstoreBadge.svg",
          showStores: true,
        }}
      />
      <RightSection
        product={{
          heading: "Console",
          info: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
          imgLink: "media/images/console.png",
          showLinks: true,
          linkText: "Learn More",
          GooglePlay: "media/images/googlePlayBadge.svg",
          AppStore: "media/images/appstoreBadge.svg",
          showStores: true,
        }}
      />
      <LeftSection
        product={{
          heading: "Coin",
          info: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
          imgLink: "media/images/coin.png",
          showLinks: true,
          linkText: "Coin",
          GooglePlay: "media/images/googlePlayBadge.svg",
          AppStore: "media/images/appstoreBadge.svg",
          showStores: true,
        }}
      />
      <RightSection
        product={{
          heading: "Kite Connect API",
          info: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
          imgLink: "media/images/console.png",
          showLinks: true,
          linkText: "Kite Connect",
          showStores: false,
        }}
      />
      <LeftSection
        product={{
          heading: "Varsity Mobile",
          info: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
          imgLink: "media/images/coin.png",
          showLinks: false,
          GooglePlay: "media/images/googlePlayBadge.svg",
          AppStore: "media/images/appstoreBadge.svg",
          showStores: true,
        }}
      />
      <p className="text-center fs-5 my-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
