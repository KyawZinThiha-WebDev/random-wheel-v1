import {
	SET_INPUT,
	DELETE_INPUT,
	CHANGE_INPUT_DATA,
	SET_WINNER,
	REMOVE_WINNER,
} from './types';
import { useReducer } from 'react';
import Reducer from './reducer';
import { Context } from './context';
type state = {
	inputs: { _id: string; name: string; color: string }[] | [];
	winner: { _id: string; name: string; color: string } | null;
	results: { _id: string; name: string; color: string }[] | [];
};

const State = ({ children }: { children: JSX.Element }) => {
	const initialValue: state = {
		inputs: [{ _id: '12345', name: 'Hello There', color: '#aecdf7' }],
		winner: null,
		results: [],
	};
	const [state, dispatch] = useReducer(Reducer, initialValue);

	const setInput = (input: { _id: string; name: string; color: string }) => {
		dispatch({ type: SET_INPUT, payload: input });
	};
	const removeInput = (input: { _id: string }) => {
		dispatch({ type: DELETE_INPUT, payload: input });
	};
	const changeInput = (input: { _id: string; name: string }) => {
		dispatch({ type: CHANGE_INPUT_DATA, payload: input });
	};
	const setWinner = (input: { _id: string; name: string; color: string }) => {
		dispatch({ type: SET_WINNER, payload: input });
	};
	const deleteWinner = (input: { _id: string }) => {
		console.log(input);
		dispatch({ type: REMOVE_WINNER, payload: input });
	};
	return (
		<Context.Provider
			value={{
				inputs: state.inputs,
				winner: state.winner,
				results: state.results,
				setInput,
				removeInput,
				changeInput,
				setWinner,
				deleteWinner,
			}}>
			{children}
		</Context.Provider>
	);
};

export default State;
