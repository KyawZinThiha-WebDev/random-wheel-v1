import { useContext } from 'react';
import { Context } from 'state/context';

const Result = () => {
	const { results } = useContext(Context);
	return (
		<div className='result-container'>
			{results &&
				results.map((item) => (
					<div key={item._id} className='item'>
						<span>{item.name}</span>
					</div>
				))}
		</div>
	);
};

export default Result;
