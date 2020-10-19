import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom"
import classes from "../Foro/PostComplete.css"
import Comentario from '../../componentes/Comentario/Comentario'

class PostComplete extends Component {

    state = {
        comments: [],
        comment: '',
        hour: '',
    }

    handleAddcomment = (comment) => {
        this.setState({
            comments: [...this.state.comments, comment]

        })
        console.log(this.state)
    }
    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.handletime()
        this.handleAddcomment(this.state.comment)
        console.log(this.state)
        this.setState({
            comment: '',
        });
    }
    handletime = ()=>
    {
        var d = new Date();
        this.setState({
            hour: d.getHours()+":"+d.getMinutes()
        })
    }
   
    render() {
        
        var post = this.props.post
        const comts = this.state.comments.map((comment, i) => {
            return (
                <Comentario comment={comment} hour={this.state.hour}></Comentario>
            )
        })

        return (
            <div className={classes['body']}>
                <h2 className={classes['title']}>{post.title}</h2>
                <p>{post.Topic}</p>
                {comts}
                <div className={classes['content']}>
                    <input
                        className={classes.comment}
                        type="text"
                        name="comment"
                        onChange={this.handleInput}
                        placeholder="Comentario"></input>
                    <Link to='/Foro'>
                        <Button m={2}
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={this.handleSubmit}
                        >Agregar Comentario</Button>
                    </Link>

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