import React from "react";

export default class GoogleMapsComponent extends React.Component {
    //class Variables
    directionsService: undefined
    directionsDisplay: undefined
    userLocation: undefined
    map: undefined
    marker: undefined

    constructor (props) {
        super(props);
        this.showDirections = this.showDirections.bind(this);
        this.mapInit = this.mapInit.bind(this);
        this.changeLocationOnMap = this.changeLocationOnMap.bind(this);
    }

    showDirections () {
        var renderLocationAndeDirection = userLocation => {
            var selectedOption = this.refs.selectedLocation.selectedOptions[0].dataset;
             this.directionsService.route({
                  origin: userLocation,
                  destination: new window.google.maps.LatLng(Number(selectedOption.lat), Number(selectedOption.long)),
                  travelMode: 'DRIVING'
                }, (response, status) => {
                  if (status === 'OK') {
                    this.directionsDisplay.setDirections(response);
                  }
                  if( status === "ZERO_RESULTS") {
                    alert("No results found!");
                  }
                });
        }
        if (navigator.geolocation) { //Checks if browser supports geolocation
            navigator.geolocation.getCurrentPosition((position) => {                                                              //This gets the
                var latitude = position.coords.latitude;                    //users current
                var longitude = position.coords.longitude;                 //location
                var userLocation = new window.google.maps.LatLng(latitude, longitude);
                renderLocationAndeDirection(userLocation);           
            });
        };
    }

    getDefaultLocation (locations) {
        let defaultLocationObject = locations.filter((location) => location.IsDefault),
            defaultLocation = {
            lat: Number(defaultLocationObject[0].Laltitude),
            lng: Number(defaultLocationObject[0].Longitude)
        };
        return defaultLocation;
    }

    changeLocationOnMap () {
        let selectedOptionLocation = this.refs.selectedLocation.selectedOptions[0].dataset;
        if (this.marker && this.marker.setMap) {
            this.marker.setMap(null);
        };
        this.marker = new window.google.maps.Marker({
            position: {lat: Number(selectedOptionLocation.lat),
                       lng: Number(selectedOptionLocation.long)},
            map: this.map
        });
        this.directionsDisplay.setMap(null);
        this.setDirections();
        this.map.panTo(this.marker.position);
    }

    setDirections () {
        this.directionsService = new window.google.maps.DirectionsService();
        this.directionsDisplay = new window.google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(this.map);
    }

    mapInit () {
        let defaultLocation = this.getDefaultLocation(this.props.mapConfig.locations);
        this.map = new window.google.maps.Map(document.getElementsByClassName('map')[0], {
          zoom: this.props.mapConfig.mapDefaultZoom,
          center: {lat: this.props.mapConfig.mapCenterLat,
                   lng: this.props.mapConfig.mapCenterLong}
        });
        this.marker = new window.google.maps.Marker({
          position: defaultLocation,
          map: this.map
        });
        this.setDirections();
    }

    componentDidMount () {
        this.mapInit();
    }

    render () {
            return (
                    <div className="full-height">
                        <form>
                            <fieldset>
                                <label>{this.props.buttonLabel}</label>
                                        <select ref="selectedLocation" onChange={this.changeLocationOnMap}>
                                            {this.props.mapConfig.locations.map((location,i) =>
                                                <option key={i} data-lat={location.Laltitude} 
                                                data-long={location.Longitude}
                                                >{location.Name}</option>
                                            )}
                                        </select>
                                <button type="button" onClick={this.showDirections}>{this.props.buttonLabel}</button>
                            </fieldset>
                        </form>
                        <div className="map">
                        </div>
                    </div>            
            );
    }
}