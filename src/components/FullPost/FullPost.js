import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        selectedPost: null
    }
    componentDidUpdate(){
        if(this.props.id ){
            if(!this.state.selectedPost || ( this.state.selectedPost && this.state.selectedPost.id !== this.props.id)){
            axios.get('/posts/' + this.props.id)
            .then(response => {
                this.setState({ selectedPost: response.data });
            })
        }
        
        }
    }
    deleteHandler = () => {
        axios.delete('/posts/' + this.state.selectedPost.id)
        .then(response => {
            console.log(response);
            this.setState({ selectedPost: null });
        })
    }

    render () {

        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
       
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
            if(this.state.selectedPost){
                post = (
                    <div className="FullPost">
                        <h1>{this.state.selectedPost.title}</h1>
                        <p>{this.state.selectedPost.body}</p>
                        <div className="Edit">
                        <button onClick={this.deleteHandler} className="Delete">Delete</button>
                    </div>
                    </div>
                );
            }
        }
        
        return post;
    }
}

export default FullPost;