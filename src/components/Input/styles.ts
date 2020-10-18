import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  color: ${({ isAsset }) => (isAsset ? "#06d6a0" : "#ef476f")};
`;

export const StyledInput = styled.input`
  height: 2rem;
  border: 0;
  outline: none;
  width: 100%;
  background-color: #fafafa;
  border-bottom: 1px solid ${({ isAsset }) => (isAsset ? "#06d6a0" : "#ef476f")};
`;
