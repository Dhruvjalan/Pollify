import { Link  } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = ({user}) => {
    const navigate = useNavigate()
    const switchHandle = (e) => {
        if (e.target.checked) {
            document.body.setAttribute("data-theme", "dark");
            document.body.classList.add('dark-theme');
            // console.log('Dark')
            navigate(`../${user}/home/dark`)
        } else {
            document.body.removeAttribute("data-theme");
            document.body.classList.remove('dark-theme');

            // console.log('light')
            navigate(`../${user}/home/light`)
        }
    };

    
    return ( 
        <nav className="navbar d-flex flex-row">
            <h1>My. Dash</h1>
            <div className='Links'>
            <Link to={`/`} style={{background:'#01DFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',margin:'0 0.5rem', padding:'0.2rem 0.5rem' }}>LogOut</Link>

            <Link to={`/`} style={{background:'#01DFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',margin:'0 0.5rem', padding:'0.2rem 0.5rem' }}>Home</Link>
            </div>
            <div className="theme-toggle">
                <label className="switch">
                    <input type="checkbox" id="themeSwitch" onChange={switchHandle} />
                    <span className="slider"></span>
                </label>
            </div>
            
                          
            
        </nav>
        
     );
}
 
export default Navbar;