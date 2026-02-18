import React, { useState } from 'react';
import '../css/Lovejourney.css';
import blueedit from "../assets/blueedit.png"
import pinkimg from "../assets/pinkimg.png"
import Current from "../assets/Current.png"
import image from "../assets/image.png"
import school from "../assets/school.png"
import { useNavigate } from 'react-router-dom';



const milestones = [
  {
    id: 1,
    title: "School Days",
    x: 20, y: 15,
    icon: "🎒",
    image: school,
    message: " school days nalay oru happy ana days , epo kuda nanu nanichu packuran nanu first day una meet pannatha , alaga cute ta first bench la ukanthutu irrundha... nanu last bench la irrundha , apo neum nanu thaa christians so suma nanichu patha namba ona commite agiruvom nu , but adhu unmaiya nadackum nu ethir packela , any way idhu oru super ana good memorie"
  },
  {
    id: 2,
    title: "College Life",
    x: 80, y: 35,
    icon: "🎓",
    image: pinkimg,
    message: "namba college life pathi sollanum na , neum nanum ona college senthatay oru miracle thaa... indha day la thaa school la vida romba pesi palagunom , avalave oru happy ana days. en na namba ona bus la happya pesitu povom , just 15mins haa irrundhalum en life la unkuda irrundha happy ana days adhu"
  },
  {
    id: 3,
    title: "love starts",
    x: 30, y: 55,
    icon: "💕",
    image: blueedit,
    message: " namaba love pathi sollanum na  enacku una romba pudickum jemi pa , but college days la nanu una love pannuvan namba commite avom nu nanichathay ella , enacku pudicha oru best frienda ha thaa ne irrundha , ana oru difficult situation varum pothu thaa enackay puringichu . enacku una friend kum mella pudichu irrucku nu , life long unoda valanum nu thonuchii , sola pona namba life fa change panna oru day la adhu...?"
  },
  {
    id: 4,
    title: "Our Present",
    x: 75, y: 75,
    icon: "💍",
    image: Current,
    message: " namba present days haa pathi sollanum na apo apo nambalay romba sanda podurom,ena keta first mari nambalala meet panna mudiyela olunga pesa mudiyela,adhuvom ellama enga pasam irrucko anga thaana nariya sanda um irruckum,but after marriage namba life long happya irrupom and future la romba sanda poda mattom,because namba ona irrupom la..."
  },
  {
    id: 5,
    title: "Marriage",
    x: 45, y: 88, // Moved up from 92 to ensure visibility
    icon: "🏡",
    image: image,
    message: "Inda oru day kaga thaa nanum neum kathutu irruckom , kandipa 2029 or 2030 namacku god grace la marriage nadackum nu nanickeran , adhucku approm nambala yarum edhuvom solla mattanga namba happya sandoshama namba life long ona irruckelam pattu sariya , love you umma ..."
  }
];

const LoveMap = () => {
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState(null);

  const handleMarkerClick = (id, e) => {
    e.stopPropagation();
    setActiveId(activeId === id ? null : id);
  };

  const activeData = milestones.find(m => m.id === activeId);

  return (
    <div className="screen-container">
      <header className="header-area">
        <h1 className="main-title">Our Love Journey</h1>
      </header>
      
      <main className="map-area" onClick={() => setActiveId(null)}>
        <div className="map-scaler">
          
          <svg className="map-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Adjusted path to match the new 'Forever' point position */}
            <path 
              d="M20,15 C50,15 50,35 80,35 C100,35 60,55 30,55 C10,55 40,75 75,75 C90,75 65,88 45,88" 
              className="dashed-path" 
            />
          </svg>

          {milestones.map((m) => (
            <div
              key={m.id}
              className={`marker-container ${activeId === m.id ? 'active' : ''}`}
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              onClick={(e) => handleMarkerClick(m.id, e)}
            >
              <div className="marker-pin"><span>{m.icon}</span></div>
              <span className="marker-label">{m.title}</span>
            </div>
          ))}

          {activeId && (
            <div className="popup-card" onClick={(e) => e.stopPropagation()}>
              <img src={activeData.image} className="popup-img" alt="Memory" />
              <div className="popup-text">
                <h3>{activeData.title}</h3>
                <p>{activeData.message}</p>
                {/* New Pill-style Close Button at the bottom */}
                <button className="close-pill-btn" onClick={() => setActiveId(null)}>
                  Close
                </button>
              </div>
              
            </div>
          )}
          
        </div>
        <button className='btn'
        onClick={()=>{navigate("/quiz")}}
        > What Next...?</button>
        
      </main>
      
      
      <footer className="footer-area">
        <p>Created with Love ❤️</p>
      </footer>
    </div>
  );
};

export default LoveMap;