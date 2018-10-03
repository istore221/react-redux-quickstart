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

const HelloWorld = ({name}) => <div>{`Hi ${name}`}</div>


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };

  }


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

  onClick = () => {

    this.setState({
       counter: this.state.counter+=1
     });
  }





  render() {
    return (
      <div>
        <h1>Home Page <Link to="/about">About</Link>  </h1>
        {this.state.counter}
        <HelloWorld name="kalana" />
        <h1 onClick={this.onClick}>Posts</h1>
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
