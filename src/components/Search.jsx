import { useState, useEffect } from 'react'
import { fetchAllPosts } from '../API/ajaxHelpers'
import './Search.css'

export default function Search() {
    const [posts, setPosts] = useState([]);
    const [state, setState] = useState({
        query: '',
        list: []
    })

    const handleChange = async (e) => {
        const results = posts.data.posts.filter(post => {
            if (e.target.value === "") return posts
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({
            query: e.target.value,
            list: results
        })
    }

    useEffect(() => {
        async function allPostsHandler() {
            const result = await fetchAllPosts();
            setPosts(result);
        } allPostsHandler();
    }, [])

    return (
        <div className='searchbar'>
            <h1 className='search-header'>Search for a post!</h1>
            <form className='search-form'>
                <label className='search-label'> Search
                    <input className="search-input" onChange={handleChange} value={state.query} type="search" placeholder="Search for a post..." />
                </label>
            </form>
            <ul>
                {(state.query === '' ? "" : state.list.map(post => {
                    return <li key={post.title}>{post.title}</li>
                }))}
            </ul>
        </div>
    )
}
