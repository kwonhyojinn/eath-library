import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../assets";
import { logout, onUserState } from "../api/firebase";
import UserDatas from "./UserDatas";
import MenuItem from "@mui/material/MenuItem";
import CategoryList from "./CategoryList";

function Nav(props) {
  const location = useLocation();
  const [user, setUser] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  useEffect(() => {
    onUserState((user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavContainer>
      <NavBox>
        <LogoBox to="/">
          <h1 className="logo">
            <img src={Logo} />
          </h1>
        </LogoBox>
        <NavList>
          <NavListItem className="left-item">
            <CategoryList />
          </NavListItem>
          <NavListItem className="right-item">
            {user && (
              <UserDatas user={user}>
                <MenuItem onClick={handleClose}>
                  <Link to="/like">찜하기</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/cart">장바구니</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/admin/new">상품 등록</Link>
                </MenuItem>
              </UserDatas>
            )}
            {user ? (
              <Link to={`${location.pathname}`} onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <Link to="/search">Search</Link>
          </NavListItem>
        </NavList>
      </NavBox>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f5f4ee;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 90px;
  z-index: 90;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;

const NavBox = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
  .logo {
    width: 50px;
    align-items: center;
  }
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 150px;
`;

const NavListItem = styled.div`
  display: flex;
  align-items: center;
  & > a {
    font-size: 18px;
    color: #222;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.18s;
  }
  &.left-item {
    gap: 72px;
  }
  &.right-item {
    gap: 20px;
    margin-left: 72px;
  }
`;

export default Nav;
