import Image from 'next/image';
import React from 'react';

const ShoeDetail = () => {
	return (
		<div className='flex flex-col w-full h-full  py-6 leading-3 px-4'>
			<div className='uppercase text-sm text-white font-semibold'>NIKE</div>
			<div className='flex w-full items-center justify-between py-2 my-2'>
				<div className='text-[1rem] font-bold uppercase'>
					AIR JORDAN 1 MID SE GC
				</div>
				<div className='text-[1rem] font-bold uppercase'>$856</div>
			</div>

			<div className='flex w-full items-center justify-between py-2 my-2'>
				<div className='text-[1rem] font-bold uppercase'>NEXT GEN SHOE</div>
				<button className='bg-amber-300 text-[20px] font-bold text-black px-5 py-5 rounded-lg'>
					Buy
				</button>
			</div>
			<div className='flex w-full items-center justify-center '>
				<Image
					src='/assets/images/nike-logo.png'
					alt='logo'
					width={46}
					height={20}
				/>
			</div>
		</div>
	);
};

export default ShoeDetail;
