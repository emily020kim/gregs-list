import { useState, useEffect } from 'react'
import { fetchMyData } from '../API/ajaxHelpers'

export default function Messages({ loggedIn, user }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function messagesHandler() {
            try {
                if (loggedIn) {
                    const result = await fetchMyData();
                    setMessages(result.data.messages);
                }
            } catch (error) {
                console.error("Couldn't handle data", error);
            }
        } messagesHandler();
    }, [])

    
    function renderFromMeMessages() {
        return messages
        .filter((message) => message.fromUser.username === user)
        .map((message) => {
            return (
                <div key={message._id} className='messages'>
                    <h2>{message.fromUser.username}</h2>
                    <h4>{message.post.title}</h4>
                    <h4>{message.content}</h4>
                </div>
            )
        })
    }

    function renderToMeMessages() {
        return messages
        .filter((message) => message.fromUser.username !== user)
        .map((message) => {
            return (
                <div key={message._id} className='messages'>
                    <h2>{message.fromUser.username}</h2>
                    <h4>{message.post.title}</h4>
                    <h4>{message.content}</h4>
                </div>
            )
        })
    }

    
    return (
        <>
            <div className='from-me-messages'>
                {renderFromMeMessages()}
            </div>
            <div className='to-me-messages'>
                {renderToMeMessages()}
            </div>
        </>
    )
}