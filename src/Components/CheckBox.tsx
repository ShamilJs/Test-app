import React from 'react'
import { Field } from 'redux-form';


interface TargetProps {
	handelChahge: any,
	check: boolean,
}

export const CheckBox: React.FC<TargetProps> = ({ handelChahge, check }) => {
    return (
        <div className="form-check form-switch custom-check">
            <p className={!check ? "form-check-label fs-7 fs-7-black" : "form-check-label fs-7"}>Указать с НДФЛ</p>
            <Field
                name="checkbox"
                id="checkbox"
                component="input"
                type="checkbox"
                className="form-check-input custom-check-input"
                checked={check}
                onChange={handelChahge}
				
            />
            <p className={check ? "form-check-label fs-7 fs-7-black" : "form-check-label fs-7"}>Без НДФЛ</p>
        </div>
    )
}