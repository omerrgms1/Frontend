import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    // const handleClick = async (e) => {
    //     e.preventDefault()
    //     dispatch({ type: "LOGIN_START" })
    //     try {
    //         const res = await axios.post("/auth/login", credentials)
    //         dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
    //         navigate("/")
    //     } catch (err) {
    //         dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    //     }
    // }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("api/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            // Token'ı localStorage'a kaydet
            localStorage.setItem("token", res.data.details.accessToken);
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (<div className="login">
        <div className="lContainer">
            <input
                type="text"
                placeholder="Kullanıcı Adınız"
                id="username"
                onChange={handleChange}
                className="lInput"
            />
            <input
                type="password"
                placeholder="Şifreniz"
                id="password"
                onChange={handleChange}
                className="lInput"
            />
            <button disabled={loading} className="lButton" onClick={handleClick}>Giriş</button>
            <a href="/register" className="lButton">Hesabın Yok Mu?</a>
            {error && <span>{error.message}</span>}
        </div>
    </div>

    )
}

export default Login