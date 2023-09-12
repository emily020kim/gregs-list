import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AllPosts from './AllPosts'
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'
import CreatePost from './CreatePost'
import Messages from './Messages'
import Profile from './Profile'
import SendMessage from './SendMessage'


export default function Main({ setLoggedIn, setUser, loggedIn, user }) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/posts' element={<AllPosts />} />

                <Route path='/messages' element={<Messages 
                loggedIn={loggedIn}
                user={user} />} />
                
                <Route path='/sendmessage' element={<SendMessage
                loggedIn={loggedIn}
                user={user} />} />

                <Route path='/profile' element={<Profile 
                loggedIn={loggedIn}
                user={user} />} />

                <Route path='/login' element={<LogInForm 
                setLoggedIn={setLoggedIn} 
                setUser={setUser} />} />

                <Route path='/register' element={<RegisterForm
                setLoggedIn={setLoggedIn} 
                setUser={setUser} />} />

                <Route path='/newpost' element={<CreatePost
                loggedIn={loggedIn} 
                user={user} />} />
            </Routes>
        </div>
    )
}