import { createSlice } from '@reduxjs/toolkit'

const updateLocalStorage = persons => {
	localStorage.persons = JSON.stringify(persons);
}

export const counterSlice = createSlice({
	name: 'persons',
	
	initialState: {
		persons: [],
		filteredPersons: []
	},

	reducers: {
		getPersons: (state) => {
		state.persons = localStorage.persons ? JSON.parse(localStorage.persons) : [];
		state.filteredPersons = localStorage.persons ? JSON.parse(localStorage.persons) : [];
		},

		createPerson: (state, action) => {
			state.persons = state.concat(action.payload);
			updateLocalStorage(state.persons);
		},

		updatePerson: (state, action) => {
			state.persons = state.map(person => {
				return person.id === action.payload.id ? action.payload : person;
			});
			updateLocalStorage(state.persons);
		},

		deletePerson: (state, personId) => {
			state.persons = state.filter(person => {
				return person.id !== personId;
			});
			updateLocalStorage(state.persons);
		},

		filterPersons: (state, keyword) => {
			state.filteredPersons = state.persons.filter(person => {
				return person.surname.startWith(keyword);
			});
		}

	},
	
})

export const { 
	getPersons, 
	createPerson, 
	updatePerson, 
	deletePerson, 
	filterPersons 
} = counterSlice.actions

export default counterSlice.reducer