import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  ${({ isAsset }) =>
    isAsset
      ? css`
          color: #06d6a0;
        `
      : css`
          color: #ef476f;
        `}
`;

export const StyledInput = styled.input`
  height: 2rem;
  border: 0;
  outline: none;
  width: 100%;
  background-color: #fafafa;

  ${({ isAsset }) =>
    isAsset
      ? css`
          border-bottom: 1px solid #06d6a0;
        `
      : css`
          border-bottom: 1px solid #ef476f;
        `};
`;
