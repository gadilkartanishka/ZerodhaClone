// import ChargesExplained from "./ChargesExplained";
// import Hero from "./Hero";
// import PricingTable from "./PricingTable";
// import PricingTabs from "./PricingTabs";
import ChargesExplained from "./ChargesExplained";
import Hero from "./Hero";
import PricingTable from "./PricingTable";
import PricingTabs from "./PricingTabs";
import {
  accountOpeningHeaders,
  accountOpeningRows,
  addedChargesHeaders,
  addedChargesRows,
  amcHeaders,
  amcRows,
} from "./TableData";

function PricingPage() {
  return (
    <>
      <Hero />
      <PricingTabs />
      <p className="text-center fs-5 my-5">
        <a href="#" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
      <div style={{ width: "85%", margin: "50px auto" }}>
        <h3 className="my-5">Charges for opening Account</h3>
        <PricingTable
          headers={accountOpeningHeaders}
          rows={accountOpeningRows}
        />
      </div>
      <div style={{ width: "85%", margin: "50px auto" }}>
        <h3 className="my-5">Demat AMC (Annual Maintenance Charge)</h3>
        <PricingTable headers={amcHeaders} rows={amcRows} />
      </div>
      <div style={{ width: "85%", margin: "50px auto" }}>
        <h3 className="my-5">Charges for optional value added services</h3>
        <PricingTable headers={addedChargesHeaders} rows={addedChargesRows} />
      </div>
      <ChargesExplained />
    </>
  );
}

export default PricingPage;
