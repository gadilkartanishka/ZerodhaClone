import "./PricingTable.css";

function PricingTable({ headers = [], rows = [] }) {
  return (
    <table className="pricing-table table table-borderless align-middle">
      <thead>
        <tr>
          {headers.map((head, i) => (
            <th key={i}>{head}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PricingTable;
