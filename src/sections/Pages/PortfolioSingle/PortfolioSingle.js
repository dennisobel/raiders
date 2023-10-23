import React from 'react';
import './PortfolioSingle.css';

import { Lightbox, PageTitle, SidebarHeading } from '../../../components';
import { portfolio } from '../../../constants';

import { FaAngleDoubleRight } from 'react-icons/fa';

import { Link, useLocation } from 'react-router-dom';


  
const PortfolioSingle = () => { 

  const location = useLocation();  
  const portfolioSingle = location.state; 

  return (
    <>
      {/* Page Title */}
      <PageTitle title={'PORTFOLIO'} page={'portfolio single'} />

      <section className='portfolio-single'>

        <div className='portfolio-info'>

          <div className='intro'>

            {/* Portfollio Image */} 
            <div className='image'>
              <img src={portfolioSingle.image} alt='Blog' />
            </div>

            {/* Portfolio Details */}
            <div className='details'>

              {/* Category */}
              <div className='detail-item'>
                <h3>category:</h3>
                <p>{portfolioSingle.category}</p>
              </div>

              {/* Date */}
              <div className='detail-item'>
                <h3>date:</h3>
                <p>{portfolioSingle.date}</p>
              </div>

              {/* Tags */}
              <div className='detail-item'>
                <h3>tags:</h3>
                {/* Render tags */}
                {portfolioSingle.tags.map((tag, index) => {
                  return <p key={index}><span>{tag}</span></p>
                })}
              </div>

            </div>

          </div>

          <div className='content'>

            {/* Portfolio heading */}
            <h3 className='main-heading'>{portfolioSingle.title}</h3>

            {/* Portfolio Content */}
            {portfolioSingle.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

          </div>

          {/* Portfolio Image gallery */}
          <Lightbox images={portfolioSingle.gallery} className={'portfolio'} />
        
        </div> 

        <div className='portfolio-sidebar'> 
          {/* Sidebar heading */}
          <SidebarHeading title='all portfolio' />
          <div className='box-container'>
            {/* Render links to all portfolios */}
            {portfolio.map((gallery) => {
              return(
                <Link to={{
                    pathname: '/Portfolio/' + gallery.title,
                    }}     
                    location = {{gallery}}
                    state= {gallery}
                    key={gallery.id}>
                    <h3><FaAngleDoubleRight className='icon' />{gallery.title}</h3>
                </Link>
              )
            })
            }
          </div>
        </div> 

      </section> 
    </> 
  );
}

export default PortfolioSingle;
