import { useState } from "react";
import PricingTable from "./PricingTable";
import {
  equityHeaders,
  equityRows,
  currencyHeaders,
  currencyRows,
  commodityHeaders,
  commodityRows,
} from "./TableData";
import "./PricingTabs.css";

const tabs = [
  { key: "equity", label: "Equity", headers: equityHeaders, rows: equityRows },
  {
    key: "currency",
    label: "Currency",
    headers: currencyHeaders,
    rows: currencyRows,
  },
  {
    key: "commodity",
    label: "Commodity",
    headers: commodityHeaders,
    rows: commodityRows,
  },
];

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState("equity");

  const activeData = tabs.find((t) => t.key === activeTab);

  return (
    <div className="pricing-tabs-container">
      <div className="pricing-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`pricing-tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="slider"
          style={{
            transform: `translateX(${tabs.findIndex((t) => t.key === activeTab) * 100}%)`,
          }}
        />
      </div>
      <PricingTable headers={activeData.headers} rows={activeData.rows} />
    </div>
  );
}
