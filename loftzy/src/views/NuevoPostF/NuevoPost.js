import React, { Component } from "react"
import Button from "@material-ui/core/Button";
import classes from "../NuevoPostF/NuevoPost.css";
import firebase from "firebase";
import axios from "axios";
import { connect } from 'react-redux';
import AppBar from "../../componentes/NavBar/NavBar";
import { Redirect } from "react-router-dom";
import Spinner from "../../componentes/Spinner/Spinner"


const newList = [
    { name: "Menu", url: "/AdminMenu" },
    { name: "Residentes", url: "/AdminResidentes" },
];
class NuevoPost extends Component {

    state = {
        posts: [],
        title: "",
        Topic: "",
        author: "",
        date: '',
        hour: '',
        id: 0,
        redirect: false,
        loading: false,
    }

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
                    loading:false
                });
            });
        }, 1000);

    }

    handleInput = (e) => {

        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    };
    
    addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    writeNewPost = () => {

        var d = new Date();

        var postsS = this.state.posts.length;

        var postData = {
            author: this.props.userName,
            id: postsS + 1,
            Topic: this.state.Topic,
            title: this.state.title,
            hour: this.addZero(d.getHours()) + ":" + this.addZero(d.getMinutes()),
            date: d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear()
        };
        var newPostKey = firebase.database().ref().child(postsS).key;
        var updates = {};
        updates[newPostKey] = postData;

        firebase.database().ref().update(updates);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.writeNewPost()
        this.componentDidMount()
        this.setState({
            Topic: '',
            title: ''
        });
    }

    clickHandler(index) {
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
                <div className={classes.body}>
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
                    <div className={classes.inputs}>
                        <input
                            className={classes.commentT}
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            placeholder="Titulo"></input>
                        <textarea
                            className={classes.addComment}
                            type="text"
                            name="Topic"
                            onChange={this.handleInput}
                            placeholder="Tema"></textarea>

                        <Button m={2}
                            className={classes.button}
                            size="large"
                            variant="contained"
                            onClick={this.handleSubmit}
                        >Agregar Tema</Button>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.authenticationStore.userLoggedIn.userName
    }
}

export default connect(mapStateToProps, null)(NuevoPost);