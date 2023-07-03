import { styled } from "styled-components"
import { Link, NavLink } from 'react-router-dom'

const NavBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    width: 90%;
`

const Logo = styled.em`
        color: #FFF;
        text-align: center;
        font-size: 50px;
        font-weight: bolder;
        letter-spacing: -4px;
        margin: 40px;
`
const Menu = styled.nav`
    display: flex;
    gap: 50px;

    .nav-notice, .nav-market, .nav-news {
        display: flex;
        width: 100px;
        padding: 10px 10px;
        justify-content: center;
        align-items: center;
        color: #FFF;
        font-size: 28px;
        font-family: Inter;
        font-weight: 900;
        letter-spacing: -1px;
    }

`

const User = styled.nav`
    display: flex;
    gap: 10px;

    .user-noti, .user-profile {
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.10);
        border: none;
        width: 52px;
        height: 52px;
    }

    .fa-solid {
        font-size: 20px;
        color: #fff;
    }
`



const Header = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo>Mule</Logo>
            </Link>
            <Menu>
                <NavLink to="/notice" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active": ""}>
                    <div className="nav-notice">Notice</div>
                </NavLink>
                <Link to="/market">
                    <div className="nav-market">Market</div>
                </Link>
                <Link to="/news">
                    <div className="nav-news">News</div>
                </Link>
            </Menu>
            <User>
                <button className="user-noti">
                    <i className="fa-solid fa-bell"></i>
                </button>
                <button className="user-profile">
                    <i className="fa-solid fa-user"></i>
                </button>
            </User>
        </NavBar>
    )
}

export default Header