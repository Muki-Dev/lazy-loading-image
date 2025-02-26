// src/components/LazyImages.js
import { useState, useEffect, useRef} from 'react';
import '../styles/LazyImages.css';

const LazyImages = ({ src, alt}) => {
	const [isVisible,setIsVisible] = useState(false);
	const imgRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if(entry.isIntersecting){
					setIsVisible(true);
					observer.disconnect()
				}
			},
			{ threshold: 0.1}
			);
		if(imgRef.current){
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect()
	},[])

	return(
			<img
				ref={imgRef}
				className='lazy-image'
				src={isVisible ? src: 'https://placehold.co/600x400'}
				alt={alt}
				loading='lazy' 
				/>
		);
};

export default LazyImages;
