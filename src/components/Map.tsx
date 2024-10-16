import React, { useState } from 'react';

interface MapMarker {
  id: number;
  name: string;
  description: string;
  x: number;
  y: number;
}

const Map: React.FC = () => {
  const [markers] = useState<MapMarker[]>([
    { id: 1, name: 'Main Entrance', description: 'Welcome to Denton Amusement Park!', x: 50, y: 100 },
    { id: 2, name: 'Wheelchair Friendly Path', description: 'Accessible pathway for wheelchairs.', x: 150, y: 200 },
    { id: 3, name: 'Aqua Rides', description: 'Enjoy the water rides!', x: 300, y: 250 },
    { id: 4, name: 'Sensory-Friendly Zone', description: 'Quiet and peaceful area for sensitive visitors.', x: 400, y: 300 },
  ]);

  const handleMarkerClick = (marker: MapMarker) => {
    alert(`${marker.name}: ${marker.description}`);
  };

  return (
    <div className="map-container">
      <h2>Park Map</h2>
      <div className="map">
        {markers.map(marker => (
          <div
            key={marker.id}
            className="map-marker"
            style={{ left: marker.x, top: marker.y }}
            onClick={() => handleMarkerClick(marker)}
          >
            {marker.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
