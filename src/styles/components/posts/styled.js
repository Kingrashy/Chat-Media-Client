import { styled } from "styled-components";

export const StyledPostFeed = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  gap: 2rem;
  padding: 1rem;
  filter: blur(6px);

  @media (max-width: 700px) {
    width: 100%;
  }

  svg {
    filter: blur(8px);
  }
  p {
    filter: blur(6px);
  }
`;

export const StyledPostUserImage = styled.img`
  width: 40px;
  height: 40px;
  filter: blur(15px);
  user-select: none;
`;

export const StyledPostImage = styled.img`
  width: 100%;
  height: 500px;
  filter: blur(15px);
  user-select: none;
`;

export const StyledPostHeader = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledUserPost = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 700px) {
    padding: 12px;
    flex-direction: column;
  }
`;
