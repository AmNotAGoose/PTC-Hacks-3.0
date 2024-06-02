import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Sidebar.css';
import { getAllFoods, getSuggestions, getVendor, getAllVendors } from '../../api'

const Sidebar = () => {
  const [elements, setElements] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [newFood, setNewFood] = useState('');
  const [vendors, setVendors] = useState([]);
  const [options, setOptions] = useState([])

  useEffect(() => {
    const initSidebar = async () => {
      let foods = await getAllFoods();
      // console.log(await getVendor(1));
      const allVendors = await getAllVendors();
      const newLocations = allVendors.map(vendor => ({
        id: vendor.vendorId,
        name: vendor.name
      }));
      setVendors(newLocations);

      let optionsArray = foods.map(food => ({
        value: food.name,
        label: food.name,
        details: food
      }));
      setOptions(optionsArray);
      console.log(foods)
    }
    initSidebar();
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
      const suggestions = await getSuggestions({newFood: newFood});
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
            {element[2].isLocal ? "This food is produced locally!" : "This food is not produced locally."}
          </p>
          <p>
            {element[2].localReplacements.length === 0 ? 
              (element[2].isLocal ? null : "No local food alternatives at this moment.") : 
              "Local alternatives: " + element[2].localReplacements.join(" or ")}
          </p>
          <p>            
            {element[2].vendors.length !== 0 ? "You can buy this locally at: " + element[2].vendors.map((vendor) => {
              let foundVendor = vendors.find(v => v.id == vendor);
              console.log(foundVendor);
              return foundVendor ? foundVendor.name : null;
            }).filter(info => info !== null).join(', ')
             : null}</p>
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
