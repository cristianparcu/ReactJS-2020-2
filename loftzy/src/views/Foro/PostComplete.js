import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom"
import classes from "../Foro/PostComplete.css"
import axios from "axios";
import Comentario from '../../componentes/Comentario/Comentario'
import AppBar from "../../componentes/NavBar/NavBar";
import firebase from 'firebase'
import Spinner from '../../componentes/Spinner/Spinner'
import { connect } from 'react-redux';

const newList = [
    { name: "Pago Administracion", url: "/RegPago" },
    { name: "Perfil", url: "/residenteIng" },
  ];
class PostComplete extends Component {

    state = {
        posts: [],
        comments: [],
        comment: '',
        hour: '',
        author:'',
       index: this.props.location.state.post.id - 1,
       loading:false,
    }


    componentDidMount() {

        console.log(this.props.location.state.post)
        this.getComments()
    }

    getComments(){
        this.setState({
            loading:true
        })
        setTimeout(() => {
            axios.get("https://foroposts.firebaseio.com/" + this.state.index + ".json").then((res) => {
            console.log(res)
            this.setState({
                posts: res.data,
            });
        });

        axios.get("https://foroposts.firebaseio.com/" + this.state.index + "/Comments.json").then((res1) => {
            console.log(res1)
            this.setState({
                comments: res1.data,
                loading:false
            })
        })
        }, 1000);

    }

    handleAddcomment = () => {
        var d = new Date();
        var postsS
        if (this.state.comments == null) {
            postsS = 0;
        } else {
            postsS = this.state.comments.length;
        }

        var postData = {
            comment: this.state.comment,
            hour: d.getHours() + ":" + d.getMinutes(),
            author:this.props.userName
        };
        var newPostKey = firebase.database().ref().child(postsS).key;
        var updates = {};
        updates[this.state.index + "/Comments/" + newPostKey] = postData;

        firebase.database().ref().update(updates);
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleAddcomment()
        this.componentDidMount()
        this.setState({
            comment: '',
        });
    }

    render() {

        const { comments } = this.state;
        const comts = comments ? (comments.map((comment, i) => {
            return (
                <Comentario name={comment.author} comment={comment.comment} hour={comment.hour}></Comentario>
            )
        })) :
            (<p>lol</p>)

        return (
            <div>
                <AppBar list={newList} />
                <div className={classes['body']}>
                    <h2 className={classes['title']}>{this.state.posts.title}</h2>
                    <p>{this.state.posts.Topic}</p>
                    {this.state.loading?<Spinner/>:comts}
                    <div className={classes['content']}>
                        <input
                            className={classes.comment}
                            type="text"
                            name="comment"
                            onChange={this.handleInput}
                            placeholder="Comentario"></input>
                        <div className={classes['buttons']}>
                        <Button className={classes['button']} m={2}
                            size="large"
                            variant="contained"
                            onClick={this.handleSubmit}
                        >Agregar Comentario</Button>
                        <Link to='/Foro' style={{ textDecoration: 'none', outline: 0 }}>
                            <Button className={classes['button']} m={2} 
                                size="large"
                                variant="contained"
                            >Regresar</Button>
                            </Link>
                        </div>
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

export default connect(mapStateToProps, null)(PostComplete); 