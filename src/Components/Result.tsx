import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface RootState {  
	form : any,
}
type MyType = {
    [key: string]: number
}

export const Result = () => {
	const payment = useSelector((state: RootState) => state.form?.ControlForm?.values?.paymentOption);
	const moneyStore = useSelector((state: RootState) => state.form?.ControlForm?.values?.money);
	const values = useSelector((state: RootState) => state.form?.ControlForm?.values);
	const checked = useSelector((state: RootState) => state.form?.checkbox?.values);

	const [money, setMoney] = useState<MyType>(
			{
				clearMoney: 0,
				ndfl: 0,
				all: 0
			}
		)


		useEffect(() => {
			if (!moneyStore) {
				setMoney(money => ({...money, clearMoney: 0, ndfl: 0, all: 0}));
				return
			}
			if (!values || (values && checked)) {
				setMoney(money =>
					({...money, clearMoney: +moneyStore, ndfl: Math.floor(+moneyStore * 0.13), all: Math.floor(+moneyStore + moneyStore * 0.13)}))
			} else {
				setMoney(money =>
					({...money, clearMoney: Math.floor(+moneyStore - +moneyStore * 0.13), ndfl: Math.floor(+moneyStore * 0.13), all: +moneyStore}))
			}
		}, [payment, moneyStore, values, checked])

	if (payment === 'day' || payment === 'hour' || payment === 'mrot') return null;

	

    return (
        <div className="alert alert-warning result-alert" role="alert">
			<p><span>{money.clearMoney} ₽ </span>Сотрудник будет получать на руки</p>
    		<p><span>{money.ndfl} ₽ </span>НДФЛ, 13% от оклада</p>
			<p><span>{money.all} ₽ </span>за сотрудника в месяц</p>
    	</div>
    )
}