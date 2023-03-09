import { Link } from "react-scroll";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

function Nav() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="Nav">
      <button onClick={() => setShowMenu(!showMenu)}>{showMenu ? <BiX /> : <BiMenu />}</button>

      <ul style={{display: showMenu ? "flex" : "none"}}>
        <li>
          <Link 
            activeClass="active"
            to="home" 
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'
          > Home</Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="cert"
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'> Certificates</Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="my_study"
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'> My Study</Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="contact" 
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'> Contact</Link>
        </li>
      </ul>
    </div>
  );
  
}
  
export default Nav;