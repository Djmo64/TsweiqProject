import React from 'react';
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import {Link} from 'react-router-dom'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';




const minuteSeconds =  60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};
const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };
const getTimeSeconds = time => (minuteSeconds - time / 1000) | 0;
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = time => (time / daySeconds) | 0;

 export default function Timer() {
    const date = new Date('May 2, 2021 03:30:00');
    const stratTime = Date.now() / 1000; 
    const endTime =  date.getTime()/1000;
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    

  return(
          <div className= "loginPage">
           
            
              <img className="loginPage-img" src={logo}/>
          <div className="circleTimer">
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#ff834f"]]}
        duration={daysDuration}
        
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#ff834f"]]}
        duration={daySeconds}
        
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#ff834f"]]}
        duration={hourSeconds}
        
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime(
            "minutes",
            getTimeMinutes(hourSeconds - elapsedTime / 1000)
          )
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#ff834f"]]}
       
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
      
    </div>
        
         
              
             
          </div>
  )
}
