
import React from 'react';
import listboxStyles from './listbox-persons.css';

export default function ListboxPersons(props) {
	const { className, persons, value, onChange } = props;

	const onSelecPerson = event => {
		onChange(event.target.value);
	}

	return (
		<select 
			className={`${className} ${listboxStyles.select}`} 
			name="persons" 
			size="5" 
			value={value}
			onChange={onSelecPerson}> 
			{persons.map(person => <option key={person.id} value={person.id}>{person.name} {person.surname}</option> )} 
		</select>  
	);

} 