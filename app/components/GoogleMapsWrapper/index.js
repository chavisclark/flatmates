import React, { Component, PropTypes, cloneElement } from 'react';
import { connect } from 'react-redux';
import { searchCity } from 'actions/stays';
import classNames from 'classnames/bind';
import styles from './map.css';

const cx = classNames.bind(styles);

const INITIAL_LOCATION = {
  address: 'e.g.   London, United Kingdom',
  position: {
    latitude: 51.5085300,
    longitude: -0.1257400
  }
};

const INITIAL_MAP_ZOOM_LEVEL = 8;

const ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
};

class GoogleMapsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
            isGeocodingError: false,
            foundAddress: INITIAL_LOCATION.address
    }
    this.handleSetLocation = this.handleSetLocation.bind(this);
    this.setMapElementReference =this.setMapElementReference.bind(this);
  }

  geocodeAddress(lat,lng) {
    const { searchCity } = this.props;
    let latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};

    this.geocoder.geocode({ 'location': latlng }, function handleResults(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        });
        searchCity(results[0].formatted_address)
        
        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        return;
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      });

      this.map.setCenter({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

      this.marker.setPosition({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

    }.bind(this));
  }

  handleSetLocation(event) {
    event.preventDefault();
    var address = event.target.value;
    this.geocodeAddress(address);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geocodeAddress(position.coords.latitude, position.coords.longitude);
      })
    }

    let mapElement = this.mapElement;

    this.map = new google.maps.Map(mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.geocoder = new google.maps.Geocoder();
  }

  setMapElementReference(mapElementReference) {
    this.mapElement = mapElementReference;
  }

  render() {
    let { foundAddress,
          isGeocodingError
        } = this.state;

    return (
      <div className={cx("container")}>
          { isGeocodingError ? 
             <p className={cx("address", "bg-danger")}>Location not found.</p> 
           : <p className={cx("address", "bg-info")}>{foundAddress}</p> 
          }
          {cloneElement(this.props.children, 
            {setLocation: this.handleSetLocation, 
              foundAddress: foundAddress})}
          <div className={cx("map")} ref={this.setMapElementReference}></div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, { searchCity })(GoogleMapsWrapper);

