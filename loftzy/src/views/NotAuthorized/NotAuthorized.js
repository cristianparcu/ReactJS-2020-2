import React from "react";
import classes from "./NotAuthorized.css";
import {Card,CardContent,CardActions,Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/authentication" 
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  buttons:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    margin:'0 20%'
  }
});
 function NotAuthorized(props) {
  const inlineClasses = useStyles();

  return (
    <div className={classes.NotAuthorized}>
    <Card>
      <CardContent>
        No estas autorizado para ver esta pagina
      </CardContent>
      <CardActions>
      <div className={inlineClasses.buttons}>
      <Button>
      <Link to="/" className={classes.link}>
      Ir a inicio
      </Link>
       
      </Button>
      <Button onClick={props.onLogOut}>
      <Link to="/" className={classes.link}>
        log out
      </Link>
      </Button>
      </div>
     
      </CardActions>
    </Card>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch( actionCreators.logOut() )
  };
};

export default connect(null, mapDispatchToProps)(NotAuthorized)