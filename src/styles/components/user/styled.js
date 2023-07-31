import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 700px) {
    width: 85px;
    height: 85px;
  }
`;

export const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;

  .name {
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }
  .dot {
    @media (max-width: 700px) {
      display: none;
    }
  }
  .dot2 {
    display: none;
    @media (max-width: 700px) {
      display: block;
    }
  }
  .follow {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const StyledUserHero = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  position: relative;

  @media (max-width: 1024px) {
    width: 65%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    padding: 12px;
  }

  .icon {
    @media (max-width: 700px) {
      font-size: 26px;
      transform: translateX(4.3rem) translateY(3rem);
    }
  }
`;

export const StyledUserInfo = styled.div`
  width: 70%;
  flex-direction: column;
  display: flex;
  margin-top: 9px;
  position: relative;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const FollowDeatils = styled.div`
  display: none;
  justify-content: space-evenly;
  padding: 3px;

  @media (max-width: 700px) {
    display: flex;
  }
`;
