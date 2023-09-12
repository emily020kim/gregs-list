import { useState } from 'react'

export default function UpdatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    async function editPost({ id }) {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title: '',
                        description: '',
                        price: '',
                        location: '',
                        willDeliver: false
                    }
                })
            })
            const result = await response.json();
            console.log('update post', result);
            return result;
        } catch (error) {
            console.error('Uh oh, could not edit post', error);
        }
    }

    return (
        <div>
            <h2>Create new post</h2>
            <form onSubmit={editPost}>
                <label>
                    Title: {' '}
                    <input
                    type="text"
                    name="title"
                    placeholder="Title of post"
                    required={true}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Description: {' '}
                    <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    required={true}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    Price: {' '}
                    <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    required={true}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>
                    Location: {' '}
                    <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label>
                    Will Deliver
                    <input
                    type="checkbox"
                    name="location"
                    value={willDeliver}
                    onChange={(e) => setWillDeliver(e.target.value)}
                    />
                </label>
                <button className="post-button">Create Post</button>
            </form>
        </div>
    )
}