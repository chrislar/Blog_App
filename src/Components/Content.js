import React from 'react';
import { Posts } from './Posts';
import ArticleImage from '../Components/ArticleImage';
import {Container} from 'react-bootstrap';

export default function Content() {
    const a_post = Posts[0]
    return (
        <Container className="article-content" style={{ backgroundColor: "red" }}>
            <h1> {a_post.title} </h1>
            <ArticleImage />
            <span className="author">{a_post.author}</span>
            {a_post.content}

            
        </Container>

    );
}