import './styles/main.css';
import logoImg from './assets/logo.svg';
function App() {
	return (
		<div className='max-w-7xl mx-auto flex flex-col items-center my-20'>
			<img src={logoImg} alt='logoNLW' />

			<h1 className='text-6xl text-white font-black mt-20'>
				Seu{' '}
				<span className='bg-nlw-gradient text-transparent bg-clip-text'>
					duo
				</span>{' '}
				está aqui.
			</h1>

			<div className='grid grid-cols-6 gap-6 mt-16'>
				<a href='' className='relative rounded-lg overflow-hidden'>
					<img src='/game_1.png' alt='' />

					<div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
						<strong className='font-bold text-white text-sm block'>
							League of Legends
						</strong>
						<span className='text-zinc-300 text-sm block'>
							4 anúncios
						</span>
					</div>
				</a>
				<a href='' className='relative rounded-lg overflow-hidden'>
					<img src='/game_2.png' alt='' />

					<div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
						<strong className='font-bold text-white text-sm block'>
							Dota 2
						</strong>
						<span className='text-zinc-300 text-sm block'>
							4 anúncios
						</span>
					</div>
				</a>
				<a href='' className='relative rounded-lg overflow-hidden'>
					<img src='/game_3.png' alt='' />
					<div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
						<strong className='font-bold text-white text-sm block'>
							Counter Strike
						</strong>
						<span className='text-zinc-300 text-sm block'>
							4 anúncios
						</span>
					</div>
				</a>
				<a href='' className='relative rounded-lg overflow-hidden'>
					<img src='/game_4.png' alt='' />
					<div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
						<strong className='font-bold text-white text-sm block'>
							Apex Legends
						</strong>
						<span className='text-zinc-300 text-sm block'>
							4 anúncios
						</span>
					</div>
				</a>
				<a href='' className='relative rounded-lg overflow-hidden'>
					<img src='/game_5.png' alt='' />
					<div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
						<strong className='font-bold text-white text-sm block'>
							Fortnite
						</strong>
						<span className='text-zinc-300 text-sm block'>
							4 anúncios
						</span>
					</div>
				</a>
				<a href='' className='relative rounded-lg overflow-hidden'>
					<img src='/game_6.png' alt='' />
					<div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
						<strong className='font-bold text-white text-sm block'>
							World of Warcraft
						</strong>
						<span className='text-zinc-300 text-sm block'>
							4 anúncios
						</span>
					</div>
				</a>
			</div>
		</div>
	);
}

export default App;
