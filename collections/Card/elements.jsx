import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 7rem;
  border-radius: 10px;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid #006efd;
    color: #006efd;
    cursor: pointer;
  }
`;

export const CardInnerHeading = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0;

  ${CardContainer}:hover & {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem; /* Decrease font size for smaller screens */
  }
`;

export const CardInnerText = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: black;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem; /* Decrease font size for smaller screens */
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  max-width: 5rem;
  max-height: 5rem;
  width: 75%;
  height: 75%;
  justify-content: center;
  align-self: center;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    max-width: 4rem; /* Decrease max-width for smaller screens */
    max-height: 4rem; /* Decrease max-height for smaller screens */
  }
`;
