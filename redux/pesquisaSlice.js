import { createSlice } from '@reduxjs/toolkit'

const initialValues = {
    id: null,
    nome: null,
}

export const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState: initialValues,
  reducers: {
    reducerSetPesquisa: (state, action) => {
        state.id = action.payload.id
        state.nome = action.payload.nome
    }
  },
})

export const {reducerSetPesquisa} = pesquisaSlice.actions
 
export default pesquisaSlice.reducer