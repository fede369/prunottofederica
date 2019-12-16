import React, { useState } from "react";
import MapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import CityPin from './CityPin';

var myLocation = [
  {
    "city": "Milan",
    "state": "Italy",
    "latitude": 45.464664,
    "longitude": 9.188540
  }]


const TOKEN =
  "pk.eyJ1IjoiZmVkZXJpY2FwcnVub3R0byIsImEiOiJjazNoeTRsNmswMmRjM25ucjBsenRxb2JoIn0.vnaSi7kbrHPt3c1gIMhH-w";

const geolocateStyle = {
  margin: "25px",
  padding: "0",
  float: "left"
};

const styles = {
  width: "100%",
  height: "100%",
};

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 53.80597100628836,
    longitude: 23.97208625669805,
    zoom: 3
  });
  const [popupInfo, setPopupInfo] = useState(null);

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport });

  const CityMarker = (city) => {
    return (
      <Marker latitude={city.latitude} longitude={city.longitude} >
        <CityPin size={20} onClick={() => setPopupInfo(city)} />
      </Marker>
    );
  };

  return (
    <div style={{ margin: "0", height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
        style={styles}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {myLocation.map(CityMarker)}

        {popupInfo ? <Popup
          tipSize={4}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}>
          <div>
            <h2 style={{ margin: "0", fontFamily: "Khula" }}>{myLocation[0].city}</h2>
            <p style={{ margin: "0", fontFamily: "Ubuntu" }}>I'm here</p>
          </div>
        </Popup> : null}
      </MapGL>
    </div>
  );
};

export default Map;
