import React,{Component} from 'react';
import classes from  './App.css';
import axios from 'axios';
import Team from './components/teamCard.js';
export default class App extends Component{
 state ={
   teams : []
 }

 componentDidMount(){
   axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League').then(res=> {
     const updatedTeams = res.data.teams;
     this.setState({
      teams: updatedTeams,
     });
   })
 }
 
 
  render(){
    let liga = this.state.teams.map((team)=><Team badge = {team.strTeamBadge} name={team.strTeam}/>);
    console.log(liga);
  return (
    <div className={classes.App}>
     <h1>Premier League</h1> 
      {liga}
    </div>
  )
 }
 
}

