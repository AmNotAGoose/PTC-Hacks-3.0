import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'
const locations = [
  { id: 1, name: 'Location 1', position: [51.505, -0.09] },
  { id: 2, name: 'Location 2', position: [51.515, -0.1] },
  { id: 3, name: 'Location 3', position: [51.525, -0.11] },
];

const Map = () => {
  return (
    
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%', zIndex: 0}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;