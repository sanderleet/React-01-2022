import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SendEmail from '../components/SendEmail'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,41]
});

L.Marker.prototype.options.icon = DefaultIcon;


function Map() {
    return (
    <div>
        <SendEmail />

        <MapContainer id="map" center={[59.43316108404135, 24.75134323472978]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[59.427207307909896, 24.722999165069503]}>
                <Popup>
                    Kristiine keskus <br /> 
                </Popup>
            </Marker>

            <Marker position={[59.42177703792974, 24.79243305100227]}>
                <Popup>
                    Ülemiste keskus <br /> 
                </Popup>
            </Marker>
        </MapContainer>

    </div>)
}

export default Map;