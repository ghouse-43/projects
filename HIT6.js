import React, { useState } from 'react'
import './HIT.css';
function HIT6() {
  const [num,setNum]=useState(0);
  const incNm = () => {
    setNum(num+1);
  };
  const [num1,setNum1]=useState(0);
  const incNm1 = () => {
    setNum1(num1+1);
  };
  const [num2,setNum2]=useState(0);
  const incNm2 = () => {
    setNum2(num2+1);
  };
  const [num3,setNum3]=useState(0);
  const incNm3 = () => {
    setNum3(num3+1);
  };
  const [num4,setNum4]=useState(0);
  const incNm4 = () => {
    setNum4(num4+1);
  };
  const [num5,setNum5]=useState(0);
  const incNm5 = () => {
    setNum5(num+num1+num2+num3+num4);
  };
 
  return (
    <div className='HIT-6'>
      <h1>HIT-6 Form</h1>
      <div className='question'>
        <p>1.Where you have headaches,how often is the pain severe?</p> <div className='guess'>
        <button onClick={incNm}>Never</button><button onClick={incNm1}>Rarely</button><button onClick={incNm2}>Sometimes</button>
        <button onClick={incNm3}>Very Often</button><button onClick={incNm4}>Always</button></div>
      </div>
      <div className='question'>
        <p>2.How often do headaches limit your ability to do usual daily activites including Household work,work,school or social activities?</p> <div className='guess'>
        <button onClick={incNm}>Never</button><button onClick={incNm1}>Rarely</button><button onClick={incNm2}>Sometimes</button>
        <button onClick={incNm3}>Very Often</button><button onClick={incNm4}>Always</button></div>
      </div>
      <div className='question'>
        <p>3.When you have a headache,how often do you wish you could lie down?</p> <div className='guess'>
        <button onClick={incNm}>Never</button><button onClick={incNm1}>Rarely</button><button onClick={incNm2}>Sometimes</button>
        <button onClick={incNm3}>Very Often</button><button onClick={incNm4}>Always</button></div>
      </div>
      <div className='question'>
        <p>4.In the past four weeks,how often have you felt too tired to do work or daily activites because of headaches?</p> <div className='guess'>
        <button onClick={incNm}>Never</button><button onClick={incNm1}>Rarely</button><button onClick={incNm2}>Sometimes</button>
        <button onClick={incNm3}>Very Often</button><button onClick={incNm4}>Always</button></div>
      </div>
      <div className='question'>
        <p>5.In the past four weeks,how often have you felt too fed up or irritated because of your headache?</p> <div className='guess'>
        <button onClick={incNm}>Never</button><button onClick={incNm1}>Rarely</button><button onClick={incNm2}>Sometimes</button>
        <button onClick={incNm3}>Very Often</button><button onClick={incNm4}>Always</button></div>
      </div>
      <div className='question'>
        <p>6.In the past four weeks,how often did headaches limit your ability to concentrate on work or daily activites?</p> <div className='guess'>
        <button onClick={incNm}>Never</button><button onClick={incNm1}>Rarely</button><button onClick={incNm2}>Sometimes</button>
        <button onClick={incNm3}>Very Often</button><button onClick={incNm4}>Always</button></div>
      </div><div className='show'>
      <input type='text'name='never' className='result' value={num} /><p className='answer'>Never</p></div>
      <div className='show'>
      <input type='text'name='rarely' className='result' value={num1}/><p className='answer'>Rarely</p></div>
      <div className='show'>
      <input type='text'name='sometimes' className='result' value={num2}/><p className='answer'>Sometimes</p></div>
      <div className='show'>
      <input type='text'name='very often' className='result' value={num3}/><p className='answer'>Very Often</p></div>
      <div className='show'>
      <input type='text'name='always' className='result' value={num4}/><p className='answer'>Always</p></div>
      <div className='show1'>
      <input type='text'name='result' className='result1' value={num5} /><button className='answer1' onClick={incNm5}>Total Score</button></div>
      <p className='indicate'>Higher Score indicate a greater impact on your life.<br/>Score range:36-78</p>
      <button className='download' >Download</button>
    </div>
  )
}

export default HIT6
