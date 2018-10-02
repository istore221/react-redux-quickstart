import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/common';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    comments: state.blog.comments,
    posts: state.blog.posts
  }};

const mapDispatchToProps = dispatch => bindActionCreators(blogActions, dispatch);


class Home extends Component {




  renderPosts(){

    const posts = this.props.posts.map((post) =>
      <li key={post.id}>
        {post.title}
      </li>
    );

    return (
      <ul>{posts}</ul>
    );


  }


  renderComments(){

    const comments = this.props.comments.map((comment) =>
      <li key={comment.id}>
        {comment.name}
      </li>
    );

    return (
      <ul>{comments}</ul>
    );


  }




  render() {
    return (
      <div>
        <h1>Home Page <Link to="/about">About</Link>  </h1>
        <h1>Posts</h1>
        {this.renderPosts()}
        <h1>Comments</h1>
        {this.renderComments()}
      </div>
    );
  }

  componentDidMount() {
    this.props.getPosts()
    this.props.getComments()
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
