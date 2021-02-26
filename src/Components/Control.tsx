import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { initialize, reduxForm } from 'redux-form';
import { CheckBox } from './CheckBox';
import { Input } from './Input';
import { Radios } from './Radios';

type MyType = {
    [key: string]: boolean
}

export const Control: React.FC = () => {

	const [check, setCheck] = useState<boolean>(true);
	const [radios, setRadios] = useState<MyType>(
		{
			month: true,
			mrot: false,
			day: false,
			hour: false
		}
	);

	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(initialize('checkbox', check));
		dispatch(initialize('radios', radios.month));
		// eslint-disable-next-line
	}, [check])

	const handelChahge = (event: React.MouseEvent<HTMLDivElement, ChangeEvent>): void => {
        setCheck(check => !check)
    }

	const handelRadios = (event: React.MouseEvent<HTMLDivElement, ChangeEvent>, value: string, checked: boolean): void => {
		setRadios(
			{
			month: false,
			mrot: false,
			day: false,
			hour: false
			}
		)
        setRadios(radios => ({...radios, [value]: !checked}))
    }

	return (
		<>
			<Radios
				radios={radios}
				handelRadios={handelRadios}
			/>
			{!radios.mrot && 
				<>
					<CheckBox
						check={check}
						handelChahge={handelChahge}
					/>
					<Input radios={radios}/>
				</>
			}
		</>
	)
};

export default reduxForm({
	form: 'ControlForm', 
  })(Control);
