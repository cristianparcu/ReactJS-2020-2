import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        title: "First Title",
        author: "Cristian",
        content: "Lorem ipsum dolor sit amet, consectetur "+
          "adipiscing elit, sed do eiusmod tempor incididunt "+
          "ut labore et dolore magna aliqua. Ut enim ad minim "+
          "veniam, quis nostrud exercitation ullamco laboris "+
          "nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Second Title",
        author: "Mike",
        content: "Duis aute irure dolor in reprehenderit in "+
        "voluptate velit esse cillum dolore eu fugiat nulla "+
        "pariatur. Excepteur sint occaecat cupidatat non proident, "+
        "sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Third Title",
        author: "Juan",
        content: "Sed ut perspiciatis unde omnis iste natus error "+
        "sit voluptatem accusantium doloremque laudantium, totam rem "+
        "aperiam, eaque ipsa quae ab illo inventore veritatis et quasi "+
        "architecto beatae vitae dicta sunt explicabo."
      },
      {
        title: "Forth Title",
        author: "Ana",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur "+
        "aut odit aut fugit, sed quia consequuntur magni dolores eos qui "+
        "ratione voluptatem sequi nesciunt."
      }
    ],
    openPostIndex: -1,
    newPostInfo: {
      title: "",
      author: "",
      content: ""
    }
  }

  render () {
    return(
      <div>
        <h1 className = "main-header">My posts</h1>
        {this.state.posts.map((post, postIndex) => this.renderPost(post, postIndex))}
        {this.renderOpenPost()}
        {this.renderNewPostForm()}
      </div>
    )
  }

  renderPost = (post, postIndex) => {
    return (
      <div className = "post" onClick = {this.openFullPost.bind(this, postIndex)}>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
      </div>
    )
  }

  openFullPost = (postIndex) => {
    this.setState({
      openPostIndex: postIndex
    })
  }

  renderOpenPost = () => {
    var openPostIndex = this.state.openPostIndex;
    var openPost;
    var postToRender = null;

    if (openPostIndex >= 0) {
      openPost = this.state.posts[openPostIndex];

      postToRender = (
        <div className = "full-post">
          <h2>{openPost.title}</h2>
          <p>{openPost.content}</p>
          <p className = "author-text">{openPost.author}</p>
        </div>
      )
    }

    return postToRender;
  }

  renderNewPostForm = () => {
    return(
        <table className = "new-post-form">
          <tbody>
            <tr>
              <td>
                <label>Post title</label>
              </td>
              <td>
                <input type="text" value={this.state.newPostInfo["title"]}
                  onChange={(event) => this.updateNewPostData(event, "title")}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Post Author</label>
              </td>
              <td>
                <input type="text" value={this.state.newPostInfo["author"]}
                  onChange = {(event) => this.updateNewPostData(event, 'author')}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Content</label>
              </td>
              <td>
                <textarea type="text" value={this.state.newPostInfo["content"]}
                  onChange = {(event) => this.updateNewPostData(event, 'content')}/>
              </td>
            </tr>
          </tbody>
          <tr>
            <td>
              <button onClick = {this.submitNewPost}>Add new Post</button>
            </td>
          </tr>
        </table>
    )
  }

  updateNewPostData = (event, type) => {
    var updatedNewPostInfo = {
      ...this.state.newPostInfo
    }

    updatedNewPostInfo[type] = event.target.value;

    this.setState({
      newPostInfo: updatedNewPostInfo
    });
  }

  submitNewPost = () => {
    var updatedPosts = [...this.state.posts];
    var newPostInfo = {...this.state.newPostInfo}

    updatedPosts.push(newPostInfo);

    this.setState({
      posts: updatedPosts,
      newPostInfo: {
        title: "",
        author: "",
        content: ""
      }
    })
  }
}

export default App;
