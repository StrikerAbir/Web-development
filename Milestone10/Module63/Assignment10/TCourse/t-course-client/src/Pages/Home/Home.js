import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../Assets/images/course-video.mp4'
import './Home.css'

const Home = () => {
    return (
      <section className="home-container">
        <video autoPlay muted loop id="video-bg">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="title d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="fw-bold bebas-font text-white">
                <span className="orange-font">T</span>COURSE
              </h1>
              <h2 className="text-white">An easy online learning platform.</h2>
              <div className="d-flex justify-content-center mt-5">
                
                  <Link to='/courses'><button className='orangeBtn'>Start Learning</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Home;