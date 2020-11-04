import React from 'react';
import { posts } from './Posts';
import ArticleImage from '../Components/ArticleImage';
import {Container} from 'react-bootstrap';


export default function Content() {
    const a_post = posts[0]
    return (
        <Container className="article-content" >
            <h1> {a_post.title} </h1>
            <ArticleImage />
            <span className="Chris">{a_post.author}</span>
            {a_post.content}
            

            
        </Container>

    );
}