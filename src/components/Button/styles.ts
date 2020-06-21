import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border: 0;
  color: white;
  outline: none;
  display: block;
  margin: auto;
  cursor: pointer;
  transition: 0.5s;
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
