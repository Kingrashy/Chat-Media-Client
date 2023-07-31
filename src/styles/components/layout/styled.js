import styled from "styled-components";

export const StyledRightNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;
