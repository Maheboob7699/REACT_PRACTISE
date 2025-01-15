
import './style.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <h1>Navbar</h1>
            <div className='navbar-section'>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/about"}>about</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar