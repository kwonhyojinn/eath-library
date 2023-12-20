import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

function UserDatas({ user: { displayName }, children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <UserAccount>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        style={{
          minWidth: 0,
          padding: 0,
        }}
      >
        <span className="hidden">{displayName}</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </UserAccount>
  );
}

export default UserDatas;

const UserAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
