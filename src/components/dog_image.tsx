// dog_image.tsx
interface DogImageProps {
	image: string;
	altText: string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}

const DogImage: React.FC<DogImageProps> = ({ image, altText, licenceType, licenceUrl, attributionName, attributionUrl}) => (
	<>
		<img className='card__image' src={image} alt={altText} />
	</>
);

export default DogImage;