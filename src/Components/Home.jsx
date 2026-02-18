import cat from "../assets/cat.gif";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home({playMusic}) {

  const navigate = useNavigate();   // ✅ MUST be inside component

  return (
    <div className="home">
      <h1 className="title">Welcome Home, My Love 🤍</h1>
      <p className="subtitle">I made this little world just for you</p>

      <img src={cat} alt="cute bunny" className="home-bunny" />

      <p className="note">
        Every moment with you feels special.  
        Take a deep breath… there’s something beautiful waiting 💖
      </p>

      <button 
        className="start-btn" 
        onClick={() => {navigate("/valentine") 
          playMusic()
        } } // ✅ navigate here
      >
        Start From Here 💕
      </button>

      <p className="footer">Made with love by me 🤍</p>
    </div>
  );
}
