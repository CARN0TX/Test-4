import React, { useState } from 'react';

function RadioForm({ options , changeStateHandler }) {

  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    changeStateHandler(event.target.value);
  }

  return (
    <form>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name="option"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}

      
    </form>
  );
}
export default RadioForm;


