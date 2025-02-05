import { Link  } from "react-router-dom"
import { useParams } from "react-router-dom";

const Navbar = ({userid}) => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Poll</h1>
            <div className='Links'>
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