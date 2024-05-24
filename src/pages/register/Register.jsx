import React, { useState } from "react";
import "./register.css"; // Özelleştirilmiş CSS dosyası
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
        phone: "", // Telefon alanı eklendi
        city: "", // Şehir alanı eklendi
        country: "", // Ülke alanı eklendi
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("api/auth/register", credentials);
            // Kayıt başarılıysa giriş sayfasına yönlendir
            navigate("/Login");
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register">
            <div className="rContainer">
                <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    id="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="text"
                    placeholder="Telefon"
                    id="phone"
                    value={credentials.phone}
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="text"
                    placeholder="Şehir"
                    id="city"
                    value={credentials.city}
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="text"
                    placeholder="Ülke"
                    id="country"
                    value={credentials.country}
                    onChange={handleChange}
                    className="rInput"
                />
                <button disabled={loading} className="rButton" onClick={handleClick}>
                    Kayıt Ol
                </button>
                <a href="/Login" className="rButton">
                    Hesabın Var mı?
                </a>
                {error && <span>{error}</span>}
            </div>
        </div>
    );
};

export default Register;
