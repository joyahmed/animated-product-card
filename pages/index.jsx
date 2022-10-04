import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
	const [count, setCount] = useState(1);
	const [message, setMessage] = useState('');
	const [fullWidth, setFullWidth] = useState(false);

	const stock = 3;

	const handleCount = calc => {
		setMessage('');
		setFullWidth(false);
		calc === 'increment'
			? count < stock
				? setCount(count + 1)
				: count === stock &&
				  (setMessage('Dah! Stock limit reached!!!'),
				  setFullWidth(true))
			: count !== 0
			? setCount(count - 1)
			: count === 0 &&
			  (setMessage('Are you a man or a Pajama???'),
			  setFullWidth(true));
	};

	const handleCart = () => {
		setFullWidth(false);
		setMessage(`Item added to cart but I won't show it to you`);
		setFullWidth(true);
	};

	useEffect(() => {
		const handleMessage = setTimeout(
			() => message && (setMessage(''), setFullWidth(false)),
			5000
		);
		return () => handleMessage;
	}, [message]);

	return (
		<div className='flex items-center justify-center w-screen min-h-screen  bg-gradient-to-b'>
			<div className='flex flex-col md:flex-row items-center justify-center w-full max-w-[1400px] min-h-screen px-2 sm:gap-8'>
				<div
					className={`fixed top-5 flex flex-col items-center justify-between w-[80%] lg:w-[30%] h-20 bg-red-800 rounded-md text-white text-lg z-[1] transition-all duration-300 ease-out
					${message ? 'translate-y-0' : '-translate-y-28'}
				`}
				>
					<span className='flex items-center justify-center h-[85%]'>
						{message && `🦁 ${message}`}
					</span>
					<div className='flex justify-start w-full h-[15%]'>
						<span
							className={`bg-blue-900 bg-opacity-30 ${
								fullWidth ? 'w-full' : 'w-0'
							} h-full rounded-b-l-lg transition-all duration-[5s]`}
						></span>
					</div>
				</div>
				<ProductCard {...{ count, handleCount, handleCart }} />
				<ProductCard {...{ count, handleCount, handleCart }} />
			</div>
		</div>
	);
};

export default Home;
