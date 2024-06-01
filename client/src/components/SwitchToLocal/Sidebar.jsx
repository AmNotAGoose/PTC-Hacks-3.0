import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Sidebar.css';
import {getAllFoods} from '../../api'

const Sidebar = () => {
  const [elements, setElements] = useState(["Element 1", "Element 2", "Element 3"]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 'Element 4', label: 'Element 4' },
    { value: 'Element 5', label: 'Element 5' },
    { value: 'Element 6', label: 'Element 6' }
  ])
  // const options = [
  //   { value: 'Element 4', label: 'Element 4' },
  //   { value: 'Element 5', label: 'Element 5' },
  //   { value: 'Element 6', label: 'Element 6' }
  // ];

  useEffect(() => {
    async function getOptions(){
      setOptions([await api.getAllFoods()]);
      // setOptions([
      //   { value: 'Element 4', label: 'Element 4' },
      //   { value: 'Element 5', label: 'Element 5' },
      //   { value: 'Element 6', label: 'Element 6' }
      // ]);
    } 
    getOptions;
    console.log('Component loaded for the first time');

  }, []);

  const handleAddElement = () => {
    if (selectedOption) {
      setElements([...elements, selectedOption.value]);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    
  };

  return (
    <div className="sidebar">
      {elements.map((element, index) => (
        <div key={index} className="sidebar-item">
          {element}
        </div>
      ))}
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Select an element"
        className="select-dropdown"
      />
      <button onClick={handleAddElement}>Add Element</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Sidebar;
