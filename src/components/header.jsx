
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Logo from "../assets/images/websiteHeader.jpg"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20
  },
  title: {
    flexGrow: 1,
  },
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
      <AppBar position="static">
        <Toolbar>
          <div style={{flexGrow: 1}}>
          <img src={Logo} style={{width: 300, float: "left"}} />
          </div>
          <div>
          <Button className={classes.menuButton} color="inherit"><Typography>Contact</Typography></Button>
          <Button className={classes.menuButton} aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleClick}>
  <Typography>Works</Typography>
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
>
  <MenuItem onClick={handleClose}>Sculpture</MenuItem>
  <MenuItem onClick={handleClose}>Illustration</MenuItem>
  <MenuItem onClick={handleClose}>Tattoo</MenuItem>
</Menu>
          <Button color="inherit" className={classes.menuButton}><Typography>News</Typography></Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}