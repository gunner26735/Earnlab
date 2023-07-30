import "./home.css";


function Home(){

    return(
        <div className='home'>
            <div className="title">
                <p>Collab & Create Cool Videos</p>
                <p>By Sharing the Earnings Based on Contributions...</p>
                <a href="/user"><button className="btn btn-dark">Explore !</button></a>
            </div>
            <img src="High_five.png" className='imgur' ></img>
        </div>
    );
}

export default Home;