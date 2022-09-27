const baseURL = 'http://103.159.239.52:80'

const VehiclesList = `${baseURL}/wheelsale-app-ws/categories`
export {VehiclesList};

const AddMyVehical = `${baseURL}/wheelsale-app-ws/sub-categories/9czJMjMfRNHaB04G07moLqkGV5reTc`
export {AddMyVehical};

const ShownMyVehical = `${baseURL}/wheelsale-app-ws/sub-categories?limit=100&page=1&dealerId=9czJMjMfRNHaB04G07moLqkGV5reTc`
export {ShownMyVehical};

const MarketVehical = `${baseURL}/wheelsale-app-ws/sub-categories?limit=100&page=1`
export {MarketVehical};

const SoldMyVehical = `${baseURL}/wheelsale-app-ws/sub-categories?limit=100&page=1&dealerId=9czJMjMfRNHaB04G07moLqkGV5reTc&visibility=false`
export {SoldMyVehical};

const SearchVehical = `${baseURL}/wheelsale-app-ws/sub-categories?limit=100&page=`
export {SearchVehical};