import React, { Component } from "react";
import classes from "../Foro/Foro.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Spinner from "../../componentes/Spinner/Spinner.js"
import AppBar from "../../componentes/NavBar/NavBar";

const newList = [
  { name: "Perfil", url: "/residenteIng" },
  { name: "Pago Administracion", url: "/RegPago" },
];
class Foro extends Component {

  state = {
    posts: [],
    path: "",
    redirect: false,
    post: null,
    loading: false,
  };
  componentDidMount() {
    this.getPost()
  }


  getPost() {
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      axios.get("https://foroposts.firebaseio.com/.json").then((res) => {
        this.setState({
          posts: res.data,
          loading: false
        });
      });
    }, 2000);
  }

  
  clickHandler(index) {
    console.log(index);
    this.setState({
      path: "/post/" + index,
      redirect: true,
      post: this.state.posts[index],
    });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={{
          pathname: this.state.path,
          state: { post: this.state.post }
        }} />
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
            <tbody>
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
            </tbody>
        );
      })
    ) : (
        <div>No hay ningun post de discusion</div>
      );
    return (
      <div>
        <AppBar list={newList} />

        <div className={classes["body"]}>
          <h2 className={classes["title"]}>Foro Residencial</h2>
          <table className={classes["table"]}>
            <tr className={classes["tr"]}>
              <th className={classes["td"]}>Tema</th>
              <th className={classes["td"]}>Fecha</th>
              <th className={classes["td"]}>Hora</th>
              <th className={classes["td"]}>Autor</th>
            </tr>
            {this.state.loading ? <Spinner /> : postList}
          </table>
        </div>
      </div>
    );

  }
}

export default Foro;
