/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'

import { locations } from './Data/Data'
import CustomMarker from './source/CustomMarker'
import RNGooglePlaces from 'react-native-google-places';
import Geolocation from '@react-native-community/geolocation';



export default class App extends Component {

  getCurrentLocation(){
    Geolocation.getCurrentPosition(info => console.log(info))
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
		console.log(place);
		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }


  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity
          onPress={() => this.getCurrentLocation()}
        >
          <Text style = {{marginTop:40, padding: 30}} >Pick a location</Text>
        </TouchableOpacity>


        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 24.83073230,
            longitude: 67.10113298,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {
            locations.map(marker => (
              <Polygon fillColor = {'#A3BE80'}coordinates = {locations}/>

              // <Circle center={{latitude: marker.latitude, longitude: marker.longitude}} radius= {550}
              // fillColor = {'#A3BE80'} />
            ))
          }



          {/* <Heatmap points={locations} /> */}

          {/* {
        locations.map(marker => (
          <Marker
          coordinate = {{latitude: marker.latitude,
            longitude: marker.longitude}}
          >

          <CustomMarker item = {marker}/>
          </Marker>
        ))
      } */}

        </MapView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  map: {
    flex: 1
  }
})