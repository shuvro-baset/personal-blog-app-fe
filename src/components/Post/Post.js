import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { deletePost, likePost } from '../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <Col md={4}>
            <div>
                <h2>  {post.title} </h2>
                <p> {post.message} </p>
                <p> {moment(post.createdAt).fromNow()} </p>
            </div>
            <div>
                <button onClick={() => dispatch(likePost(post._id))}><i className="fas fa-thumbs-up"> {post.likeCount} </i></button>
                <button onClick={() => dispatch(deletePost(post._id))}>delete</button>
                <Link to="/add-posts"><button onClick={() => setCurrentId(post._id)}><i className="fas fa-edit"></i></button></Link>
               
            </div>
        </Col>
    );
};

export default Post;