export const equityHeaders = [
  "",
  "Equity delivery",
  "Equity intraday",
  "F&O - Futures",
  "F&O - Options",
];

export const equityRows = [
  [
    "Brokerage",
    "Zero Brokerage",
    "0.03% or ₹20 per executed order (whichever is lower)",
    "0.03% or ₹20 per executed order (whichever is lower)",
    "Flat ₹20 per executed order",
  ],
  [
    "STT/CTT",
    "0.1% on buy & sell",
    "0.025% on the sell side",
    "0.02% on the sell side",
    <>
      <ul style={{ margin: 0, paddingLeft: "1rem" }}>
        <li>0.125% of intrinsic value on exercised options</li>
        <li>0.1% on sell side (on premium)</li>
      </ul>
    </>,
  ],
  [
    "Transaction charges",
    "NSE: 0.00297%<br/>BSE: 0.00375%",
    "NSE: 0.00297%<br/>BSE: 0.00375%",
    "NSE: 0.00173%<br/>BSE: 0",
    "NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)",
  ],
  [
    "GST",
    "18% on (brokerage + SEBI + transaction)",
    "18% on (brokerage + SEBI + transaction)",
    "18% on (brokerage + SEBI + transaction)",
    "18% on (brokerage + SEBI + transaction)",
  ],
  ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
  [
    "Stamp charges",
    "0.015% or ₹1500 / crore on buy side",
    "0.003% or ₹300 / crore on buy side",
    "0.002% or ₹200 / crore on buy side",
    "0.003% or ₹300 / crore on buy side",
  ],
];

export const currencyHeaders = ["", "Currency futures", "Currency options"];

export const currencyRows = [
  [
    "Brokerage",
    "0.03% or ₹20 per executed order (whichever is lower)",
    "Flat ₹20 per executed order",
  ],
  ["STT/CTT", "No STT", "No STT"],
  [
    "Transaction charges",
    "NSE: 0.00035%<br/>BSE: 0.00045%",
    "NSE: 0.0311%<br/>BSE: 0.001%",
  ],
  [
    "GST",
    "18% on (brokerage + SEBI + transaction)",
    "18% on (brokerage + SEBI + transaction)",
  ],
  ["SEBI charges", "₹10 / crore", "₹10 / crore"],
  [
    "Stamp charges",
    "0.0001% or ₹10 / crore on buy side",
    "0.0001% or ₹10 / crore on buy side",
  ],
];

export const commodityHeaders = ["", "Commodity futures", "Commodity options"];

export const commodityRows = [
  [
    "Brokerage",
    "0.03% or ₹20 per executed order (whichever is lower)",
    "Flat ₹20 per executed order",
  ],
  ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
  [
    "Transaction charges",
    "MCX: 0.0021%<br/>NSE: 0.0001%",
    "MCX: 0.0418%<br/>NSE: 0.001%",
  ],
  [
    "GST",
    "18% on (brokerage + SEBI + transaction)",
    "18% on (brokerage + SEBI + transaction)",
  ],
  ["SEBI charges", "Agri: ₹1 / crore<br/>Non-Agri: ₹10 / crore", "₹10 / crore"],
  [
    "Stamp charges",
    "0.002% or ₹200 / crore on buy side",
    "0.003% or ₹300 / crore on buy side",
  ],
];
export const accountOpeningHeaders = ["Type of account", "Charges"];
export const accountOpeningRows = [
  [
    "Online account",
    <button type="button" className="btn btn-success btn-sm">
      FREE
    </button>,
  ],
  [
    "Offline account",
    <button type="button" className="btn btn-success btn-sm">
      FREE
    </button>,
  ],
  ["NRI account (offline only)", "₹ 500"],
  ["Partnership, LLP, HUF, or Corporate accounts (offline only)", "₹ 500"],
];
export const amcHeaders = ["Value of holdings", "AMC"];
export const amcRows = [
  [
    "Up to ₹4 lakh",
    <button type="button" className="btn btn-success btn-sm">
      FREE
    </button>,
  ],
  ["₹4 lakh - ₹10 lakh", "₹ 100 per year, charged quarterly*"],
  ["Above ₹10 lakh", "₹ 300 per year, charged quarterly"],
];
export const addedChargesHeaders = ["Service", "Billing Frquency", "Charges"];
export const addedChargesRows = [
  ["Tickertape", "Monthly / Annual", "Free: 0 | Pro: 249/2399"],
  ["Smallcase", "Per transaction", "Buy & Invest More: 100 | SIP: 10"],
  ["Kite Connect", "Monthly", "Connect: 500 | Personal: Free"],
];
