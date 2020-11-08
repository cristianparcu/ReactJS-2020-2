import React, { Component } from "react"
import Button from "@material-ui/core/Button";
import classes from "../NuevoPostF/NuevoPost.css";
import firebase from "firebase";
import axios from "axios";
import { connect } from 'react-redux';
import AppBar from "../../componentes/NavBar/NavBar";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import PostComplete from "../Foro/PostComplete";

const newList = [
    { name: "Menu", url: "/AdminMenu" },
    { name: "Residentes", url: "/AdminResidente" },
];
class NuevoPost extends Component {

    state = {
        posts: [],
        title: "",
        Topic: "",
        author: "",
        date: '',
        hour: '',
        id: 8,
    }

    componentDidMount() {
        axios.get("https://foroposts.firebaseio.com/.json").then((res) => {
            console.log(res)
            this.setState({
                posts: res.data,
            });
            console.log(this.state.posts.length)
        });

    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    };

    writeNewPost = () => {

        var d = new Date();

        var postsS = this.state.posts.length;

        var postData = {
            author: this.props.userName,
            id: postsS + 1,
            Topic: this.state.Topic,
            title: this.state.title,
            hour: d.getHours() + ":" + d.getMinutes(),
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
        console.log(this.state)
        this.setState({
            Topic: '',
            title: ''
        });
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map((post, i) => {
                return (
                    <React.Fragment>
                        <tr
                            className={classes["tr"]}
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
                        {postList}
                    </table>
                    <div className={classes.inputs}>
                        <input
                            className={classes.commentT}
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            placeholder="Titulo"></input>
                        <input
                            className={classes.addComment}
                            type="text"
                            name="Topic"
                            onChange={this.handleInput}
                            placeholder="Tema"></input>

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