import React, { useContext, useState } from 'react';
import { Context } from 'state/context';
import DeleteBtn from 'assets/delete.svg';
const Input = () => {
	const { inputs, setInput, removeInput, changeInput } = useContext(Context);
	const [tempValue, setTempValue] = useState<string>('');
	const randomInt = () => {
		return Math.floor(10000 + Math.random() * 90000);
	};
	const randomColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	};
	const onTempValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTempValue(e.target.value);
	};
	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newItem = {
			_id: randomInt().toString(),
			name: tempValue,
			color: randomColor(),
		};
		setInput(newItem);
	};
	const onItemValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		changeInput({ _id: e.target.id, name: e.target.value });
	};
	const onItemRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		removeInput({ _id: e.currentTarget.id });
	};
	return (
		<div className='inputs-container'>
			<div className='add-new-item'>
				<form onSubmit={onFormSubmit}>
					<input
						type='text'
						onChange={onTempValueChange}
						placeholder='Enter new item'
					/>
				</form>
			</div>
			<div className='list'>
				{inputs &&
					inputs.map((item) => (
						<div className='item' key={item._id}>
							<input
								type='text'
								value={item.name}
								id={item._id}
								onChange={onItemValueChange}
							/>
							<button onClick={onItemRemove} id={item._id}>
								<img src={DeleteBtn} alt='' />
							</button>
						</div>
					))}
			</div>
		</div>
	);
};

export default Input;
