import styled from 'styled-components';
import { BiPhoneCall } from 'react-icons/bi';

export const StyledCallDiv = styled.div`
  display: flex;
  flex-direction: column;

  h4,
  h5 {
    margin: 0.25rem 0.5rem;
    color: var(--secondary-text-color);
  }

  h5 {
    color: var(--main-text-color);
  }
`;

export const StyledBiPhoneCall = styled(BiPhoneCall)`
  background-color: lightgreen;
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 0.4rem;
  font-size: 32px;
`;

export const StyledWrapperDiv = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;

    ${StyledBiPhoneCall} {
      font-size: 26px;
    }

    ${StyledCallDiv} {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 600px) {
    ${StyledBiPhoneCall} {
      font-size: 20px;
    }

    ${StyledCallDiv} {
      font-size: 12px;
    }
  }
`;
