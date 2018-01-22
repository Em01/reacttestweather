import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'
import locationReducer from './locationReducer'
import cityReducer from './cityReducer'

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  city: cityReducer
});

export default rootReducer
