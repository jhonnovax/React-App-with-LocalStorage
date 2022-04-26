
import React from 'react';
import filterBoxStyles from './filter-box.css';

export default function FilterBox(props) {
	const { onChange } = props;

	const onChangeInput = event => {
		onChange(event.target.value);
	}

	return (
		<div className={filterBoxStyles.wrapper}>
			<label htmlFor="filter-input" className={filterBoxStyles.label}>Filter prefix:</label>
			<input id="filter-input" type="text" className={filterBoxStyles.input} onChange={onChangeInput} />
		</div>
	);

} 