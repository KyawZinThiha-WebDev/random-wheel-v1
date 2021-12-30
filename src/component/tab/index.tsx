import { useState } from 'react';
import Input from './input';
import Result from './result';

const Tab = () => {
	const [isInput, setIsInput] = useState<boolean>(true);
	return (
		<div className='tab-container'>
			<div className='nav'>
				<div className='title' onClick={(e) => setIsInput(true)}>
					<h3>Input Data</h3>
				</div>
				<div className='title' onClick={() => setIsInput(false)}>
					<h3>Results</h3>
				</div>
			</div>
			<hr />
			<div className='data-container'>{isInput ? <Input /> : <Result />}</div>
		</div>
	);
};

export default Tab;
