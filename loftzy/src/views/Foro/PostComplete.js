import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom"
import classes from "../Foro/PostComplete.css"
import axios from "axios";
import Comentario from '../../componentes/Comentario/Comentario'
import firebase from 'firebase'

class PostComplete extends Component {

    state = {
        posts:[],
        comments: [],
        comment: '',
        hour: '',
        index:this.props.post.id-1,
    }


    componentDidMount() {
        

        axios.get("https://foroposts.firebaseio.com/"+this.state.index+".json").then((res) => {
        console.log(res)  
        this.setState({
            posts: res.data,
          });
        });

        axios.get("https://foroposts.firebaseio.com/"+this.state.index+"/Comments.json").then((res1)=>{
            console.log(res1)
            this.setState({
                comments: res1.data
            })
        })
        
      }

    handleAddcomment = () => {
        var d= new Date();
        var postsS
        if(this.state.comments==null){
             postsS=0;
        }else{
             postsS=this.state.comments.length;
        }
        

        var postData = {
            comment: this.state.comment,
            hour: d.getHours() + ":" + d.getMinutes(),
        };
        var newPostKey = firebase.database().ref().child(postsS).key;
        var updates = {};
        updates[this.state.index+"/Comments/"+newPostKey] = postData;

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
        
        const {comments}= this.state;
        const comts = comments?( comments.map((comment, i) => {
            return (
                <Comentario comment={comment.comment} hour={comment.hour}></Comentario>
            )
        })):
        (<p>lol</p>)

        return (
            <div className={classes['body']}>
                <h2 className={classes['title']}>{this.state.posts.title}</h2>
                <p>{this.state.posts.Topic}</p>
                {comts}
                <div className={classes['content']}>
                    <input
                        className={classes.comment}
                        type="text"
                        name="comment"
                        onChange={this.handleInput}
                        placeholder="Comentario"></input>
                        <Button className={classes['button']} m={2}
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={this.handleSubmit}
                        >Agregar Comentario</Button>
                    <Link to='/Foro'>
                        <Button m={2}
                            size="large"
                            color="primary"
                            variant="contained"
                        >Regresar</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(PostComplete); 