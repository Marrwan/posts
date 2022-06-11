import React from "react";
import axios from "axios";
import "./Posts.css";
import Post from "../../components/Post/Post";
import {NavLink} from "react-router-dom";

class Posts extends React.Component {
    state = {
        posts: [],
        // selectedPost: null
    };
    
    componentDidMount() {
        console.log(this.props);
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({ posts: response.data.slice(0, 10) });
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    postSelectedHandler = id => {
        this.setState({ selectedPost: id });
    };
    
    render() {
        let posts = <p style={{ textAlign: "center" }}>Loading...</p>;
        if (this.state.posts) {
        posts = this.state.posts.map(post => (
           <NavLink key={post.id} to={'/posts/' + post.id}>
            <Post
           
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
            />
            </NavLink>
        ));
        }
        return (
        <div>
            <section className="Posts">{posts}</section>
           
        </div>
        );
    }
}

export default Posts;