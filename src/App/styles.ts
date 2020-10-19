import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: #fafafa;
  box-shadow: 0 0 6px -2px #00000080;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const StyledNetWorthForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-family: "Fredoka One", cursive;
  font-size: 2rem;
  margin: 1rem 0 2rem 0;
  text-align: center;
  font-family: "Fredoka One", cursive;
`;

export const SubTitles = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

export const Inputs = styled.div`
  flex: 1;
  margin: 0 5%;
`;

export const Button = styled.button`
  border: 0;
  color: white;
  outline: none;
  display: block;
  margin: auto;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 6px;
  padding: 0.7rem 1.3rem;
  background-color: ${({ isAsset }) => (isAsset ? "#06d6a0" : "#ef476f")};

  &:hover {
    transform: scale(1.1);
  }
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

  ${({ isBill }) =>
    isBill &&
    css`
      animation: rotation 2s infinite linear;
    `}
`;
