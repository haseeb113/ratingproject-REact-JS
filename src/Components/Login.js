import { useContext, useState } from "react"
import { Forlogin } from "../Models/LoginFetch";
import Context from './../Store/Context';
import { useNavigate } from "react-router-dom";

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
                localStorage.setItem('data',result.UserDetails.FullName);
                Navigate('/');
            }
            else {
                Navigate('/login');
            }
        })
    }
    return (
        <div className="login">
            <form onSubmit={(e) => { handleLogin(e) }}>
                <label>Username: <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter Email" /></label><br />
                <label>Password: <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter Password" /></label><br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    )
}
export default Login