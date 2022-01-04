import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Post from '../../components/Post/Post';

const AllPosts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    console.log(posts.length);
    return (
        <Container>
            <h1 className="text-center pt-3 title-1">My Blogs....</h1>
            <Row className="py-5">
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