import { useState } from 'react'
import { createPost } from '../API/ajaxHelpers'
import { useNavigate } from 'react-router-dom'
import './CreatePost.css'

export default function CreatePost({ loggedIn }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            await createPost(
                title,
                description,
                price,
                location,
                willDeliver
            );
        } catch (error) {
            console.error('Could not make post', error);
        }
        navigate('/posts');
    }

    return (
        <>
        {loggedIn ? (
            <div className='create-post'>
            <h1 className='create-header'>Create new post</h1>
            <form className="create-form" onSubmit={handleSubmit}>
                <label className='create-label'>
                    Title: {' '}
                    <input
                    className='create-input'
                    type="text"
                    name="title"
                    placeholder="Title of post"
                    required={true}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className='create-label'>
                    Description: {' '}
                    <input
                    className='create-input'
                    type="text"
                    name="description"
                    placeholder="Description"
                    required={true}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label className='create-label'>
                    Price: {' '}
                    <input
                    className='create-input'
                    type="text"
                    name="price"
                    placeholder="Price"
                    required={true}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label className='create-label'>
                    Location: {' '}
                    <input
                    className='create-input'
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label className='create-label'>
                    Will Deliver
                    <input
                    className='create-checkbox'
                    type="checkbox"
                    name="location"
                    value={willDeliver}
                    onChange={(e) => setWillDeliver(e.target.value)}
                    />
                </label>
                <button className="post-button">Create Post</button>
            </form>
        </div>
        ): (<h1>Please Login!</h1>)}
        </>     
    )
} 