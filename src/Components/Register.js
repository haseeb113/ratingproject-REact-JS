import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Forsignup } from "../Models/LoginFetch";
import '../Components/style.css';

const Register = () => {
    const Navigate = useNavigate();
    const [Fname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [profession, setprofession] = useState('');
    const [gender, setgender] = useState('');
    const handlesignup = (e) => {
        e.preventDefault();
        Forsignup({ Fname: Fname, email: email, password: password, profession: profession, gender: gender }, function (result) {
            console.log(result);
            Navigate('/login');
        });
    }
    return (
        <div>
        <div className="slider">
            <h3>Registeration Section</h3>
        </div>
            
        <div className="tabdiv">
            
            <form onSubmit={handlesignup}>
                <label>FullName: <input type="text" value={Fname} onChange={(e) => { setfullname(e.target.value) }} placeholder="Enter Your Full Name" required/></label><br />
                <label>Email: <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter Your Email Id" required /></label><br />
                <label>Password: <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Choose a Password" required/></label><br />
                <label>Profession: <input type="text" value={profession} onChange={(e) => { setprofession(e.target.value) }} placeholder="Enter Your Profession" required/></label><br />
                <label htmlFor="gender">Gender:</label><br />
                <select value={gender} onChange={(e) => { setgender(e.target.value) }} required >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br />
                <input type="submit" value="Register Account" /> &nbsp;&nbsp;
                <Link to="/">Cancel</Link>
            </form>
        </div>
        </div>
    )
}
export default Register