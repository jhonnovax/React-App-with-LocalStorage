
import React from 'react';
import formPersonStyles from './form-person.css';

export default function FilterBox(props) {
	const { className, value, onChange } = props;

	const onChangeName = event => {
		onChange({ ...value, name: event.target.value });
	}

	const onChangeSurName = event => {
		onChange({ ...value, surname: event.target.value });
	}

	return (
		<div className={`${className} ${formPersonStyles.wrapper}`}>

			<div className={formPersonStyles.row}>
				<label htmlFor="person-name" className={formPersonStyles.label}>Name:</label>
				<input 
					id="person-name" 
					type="text" 
					className={formPersonStyles.input} 
					value={value.name} 
					onChange={onChangeName} />
			</div>

			<div className={formPersonStyles.row}>
				<label htmlFor="person-surname" className={formPersonStyles.label}>Surname:</label>
				<input 
					id="person-surname" 
					type="text" 
					className={formPersonStyles.input} 
					value={value.surname} 
					onChange={onChangeSurName} />
			</div>

		</div>
	);

} 