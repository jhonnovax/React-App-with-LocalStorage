import ButtonStyles from './button.css';
import React, { Children } from "react";

export default function Button(props) {
	const { className, green, yellow, red, text, onClick, ...buttonProps } = props;

	return (
		<button 
			type="button" 
			className={`
				${className}
				${ButtonStyles.btn}
				${green ? ButtonStyles.green : ''} 
				${yellow ? ButtonStyles.yellow : ''} 
				${red ? ButtonStyles.red : ''}
			`}
			onClick={onClick} 
			{...buttonProps}>
			{text}
		</button>
	);

}