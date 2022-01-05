import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, likePost } from '../../actions/posts';


const DashBoard = ({ setCurrentId }) => {
    // getting data
    const posts = useSelector((state) => state.posts);
    console.log(posts.length);

    // dispatch data
    const dispatch = useDispatch();

    return (
        <Container>
            <Row className="my-4">
                <h2 className="title-1">Welcome to Blog app</h2>
                <small className="title-2">Add New Blog from here <Link to="/add-blog" className="tech-button"> <i className="fas fa-plus-square">Add New Blog</i></Link> </small>
            </Row>
            <Row className="my-4">
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               posts.map((post, index) => 
                                <tr key={post._id}>
                                    <td>{index + 1}</td>
                                    <td> <img style={{'height': '80px', 'width': '120px'}} className="img-fluid" src={post.selectedFile} alt="" /> </td>
                                    <td>{post.title}</td>
                                    <td>
                                        <Link to="/add-blog"><button className="mx-2 btn tech-button" onClick={() => setCurrentId(post._id)}><i className="fas fa-edit"></i></button></Link>
                                        <button className="btn tech-button" onClick={() => dispatch(deletePost(post._id))}>delete</button>
                                    </td>
                                </tr>
                               
                                )
                           }
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default DashBoard;