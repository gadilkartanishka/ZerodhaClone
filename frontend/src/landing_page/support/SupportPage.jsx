import SupportAccordion from "./SupportAccordion";
import QuickLinks from "./QuickLinks";
import NoticeBox from "./NoticeBox";
import Hero from "./Hero";

export default function SupportPage() {
  return (
    <div className="wrapper">
      <Hero />
      <div style={{ padding: "0 24px" }}>
        <div className="row g-0">
          <div className="col-8">
            <div className="accordion" id="supportAccordion">
              <SupportAccordion
                title="Account Opening"
                icon={<i className="fa-solid fa-circle-plus"></i>}
                id={1}
              />
              <SupportAccordion
                title="Your Zerodha Account"
                icon={<i className="fa-solid fa-user"></i>}
                id={2}
              />
              <SupportAccordion
                title="Kite"
                icon={<i className="fa-solid fa-k"></i>}
                id={3}
              />
              <SupportAccordion
                title="Funds"
                icon={<i className="fa-solid fa-indian-rupee-sign"></i>}
                id={4}
              />
              <SupportAccordion
                title="Console"
                icon={<i className="fa-solid fa-circle"></i>}
                id={5}
              />
              <SupportAccordion
                title="Coin"
                icon={<i className="fa-solid fa-coins"></i>}
                id={6}
              />
            </div>
          </div>
          <div className="col-4 ps-4">
            <NoticeBox />
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
