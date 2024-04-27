import styled from 'styled-components';
import { SectionSubheading } from '../../components/Typography/SectionSubheading';
import { StyledSectionContainer } from '../../components/Containers/SectionContainer/elements';
import { SectionHeading } from '../../components/Typography/SectionHeading';
import { HTMLAttributes } from 'react';

export const MainContainer = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} />
))`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5rem auto;
  background-image: url('/img/background.png');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Heading = styled((props: HTMLAttributes<HTMLHeadingElement>) => (
  <SectionHeading {...props} />
))`
  color: black;
  margin: 0;
  text-align: center;
`;

export const SubHeading = styled(
  (props: HTMLAttributes<HTMLHeadingElement>) => (
    <SectionSubheading {...props} />
  ),
)`
  color: black;
  margin: 0;
  text-align: center;
`;
export const ImageWrapper = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} />
))`
	height: 100%
	display: flex;
	justify-content: center;
`;

export const InfoContainer = styled(
  (props: HTMLAttributes<HTMLHeadingElement>) => (
    <StyledSectionContainer {...props} />
  ),
)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CardsContainer = styled(
  (props: HTMLAttributes<HTMLDivElement>) => <div {...props} />,
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  max-width: 500px;

  & > :nth-child(1) {
    width: 80%;
    background-color: #f9f9f9;
  }

  & > :nth-child(2) {
    width: 90%;
    background-color: #f4f4f4;
  }

  & > :nth-child(3) {
    width: 100%;
    background-color: #f1f1f1;
  }
`;
