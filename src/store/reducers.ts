import { combineReducers } from '@reduxjs/toolkit'
import app from '../features/App/app-reducer'

const reducers = combineReducers({
	app,
})

export default reducers
