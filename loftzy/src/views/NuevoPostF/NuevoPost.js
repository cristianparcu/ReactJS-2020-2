import React, { Component } from "react"
import Button from "@material-ui/core/Button";
import classes from "../NuevoPostF/NuevoPost.css";
import firebase from "firebase";
import axios from "axios";


class NuevoPost extends Component {

    state = {
        posts: [],

        title: "",
        Topic: "",
        author: "Admin",
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

        var postsS=this.state.posts.length;

        var postData = {
            author: this.state.author,
            id: postsS+1,
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
        return (
            <div>
                <input
                    className={classes.comment}
                    type="text"
                    name="title"
                    onChange={this.handleInput}
                    placeholder="Titulo"></input>
                <input
                    className={classes.comment}
                    type="text"
                    name="Topic"
                    onChange={this.handleInput}
                    placeholder="Tema"></input>

                <Button m={2}
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={this.handleSubmit}
                >Agregar Tema</Button>
            </div>
        )
    }
}

export default NuevoPost;