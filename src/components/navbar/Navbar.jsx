import "./navbar.css";
import { Link,useNavigate  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login")
  }
  const handleRegister = () => {
    navigate("/register")
  }
  const handleLogOut = () => {
    // Kullanıcı bilgilerini localStorage'dan sil
    localStorage.removeItem('user');
    // Sayfayı yenile
    window.location.reload();
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none", }}>
          <span className="logo">Bungalov Kirala</span>
        </Link>
        {user ? user.username 
        && 
        <div className="navItems">
            <label>{user.username}</label> 
            <button className="navButton" onClick={handleLogOut}>Çıkış Yap</button>
          </div>
        : 
        (
          <div className="navItems">
            <button className="navButton" onClick={handleRegister}>Kayıt Ol</button>
            <button className="navButton" onClick={handleClick}>Giriş Yap</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;