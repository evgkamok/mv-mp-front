import { combineReducers } from '@reduxjs/toolkit'
import app from '../features/App/reducer'

const reducers = combineReducers({
	app,
})

export default reducers
