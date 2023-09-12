import './NavBar.css'
import { Link } from"react-router-dom"

export default function NavBar({ loggedIn, setUser, setLoggedIn }) {

    return (
        <div className="navbar">
            {loggedIn ? (
                <>
                <Link className="navbar-link" to="/posts">Posts</Link>
                <Link className="navbar-link" to="/profile">Profile</Link>
                <Link className="navbar-link" to="/messages">Mailbox</Link>
                <Link className="navbar-link" to="/newpost">Create a Post</Link>
                <Link className="navbar-link" to="/" onClick={() => {
                    localStorage.removeItem('user token')
                    setUser('')
                    setLoggedIn('')
                }}>Log Out</Link>
                </>
            ): (
                <>
                <Link className="navbar-link" to="/login">Login</Link>
                <Link className="navbar-link" to="/posts">Posts</Link>
                <Link className="navbar-link" to="/search">Search</Link>
                </>
            )}
        </div>
    )
}
