import { ReactChild } from "react";
import { GList } from "../types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Props {
    google_list:GList[];
    
}

const Map_test: React.FunctionComponent<Props> = ({
    google_list
}) => {
    return(
        <div id="sample">
            <MapContainer>
            {google_list.map((trset) => (
            <Marker
            key={trset.hop_num}
            position={[trset.latitude, trset.longitude]}
            ></Marker>
            ))}
            </MapContainer>
        </div>
    );
};

export default Map_test;
