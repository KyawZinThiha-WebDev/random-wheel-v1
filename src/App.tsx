import Nav from 'component/nav';
import Tab from 'component/tab';
import Wheel from 'component/wheel';
import Winner from 'component/winner';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='wheel-and-tab'>
				<div className='wheel'>
					<Wheel />
				</div>
				<div className='tab'>
					<Tab />
				</div>
			</div>
			<Winner />
		</div>
	);
}

export default App;
