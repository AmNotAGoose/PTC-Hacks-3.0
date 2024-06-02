import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Sidebar.css';
import { getAllFoods, getSuggestions } from '../../api'

const Sidebar = () => {
  const [elements, setElements] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [newFood, setNewFood] = useState('');
  const [options, setOptions] = useState([])

  useEffect(() => {
    const getOptions = async () => {
      let foods = await getAllFoods();
      let optionsArray = foods.map(food => ({
        value: food.name,
        label: food.name,
        details: food
      }));
      setOptions(optionsArray);
      console.log(foods)
    }
    getOptions();
    console.log('Component loaded for the first time');
  }, []);

  const handleAddElement = () => {
    if (selectedOption) {
      const selectedFood = options.find(option => option.value === selectedOption.value);
      setElements([...elements, [selectedFood.value, selectedFood.label, selectedFood.details]]);
      setSelectedOption(null);
    }
  };

  const handleSubmit = async () => {
    if (newFood) {
      const suggestions = await getSuggestions(newFood);
      console.log(suggestions)
      suggestions.message.content.split(", ").forEach(suggestion => {
        const suggestionFood = options.find(option => {if(option.value === suggestion){return option}});
        console.log(suggestionFood)
        if (suggestionFood) {
          setElements(prevElements => [...prevElements, [suggestionFood.value, suggestionFood.label, suggestionFood.details]]);
        }
      });
      setNewFood('');
    }
  };

  return (
    <div className="sidebar">
      {elements.map((element, index) => (
        <div key={index} className="sidebar-item">
          {element[0]}
          <p>
            {element[2].localReplacements.length === 0 ? 
              (element[2].isLocal ? "This food is produced locally!" : "No local food alternatives at this moment.") : 
              "Local alternatives: " + element[2].localReplacements.join(" or ")}
          </p>
        </div>
      ))}
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Select a food"
        className="select-dropdown"
      />
      <input 
        value={newFood}
        className='select-dropdown'
        onChange={(e) => setNewFood(e.target.value)} 
        placeholder='Or, type in a meal and load in the ingredients.'
      />
      <button onClick={handleAddElement}>Add Food</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Sidebar;
