import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Map extends Component {
    static defaultProps = {
        center: {
          lat: -7.784624,
          lng: 110.357509
        },
        zoom: 15
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={-7.784624}
            lng={110.357509}
            text="Badan Kesbangpol"
          />
        </GoogleMapReact>
        
      </div>
        );
      }
    }

export default Map
