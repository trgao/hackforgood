import React, {useState} from 'react'
import {MarkerF, InfoWindowF} from '@react-google-maps/api';
import flag from "./flag.png"



const MenteeMarker = ({lat, lng}) => {
    const [popup, setPopUp] = useState(false);
    return (<>
    <MarkerF
        position={{
            lat: lat,
            lng: lng
        }}
        icon={flag}
        onClick = {() => setPopUp(true)}
    />
    {popup && <InfoWindowF
        position={{lat: lat, lng: lng}}
        >
        <div>
            <a href="./MentorPage">Click here to contact your mentor</a>
        </div>
        </InfoWindowF>}
    </>
    )
}

export default MenteeMarker;