import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../assets/images/websiteHeader.jpg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 24,
    color: "#f5f5f5"
  },
  title: {
    flexGrow: 1,
  },
  primaryLink: {
    color: "#f5f5f5",
    textDecoration: "none",
  },
  secondaryLink: {
    color: "black", 
    textDecoration: "none",
    fontSize: 24,
  },
  secondaryMenuItem: {
    color: "black",
    fontSize: 20
  }
}));

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#1e1e1e" }}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Link to="/" className={classes.primaryLink}>
              <div style={{ fontWeight: 600, fontSize: 32, color: "#f5f5f5"}}>
                Lane Anderson Art
              </div>
            </Link>
          </div>
          <div>
            <Link to="/" className={classes.primaryLink}>
              <Button className={classes.menuButton} color="inherit">
                Home
              </Button>
            </Link>
            <Link to="/about" className={classes.primaryLink}>
              <Button className={classes.menuButton} color="inherit">
                About
              </Button>
            </Link>
            <Button
              className={classes.menuButton}
              aria-controls="simple-menu"
              color="inherit"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Works
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              style={{ color: "blue"}}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Link to="/sculpture" className={classes.secondaryLink}>
                <MenuItem onClick={handleClose} className={classes.secondaryMenuItem}>Sculpture</MenuItem>
              </Link>
              <Link to="/illustration" className={classes.secondaryLink}>
                <MenuItem onClick={handleClose} className={classes.secondaryMenuItem}>Illustration</MenuItem>
              </Link>
              <Link to="/tattoo" className={classes.secondaryLink}>
                <MenuItem onClick={handleClose} className={classes.secondaryMenuItem}>Tattoo</MenuItem>
              </Link>
            </Menu>
            <Link to="/news" className={classes.primaryLink}>
              <Button color="inherit" className={classes.menuButton}>
                News
              </Button>
            </Link>
            <Link to="/contact" className={classes.primaryLink}>
              <Button color="inherit" className={classes.menuButton}>
                Contact
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
