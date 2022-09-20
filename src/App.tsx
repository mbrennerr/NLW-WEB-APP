import './styles/main.css';
import logoImg from './assets/logo.svg';
function App() {
	return (
		<div className='max-w-7xl mx-auto flex flex-col items-center my-20'>
			<img src={logoImg} alt='logoNLW' />

			<h1 className='text-6xl text-white font-black mt-20'>
				Seu{' '}
				<span className='bg-nlw-gradient text-transparent bg-clip-text'>
					Buddy
				</span>{' '}
				está aqui.
			</h1>
		</div>
	);
}

export default App;
