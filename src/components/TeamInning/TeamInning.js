import React from 'react';
import './TeamInning.css';


 
const TeamInning = (props) => {  

  // Destructuring props
  const {teamTitle, team} = props;

  return ( 

    <div className='team-innings'>

      {/* Team Innings Title */}
      <div className='title'>
        <h3>{teamTitle}</h3> {/* Team name */}
        <h3>{team.score}<span>({team.overs})</span></h3> {/* Team score and overs played */}
      </div>

      {/* Batting */}
      <div className='innings-item batting'>

        {/* Batting Sub-heading */}
        <div className='sub-heading'>
          <h3>batting</h3> {/* Heading for batting */}
          <div className='info-heading'>
            <h6>R</h6> {/* Runs */}
            <h6>B</h6> {/* Balls */}
            <h6>4s</h6> {/* Fours */}
            <h6>6s</h6> {/* Sixes */}
            <h6>SR</h6> {/* Strike Rate */}
          </div> 
        </div> 

        {/* Batting Content */}
        <div className='content'>
          {(team.batting).map((batter, index) => {
            return(
              <div className='batter item' key={index}>
                <div className='intro'>
                  <h3>{batter.player}</h3> {/* Batter's name */}
                  <h6>{batter.status}</h6> {/* Batter's status */}
                </div>
                <div className='details'>
                  <ul>
                    {(batter.stats).map((stat, index) => {
                      return <li key={index}>{stat}</li> /* Batter's statistics */
                    })}
                  </ul>
                </div>
              </div>
            )

          })}

        </div> 
      </div>

      
      {/* Render the section if extras exist */}
      {team.extras && (
        /* Inning Extras */
        <div className='innings-item extras'>
          <h3>Extras</h3> {/* Heading for extras */}
          <p>{team.extras}</p> {/* Displaying extras */}
        </div>
      )}

      {/* Render the section if less than 11 players have batted,  Otherwise, render null */}
      {team.batting.length === 11 ? null : (
        /* Players who did not bat */
        <div className='innings-item'>

          {/* Sub-heading for Players who did not bat */}
          <div className='sub-heading'>
            <h3>did not bat</h3>
          </div>

          {/* Displaying players who did not bat */}
          <div className='content'>
            {team.didNotBat.map((item, index) => (
              <div className='item' key={index}> {/* Player's name who did not bat */}
                <h3>{item}</h3>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Render the section If more than two players have batted, Otherwise render null */}
      {team.batting.length === 2 ? null : (
        /* Fall of Wickets Section */
        <div className='innings-item wickets-fall'>

          {/* Sub-heading for fall of wickets */}
          <div className='sub-heading'>
            <h3>Fall of wickets</h3>
          </div>

          {/* Displaying fall of wickets */}
          <div className='content'>
            {(team.fallOfWickets).map((item, index) => {
              return <h4 key={index}>{item.scoreAt} <span>({item.player}, {item.oversNo} ov),</span></h4> /* Displaying wicket details */
            })}
          </div>

        </div> 
      )}

      {/* Bowling */}
      <div className='innings-item bowling'>

        {/* Sub-heading for Bowling */}
        <div className='sub-heading'>
          <h3>bowling</h3>
          <div className='info-heading'>
            <h6>O</h6> {/* Overs */}
            <h6>M</h6> {/* Maidens */}
            <h6>R</h6> {/* Runs */}
            <h6>W</h6> {/* Wickets */}
            <h6>ECON</h6> {/* Economy */}
          </div>
        </div>

        {/* Bowling Content */}
        <div className='content'>
          {(team.bowling).map((bowler, index) => {
            return (
              <div className='item' key={index}>
                {/* Introduction section of Bowler */}
                <div className='intro'>
                  <h3>{bowler.player}</h3> {/* Bowler's name */}
                </div>
                {/* Details section of Bowler */}
                <div className='details'>
                  <ul>
                    <li>{bowler.overs}</li>  {/* Overs bowled by the bowler */}
                    {(bowler.stats).map((stat, index) => {
                      return <li key={index}>{stat}</li> /* Bowler's statistics */
                    })}
                  </ul>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </div>

  )
  
}

export default TeamInning;