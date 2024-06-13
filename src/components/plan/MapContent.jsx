
import "./map.scss";
// components/Map.js
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from "next/image";

const MapContent = () => {
  useEffect(() => {
    // Fix leaflet's default icon issue with Next.js
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer center={[5.30563, 10.26528]} zoom={25} scrollWheelZoom={true} className="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[5.30563, 10.26528]}>
        <Popup>
          <div className="localisation">
            <Image src="/images/papaAfricain.png" width={50} height={50} alt="" />
              <div className="localContent">
                  <h3>Lieux du deuil</h3>
                  <p>
                     Nous ne sommes pas loin du marché.
                  </p>
              </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapContent;
