import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 35rem;
  border-radius: 6px;
  background-color: #fafafa;
  box-shadow: 0 0 6px -2px #00000080;
`;

export const StyledNetWorthForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-family: "Fredoka One", cursive;
  font-size: 2rem;
  margin: 2rem 0;
  text-align: center;
  font-family: "Fredoka One", cursive;
`;

export const SubTitles = styled.div`
  display: flex;
  justify-content: space-around;
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

  &:hover {
    transform: scale(1.1);
  }

  ${({ isAsset }) =>
    isAsset
      ? css`
          background-color: #06d6a0;
        `
      : css`
          background-color: #ef476f;
        `};
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
