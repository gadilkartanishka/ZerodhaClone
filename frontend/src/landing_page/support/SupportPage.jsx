import SupportAccordion from "./SupportAccordion";
import QuickLinks from "./QuickLinks";
import NoticeBox from "./NoticeBox";
import Hero from "./Hero";

const accordionSections = [
  {
    id: 1,
    title: "Account Opening",
    icon: <i className="fa-solid fa-circle-plus"></i>,
    links: [
      "Resident Individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    id: 2,
    title: "Your Zerodha Account",
    icon: <i className="fa-solid fa-user"></i>,
    links: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    id: 3,
    title: "Kite",
    icon: <i className="fa-solid fa-k"></i>,
    links: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    id: 4,
    title: "Funds",
    icon: <i className="fa-solid fa-indian-rupee-sign"></i>,
    links: [
      "Add money",
      "Withdraw money",
      "Add bank accounts",
      "eMandates",
    ],
  },
  {
    id: 5,
    title: "Console",
    icon: <i className="fa-solid fa-circle"></i>,
    links: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    id: 6,
    title: "Coin",
    icon: <i className="fa-solid fa-coins"></i>,
    links: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="wrapper">
      <Hero />
      <div style={{ padding: "0 24px" }}>
        <div className="row g-0">
          <div className="col-8">
            <div className="accordion" id="supportAccordion">
              {accordionSections.map((section) => (
                <SupportAccordion
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  icon={section.icon}
                  AccordionContent={
                    <ul>
                      {section.links.map((link) => (
                        <li key={link}>
                          <a style={{ textDecoration: "none" }}>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  }
                />
              ))}
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
