import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { getAllVendors } from '../../api';
import 'leaflet/dist/leaflet.css';
import './Map.css'

const Map = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const initMap = async () => {
      const allVendors = await getAllVendors();
      const newLocations = allVendors.map(vendor => ({
        id: vendor.vendorId,
        name: vendor.name,
        position: vendor.coords
      }));
      setLocations(newLocations);
    }
    initMap();
  }, []);

  const FitBounds = () => {
    const map = useMap();

    useEffect(() => {
      if (locations.length > 0) {
        const bounds = locations.map(location => location.position);
        map.fitBounds(bounds);
      }
    }, [map, locations]);

    return null;
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%', zIndex: 0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FitBounds />
      {locations.map((location) => (
        <Marker key={location.id} position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
