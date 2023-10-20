import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";


export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  var lat =35.6844;
  var lng = 139.753;
  const place = { lng, lat };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'eQbQ1AOl97qRDt0iDIzZ';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [place.lng, place.lat],
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([lng,lat])
      .addTo(map.current);
  }, [place.lng, place.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
} 