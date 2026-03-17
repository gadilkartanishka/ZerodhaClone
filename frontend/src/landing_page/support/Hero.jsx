import "./Hero.css";
function SupportPortalHeader() {
  return (
    <div className="support-portal">
      <div className="header-top">
        <h1>Support Portal</h1>
        <button className="my-tickets-btn">My tickets</button>
      </div>
      <div className="search-wrapper">
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <input
          type="text"
          className="support-search"
          placeholder="Search for an answer or browse help topics..."
        />
      </div>
    </div>
  );
}

export default SupportPortalHeader;
