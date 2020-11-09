import React, { Component } from "react";
import classes from "./NotAuthorized.css";
import {Card,CardContent,CardActions,Button} from '@material-ui/core/';
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/authentication" 
import { Link } from "react-router-dom";

class NotAuthorized extends Component {
  
  render(){
    return (
      <div className={classes.NotAuthorized}>
      <Card>
        <CardContent>
          No estas autorizado para ver esta pagina
        </CardContent>
        <CardActions>
        <div className={classes.buttons}>
        {this.renderButtons()}
        </div>
       
        </CardActions>
      </Card>
      </div>
    );
  }
 renderButtons = () =>{
    if(this.props.isUserLoggedin){
      return(
        <React.Fragment>
        <Button>
        <Link to="/" className={classes.link}>
        Ir a inicio
        </Link>
         
        </Button>
        <Button onClick={this.props.onLogOut}>
        <Link to="/" className={classes.link}>
          log out
        </Link>
        </Button>
        </React.Fragment>
      );
    }else{
      return(
        <React.Fragment>
        <Button>
        <Link to="/" className={classes.link}>
       Log In
        </Link>
         
        </Button>
       
        </React.Fragment>  
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch( actionCreators.logOut() ),

  };
};

export default connect(null, mapDispatchToProps)(NotAuthorized)