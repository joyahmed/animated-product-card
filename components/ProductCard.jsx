import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { laptopColors, laptops } from '../constants';
import ProductLeft from './ProductLeft';
import ProductRight from './ProductRight';

const ProductCard = ({ count, handleCount, handleCart }) => {
	const [mounted, setMounted] = useState(false);

	const [image, setImage] = useState(laptops[0].source);
	const [show, setShow] = useState(false);
	const [showTable, setShowTable] = useState(false);
	const [readAll, setReadAll] = useState(false);
	const [stars] = useState(new Array(5).fill(''));

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
		setTimeout(() => setShow(true), 500);
		setTimeout(() => setShow && setShowTable(true), 500);
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
			<div className='flex flex-col items-center justify-center w-full min-h-screen md:h-auto text-white sm:my-5 py-10 pb-4 z-[0]'>
				<motion.div
					className='relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen sm:min-h-full lg:h-[30rem] 2xl:h-[40rem] rounded-lg shadow-sm bg-gradient-to-r to-black/100 from-[purple]/10 via-gray-900 bg-opacity-10 shadow-[steelblue]/30 z-[1]'
					style={{ x, y, rotateX, rotateY, z: 100 }}
					drag
					dragElastic={0.16}
					dragcontraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
					whileTap={{ cursor: 'grabbing' }}
				>
					<ProductLeft
						{...{ motion, x, y, rotateX, rotateY, image }}
					/>

					<ProductRight
						{...{
							productDetail,
							stars,
							handleShow,
							handleHide,
							handleImage,
							readAll,
							setReadAll,
							count,
							laptopColors,
							handleCart,
							show,
							showTable,
							setShow,
							handleCount
						}}
					/>
				</motion.div>
			</div>
		</>
	);
};

export default ProductCard;
