import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { deletePost, likePost } from '../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <Col md={6} className="py-4" data-aos="flip-up">
            <div>
                <img style={{'height': '300px'}} className="img-fluid my-2 rounded w-100" src={post.selectedFile} alt="" />
            </div>
            <div>
                <p> <i class="fas fa-history"></i> {moment(post.createdAt).fromNow()} </p>
                <h6 className="title-2"> {post.title} </h6>
                <p className="desc"> {post.message} </p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
                <button className="btn tech-button" onClick={() => dispatch(likePost(post._id))}><i className="fas fa-thumbs-up"> {post.likeCount} </i></button>
                <Link to="/add-blog"><button className="btn tech-button" onClick={() => setCurrentId(post._id)}><i className="fas fa-edit"></i></button></Link>
                <button className="btn tech-button" onClick={() => dispatch(deletePost(post._id))}>delete</button>
            </div>
        </Col>
    );
};

export default Post;