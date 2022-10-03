import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import ShoeDetail from './ShoeDetail';

const NikeCard = props => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

	return (
		<div className='flex items-center justify-center w-full h-full '>
			<motion.div
				className='card'
				style={{ x, y, rotateX, rotateY, z: 100 }}
				drag
				dragElastic={0.16}
				dragContraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
				whileTap={{ CURSOR: 'grabbing' }}
			>
				<div className='top-container'>
					<div className='circle-wrapper'>
						<div className='circle'></div>
					</div>
					<motion.div
						className='shoes-wrapper absolute -z-[1]'
						style={{ x, y, rotateX, rotateY, rotate: '-25deg', z: 0 }}
					>
						{/* <div className='shoe'> */}
						<Image
							src='/assets/images/air-jordan-transparent.png'
							alt='air-jordan'
							layout='fill'
							objectFit='contain'
						/>
						{/* </div> */}
					</motion.div>
					<div className='nike-text mt-46'>NIKE AIR</div>
				</div>
				<div className='bottom'>
					<ShoeDetail />
				</div>
			</motion.div>
		</div>
	);
};

export default NikeCard;
