import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Store/Context";
import '../Components/style.css';
const Header = () => {
    const { globalState, globalDispatch } = useContext(Context);
    const logout = () => {
        globalDispatch({ type: 'TOKEN', data: { token: '' } });
    }
    let isloggedIn = globalState?.token?.token;
    if (isloggedIn === undefined || isloggedIn === '') {
        return (
            <div className='navbar'>
                <Link to="/"><h1>Rating App</h1></Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Register</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
    else {
        return (
            <div className='navbar'>
                <Link to="/dashboard"><h1>Rating App</h1></Link>
                <nav>
                    <ul>
                        
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/ProductGallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={logout}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

}
export default Header;