import { createStore } from 'redux'
import coinsReducer from './crypto/reducer'

const store = createStore(coinsReducer)

export default store