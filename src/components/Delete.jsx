import { deletePost } from "../API/ajaxHelpers"
import { useNavigate } from "react-router-dom"

export default function Delete({ postId }) {
    const navigate = useNavigate();

    async function handleDelete() {
        const confirmation = window.confirm('Delete Post?');
        if (confirmation) {
            try {
                await deletePost(postId);
                navigate('/posts');
                alert('Post Deleted')
            } catch (error) {
                console.error('Could not delete post', error);
            }
        }
    }

    return (
        <button className="delete-button" onClick={handleDelete}>Delete</button>
    )
}