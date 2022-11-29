import { createStore, combineReducers } from 'redux'
import coinsReducer from './crypto/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
	coinsReducer,
	userReducer
})

const store = createStore(rootReducer)

export default store