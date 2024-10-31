import './Home.css';
import picture from './rayapic2024.jpeg';
const Home = () => {
    return ( 
        <>
            <h1 className='myheading'>Hello World, I'm Misha!</h1>
            <div className='image-content'>
            <img src={picture} alt="Misha" className="profile-image" />
                <div className="description">
                    <p>Welcome to my personal webpage! I'm a recent Lancaster University Software Engineering graduate. Scroll down to know more about me!</p>
                </div>
            </div>
        </>
     );
}

export default Home;