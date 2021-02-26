import React, { useState } from 'react'
import { Field } from 'redux-form';

interface TargetProps {
	handelRadios: any,
	radios: {
		[item: string]: boolean
	}
}

type MyType = {
    id: string;
    label: string;
	value: string;
	checked: boolean;
}


export const Radios: React.FC<TargetProps> = ({radios, handelRadios}) => {
	const [tooltips, setTooltips] = useState<boolean>(false);

	const handelTooltips = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        setTooltips(tooltips => !tooltips)
    };

	const paymentValues: MyType[] = [
		{
			id: "payment-option-month",
			label: "Оклад за месяц",
			value: "month",
			checked: radios.month
		},
		{
			id: "payment-option-mrot",
			label: "МРОТ",
			value: "mrot",
			checked: radios.mrot
		},
		{
			id: "payment-option-day",
			label: "Оплата за день",
			value: "day",
			checked: radios.day
		},
		{
			id: "payment-option-hour",
			label: "Оплата за час",
			value: "hour",
			checked: radios.hour
		},
	]

    return (
		<>
			<p className="text-start fs-7 ">Сумма</p>
			{paymentValues.map((item: MyType, i: number) => (
				<div key={i} className="form-check ms-3 d-flex">
					<Field
						name="paymentOption"
						id={item.id}
						component="input"
						type="radio"
						value={item.value}
						className="form-check-input"
						checked={item.checked}
						onChange={(e:any) => handelRadios(e, item.value, item.checked)}
					/>
					<label htmlFor={item.id} className="ms-2 fw-bold">{item.label}</label>
					{item.value === 'mrot' && 
					<div className="tooltips-customs position-relative">
						<div
							className="tooltips-customs-btn mt-1 ms-2"
							onClick={handelTooltips}
						>
							{tooltips ? <div>×</div> : <div>i</div>}
						</div>
						<div className={
							tooltips ?
							"tooltips-customs-modal position-absolute tooltips-customs-click" :
							"tooltips-customs-modal position-absolute"}
						>
							<p>МРОТ - минимальный размер оплаты труда. Разный для разных регионов</p>
						</div>
					</div>
					}
				</div>
			))}
		</>
    )
}