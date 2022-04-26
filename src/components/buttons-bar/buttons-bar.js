import ButtonBarStyles from './buttons-bar.css';
import React from "react";
import Button from './button/button';

export default function ButtonsBar(props) {
	const { disableCreate, disableUpdate, disableDelete, onCreate, onUpdate, onDelete } = props;

	return (
		<div className={ButtonBarStyles.wrapper}>
			<Button green className="button" disabled={disableCreate} text="Create" onClick={onCreate} />
			<Button yellow className="button" disabled={disableUpdate} text="Update" onClick={onUpdate} />
			<Button red className="button" disabled={disableDelete} text="Delete" onClick={onDelete} />
		</div>
	);

}