import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 35rem;
  min-height: 55rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 6px -2px #00000080;
`;

export const StyledNetWorthForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  margin-top: 2.5rem;
  text-align: center;
`;

export const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

export const NetWorth = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 2rem 0;
  font-size: 4rem;
  color: #ffd166;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto 1.5rem;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  ${({ src }) =>
    src === "bill.jpg" &&
    css`
      animation: rotation 2s infinite linear;
    `}
`;
