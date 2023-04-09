import RadioForm from '../Components/RadioForm.js'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const transportation = [
    { value: 'Bus', label: 'Bus' },
    { value: 'Metro', label: 'Metro' },
    { value: 'Own Two-wheeler', label: 'Own Two-wheeler' },
    { value: 'Own Car', label: 'Own Car' },
    { value: 'Walk / Bicycle', label: 'Walk / Bicycle' },
    { value: 'Auto', label: 'Auto' },
    { value: 'App based ride hailing cab services including Ola / Uber', label: 'App based ride hailing cab services including Ola / Uber' },
 
];

const distance = [
    { value: '< 5 km', label: '< 5 km' },
    { value: '5 - 10 km', label: '5 - 10 km' },
    { value: '10- 15 km', label: '10- 15 km' },
    { value: '15- 20 km', label: '15- 20 km' },
    { value: '20- 25 km', label: '20- 25 km' },
    { value: '> 25 km', label: '> 25 km' },
];
  



  function Home() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');


    const navigate = useNavigate();

    const changeStateHandler1 = (selected)=>{
        setSelectedOption1(selected);
    }
    const changeStateHandler2 = (selected)=>{
        setSelectedOption2(selected);
    }
    function handleClick() {
        navigate("/page2", { state: { prop1: selectedOption1, prop2: selectedOption2 } });
      }

      
    return (
      <div className="container mx-auto" style={{ maxWidth: '600px' }}>
        <h1 className="py-1"> Respondent Travel profile </h1>
        <section className="py-5">
            <h5>Q1: What is your most frequently used means of travel from your home to work location?</h5>
          <RadioForm options={transportation} changeStateHandler={changeStateHandler1} />
        </section>

        <section className="py-5">
            <h5>Q2: What is the total distance between your home and workplace?</h5>
          <RadioForm options={distance} changeStateHandler={changeStateHandler2} />
        </section>
        <button class="btn btn-primary" type="submit" onClick={handleClick}>Submit</button>
      </div>
    );
  }
  export default Home;
  