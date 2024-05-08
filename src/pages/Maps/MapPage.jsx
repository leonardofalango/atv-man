import { Menu } from '../../components/Menu/Menu'
import style from './MapPage.module.css'
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const position = [-25.4249717, -49.272306]

const MapPage = () => {
    return(
        <>
      <Menu />

        <MapContainer center={position} zoom={20} scrollWheelZoom={true} className={style.maps}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </>
    )
}

export default MapPage