import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import SectionTitle from '../SectionTitle/SectionTitle';
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t } = useTranslation();
  const position = [22.984564548209462, 91.18471210781772];
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <div className='container mx-auto px-8'>
      <SectionTitle title={t('location')} />
      <div className="flex justify-center items-center px-10">
        <MapContainer style={{ height: '300px', width: '1000px' }} center={position} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} >
            <Popup>
              We live in <br /> Begumgonj, Noakhali.
            </Popup>
          </Marker>

        </MapContainer>

      </div>
    </div>
  );
};

export default Map;