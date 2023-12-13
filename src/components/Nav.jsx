import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../assets";
import { logout, onUserState } from "../api/firebase";
import UserDatas from "./UserDatas";

function Nav(props) {
  const location = useLocation();
  const [user, setUser] = useState();

  const handleLogout = () => {
    logout().then(setUser);
  };

  useEffect(() => {
    onUserState((user) => {
      setUser(user);
    });
  }, []);

  return (
    <HeaderContainer>
      <Link to="/">
        <h1 className="logo">
          <img src={Logo} />
        </h1>
      </Link>

      <nav>
        <ul className="gnb_list">
          <li className="gnb_item">
            <Link to="/allproducts">All</Link>
          </li>

          <li className="gnb_item">
            <Link to="/Facial">Facial</Link>
          </li>

          <li className="gnb_item">
            <Link to="/Hand">Hand</Link>
          </li>

          <li className="gnb_item">
            <Link to="/LifeStyle">Life Style</Link>
          </li>
        </ul>

        <ul className="menu-list">
          {user ? (
            <>
              {user && <UserDatas user={user} />}
              <li>
                <Link to={`${location.pathname}`} onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" onClick>Login</Link>
            </li>
          )}
          <li>
            <Link to="/like">Like</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  a {
    font-size: 16px;
    color: #222;
    text-decoration: none;
    font-weight: 500;
    .logo {
      width: 50px;
      align-items: center;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 150px;
    .gnb_list {
      display: flex;
      gap: 72px;
    }
  }
  .menu-list {
    display: flex;
    margin-left: 72px;
    gap: 20px;
    align-items: center;
  }
`;
export default Nav;
