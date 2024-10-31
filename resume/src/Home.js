import './Home.css';
import picture from './rayapic2024.jpeg';
import React, { useState } from 'react';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return ( 
        <>
            <h1 className='myheading'>Hello World, I'm Misha!</h1>
            <div className='container'>
                <img src={picture} alt="Misha" 
                className={`image ${isLoaded ? 'loaded' : ''}`} onLoad={() => setIsLoaded(true)}/>
                <div className="description">
                    <p>Welcome to my personal webpage! I'm a recent Lancaster University Software Engineering graduate. Scroll down to know more about me!</p>
                </div>
            </div>
        </>
     );
}

export default Home;