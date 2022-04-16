import { combineReducers,createStore ,applyMiddleware} from 'redux'
import {countryreducer} from './Country/reducer'
import {city_reducer} from './City/reducer'
import thunk from 'redux-thunk'



const rootreducer=combineReducers({

country:countryreducer,
city:city_reducer



})



export const store=createStore(rootreducer,applyMiddleware(thunk))