import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const VehiclesDetails = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.imageBox}>
        <View style={styles.image}>
          <Image
            source={{uri: ''}}
            style={{width: '100%', height: 260, backgroundColor: 'black'}}
          />
        </View>
      </View>
      <View style={{padding: 10, borderBottomColor: 'lightgray', borderBottomWidth: 1}}>
        <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>Jupiter (2001)</Text>
        <Text>2.0 Petrol Vali</Text>
        <Text style={{color: 'black', fontWeight: '500', fontSize: 23, paddingVertical: 15}}>20,000/-</Text>
      </View>
      {/* <Text>VehiclesDetails 8459687724</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  box: {},
  image: {},
  imageBox: {},
  card: {},
});
export default VehiclesDetails;
