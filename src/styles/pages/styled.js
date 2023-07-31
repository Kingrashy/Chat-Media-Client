import { styled } from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  width: 80%;
  position: relative;
  margin-top: 2rem;

  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
  }
`;
