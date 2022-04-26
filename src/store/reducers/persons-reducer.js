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
			// Add new person with Id of timestamp to give it a unique identifier
			const newPerson = { ...action.payload, id: Date.now().toString() };
			state.persons = state.persons.concat(newPerson);
			updateLocalStorage(state.persons);
		},

		updatePerson: (state, action) => {
			state.persons = state.persons.map(person => {
				return person.id === action.payload.id ? action.payload : person;
			});
			updateLocalStorage(state.persons);
		},

		deletePerson: (state, action) => {
			state.persons = state.persons.filter(person => {
				return person.id !== action.payload;
			});
			updateLocalStorage(state.persons);
		},

		filterPersons: (state, action) => {
			state.filteredPersons = state.persons.filter(person => {
				return person.surname.startsWith(action.payload);
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