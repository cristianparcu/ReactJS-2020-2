import React, { Component } from "react";
import classes from "../Foro/Foro.css";
import axios from "axios";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import PostComplete from "./PostComplete";



class Foro extends Component {

  state = {
    posts: [],
    path: "",
    redirect: false,
    post: null,
  };
  componentDidMount() {
    axios.get("https://foroposts.firebaseio.com/.json").then((res) => {
    console.log(res)  
    this.setState({
        posts: res.data,
      });
    });
  }

  clickHandler(index) {
    console.log(index);
    this.setState({
      path: "/post/" + index,
      redirect: true,
      post: this.state.posts[index],
    });
  }
  prueba = () => {};

  render() {
    if (this.state.redirect) {
      return (
        <Router>
          <Route path="/Foro">
            <Foro />
          </Route>
          <Route
            path={this.state.path}
            exact
            render={() => <PostComplete post={this.state.post} />}
          />
          <Redirect to={this.state.path} />
        </Router>
      );
    } else if (this.state.redirect) {
      this.setState({
        redirect: false,
      });
    }
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post, i) => {
        return (
          <React.Fragment>
            <tr
              className={classes["tr"]}
              key={i}
              onClick={this.clickHandler.bind(this, i)}
            >
              <td className={classes["td"]}>
                <h4>{post.title}</h4>
              </td>
              <td className={classes["td"]}>
                <p>{post.date}</p>
              </td>
              <td className={classes["td"]}>
                <p>{post.hour}</p>
              </td>
              <td className={classes["td"]}>
                <p>{post.author}</p>
              </td>
            </tr>
          </React.Fragment>
        );
      })
    ) : (
      <div>No hay ningun post de discusion</div>
    );
    return (
      <div className={classes["body"]}>
        <h2 className={classes["title"]}>Foro Residencial</h2>
        <table className={classes["table"]}>
          <tr className={classes["tr"]}>
            <th className={classes["td"]}>Tema</th>
            <th className={classes["td"]}>Fecha</th>
            <th className={classes["td"]}>Hora</th>
            <th className={classes["td"]}>Autor</th>
          </tr>
          {postList}
        </table>
      </div>
    );
  }
}
export default Foro;
