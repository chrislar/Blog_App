import React,{useState} from 'react';
import Navigate from "../Components/Navigate";
import Logout from "../Components/Logout";
import { Posts } from "../Components/Posts";



function Admins() {
    
       /* const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        const handleTitleChange = e => {
            setTitle(e.target.value)
        }
        const handleContentChange = e => {
            setContent(e.target.value)
        }
        const handleSubmit = e => {
            e.preventDefault();
            const numberOfPost = Posts.length;
            const freshPost = {
                id: numberOfPost + 1,
                title: title,
                author: "Chris Lar",
                content: content,
                date: moment().format('MMMM DD YYYY, h:mm:ss a'),
                upvote: 0,
                downvote: 0,
            }
            Posts.push(freshPost)
        }
    }*/
    return (

        <>
            <Navigate />
            <Logout />
            <form className="container"  >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" name="title" placeholder="type your title"  required />
                </div>
                <div className="form-group" >
                    <label htmlFor="Content">Content</label>
                    <textarea className="form-control" name="content" placeholder="Type your post here"  required />
                </div>
                <div className="form-group" >
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block __web-inspector-hide-shortcut__"
                        value="Create New Post" variant="primary"
                    >Create New Post</button>
                </div>
            </form>

        </>




















    );
}
export default Admins;