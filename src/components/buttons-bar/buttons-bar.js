import ButtonBarStyles from './buttons-bar.css';
import React from "react";
import Button from './button/button';

export default function ButtonsBar(props) {
	const { onCreate, onUpdate, onDelete } = props;

	return (
		<div className={ButtonBarStyles.wrapper}>
			<Button green className="button" text="Create" onClick={onCreate} />
			<Button yellow className="button" text="Update" onClick={onUpdate} />
			<Button red className="button" text="Delete" onClick={onDelete} />
		</div>
	);

}