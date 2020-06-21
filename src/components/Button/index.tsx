import React, { FC } from "react";
import { IProps } from "./interfaces";
import { StyledButton } from "./styles";

const Button: FC<IProps> = ({ children, onClick, isAsset }) => {
  return (
    <StyledButton isAsset={isAsset} type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
