import { useState, useEffect } from "react"
import { fetchMyData } from "../API/ajaxHelpers"
import './Profile.css'

export default function Profile({ loggedIn, user }) {
    const [posts, setPosts] = useState([]);

    function renderMyPosts() {
        return posts.map((post) => {
            return (
                <div key={post._id} className="profile-posts">
                    <h2 className="profile-title">{post.title}</h2>
                    <h4 className="profile-description">{post.description}</h4>
                    <h4 className="profile-price">{post.price}</h4>
                    <h4 className="profile-location">{post.location}</h4>
                    <h4 className="profile-deliver">{post.willDeliver}</h4>
                </div>
            )
        })
    }

    useEffect(() => {
        async function myPostsHandler() {
            const result = await fetchMyData();
            setPosts(result.data.posts);
        } myPostsHandler();
    }, [])
    
    return (
        <>
        <h1 className="profile-header">Hello, {user}!</h1>
        <h3 className="profile-comment">View all your past and current posts.</h3>
        <div className="profile">
            {posts.length > 0 && 
            renderMyPosts()}
        </div>
        </>
    )
}