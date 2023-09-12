import { useState, useEffect } from "react"
import { fetchAllPosts, deletePost } from "../API/ajaxHelpers"
import './AllPosts.css'
import { useNavigate } from 'react-router-dom'

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    function renderAllPosts() {
        return posts.map((post) => {
            return (
                <div key={post._id} className="each-post">
                    <h2 className="post-title">{post.title}</h2>
                    <h4 className="post-description">{post.description}</h4>
                    <h4 className="post-price">{post.price}</h4>
                    <h4 className="post-location">{post.location}</h4>
                    <h4 className="post-deliver">{post.willDeliver}</h4>
                    <button className="post-button" onClick={() => handleDelete(post._id)}>Delete</button>
                    <button className="post-button" onClick={() => navigate('/sendmessage')}>Send Message</button>
                </div>
            )
        })
    }

    useEffect(() => {
        async function allPostsHandler() {
            const result = await fetchAllPosts();
            setPosts(result.data.posts);
        } allPostsHandler();
    }, [])

    async function handleDelete(postId) {
        try {
            await deletePost(postId);
            const updatedPosts = await fetchAllPosts();
            setPosts(updatedPosts.data.posts);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="all-posts">
            {renderAllPosts()}
        </div>
    )
}