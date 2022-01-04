import moment from 'moment';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <Container>
                <h2 className="title-1">Latest Blogs</h2>

            <Row className="my-5">
                {/* showing latest Blogs */}
                {
                    posts.slice(0,3).map(post => 
                        <Col md={4} key={post._id} data-aos="zoom-in">
                            <div className="shadow rounded">
                                <div>
                                    <img style={{'height': '200px'}} className="img-fluid w-100 rounded" src={post.selectedFile} alt="" />
                                </div>
                                <div className="pt-2 d-flex justify-content-between">
                                    <small className="ms-2"><i className="fas fa-history"></i> {moment(post.createdAt).fromNow()}</small>
                                    <i className="mx-2 fas fa-thumbs-up"> {post.likeCount} </i>
                                </div>
                                <div className="p-4 text-center">
                                    <h6 className="title-2"> {post.title}</h6>
                                    <p className="desc">{post.message.slice(0,100)}</p>
                                </div>
                                <div className="pb-2">
                                    <Link to='/all-blogs'><button className="mx-4 btn tech-button">See More</button></Link>
                                </div>
                            </div>
                        </Col>
                )}
            </Row>
        </Container>
    );
};

export default LatestBlogs;