import React, { useEffect, useState } from 'react';
import {  Col, Container,  Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';
import './AddPosts.css';

const AddPosts = ({ currentId, setCurrentId }) => {
    // set state for blog post data
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
  
    // getting post data
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  
    const clear = () => {
      setCurrentId(0);
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };
  
    // handling submit data 
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPost(postData));
      } else {
        dispatch(updatePost(currentId, postData));
      }
      clear();

    };

    return (
        <Container>
           <Row className="my-5 d-flex justify-content-center">
                <Col md={8}>
                    <h3 className="text-center title-1"> { currentId ? "Editing" : "Add"  } Blog </h3>
                    <form onSubmit={handleSubmit} className="form-div">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input name="title" type="text" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} className="form-control"  placeholder="Title" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea name="message" type="text" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} className="form-control"  placeholder="Message" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tag</label>
                            <input name="tags" type="text" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} className="form-control"  placeholder="Tags" required />
                        </div>
                        <div className="mb-3">
                            <FileBase type="file" className="form-control"  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                        </div>
                        <button type="submit" className="btn tech-button">Submit</button>
                    </form>
                </Col>
           </Row>
        </Container>
    );
};

export default AddPosts;