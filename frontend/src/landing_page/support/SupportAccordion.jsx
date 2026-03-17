import "./SupportAccordion.css";

function SupportAccordion({ id, title, icon }) {
  const headingId = `heading-${id}`;
  const collapseId = `collapse-${id}`;
  const parentId = `accordion-${id}`;

  return (
    <div className="accordion" id={parentId}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={headingId}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded="false"
            aria-controls={collapseId}
          >
            <span className="icon">{icon}</span>
            <span>{title}</span>
            <i className="fa-solid fa-chevron-down chevron"></i>{" "}
          </button>
        </h2>

        <div
          id={collapseId}
          className="accordion-collapse collapse"
          aria-labelledby={headingId}
          data-bs-parent={`#${parentId}`}
        >
          <div className="accordion-body">Accordion content here...</div>
        </div>
      </div>
    </div>
  );
}

export default SupportAccordion;
