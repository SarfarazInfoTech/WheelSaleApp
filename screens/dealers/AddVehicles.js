import {View, Text, Button, Alert} from 'react-native';
import React from 'react';
import {VehiclesList} from '../services/UrlApi.js';

const AddVehicles = () => {
  const Vehicles = async () => {
    await fetch(`${VehiclesList}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(resData => {
        if (resData.status === 'S') {
          alert(resData.message);
          console.log(resData.categories);
          // alert(resData.dealers);
          // setMessage(resData.dealers)
        } else {
          alert(resData.message);
          setMessage(resData.message);
          setError(resData.status);
        }
      });
  };
  return (
    <View>
      <Button
        title="Subscription Plan"
        color={'#3d3d72'}
        onPress={
          () => Vehicles()
          // Alert.alert(
          //   'WheelSale',
          //   'To use this feature please buy Our subscription & Contact us.',
          //   [
          //     {
          //       text: 'Cancel',
          //       onPress: () => console.log('Cancel Pressed'),
          //       style: 'cancel',
          //     },
          //     {text: 'OK', onPress: () => console.log('OK Pressed')},
          //   ],
          // )
        }
      />
    </View>
  );
};

export default AddVehicles;
