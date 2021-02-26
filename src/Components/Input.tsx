import React from 'react'
import { Field } from 'redux-form';


interface TargetProps {
	radios: {
		[item: string]: boolean
	}
}

export const Input: React.FC<TargetProps> = ({ radios }) => {

	let text: string = radios.month ? '' :
		radios.day ? 'в день' : 
		radios.hour ? 'в час' : '';

	return (
        <div className="custom-input-group">
            <Field
                name="money"
                component="input"
                type="number"
				className="custom-input"
            />
			<p className="custom-input-text fs-7">₽ <span>{text}</span></p>
        </div>
    )
}