
import React from 'react';
import formPersonStyles from './form-person.css';

export default function FilterBox(props) {
	const { className, onChangeName, onChangeSurname } = props;

	const onChangeInput = event => {
		onChange(even.target.value);
	}

	return (
		<div className={`${className} ${formPersonStyles.wrapper}`}>

			<div className={formPersonStyles.row}>
				<label for="person-name" className={formPersonStyles.label}>Name:</label>
				<input id="person-name" type="text" className={formPersonStyles.input} onChange={onChangeName} />
			</div>

			<div className={formPersonStyles.row}>
				<label for="person-surname" className={formPersonStyles.label}>Surname:</label>
				<input id="person-surname" type="text" className={formPersonStyles.input} onChange={onChangeSurname} />
			</div>

		</div>
	);

} 