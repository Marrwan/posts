import React, { Component } from 'react';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';

import './FullPost.css';


function withParams(Component) {
    return props => <Component {...props} params={useParams()} navigate={useNavigate()} />;
  }

class FullPost extends Component {
    state = {
        selectedPost: null,
        error: false
    }
    componentDidMount(){
        let { id } = this.props.params;
        console.log(this.props)
        console.log({id})
        if(id ){
            if(id){
            axios.get('/posts/' + id)
            .then(response => {
                this.setState({ selectedPost: response.data });
            }).catch((error)=>{
                console.log(error.message);
                this.setState({error:true})
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
        let { id } = this.props.params;
        if(this.state.error){
        return post =  <p style={{textAlign: 'center'}}>Something went wrong!!!</p>;
        }
        if (id) {
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

export default withParams(FullPost);