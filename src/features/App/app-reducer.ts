import { createSlice } from '@reduxjs/toolkit'
import type { Dispatch, PayloadAction } from '@reduxjs/toolkit'
import type { T_AppThunk, T_Reducer } from 'store/types'

import type { I_AppState } from './types'

const initialState: I_AppState = {
	isLogged: true,
	isAppLoading: false,
}

export const isLoggedReducer: T_Reducer<I_AppState, boolean> = (
	state,
	action: PayloadAction<boolean>
) => {
	state.isLogged = action.payload
}

export const isAppLoadingReducer: T_Reducer<I_AppState, boolean> = (
	state,
	action: PayloadAction<boolean>
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

const { isLogged, isAppLoading } = appSlice.actions

export const setIsLogged =
	(payload: boolean): T_AppThunk =>
	(dispatch: Dispatch) => {
		dispatch(isLogged(payload))
	}

export const setIsAppLoading =
	(payload: boolean): T_AppThunk =>
	(dispatch: Dispatch) => {
		dispatch(isAppLoading(payload))
	}

export default appSlice.reducer
