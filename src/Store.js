import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'

export default (initialState) => {
	return createStore(
		RootReducer,
		initialState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
}