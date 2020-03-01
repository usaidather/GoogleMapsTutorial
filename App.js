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
  StatusBar,
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


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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