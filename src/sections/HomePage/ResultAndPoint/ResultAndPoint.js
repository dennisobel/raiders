import React from 'react';
import './ResultAndPoint.css';

import { Heading, PointTable } from '../../../components';
import { fixtures } from '../../../constants';
import { getTeamLogo, latestItems } from '../../../utils';

import { Link } from 'react-router-dom'; 

// Import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';  
import 'swiper/css/pagination';



const ResultAndPoint = () => {  

  // Get the latest results using the fixtures from the constants
  const latestResult = latestItems(fixtures);

  return (

    <section className='result-point linear-bg'>

      {/* Latest Result */}
      <div className='home-result'>

        {/* Section heading for latest result */}
        <Heading title={'Latest Result'} />

        <div className='result-slider'>
        <Swiper
          // Install Swiper modules
          modules={[Pagination, Autoplay]} 
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}>

          {latestResult.map((result) => {

            return (
              <SwiperSlide className='result-item' key={result.id}>
                {/* Link to the individual fixture */}
                <Link 
                  to={{
                    pathname: '/Fixtures/' + result.team1 + '-VS-' + result.team2,
                  }}
                  state={result}>

                  {/* Match number */}
                  <h6>{result.matchNo} Match</h6>

                  {/* Team results */}
                  <div className='intro'>

                    {/* Team-1 Result */}
                    <div className='team-result'>
                      <div className='name'>
                        <img src={getTeamLogo(result.team1)} alt='Event' /> {/* Team-1 Logo */}
                        <h3>{result.team1}</h3> {/* Team-1 Name */}
                      </div>
                      <div className='result'>
                        <h5>{result.team1Inning.score}</h5> {/* Team-1 Inning Score */}
                        <p>({result.team1Inning.overs})</p> {/* Team-1 Inning overs played */}
                      </div>
                    </div>

                    {/* Team-2 Result */}
                    <div className='team-result'>
                      <div className='result'>
                        <h5>{result.team2Inning.score}</h5> {/* Team-2 Inning Score */}
                        <p>({result.team2Inning.overs})</p> {/* Team-2 Inning Overs Played */}
                      </div>
                      <div className='name'>
                        <img src={getTeamLogo(result.team2)} alt='Event' /> {/* Team-2 Logo */}
                        <h3>{result.team2}</h3> {/* Team-2 Name */}
                      </div>
                    </div>

                  </div> 

                  {/* Fixture content */}
                  <div className='fixture-content'>
                    <div className='time'>{result.date} - {result.time}</div> {/* Date and Time of the fixture */}
                    <div className='venue'>{result.venue}</div> {/* Venue of the fixture */}
                    <div className='result'>{result.result}</div> {/* Result of the fixture */}
                  </div>

                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>

      </div>

      {/* Point Table */}
      <div className='point-table'>

        {/* Section heading for point table */}
        <Heading title={'point table'} />

        {/* Point Table component */}
        <PointTable />

      </div>

    </section>
  )
}

export default ResultAndPoint;