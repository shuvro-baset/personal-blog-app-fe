import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <Container>
                <h2>Latest Blogs</h2>

            <Row className="my-5">

                {
                    posts.slice(0,3).map(post => 
                        <Col md={4} key={post._id} >
                            <div className="shadow rounded">
                                <div>
                                    <img style={{'height': '200px'}} className="img-fluid w-100 rounded" src={post.selectedFile} alt="" />
                                </div>
                                <div className="p-4 text-center">
                                    <h6> {post.title}</h6>
                                    <p>{post.message.slice(0,100)}</p>
                                </div>
                                <div className="pb-2 d-flex justify-content-around">
                                    <i className="fas fa-thumbs-up"> {post.likeCount} </i>
                                    <Link to='/all-blogs'><button className="btn tech-button">See More</button></Link>
                                </div>
                            </div>
                        </Col>
                )}
            </Row>
        </Container>
    );
};

export default LatestBlogs;