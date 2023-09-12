import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendMessage } from '../API/ajaxHelpers'

export default function SendMessage({ loggedIn }) {
    const [content, setContent] = useState();
    const navigate = useNavigate();


    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await sendMessage(content);
        } catch (error) {
            console.error('Could not send message', error);
        }
        navigate('/messages')
    }

    return (
        <>
        {loggedIn ? (
            <div className='send-message'>
                <h1>Send Message</h1>
                <form className='send-message-form' onSubmit={handleSubmit}>
                    <label>
                        Message: {' '}
                        <input
                        className='send-message-input'
                        type='text'
                        name='message'
                        placeholder='Type message...'
                        required={true}
                        value={content}
                        onChange={(e) => setContent(e.target.value)} />
                    </label>
                </form>
            </div>
        ): (<h1>Please Login!</h1>)}
        </>
    )
}