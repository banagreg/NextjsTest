import styled from 'styled-components';
import { StyledSectionContainer } from '../../components/Containers/SectionContainer/elements';
import { StyledSectionBigHeading } from '../../components/Typography/elements';
import { SectionSubheading } from '../../components/Typography/SectionSubheading';
import { Button } from '../../components/Button/Button';

export const StyledContainer = styled(({ height, ...props }) => (
  <StyledSectionContainer {...props} />
))`
  align-items: center;
`;

export const StyledGetStartedBtn = styled((props) => (
  <Button {...props} variant="contained" color="main" />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => (
  <StyledSectionBigHeading {...props} />
))`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
