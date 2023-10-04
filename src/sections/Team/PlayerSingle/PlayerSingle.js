import React from 'react';
import './PlayerSingle.css';

import { PageTitle } from '../../../components';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { useLocation } from 'react-router-dom';



const PlayerSingle = () => { 
 
  const location = useLocation();  
  const player = location.state;

  const accounts = player.accounts;
  const personalInfo = player.personalInfo;
  const careerInfo = player.careerInfo;

  return ( 
    <>

      {/* Page title */}
      <PageTitle title={''} page={'player single'} />

      <section className='player-single'>      

        <div className='box-container'>

          {/* Player Introduction */}
          <div className='intro'>

            {/* Player Image */}
            <div className='image'>
              <img src={player.image} alt='Blog' />
            </div>

            {/* Player Details */}
            <div className='content'>
              <h3>{player.name}</h3> {/* Player Name */}
              <p>{player.title}</p> {/* Player Title */}
              {/* Social media icons */}
              <div className='icon-container'>
                <a className='icon' href={accounts.facebook}><FaFacebookF /></a> {/* Facebook Icon */}
                <a className='icon' href={accounts.linkedin}><FaLinkedin /></a> {/* LinkedIn Icon */}
                <a className='icon' href={accounts.twitter}><FaTwitter /></a> {/* Twitter Icon */}
                <a className='icon' href={accounts.instagram}><FaInstagram /></a> {/* Instagram Icon */}
              </div>
            </div>

          </div>

          {/* Player Information */}
          <div className='information'>

            {/* Personal Information */}
            <div className='info-item personal-info'>
              <h2>personal info</h2> {/* Personal Info Title */}
              <ul>
                <li><h5>Nationality:</h5><span>{personalInfo.nationality}</span></li> {/* Nationality */}
                <li><h5>Date of birth:</h5><span>{personalInfo.DOB}</span></li> {/* Date of Birth */}
                <li><h5>Height:</h5><span>{personalInfo.height}</span></li> {/* Height */}
                {/* <li><h5>Batting:</h5><span>{personalInfo.batting}</span></li> Batting Style */}
                {/* <li><h5>Bowling:</h5><span>{personalInfo.bowling}</span></li> Bowling Style */}
                <li><h5>Position:</h5><span>{personalInfo.position}</span></li> {/* Playing Position */}
              </ul>
            </div>

            {/* Career Information */}
            <div className='info-item career-info'>
              <h2>career info</h2> {/* Career Info Title */}
              <ul>
                <li><h5>Club Debut:</h5><span>{careerInfo.clubDebut}</span></li> {/* Club Debut */}
                {/* <li><h5>Current Club:</h5><span>{careerInfo.curClub}</span></li> Current Club */}
                {/* <li><h5>Previous Club:</h5><span>{careerInfo.prevClub}</span></li> Previous Club */}
                <li><h5>Matches:</h5><span>{careerInfo.matches}</span></li> {/* Matches Played */}
                {/* <li><h5>Run Scored:</h5><span>{careerInfo.runScored}</span></li> Runs Scored */}
                {/* <li><h5>Batting Average:</h5><span>{careerInfo.battingAvg}</span></li> Batting Average */}
                {/* <li><h5>100s/50s:</h5><span>{careerInfo.fullhalfcenturies}</span></li> Centuries/Half-centuries */}
                <li><h5>Top Score:</h5><span>{careerInfo.topScore}</span></li> {/* Top Score */}
                {/* <li><h5>Balls Bowled:</h5><span>{careerInfo.ballsbowled}</span></li> Balls Bowled */}
                {/* <li><h5>Wickets:</h5><span>{careerInfo.wickets}</span></li> Wickets Taken */}
                {/* <li><h5>Bowling Average:</h5><span>{careerInfo.bowlingAvg}</span></li> Bowling Average */}
                {/* <li><h5>Best Bowling:</h5><span>{careerInfo.bestBowling}</span></li> Best Bowling Figures */}
              </ul>
            </div>
 
          </div>

        </div>

        {/* Player About */}
        <div className='team-about'>
          <h4>Biography</h4> {/* Biography Title */}
          <p>{player.biography}</p> {/* Player Biography */}
        </div>

      </section>
    </>
  )
  
}

export default PlayerSingle;