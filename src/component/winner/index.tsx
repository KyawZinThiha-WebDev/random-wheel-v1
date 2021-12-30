import React, { useContext } from 'react';
import { Context } from 'state/context';

const Winner = () => {
	const { winner, deleteWinner } = useContext(Context);
	const onCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('click');
		deleteWinner({ _id: winner?._id });
	};
	console.log(winner);
	if (winner) {
		return (
			<div className='winner-container'>
				<div className='winner-card'>
					<div className='header'>
						<h4>We have a winner</h4>
					</div>
					<div className='content'>
						<span>{winner?.name}</span>
					</div>
					<div className='btn'>
						<button onClick={onCLick}>Clear</button>
					</div>
				</div>
			</div>
		);
	}
	return null;
};
export default Winner;
