import { useState } from "react";

function TeamMember({ img, memberName, position, bio }) {
  let [open, setOpen] = useState(false);
  let handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="team-member p-5 text-center">
      <img src={img} alt={memberName} className="member-image" />
      <div className="member-info mt-5">
        {" "}
        <h5 className="member-name">{memberName}</h5>
        <p>{position}</p>
        <span onClick={handleClick}>
          Bio <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
      {open && <p className="member-bio mt-3">{bio}</p>}
    </div>
  );
}

export default TeamMember;
