import styled from "styled-components"

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 35px;
  align-items: center;

  a {
    margin-left: 18px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      margin-left: 5px;
      font-size: 14.5px;
      font-family: sans-serif;
      font-weight: 900;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>首頁</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>搜尋</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>我的片單</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>原創</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>電影</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>影集</span>
        </a>
      </NavMenu>
      <UserImg src="https://0xzx.com/wp-content/uploads/2021/02/1612816276_405_elon-musk.jpg" />
    </Nav>
  )
}

export default Header
