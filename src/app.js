import appStyles from './app.css';
import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {
	const persons = useSelector((state) => state.persons.filteredPersons)

	return (
		<div className={appStyles.app}>
			{persons.map(person => person.name)}
		</div>
	)
};