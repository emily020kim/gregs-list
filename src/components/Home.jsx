import './Home.css'
import GregsListImage from '../assets/Gregslist.jpg'

export default function Home() {
    return (
        <>
        <div className="home-screen">
            <h1 className='home-header'>Shop and Sell</h1>
            <h3 className='home-comment'>Join us and be part of the Gregs List family!</h3>
        </div>
        <div className='home-image'>
            <img className="gregs-list" src={GregsListImage} alt="website logo" />
        </div>
        </>
    )
}