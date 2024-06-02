import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Map from './Map';
import {getAllFoods} from '../../api'

const CommunityMap = () => {
    
  return (
    <div>
        <Sidebar/>
        <Map/>
    </div>
  );
};

export default CommunityMap;
