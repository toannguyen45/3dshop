import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ContactService from './ContactService'

export const sendContact = createAsyncThunk(
    'contact',
    async (data, thunkAPI) => {
        try {
            return await ContactService.contact(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const resetContactState = createAction('contact/resetState')

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    sentContact: null,
    message: '',
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(sendContact.pending, state => {
                state.isLoading = true
            })
            .addCase(sendContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.sentContact = action.payload
            })
            .addCase(sendContact.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
            .addCase(resetContactState, () => initialState)
    },
})

export default contactSlice.reducer