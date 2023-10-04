import React from 'react';
import './Counter.css';

import CountUp from 'react-countup';

import { counter } from '../../../constants';

 
 
const Counter = () => {
  
  return ( 

    <div className='counting'> 
      {/* Render each counter */}
      {counter.map((count) => {
        return (
          <div className='box' key={count.id}>
            <div className='icon'>{count.icon}</div> {/* Counter icon */}
            <div className='text'>
              <CountUp className='count' end={count.count} duration={3} suffix={'+'} /> {/* Animate the count */}
              <h3>{count.title}</h3> {/* Counter title */}
            </div>
          </div>
        );
      })}
    </div>

  );
}

export default Counter;