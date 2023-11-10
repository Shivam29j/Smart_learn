import React, { useState } from 'react';
import './css/Card.css'; // Create a separate CSS file for styling
import {marked} from 'marked'

const Card = ({ques,ans,c}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='head' style={{background: c}}>
                  <h2> Ques </h2>
                </div> 
                <div className="ques">
                    <div dangerouslySetInnerHTML={{ __html: marked(ques)}} />        
                    <div><p className='desc' style={{background: c}}>Click to view answer</p></div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className='head' style={{background: c}}>
                  <h2>Ans</h2>
                </div> 
                <div className="ans">
                  <div dangerouslySetInnerHTML={{ __html: marked(ans) }} />
                  <div><p className='desc' style={{background: c}}>Click to view question</p></div>
              </div>
              </div>
          </div>
    </div>
  );
};

export default Card;
