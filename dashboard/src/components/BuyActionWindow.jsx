import React, { useContext, useState } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBuyClick = async () => {
    try {
      setErrorMessage("");
      setIsSubmitting(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode,
        },
      );

      window.dispatchEvent(
        new CustomEvent("orders:changed", { detail: response.data }),
      );
      window.dispatchEvent(
        new CustomEvent("holdings:changed", { detail: response.data }),
      );

      generalContext.closeBuyWindow();
    } catch (error) {
      console.error("Order request failed:", error);
      setErrorMessage(error.response?.data?.error || "Order request failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>{errorMessage || "Margin required ₹140.65"}</span>
        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing..." : mode === "SELL" ? "Sell" : "Buy"}
          </button>
          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
