import React from "react";
import GoogleMapsComponent from "./google-map-component";

export default class Map extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <GoogleMapsComponent data={this.props.data}/>
            </div>
        )
    }
}