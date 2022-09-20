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
				<div className='grid grid-cols-6 gap-0'>
					<a href=''>
						<img src='/game_1.png' alt='' />
					</a>
					<a href=''>
						<img src='/game_2.png' alt='' />
					</a>
					<a href=''>
						<img src='/game_3.png' alt='' />
					</a>
					<a href=''>
						<img src='/game_4.png' alt='' />
					</a>
					<a href=''>
						<img src='/game_5.png' alt='' />
					</a>
					<a href=''>
						<img src='/game_6.png' alt='' />
					</a>
				</div>
			</h1>
		</div>
	);
}

export default App;
