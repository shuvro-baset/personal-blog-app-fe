import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Post from '../../components/Post/Post';

const AllPosts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    console.log(posts.length);
    return (
        <Container>
            <Row>
                {
                    posts.map(post => <Post
                        key={post._id}
                        post={post}
                        setCurrentId={setCurrentId}
                    >

                    </Post>)
                }
            </Row>
        </Container>
    );
};

export default AllPosts;