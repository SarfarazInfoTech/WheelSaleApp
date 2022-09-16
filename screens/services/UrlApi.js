const VehiclesList = 'http://192.168.255.12:8080/wheelsale-app-ws/categories';

export {VehiclesList};

const AddMyVehical = 'http://192.168.255.12:8080/wheelsale-app-ws/sub-categories/9czJMjMfRNHaB04G07moLqkGV5reTc';

export {AddMyVehical};

const ShownMyVehical = 'http://192.168.255.12:8080/wheelsale-app-ws/sub-categories?page=1&limit=100&dealerId=9czJMjMfRNHaB04G07moLqkGV5reTc';

export {ShownMyVehical};

const MarketVehical = 'http://192.168.255.12:8080/wheelsale-app-ws/sub-categories?page=1&limit=100';

export {MarketVehical};

const SoldMyVehical = 'http://192.168.255.12:8080/wheelsale-app-ws/sub-categories?page=1&limit=100&dealerId=9czJMjMfRNHaB04G07moLqkGV5reTc&visibility=false'

export {SoldMyVehical};


// import axios from 'axios'
// const instance = axios.create({
//     baseURL: 'http://192.168.255.12:8080/wheelsale-app-ws',
//     headers: {
//         'content-type':'application/json',
//     },
// });
// export default {
//     getData: () =>
//     instance({
//         'method':'GET',
//         'url':'/sub-categories',
//         'params': {
//             'page':'1',
//             'limit':'100',
//         },
//     }),
//     postData: () =>
//     instance({
//         'method': 'POST',
//         'url':'/api',
//         'data': {
//             'item1':'data1',
//             'item2':'item2'
//         }
//     })
// }