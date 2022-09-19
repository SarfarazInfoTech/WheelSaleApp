import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AddMyVehical, VehiclesList} from '../services/UrlApi.js';
import SelectList from 'react-native-dropdown-select-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {RadioButton} from 'react-native-paper';

const AddVehicles = () => {
  const [Specification, setSpecification] = useState();
  const [Color, setColor] = useState();
  const [Price, setPrice] = useState();
  const [checked, setChecked] = useState();
  const [selected, setSelected] = useState('');
  const [Data, setData] = useState([]);
  const [VehiInfo, setVehiInfo] = useState([]);

  // categoryId;
  // images;
  // modelYear;
  // subCategoryName;
  // vehicleCondition;
  // vehicleNumber;
  // wheels;

  const AddVehicle = async () => {
    console.log(AddMyVehical);

    await fetch(AddMyVehical, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        categoryId: 'aa651c02c3f7c4481cf88e3b8284e1',
        color: 'skyblue',
        images: [
          {
            image:
              'https://i.pinimg.com/originals/25/a4/be/25a4beb9c858abb21e3170283b2b0659.jpg',
          },
        ],
        modelYear: '2020',
        sellingPrice: 1,
        subCategoryName: '12cc',
        vehicleCondition: 'bad',
        vehicleNumber: 'MH31MB0420',
        wheels: 2,
      }),
    })
      .then(res => res.json())
      .then(resData => {
        if (resData.status === 'S') {
          alert(resData.message);
          // navigation.navigate('Login');
          console.log(resData);
        } else if (resData.status === 'F') {
          alert(resData.message);
          setMessage(resData.message);
          setError(resData.status);
        } else {
          setMessage(resData.message);
          setError(resData.status);
        }
      });
  };

  useEffect(() => {
    const getDatabase = async () => {
      await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          let newArray = response.data.map(item => {
            return {key: item.id, value: item.name};
          });
          setData(newArray);
        })
        .catch(e => {
          console.log(e);
        }),
        [];
    };
    getDatabase();
    Vehicles();
  }, []);

  const data = [
    {key: '1', value: '2022'},
    {key: '2', value: '2021'},
    {key: '3', value: '2020'},
    {key: '4', value: '2019'},
    {key: '5', value: '2018'},
    {key: '6', value: '2017'},
    {key: '7', value: '2016'},
    {key: '8', value: '2015'},
    {key: '9', value: '2014'},
    {key: '10', value: '2013'},
    {key: '11', value: '2012'},
    {key: '12', value: '2011'},
    {key: '13', value: '2010'},
    {key: '14', value: '2009'},
    {key: '15', value: '2008'},
    {key: '16', value: '2007'},
    {key: '17', value: '2006'},
    {key: '18', value: '2005'},
    {key: '19', value: '2004'},
    {key: '20', value: '2003'},
  ];

  const Vehicles = async () => {
    await fetch(`${VehiclesList}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(resData => {
        if (resData.status === 'S') {
          alert(resData.message);
          setVehiInfo(resData.categories);
          // console.log(resData.categories);
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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderColor: 'lightgray',
            borderWidth: 1,
            borderRadius: 5,
            margin: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#3d3d72',
              fontSize: 18,
              fontWeight: '500',
              marginTop: 15,
            }}>
            Vehicle Information
          </Text>
          <Text style={styles.lable}>Company</Text>
          <SelectList
            data={VehiInfo.map(({company}) => company)}
            maxHeight={400}
            inputStyles={{}}
            setSelected={setSelected}
            onSelect={() => alert(selected)}
            placeholder="Select Company"
            dropdownStyles={{margin: 10, backgroundColor: '#f7f7f7'}}
            boxStyles={{
              backgroundColor: 'white',
              borderColor: 'darkgray',
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            arrowicon={
              <FontAwesome
                name="chevron-down"
                size={12}
                color={'gray'}
                style={{alignSelf: 'center'}}
              />
            }
            searchicon={
              <FontAwesome
                name="search"
                size={18}
                color={'gray'}
                style={{paddingRight: 10}}
              />
            }
          />
          <Text style={styles.lable}>Vehicle</Text>
          <SelectList
            data={VehiInfo.map(({categoryName}) => categoryName)}
            maxHeight={400}
            inputStyles={{}}
            setSelected={setSelected}
            onSelect={() => alert(selected)}
            placeholder="Select Vehicle"
            dropdownStyles={{margin: 10, backgroundColor: '#f7f7f7'}}
            boxStyles={{
              backgroundColor: 'white',
              borderColor: 'darkgray',
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            arrowicon={
              <FontAwesome
                name="chevron-down"
                size={12}
                color={'gray'}
                style={{alignSelf: 'center'}}
              />
            }
            searchicon={
              <FontAwesome
                name="search"
                size={18}
                color={'gray'}
                style={{paddingRight: 10}}
              />
            }
          />
          <Text style={styles.lable}>Specification</Text>

          <TextInput
            value={Specification}
            placeholder="Specification"
            onChangeText={value => setSpecification(value)}
            style={{
              borderRadius: 10,
              borderColor: 'darkgray',
              borderWidth: 1,
              marginHorizontal: 10,
              paddingVertical: 8,
              paddingLeft: 20,
            }}
          />
          <Text style={styles.lable}>Year of Model</Text>
          <SelectList
            data={data}
            maxHeight={400}
            inputStyles={{}}
            setSelected={setSelected}
            onSelect={() => alert(selected)}
            placeholder="Year of Model"
            dropdownStyles={{margin: 10, backgroundColor: '#f7f7f7'}}
            boxStyles={{
              backgroundColor: 'white',
              borderColor: 'darkgray',
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            arrowicon={
              <FontAwesome
                name="chevron-down"
                size={12}
                color={'gray'}
                style={{alignSelf: 'center'}}
              />
            }
            searchicon={
              <FontAwesome
                name="search"
                size={18}
                color={'gray'}
                style={{paddingRight: 10}}
              />
            }
          />
          <Text style={styles.lable}>Color</Text>
          <TextInput
            value={Color}
            placeholder="Color"
            onChangeText={value => setColor(value)}
            style={{
              borderRadius: 10,
              borderColor: 'darkgray',
              borderWidth: 1,
              marginHorizontal: 10,
              paddingVertical: 8,
              paddingLeft: 20,
            }}
          />
          <Text style={styles.lable}>Selling Price</Text>
          <TextInput
            value={Price}
            placeholder="Selling Price"
            onChangeText={value => setPrice(value)}
            style={{
              borderRadius: 10,
              borderColor: 'darkgray',
              borderWidth: 1,
              marginHorizontal: 10,
              paddingVertical: 8,
              paddingLeft: 20,
            }}
          />
          <Text style={styles.lable}>Condition</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <RadioButton
                value="POOR"
                status={checked === 'POOR' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('POOR')}
              />
              <Text style={{alignSelf: 'center'}}>POOR</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <RadioButton
                value="AVERAGE"
                status={checked === 'AVERAGE' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('AVERAGE')}
              />
              <Text style={{alignSelf: 'center'}}>AVERAGE</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <RadioButton
                value="GOOD"
                status={checked === 'GOOD' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('GOOD')}
              />
              <Text style={{alignSelf: 'center'}}>GOOD</Text>
            </View>
          </View>
          <Text style={styles.lable}> Image</Text>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: 'lightgray',
                height: 100,
                width: '40%',
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: 'gray',
              }}></View>
            <View
              style={{
                backgroundColor: 'lightgray',
                height: 100,
                width: '40%',
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: 'gray',
              }}></View>
          </View>
          <View style={{margin: 15}}>
            <Button
              title="Add Vehicle"
              color={'#3d3d72'}
              onPress={() => {
                AddVehicle();
              }}
              // onPress={
              // () => Vehicles()
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
              // }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lable: {
    color: 'black',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
});

export default AddVehicles;
