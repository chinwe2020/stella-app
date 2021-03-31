import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import  PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import './Map.css';

const containerStyle = {
  position: "relative",
  width: "100vw",
  height: "600px",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 39.8283,
        lng: -98.5795,
      },
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng)
        this.setState({ address });
        this.setState({ mapCenter: latLng })
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div id="GoogleMap">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Where in the world are you?",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Map
          google={this.props.google}
          zoom={4}
          containerStyle={containerStyle}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
        </Map>
      <Container>
      <Jumbotron>
        <div className="latlng">
          <h2>Your Coordinates Are: </h2>
          <p>Latitude: {this.state.mapCenter.lat}</p>
          <p>Longitude: {this.state.mapCenter.lng}</p>
        </div>
      </Jumbotron>
    </Container>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
