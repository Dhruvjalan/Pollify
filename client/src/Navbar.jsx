import { Link  } from "react-router-dom"
import { useParams } from "react-router-dom";

const Navbar = ({userid}) => {
    return ( 
        <nav className="navbar">
            <h1>Pollify</h1>
            <div className='Links'>
            <Link to={`/`}>LogOut</Link>

            <Link to={`/${userid}/home`}>Home</Link>
            <Link to={`/${userid}/Search`}>Search</Link>
            
            <Link to={`/${userid}/create`} style={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>New Poll</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;