import {
	SET_INPUT,
	DELETE_INPUT,
	CHANGE_INPUT_DATA,
	SET_WINNER,
	REMOVE_WINNER,
} from './types';

type action =
	| {
			type: 'SET_INPUT' | 'SET_WINNER' | 'SET_RESULT';
			payload: {
				_id: string;
				name: string;
				color: string;
			};
	  }
	| { type: 'DELETE_INPUT' | 'REMOVE_WINNER'; payload: { _id: string } }
	| {
			type: 'CHANGE_INPUT_DATA';
			payload: { _id: string; name: string };
	  };

type state = {
	inputs: { _id: string; name: string; color: string }[] | [];
	winner: { _id: string; name: string; color: string } | null;
	results: { _id: string; name: string; color: string }[] | [];
};
const Reducer = (state: state, action: action) => {
	switch (action.type) {
		case SET_INPUT:
			return {
				...state,
				inputs: [...state.inputs, action.payload],
			};
		case DELETE_INPUT:
			return {
				...state,
				inputs: state.inputs.filter(
					(input) => input._id !== action.payload._id,
				),
			};
		case CHANGE_INPUT_DATA:
			return {
				...state,
				inputs: state.inputs.map((item) => {
					if (item._id === action.payload._id) {
						return {
							...item,
							name: action.payload.name,
						};
					}
					return item;
				}),
			};
		case SET_WINNER:
			return {
				...state,
				winner: action.payload,
				results: [...state.results, action.payload],
			};
		case REMOVE_WINNER:
			return {
				...state,
				winner: null,
				inputs: state.inputs.filter(
					(input) => input._id !== action.payload._id,
				),
			};
		default:
			return state;
	}
};

export default Reducer;
