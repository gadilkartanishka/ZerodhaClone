import "./Team.css";
import TeamMember from "./TeamMember";
function Team() {
  return (
    <div className="container text-muted">
      <h3 className="text-center">People</h3>
      <div className="row p-5">
        <div className="col-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="founder-image mb-5"
          />
          <h5 className="mb-3">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-7 p-3">
          <p className="founder-info">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking
            industry.{" "}
          </p>
          <p className="founder-info">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="founder-info">Playing basketball is his zen.</p>
          <p className="founder-info">
            Connect on{" "}
            <a href="" className="founder-links">
              Homepage
            </a>{" "}
            /{" "}
            <a href="" className="founder-links">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" className="founder-links">
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="team-container">
        <TeamMember
          img="media/images/nikhilKamath.jpg"
          memberName="Nikhil Kamath"
          position="Co-founder & CFO"
          bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        />
        <TeamMember
          img="media/images/KailashNadh.jpg"
          memberName="Kailash Nadh"
          position="CTO"
          bio="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        />
        <TeamMember
          img="media/images/VenuMadhav.jpg"
          memberName="Venu Madhav"
          position="CCO"
          bio="Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
        />
        <TeamMember
          img="media/images/HananDelvi.jpg"
          memberName="Hanan Delvi"
          position="CCO"
          bio="We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."
        />
        <TeamMember
          img="media/images/SeemaPatil.jpg"
          memberName="Seema Patil"
          position="Director"
          bio="Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
        />
        <TeamMember
          img="media/images/karthikRangappa.jpg"
          memberName="Karthik Rangappa"
          position="Chief of Education"
          bio="Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        />
        <TeamMember
          img="media/images/AustinPrakesh.jpg"
          memberName="Austin Prakesh"
          position="Director Strategy"
          bio="Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
        />
      </div>
    </div>
  );
}

export default Team;
