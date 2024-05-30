// 로그인 했을 때 헤더

import './LoginHeader.module.css'
import HeaderLogo from '../images/logo.png'
import ProfileLogo from '../images/ic_profile.png'

function Header() {
  return (
    <div className="Header">
      <div className="Nav">
        <img className="HeaderLogo" src={HeaderLogo} alt="판다마켓 로고"></img>
        <p className="FreeBoard">자유게시판</p>
        <p className="UsedMarket">중고마켓</p>
      </div>
      <img src={ProfileLogo} alt="프로필 이미지" />
    </div>
  )
}

export default Header
