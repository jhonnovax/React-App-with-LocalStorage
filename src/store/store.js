import { configureStore } from '@reduxjs/toolkit'
import personsReducer from './reducers/persons-reducer.js'

export default configureStore({
  reducer: {
    persons: personsReducer,
  },
})