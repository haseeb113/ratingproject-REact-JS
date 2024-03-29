import { useContext, useState } from "react"
import { Forlogin } from "../Models/LoginFetch";
import Context from './../Store/Context';
import { useNavigate } from "react-router-dom";
import '../Components/style.css';


const Login = () => {
    const { globalDispatch } = useContext(Context);
    const Navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  
    const handleLogin = (e) => {
        e.preventDefault();
     
        Forlogin({ email: email, password: password }, function (result) {
            console.log(result);
            if (result.Status === "Login Success") {
                globalDispatch({ type: 'TOKEN', data: { token: 'login' } });
                // localStorage.setItem('data',result.UserDetails.FullName);
                Navigate('/ProductGallery');
            }
            else {
               
                alert("Invalid Email,Password");
              
                Navigate('/login');
            }
        })
    }
    // const rendererror=(name)=>{
    //     name === error.name && (
    //         <div className="error">{error.message}</div>
    //     );
    // };
    return (
        <div>
        <div className="slider">
            <h3>Login Section</h3>
        </div>
            
            <div className="tabdiv">
            <form onSubmit={(e) => { handleLogin(e) }}>
               
                <label>Username: <input type="email" name="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter Email" required /></label><br />
               
                <label>Password: <input type="password" name="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter Password" required /></label><br />
               
                <input type="submit" value="LogIn" />
            </form>
        </div>
        </div>
    )
}
export default Login