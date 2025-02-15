import React from 'react'
import './Main.css';
import {Facebook,Instagram,LinkedIn,Twitter} from '@mui/icons-material';

function Mainhome() {
  return (
    <div className='image' >
      <img src='https://iprospectcheck.com/wp-content/uploads/2020/01/healthcare-background-checks-1.jpg'  alt="doctor"/>
      <p> We are here to<br/> take care of your health</p>
      <div className='content'>Before your appointment,fill the HIT-6 form and NPHQ form and<br />bring your medical history</div>
      <button id='b'>MAKE AN APPOINTMENT</button>
      <div className='hour'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBFsdOeUhgVNacsNSHrlSbFpr0r1SgPHwU1w&s' alt="image"/>
        <div className='para'>24/7 Hours Service</div>
        <div className='para2'>We provide 24/7 hours serivce</div>
      </div>
      
      <div className='hour2'>
        <img src='https://t4.ftcdn.net/jpg/03/35/87/01/360_F_335870116_0ODNCQ3eRXwiIXCEFDQ6mKrKWCid8uay.jpg' alt="image"/>
        <div className='para'>Health <br/>Tips</div>
        <div className='para3'>Health tips makes our body more better than medicine</div>
      </div>
      <div className='health'>
        <h2>HEALTH TIPS</h2>
        <img src='https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/325253_2200-732x549.jpg' alt="health" />
        <ul >
          <li>be hydrated drink lots of water at least 8l of water everyday.</li><br/>
          <li>proper sleep:at least 8hours sleep.</li><br/>
          <li>avoid unwanted stress</li><br/>
          <li>maintain proper diet with plenty of fruits and vegetables.<br/>at least eat one fruit per day.</li><br/>
          <li>exercise for at least 20min per day ,weekly 1 hour.</li><br/>
           <li>eat almonds 2-3 during stress period.ex:exam time.</li><br/>
             <li> In case of sinus avoid cold drinks and direct exposure to cold air.</li><br/>
               <li>avoid areas with loud noises in case if you are in migrane.</li><br/>
         </ul>
      </div>
      <footer >
        <div>For any Queries Please Contact Us:</div>
        <div>91+8799322221</div>
        <div className='icons'><a href='https://www.facebook.com/' target='_blank'><Facebook/></a><a href='https://www.instagram.com/' target='_blank'><Instagram/></a><LinkedIn/><Twitter/></div>
      </footer>
    </div>
  )
}

export default Mainhome;
