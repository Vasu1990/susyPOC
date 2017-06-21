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
        let defaultLocationObject = locations.filter((location) => location.isDefault),
            defaultLocation = {
            lat: Number(defaultLocationObject[0].latitude),
            lng: Number(defaultLocationObject[0].longitude)
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
        let defaultLocation = this.getDefaultLocation(this.props.data.googleMap.locations);
        this.map = new window.google.maps.Map(document.getElementsByClassName('map')[0], {
          zoom: this.props.data.googleMap.zoom,
          center: {lat: this.props.data.googleMap.centerLatitude,
                   lng: this.props.data.googleMap.centerLongitude}
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
        console.log(this.props.data);
            return (
                    <div className="full-height">
                        <form>
                            <fieldset>
                                <label>{this.props.data.labels.dropDownLabel}</label>
                                        <select ref="selectedLocation" onChange={this.changeLocationOnMap}>
                                            {this.props.data.googleMap.locations.map((location,i) =>
                                                <option key={i} data-lat={location.latitude} 
                                                data-long={location.longitude}
                                                >{location.name}</option>
                                            )}
                                        </select>
                                <button type="button" onClick={this.showDirections}>{this.props.data.labels.buttonText}</button>
                            </fieldset>
                        </form>
                        <div className="map">
                        </div>
                    </div>            
            );
    }
}