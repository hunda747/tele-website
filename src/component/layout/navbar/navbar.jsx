import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

import logo from "../../../assets/photo/tele.webp";

import {
  Phone,
  FmdGood,
  Sms,
  Email,
  Telegram,
  Facebook,
  Twitter,
  Shop,
  Search,
  MenuBook,
  MenuOutlined,
} from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import makeStyles from "@material-ui/styles/makeStyles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
});

export default function Navbar(params) {
  let currentlyHovering = false;
  const styles = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleHover() {
    currentlyHovering = true;
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  }

  const menu = [
    {
      id: 0,
      name: "cloud solutions",
      submenu: ["teleclou", "Partnership cloud solutions"],
    },
    {
      id: 1,
      name: "Online Services",
      submenu: [
        "telegebeya",
        "Online Service Request",
        "ecare",
        "DNS and webhosting",
      ],
    },
    {
      id: 2,
      name: "cloud solutions",
      submenu: ["teleclou", "Partnership cloud solutions"],
    },
  ];

  return (
    <div className="navbar">
      <div>
        <div className="top wrapper">
          <div className="left">
            <div className="social">
              <div className="icon">
                <Phone />
              </div>
              <span>+251-994/+251-980</span>
            </div>
            <div className="social">
              <div className="icon">
                <Email />
              </div>
              <span>994@ethionet.et</span>
            </div>
            <div className="social">
              <div className="icon">
                {" "}
                <Sms />{" "}
              </div>
              <span>8994</span>
            </div>{" "}
            <div className="social">
              <div className="icon">
                <FmdGood />
              </div>
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div className="social">
              <div className="icon">
                <Shop />
              </div>
              <span>My Ethiotel</span>
            </div>
            <div className="social">
              <div className="icon">
                <Telegram />
              </div>
            </div>
            <div className="social">
              <div className="icon">
                <Facebook />
              </div>
            </div>
            <div className="social">
              <div className="icon">
                <Twitter />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="search">
              <Search />
            </div>
            {/* <div className="select">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Amharic</MenuItem>
              </Select>
            </div> */}
          </div>
        </div>
        <div className="break"></div>
        <div className="bottom wrapper">
          <div
            className="left"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="Ethio telecom" />
          </div>
          <div className="right">
            <div className="mobileMenu">
              <MenuOutlined />
            </div>
            <ul className="menus">
              <li>telebirr</li>
              <li>Cloud solutions</li>
              <li>
                Online Services
                {/* <Submenu />{" "} */}
              </li>
              <li>Personal</li>
              <li>Business</li>
              <li>International</li>
              <li>Customer Service</li>
              <li>Company</li>
              {/* {menu.map((menu, index) => {
                return (
                  <li key={index}>
                    <div>
                      <Button
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        onMouseOver={handleClick}
                        onMouseLeave={handleCloseHover}
                      >
                        {menu.name}
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{
                          onMouseEnter: handleHover,
                          onMouseLeave: handleCloseHover,
                          style: { pointerEvents: "auto" },
                        }}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          horizontal: "left",
                          vertical: "bottom",
                        }}
                        PopoverClasses={{
                          root: styles.popOverRoot,
                        }}
                      >
                        {menu.submenu.map((sub, index) => {
                          console.log(sub);
                          return (
                            <MenuItem onClick={handleClose}>{sub}</MenuItem>
                          );
                        })}
                      </Menu>
                    </div>
                  </li>
                );
              })} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const Submenu = () => {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>Our Company</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Team</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Our Portfolio</a>
      </li>
    </ul>
  );
};
