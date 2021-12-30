import { createContext } from 'react';

type defaultProps = {
	inputs: { _id: string; name: string; color: string }[] | [];
	winner: { _id: string; name: string; color: string } | null;
	results: { _id: string; name: string; color: string }[] | [];
	setInput: Function;
	removeInput: Function;
	changeInput: Function;
	setWinner: Function;
	deleteWinner: Function;
};

const defaultProps: defaultProps = {
	inputs: [{ _id: '12345', name: 'Hello There', color: '#aecdf7' }],
	winner: null,
	results: [],
	setInput: () => {},
	removeInput: () => {},
	changeInput: () => {},
	setWinner: () => {},
	deleteWinner: () => {},
};

export const Context = createContext(defaultProps);
