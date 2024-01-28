import { createSlice } from '@reduxjs/toolkit'
import type { Dispatch } from '@reduxjs/toolkit'
import type { T_AppThunk, T_Reducer } from 'store/types'

import type { I_AppState } from './types'

const initialState: I_AppState = {
	isLogged: true,
	isAppLoading: false,
}

export const isLoggedReducer: T_Reducer<I_AppState, boolean> = (
	state,
	action
) => {
	state.isLogged = action.payload
}

export const isAppLoadingReducer: T_Reducer<I_AppState, boolean> = (
	state,
	action
) => {
	state.isAppLoading = action.payload
}

const appSlice = createSlice({
	name: 'APP',
	initialState,
	reducers: {
		isLogged: isLoggedReducer,
		isAppLoading: isAppLoadingReducer,
	},
})

const { isLogged: setLoggedAction, isAppLoading: setAppLoadingAction } =
	appSlice.actions

export const setIsLogged =
	(isLogged: boolean): T_AppThunk =>
	(dispatch: Dispatch) => {
		dispatch(setLoggedAction(isLogged))
	}

export const setIsAppLoading =
	(isAppLoading: boolean): T_AppThunk =>
	(dispatch: Dispatch) => {
		dispatch(setAppLoadingAction(isAppLoading))
	}

export default appSlice.reducer
