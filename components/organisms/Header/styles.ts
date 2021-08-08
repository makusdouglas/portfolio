import styled from "styled-components";

export const StyledHeder = styled.header`
  display: flex;
  padding: 30px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div:nth-child(1) {
  }

  & > div:nth-child(2) {
    flex: 1;
  }

  img {
    min-width: 150px;
  }

  @media (max-width: 660px) {
    flex-direction: column;
    padding-top: 10px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 50px;
  a {
    margin-right: 5px;
  }

  @media (max-width: 660px) {
    justify-content: flex-start;
  }

  @media (max-width: 430px) {
    margin-right: 10px;
  }
`;
