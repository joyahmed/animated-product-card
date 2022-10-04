import {
	ChevronDown,
	ChevronUp,
	CogIcon,
	StarIcon
} from './IconsComponent';
import SpecsTable from './SpecsTable';

const ProductRight = ({
	productDetail,
	stars,
	laptopColors,
	handleShow,
	handleHide,
	handleImage,
	handleCart,
	readAll,
	setReadAll,
	count,
	show,
	setShow,
	showTable,
	handleCount
}) => {
	return (
		<>
			<div className='relative flex flex-col items-between justify-center w-full sm:w-1/2 h-[30rem] sm:h-[30rem] space-y-7 px-6 pb-5 sm:pb-0'>
				<div className='flex items-center justify-between w-full space-x-2'>
					<div className='flex items-center justify-start w-1/2'>
						<h6 className='text-xs font-semibold tracking-wide'>
							Model: 10250
						</h6>
					</div>
					<div
						className='flex items-center justify-end w-1/2 space-x-3 cursor-pointer group'
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
							<span className='absolute top-1 text-[11px]'>99</span>
						</span>
						<span className='text-xs'>Shipping and taxes extra</span>
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
						<span className='text-xs tracking-[1px]'>Quantity</span>
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
						readAll ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
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
		</>
	);
};

export default ProductRight;
