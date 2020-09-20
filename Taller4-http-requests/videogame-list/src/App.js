import React, { Component } from 'react';
import classes from './App.css';
import axios from 'axios'
import Card from './Components/Card/Card'

class App extends Component {

  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('./games.json')
      .then(res => {
        console.log(res)

        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }

  render() {

    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <Card title={post.title} image={post.URl} consoles={post.Consolas}></Card>
        )
      })
    ) : (
        <div>
          No postyet</div>
      )
    return (
      <body>
        <div className={classes['header']}>
         Upcoming next-gen Videogames
        </div>
        <div className={classes['App']}>
          <div className={classes['grid']}>
            {postList}
          </div>
        </div>
      </body>
    );
  }
}


export default App;
