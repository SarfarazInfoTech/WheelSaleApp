import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

const Connection = () => {
  const netInfo = useNetInfo();
  console.log(netInfo);

  useEffect(() => {
    setTimeout(function () {
      console.log(netInfo);
    }, 5000);
    return () => {
      Alert.alert('Alert Shows After 5 Seconds of Delay.');
    };
  }, []);

  return (
    <View>
      {netInfo.isConnected === true ? (
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            paddingVertical: 1,
            backgroundColor:
              netInfo.isInternetReachable === false ? '#424242' : '#0cb035',
          }}>
          {netInfo.type === 'none'
            ? null
            : netInfo.isInternetReachable === false
            ? "Your phone doesn't connected to the Internet."
            : 'Back online'}
        </Text>
      ) : (
        <Text
          style={{
            backgroundColor: '#424242',
            color: 'white',
            textAlign: 'center',
          }}>
          {netInfo.isConnected === false
            ? "No connection!  You're offline."
            : netInfo.type === 'wifi'
            ? `Your ${netInfo.type} doesn't connected to the Internet.`
            : null}
        </Text>
      )}
    </View>
  );
};

export default Connection;
