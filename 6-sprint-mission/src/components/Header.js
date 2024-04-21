import "./Header.css";
import HeaderLogo from "../images/logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="Nav">
        <img className="HeaderLogo" src={HeaderLogo} alt="판다마켓 로고"></img>
        <p className="자유게시판">자유게시판</p>
        <p className="중고마켓">중고마켓</p>
      </div>
      <button className="LoginButton">로그인</button>
    </div>
  );
}

export default Header;
