import React from 'react';
import './App.css';
let studentInfo =[
  {
    name:'Alex',
    rollno:1,
    scores:{
      mathematics:90,
      science:75,
      english:65
    }
  },
  {
    name:'Ben',
    rollno:2,
    scores:{
      mathematics:90,
      science:75,
      english:65
  }
},
{
  name:'Cathy',
  rollno:3,
  scores:{
    mathematics:90,
    science:75,
    english:65
  }
},
{
  name:'Daisy',
  rollno:4,
  scores:{
    mathematics:90,
    science:75,
    english:65
}
},
{
  name:'Ema',
  rollno:4,
  scores:{
    mathematics:90,
    science:75,
    english:65
  }
},
{
  name:'Flora',
  rollno:4,
  scores:{
    mathematics:90,
    science:75,
    english:65
  }

}
];

function DisplayScores(){
  return studentInfo.map(student=>{
    return <div className="scoreCard" key={student.rollno}>
      
      <div className="card">
        
   <article>
          
       <h1>{student.name}</h1>
       <div className="scores">
        <div>Mathematics:{student.scores.mathematics}</div>
        <div>Science:{student.scores.science}</div>
        <div>English:{student.scores.english}</div>
      </div>
  </article>
      
      </div>
    </div>
   
  
  })
}
const App =function(){
  return(
    <div className="main-container">
      <div className="header">
        <h1>Score Cards</h1>
      </div>
      <div className="body-container">
      <div className="scorecard-container">
        
        {DisplayScores()}
        </div>
      </div>
      </div>
    
  )
}
export{App, DisplayScores}