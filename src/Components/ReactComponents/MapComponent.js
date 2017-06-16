import React from "react";
import axios from "axios";
import GoogleMapsComponent from "./GoogleMapComponent";

export default class LocationsAndDirections extends React.Component {

    mapConfig: undefined

    constructor (props) {
        super(props);
        this.state = {
            locationsLoaded: false
        };
    }

    fetchLocation () {
         axios.get("../../public/data/google-locations.json").then((response) => {
            this.mapConfig = {
                locations: response.data.Locations,
                mapCenterLat: response.data.CenterLatitude,
                mapCenterLong: response.data.CenterLongitude,
                mapDefaultZoom: response.data.Zoom,
            };
            this.setState({
                locationsLoaded: true
            });
         });
    }

    componentDidMount () {
        this.fetchLocation();
    }

    render () {
        return (
            <div>
                {this.state.locationsLoaded ? <GoogleMapsComponent mapConfig={this.mapConfig} buttonLabel="Directions to my location"/>:
                <div>Loading...</div>}
            </div>
        )
    }
}