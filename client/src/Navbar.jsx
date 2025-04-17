import { Link  } from "react-router-dom"
import { useParams } from "react-router-dom";

const Navbar = ({userid}) => {
    return ( 
        <nav className="navbar d-flex flex-row">
            <h1>My. Dash</h1>
            <div className='Links'>
            <Link to={`/`} style={{background:'#01DFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',margin:'0 0.5rem', padding:'0.2rem 0.5rem' }}>LogOut</Link>

            <Link to={`/${userid}/home`} style={{background:'#01DFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',margin:'0 0.5rem', padding:'0.2rem 0.5rem' }}>Home</Link>
            </div>
            <div class="theme-toggle">
                <label class="switch">
                <input type="checkbox" id="themeSwitch" />
                <span class="slider"></span>
                </label>
            </div>
            
                          
            
        </nav>
     );
}
 
export default Navbar;