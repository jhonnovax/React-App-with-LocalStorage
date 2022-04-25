import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {
	const persons = useSelector((state) => state.filteredPersons)

	return (
		<Provider store={store}>
			{persons.map(person => person.name)}
		</Provider>
	)
};