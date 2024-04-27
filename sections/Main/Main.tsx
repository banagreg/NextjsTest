import Image from 'next/image';
import {
  MainContainer,
  Heading,
  SubHeading,
  InfoContainer,
  CardsContainer,
  ImageWrapper,
} from './elements';
import { Card } from '../../collections/Card/Card';
import { FC } from 'react';
import { MainProps } from '../../types/types';

export const Main: FC<MainProps> = (props: MainProps) => {
  const { title, subTitle, image, cardsData } = props;

  return (
    <MainContainer>
      <Heading>{title}</Heading>
      <SubHeading>{subTitle}</SubHeading>

      <InfoContainer>
        <ImageWrapper>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </ImageWrapper>
        <CardsContainer>
          {cardsData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </CardsContainer>
      </InfoContainer>
    </MainContainer>
  );
};
