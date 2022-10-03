import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
	laptopColors,
	laptops,
	tableHeaders,
	tableRows
} from '../constants';

const ProductCard = ({ count, handleCount, handleCart }) => {
	const [mounted, setMounted] = useState(false);
	const [stars] = useState(new Array(5).fill(''));
	const [image, setImage] = useState(laptops[0].source);
	const [show, setShow] = useState(false);
	const [showTable, setShowTable] = useState(false);
	const [readAll, setReadAll] = useState(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

	useEffect(() => {
		const handleMount = setMounted(true);
		return () => handleMount;
	}, []);

	const productDetail = `Just when you thought a gaming laptop couldn’t be any more beastly—introducing the new Razer Blade 15, now available with the latest 12th Gen Intel® Core™ processor (14-core) and NVIDIA® GeForce RTX™ 30 Series Laptop GPUs for the most powerful gaming laptop graphics ever. With your choice of a Full HD 360Hz, QHD 240Hz (G-SYNC or OLED), or new UHD 144Hz display, enjoy unrivalled performance packed into the thinnest 15” RTX gaming laptop chassis ever.`;

	const handleShow = () => {
		setShow(true);
		setTimeout(() => setShowTable(true), 300);
	};

	const handleHide = () => {
		setShowTable(false);
		setTimeout(() => setShow(false), 300);
	};

	const handleImage = name => {
		setImage('');
		laptops.filter(
			item =>
				item.color === name &&
				setTimeout(() => setImage(item.source), 500)
		);
	};

	if (!mounted) return null;

	return (
		<>
			<div className='flex flex-col items-center justify-center w-full min-h-screen md:h-auto text-white my-5 z-[0]'>
				<motion.div
					className='relative flex flex-col md:flex-row items-center justify-center w-full h-[100vh] lg:h-[30rem] 2xl:h-[40rem] rounded-lg shadow-sm bg-gradient-to-r to-black/100 from-[purple]/10 via-gray-900 bg-opacity-10 shadow-[steelblue]/30 z-[1]'
					style={{ x, y, rotateX, rotateY, z: 100 }}
					drag
					dragElastic={0.16}
					dragcontraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
					whileTap={{ cursor: 'grabbing' }}
				>
					<div className='flex flex-col items-center justify-between w-1/2 h-[40rem] lg:h-[30rem]'>
						<div className='flex flex-0 flex-col items-start w-screen lg:w-full space-y-1 h-[10%] px-8 mt-6'>
							<h1 className='text-xl uppercase'>Razer Blade 15</h1>
							<h1 className='text-lg'>
								Power. Performance. Perfection.
							</h1>
						</div>
						<motion.div
							className={`relative flex flex-2 items-center justify-center w-screen sm:w-full h-full sm:-mt-7 ${
								image ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
							} transition-all duration-300`}
							style={{
								x,
								y,
								rotateX,
								rotateY,
								rotate: '-5deg',
								z: 0
							}}
						>
							{image && (
								<Image
									src={image}
									alt='razer'
									layout='fill'
									objectFit='contain'
								/>
							)}
						</motion.div>

						<div className='relative flex items-center justify-center w-1/3 h-[10%] mb-5'>
							<Image
								src='/images/razer-logo.png'
								alt='razer-logo'
								// width={50}
								// height={50}
								layout='fill'
								objectFit='contain'
								className=''
							/>
						</div>
					</div>

					<div className='relative flex flex-col items-between justify-center w-full sm:w-1/2  h-screen sm:h-[30rem] space-y-7 px-6'>
						<div className='flex items-center justify-between w-full space-x-2'>
							<div className='flex items-center justify-start w-1/2'>
								<h6 className='text-xs font-semibold tracking-wide'>
									Model: 10250
								</h6>
							</div>
							<div
								className='flex items-center justify-end w-1/2 space-x-3 cursor-pointer group z-[2]'
								onMouseEnter={handleShow}
							>
								<span className='group-hover:animate-spin'>
									<CogIcon />
								</span>
								<span className='text-xs font-bold'>SPEC</span>
							</div>
						</div>
						{/* <div className='flex flex-col items-start w-full space-y-1'>
							<h1 className='text-xl uppercase'>Razer Blade 15</h1>
							<h1 className='text-lg'>
								Power. Performance. Perfection.
							</h1>
						</div> */}
						{/* <div className='flex items-center justify-start w-full space-x-5'>
								<h3 className='text-md'>
									Power. Performance. Perfection.
								</h3>
							</div> */}
						<div className='flex items-center justify-end w-full space-x-5'>
							<p className='text-[14px] leading-[25px] tracking-[0.5]'>
								{productDetail.slice(0, 250)}
								<span
									className='inline-block font-semibold text-[11px] animate-pulse cursor-pointer uppercase underline ml-2'
									onMouseEnter={() => setReadAll(true)}
								>
									read all
								</span>
							</p>
						</div>
						<div className='flex items-center justify-between w-full'>
							<div className='flex items-center justify-start w-1/2 h-full text-sm tracking-[3px]'>
								{stars.map((_, index) => (
									<StarIcon key={index} />
								))}
							</div>
							<div className='flex items-center justify-center w-1/2 space-x-3'>
								<span className='text-[15px]'>4.25</span>
								<span className='text-[12px]'>(153 reveiews)</span>
							</div>
						</div>
						<div className='flex items-center justify-between w-full'>
							<div className='flex flex-col items-start justify-start w-1/2 space-y-1.5'>
								<span className='relative text-xl font-bold text-red-400'>
									$2,964
									<span className='absolute top-1 text-[11px]'>
										99
									</span>
								</span>
								<span className='text-xs'>
									Shipping and taxes extra
								</span>
							</div>
							<div className='flex flex-col items-center justify-center w-1/2 space-y-3'>
								<span className='text-sm'>Choose Color</span>
								<div className='flex flex-row space-x-2'>
									{laptopColors?.map(item => (
										<span
											key={item.name}
											className={`rounded-full h-5 w-5 cursor-pointer`}
											style={{
												backgroundColor: `${item.color}`
											}}
											onMouseEnter={() => handleImage(item.name)}
										></span>
									))}
								</div>
							</div>
						</div>
						<div className='flex items-center justify-between w-full'>
							<div className='flex flex-row items-center justify-around w-1/2'>
								<span className='text-xs tracking-[1px]'>
									Quantity
								</span>
								<span className='flex items-center justify-center text-sm border-[0.5px] h-9 w-9'>
									{count}
								</span>
								<div className='flex flex-col items-center justify-center'>
									<span onClick={() => handleCount('increment')}>
										<ChevronUp />
									</span>
									<span onClick={() => handleCount('decrement')}>
										<ChevronDown />
									</span>
								</div>
							</div>
							<div className='flex flex-col items-center justify-center w-1/2 space-y-3'>
								<button
									className='bg-blue-900 px-5 py-2 font-semibold rounded-sm hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-900 hover:to-blue-800 hover:scale-105'
									onClick={handleCart}
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<div
						className={`${
							show ? 'opacity-100 w-full' : ' opacity-0 w-0'
						} absolute top-0 right-0 flex items-center justify-center h-full bg-gradient-to-b bg-opacity-80 backdrop-blur rounded-lg origin-right transition-all duration-300 ease-linear px-4 py-3 overflow-hidden`}
						onMouseLeave={handleHide}
					>
						<SpecsTable {...{ showTable, setShow, handleHide }} />
					</div>
					<div
						className={`${
							readAll ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
						} absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col items-center justify-center w-[90%] h-[50%] bg-gradient-to-b bg-opacity-80 backdrop-blur rounded-lg z-[5] origin-center transition-all duration-500 ease-in px-4 py-5`}
						onMouseLeave={() => setReadAll(false)}
					>
						<div
							className={`flex flex-col items-center justify-between w-full h-full transition-all duration-600 ease-in ${
								readAll
									? 'scale-100 opacity-100'
									: 'scale-0 opacity-0'
							}`}
						>
							<p className='text-[14px] leading-[25px] tracking-[0.5] px-5'>
								{productDetail}
							</p>
							<span
								className='text-xs text-red-400 font-semibold cursor-pointer'
								onClick={() => setReadAll(false)}
							>
								Tap to close
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default ProductCard;

const ImageComp = ({ src, alt, h }) => {
	return (
		<Image
			src='/images/razer-logo.png'
			alt='razer-logo'
			width={50}
			height={50}
			objectFit='contain'
			className=''
		/>
	);
};

const SpecsTable = ({ showTable, handleHide }) => {
	return (
		<table
			className={`flex-col items-center justify-center transition-all duration-300 ${
				showTable
					? 'flex table-auto scale-100 opacity-100 w-auto h-auto text-[15px]'
					: 'scale-0 opacity-0 h-0 text-transparent'
			}`}
		>
			<thead className='flex items-center justify-center w-full mb-2'>
				<tr className='flex w-full items-center justify-center border-b'>
					{tableHeaders.map((item, index) => (
						<td
							key={index}
							className='flex items-center justify-center w-1/2'
						>
							{item}
						</td>
					))}
				</tr>
			</thead>
			<tbody className='flex flex-col items-center justify-center w-full space-y-2'>
				{tableRows.map((item, index) => (
					<tr
						key={index}
						className='flex w-full items-center border-b'
					>
						<td className='flex items-center justify-start w-1/2'>
							{item.name}
						</td>
						<td className='flex items-center justify-start w-1/2'>
							{item.detail}
						</td>
					</tr>
				))}
				<tr className='text-sm text-red-400 cursor-pointer'>
					<td onClick={handleHide}>Tap to Close</td>
				</tr>
			</tbody>
		</table>
	);
};

const CogIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-5 h-5'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
		/>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
		/>
	</svg>
);

const StarIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		//stroke='currentColor'
		className='w-6 h-6 text-red-400'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
		/>
	</svg>
);

const ChevronUp = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-5 h-5 cursor-pointer'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M4.5 15.75l7.5-7.5 7.5 7.5'
		/>
	</svg>
);

const ChevronDown = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-5 h-5 cursor-pointer'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M19.5 8.25l-7.5 7.5-7.5-7.5'
		/>
	</svg>
);
