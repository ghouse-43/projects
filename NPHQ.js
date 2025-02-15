import React from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import './NPHQ.css';
function NPHQ() {
  return (
    <div className="NPHQ">
     <h1>NPHQ FORM</h1>
     <div className='box'>
     <h2>Headache Questionnaire</h2>
      <div className='Text'>
        <p>At what age did you have a first Headache</p>
        <TextField className="standard-basic"  variant="standard" /></div>
        <div className='Text'>
        <p>What year did your current headache begin:</p>
        <TextField className="standard-basic"  variant="standard" /></div>
        <div className='Text'>
        <p>What was your last Headache:</p>
        <TextField className="standard-basic"  variant="standard" /></div>
      <div className='Text'>
        <p>Are you ever Free of pain completely?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <div className='Text'>
        <p>Do you have any one type of headache?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <div className='Text'>
        <p>If yes Describe them separately:</p>
        <TextField className="standard-basic"  variant="standard" /></div>
        <div className='Text'>
        <p>How many Headaches would you have each month:</p>
        <TextField className="standard-basic"  variant="standard" /></div>
        <div className='para'>
        <p >How would you describe the pain of your most serious headache(circle one or several):</p>
        <div className='circle'>
        <i>Throbbing</i><i>pulsating</i><i>dull</i><i>aching</i><i>pressure-like</i><i>sharp</i><i>stabbing</i>
        </div>
        </div>
        <div className='Text'>
        <p>Do you have any warning signs before the start of headache?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <div className='Text'>
        <p>Have you ever treated for headache?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <div className='Text'>
        <p>What kind of Headache you told to have?</p>
        <TextField className="standard-basic"  variant="standard" /></div>
        <div className='para'>
        <p >Which of the foloowing medicines have you tried for your headache(circle):</p>
        <div className='circle'>
        <i>Anaprox</i><i>Codeine</i><i>Imitrex</i><i>Aspririn</i><i>Darvon</i><i>Relpax</i><i>Ultracet</i>
        </div>
        <div className='circle'>
        <i>Caferogot</i><i>Flexeril</i><i>Bufferin</i><i>Migranal</i><i>Percocet</i><i>Zecurity</i><i>Zomig</i>
        </div>
        </div>
        <div className='Text'>
        <p>List  all other medications you are taking for any reason:</p>
        <textarea></textarea></div>
      </div>
      <div className='box'>
       <h3>Migraine Disability Assessment:</h3>
       <div className='Text'>
        <p>Patient Name:</p>
        <TextField className="standard-basic"  variant="standard" />
        <p>Date:</p>
        <input type='date' className='date'/>
        </div>
        <p>This questionnaire is used to determine the level of pain and Disability caused by your headaches and helps doctor find the best treatment for you.<br/>
        <strong>INSTRUCTIONS:</strong> Please answer the following questions about all of your headaches over the last 3months.Write your answer in the box next to eah question.Write zero if you did not do the activity in the last 3 months.</p>
        <div className='Text'>
        <p>1.On how many days in the last 3months did you miss work or school because of your headaches?</p>
        <input type='text' name='text' className='input'/>
        </div>
        <div className='Text'>
        <p>2.How many days in the last 3 months was your productivity at work or school reduced by half or<br/> more because of your headaches?</p>
        <input type='text' name='text' className='input'/>
        </div>
        <div className='Text'>
        <p>3.On how many days in the last 3months did you not do household work because of&nbsp;&nbsp; your &nbsp;&nbsp;<br/>headaches?</p>
        <input type='text' name='text' className='input'/>
        </div>
        <div className='Text'>
        <p>4.How many days in the last 3months was your productivity in household work reduced to half or <br/>more beacuse of your headaches?</p>
        <input type='text' name='text' className='input'/>
        </div>
        <div className='Text'>
        <p>5.On how many days in the last 3months did you miss family,social or leisure activities becasue <br/>of your headaches?</p>
        <input type='text' name='text'className='input'/>
        </div>
        <div className='Text'>
        <p><strong>Add total number of days from question 1 to 5 :</strong></p>
        <input type='text' name='text' className='input'/>
        </div>
        <h4>During the past month:</h4>
        <div className='Text'>
        <p>1).Have you been bothered a lot i the last month by feeling sad,down,depressed?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <div className='Text'>
        <p>2.Have you been bothered a lot in the last month by aloss of interest or pleasure in your daily activities?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <div className='Text'>
        <p><strong>For Men:</strong>When was the last time you had more then five drinks in one day?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <div className='Text'>
        <p><strong>For Women:</strong>When was the last time you had more then five drinks in one day?</p>
      <Checkbox/><label className='check'>Yes</label>
      <Checkbox/><label className='check'>No</label>
        </div>
        <button className='submit'>Submit</button>
      </div>
    </div>
  )
}

export default NPHQ
