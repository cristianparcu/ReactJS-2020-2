import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "../NavBarDrawer/NavBarDrawer";
import classes from "./NavBar.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/authentication" 
function NavBar(props) {
  const icon = <MenuIcon style={{ color: "#ffffff" }} />;
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className={classes.root}>
          <IconButton>
            <Drawer list={props.list} icon={icon} />
          </IconButton>
          <Typography variant="h6" className={classes.signOut}>
            Loftzy
          </Typography>

          <Button onClick={props.onLogOut}>
           <Link className={classes.link} to="/">
           Salir
           </Link>
              
           
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch( actionCreators.logOut() )
  };
};

export default connect(null, mapDispatchToProps)(NavBar)
