
import Image from 'next/image'

import { CardContainer, CardInfoContainer, CardInnerHeading, CardInnerText, ImageContainer } from "./elements"

export const Card = ({ card }) => {
	const { image, title, description } = card;
	return (
		<CardContainer >
			<ImageContainer>
				<Image src={image.src} alt={title} width={image.width} height={image.height} />
			</ImageContainer>
			<CardInfoContainer>
				<CardInnerHeading>{card.title}</CardInnerHeading>
				<CardInnerText>{card.description}</CardInnerText>
			</CardInfoContainer>
		</CardContainer>
	);
};