import Image from 'next/image';

const ImageComponent = ({ src, alt }) => {
	return (
		<Image src={src} alt={alt} layout='fill' objectFit='contain' />
	);
};

export default ImageComponent;
