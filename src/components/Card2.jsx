import React from 'react'
import Card from './Card'
import './css/Cards.css'
import data from '../Data/data.json'
const Card2 = ({subject}) => {
  const clr =["#ffaf00","#da2268", "#bb02ff"];
  let cnt = -1;
  return (
    <>  
    <div className='subject'>
    <h1>Object Oriented Programming</h1> 
     </div>
     <div className='cards'>
        {data["Object Oriented Programming"].map(({ques,ans})=>{
            cnt++;
            cnt%=3;
            return(<Card ques={ques} ans={ans} c={clr[cnt]}/>);
            }
        )}
    </div>
    </>

  )
}

export default Card2