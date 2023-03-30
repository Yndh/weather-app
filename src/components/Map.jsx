import "../styles/Map.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import googleMarker from "../icons/googleMarker.webp";
// --- ---------------------------------- ---

function Map() {
  // Berlin coordinates
  const [position, setPosition] = useState([52.51, 13.38]);

  const customIcon = new Icon({
    iconUrl: googleMarker,
    iconSize: [20, 35],
    iconAnchor: [10, 35],
    popupAnchor: [0, -40],
  });

  const mapClick = (event) => {
    const latlng = event.latlng;
    setPosition([latlng.lat, latlng.lng]);
    console.log(position);
  };

  function MyComponent() {
    const map = useMap();
    map.on("click", mapClick);
    return null;
  }

  return (
    <div className="map" style={{ zIndex: 0 }}>
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%", zIndex: 2 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/"  target="_blank">OpenStreetMap</a> contributors'
        />

        <Marker position={position} icon={customIcon}>
          <Popup>
            x: {position[0]}, z: {position[1]}
          </Popup>
        </Marker>

        <MyComponent />
      </MapContainer>
    </div>
  );
}
export default Map;
