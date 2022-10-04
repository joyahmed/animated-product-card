import ImageComponent from './ImageComponent';

const ProductLeft = ({ motion, image, x, y, rotateX, rotateY }) => {
	return (
		<div className='flex flex-col items-center justify-between w-1/2 h-[20rem]  lg:h-[30rem] pt-5 sm:pt-0 space-y-7'>
			<div className='flex flex-0 flex-col items-start w-screen lg:w-full space-y-1 h-[10%] px-8 sm:mt-6'>
				<h1 className='sm:text-xl uppercase'>Razer Blade 15</h1>
				<h1 className='text-lg'>Power. Performance. Perfection.</h1>
			</div>
			<motion.div
				className={`relative flex flex-2 items-center justify-center w-screen sm:w-full h-[calc(100vh_-_33rem)] sm:-mt-7 ${
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
					<ImageComponent {...{ src: image, alt: 'razer' }} />
				)}
			</motion.div>

			<div className='relative flex items-center justify-center w-1/3 h-[10%] mb-5'>
				<ImageComponent
					{...{
						src: '/images/razer-logo.png',
						alt: 'razer-logo'
					}}
				/>
			</div>
		</div>
	);
};

export default ProductLeft;
