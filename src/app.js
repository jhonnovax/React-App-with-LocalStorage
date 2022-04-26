import appStyles from './app.css';
import React from 'react'
import { useSelector } from 'react-redux'
import FilterBox from './components/filter-box/filter-box';
import FormPerson from './components/form-person/form-person';
import ListboxPersons from './components/listbox-persons/listbox-persons';
import ButtonsBar from './components/buttons-bar/buttons-bar';

export default function App() {
	const persons = useSelector((state) => state.persons.filteredPersons)

	return (
		<div className={appStyles.wrapper}>
			<FilterBox />
			
			<div className={appStyles.mainInfo}>
				<ListboxPersons className="listbox" persons={persons} />
				<FormPerson className="form" />
			</div>

			<ButtonsBar />
		</div>
	)
};