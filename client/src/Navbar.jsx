import { Link  } from "react-router-dom"
import { useParams } from "react-router-dom";

const Navbar = ({userid}) => {
    return ( 
        <nav className="navbar">
            <h1>Pollify</h1>
            <div className='Links'>
            <Link to={`/`}>LogOut</Link>

            <Link to={`/${userid}/home`}>Home</Link>
            <div class="theme-toggle">
                <label class="switch">
                <input type="checkbox" id="themeSwitch" />
                <span class="slider"></span>
                </label>
            </div>
            
                          
            </div>
        </nav>
     );
}
 
export default Navbar;