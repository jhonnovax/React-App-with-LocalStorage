
import React from 'react';
import listboxStyles from './listbox-persons.css';

export default function ListboxPersons(props) {
	const { className, persons, onSelect } = props;

	const onSelecPerson = event => {
		onSelect(even.target.value);
	}

	return (
		<select className={`${className} ${listboxStyles.select}`} name="persons" size="5" multiple="multiple" onChange={onSelecPerson}> 
			{persons.map(person => <option value={person.id}>{person.name} {person.surname}</option> )} 
		</select>  
	);

} 