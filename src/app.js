import appStyles from './app.css';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterBox from './components/filter-box/filter-box';
import FormPerson from './components/form-person/form-person';
import ListboxPersons from './components/listbox-persons/listbox-persons';
import ButtonsBar from './components/buttons-bar/buttons-bar';
import { getPersons, filterPersons, createPerson, updatePerson, deletePerson } from './store/reducers/persons-reducer';

export default function App() {
	const persons = useSelector((state) => state.persons.filteredPersons)
	const [selectedPersonId, setSelectedPersonId] = useState(persons[0])
	const [personData, setPersonData] = useState({ name: '', surname: '' })
	const dispatch = useDispatch();

	const onSelectPerson = personId => {
		setSelectedPersonId(personId);
		setPersonData(persons.find(person => person.id === personId));
	}

	const onCreate = () => {
		dispatch(createPerson(personData));
	}

	const onUpdate = () => {
		if (selectedPersonId) {
			dispatch(updatePerson({ ...personData, id: selectedPersonId }));
		}
	}

	const onDelete = () => {
		if (selectedPersonId) {
			dispatch(deletePerson(selectedPersonId));
		}		
	}

	const onFilter = keyword => {
		setSelectedPersonId('');
		dispatch(filterPersons(keyword));
	}

	useEffect(() => {
		dispatch(getPersons());
	}, []);

	return (
		<div className={appStyles.wrapper}>
			<FilterBox onChange={onFilter}  />
			
			<div className={appStyles.mainInfo}>
				<ListboxPersons className="listbox" persons={persons} value={selectedPersonId} onChange={onSelectPerson} />
				<FormPerson className="form" value={personData} onChange={setPersonData} />
			</div>

			<ButtonsBar 
				disableCreate={!personData.name || !personData.surname}
				disableUpdate={!selectedPersonId}
				disableDelete={!selectedPersonId}
				onCreate={onCreate} 
				onUpdate={onUpdate} 
				onDelete={onDelete} 
			/>
		</div>
	)
};