import { createSlice } from '@reduxjs/toolkit'

const initialValues = {
  email: null,
  senha: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialValues,
  reducers: {
    reducerSetLogin: (state, action) => {
      state.email = action.payload.email
      state.senha = action.payload.senha
    }
  },
})

export const {reducerSetLogin} = loginSlice.actions

export default loginSlice.reducer