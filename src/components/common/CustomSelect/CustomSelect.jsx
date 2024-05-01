import { useState } from 'react';
import './CustomSelect.css';


function CustomSelect({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='custom-select'>
      <div className='selected-option' onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </div>
      {isOpen && (
        <ul className='options'>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
