import React from 'react';
import PasswordGenerator from '../../assets/passwordGenerator.png'
import '../css/Portfolio.css'
import Portfolio from '../../assets/portfolio1.png'
import Weather from '../../assets/weatherDashboard.png'
import ArtApi from '../../assets/project1.png'
import NoteTaker from '../../assets/noteTaker.png'
import TeamSpeak from '../../assets/teamSpeak.png'

export default function Blog() {
  return (
    <div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body ">
          <a href='https://hamzaramzanali.github.io/challenge-3-JS/' className='link'>
            <img src={PasswordGenerator} alt="Password Generator" className='passwordGeneratorImg'></img>
          </a>
          <p className='caption'>Password Generator</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='https://hamzaramzanali.github.io/challenge-2-portfolio/' className='link'>
            <img src={Portfolio} alt="First Portfolio" className='passwordGeneratorImg'></img>
          </a>
          <p className='caption'>First Portfolio</p>
        </div>
      </div>
    </div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='https://marianellag1.github.io/Explore-Art-Chicago/' className='link'>
            <img src={ArtApi} alt="Art Institute of Chicago Api" className='weatherImg'></img>
          </a>
          <p className='caption'>Art Institute of Chicago Api</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='https://hamzaramzanali.github.io/challenge-6-weather/' className='link'>
            <img src={Weather} alt="Weather Dashboard" className='weatherImg'></img>
          </a>
          <p className='caption'>Weather Dashboard</p>
        </div>
      </div>
    </div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='https://aqueous-plateau-30843.herokuapp.com/' className='link'>
            <img src={NoteTaker} alt="Note Taker" className='weatherImg'></img>
          </a>
          <p className='caption'>Note Taker</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='https://teamspeak-org.herokuapp.com/' className='link'>
            <img src={TeamSpeak} alt="Team Speak" className='weatherImg'></img>
          </a>
          <p className='caption'>TeamSpeak</p>
        </div>
      </div>
    </div>
    </div>
  );
}
