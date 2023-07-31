import { styled } from "styled-components";

export const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 400px;

  @media (max-width: 1024px) {
    width: 90px;
  }
  @media (max-width: 800px) {
    width: 100%;
    display: ${({ chatId }) => chatId && "none"};
  }
`;

export const OnlineDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 9999px;
  position: absolute;
`;
