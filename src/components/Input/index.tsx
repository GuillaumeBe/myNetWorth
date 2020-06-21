import React, { FC } from "react";

import { IProps } from "./interfaces";
import { Wrapper, StyledInput } from "./styles";

const Input: FC<IProps> = ({ label, name, value, onChange, isAsset }) => {
  return (
    <Wrapper isAsset={isAsset}>
      <label htmlFor={name}>{label}</label>
      <StyledInput
        type="number"
        name={name}
        value={value}
        isAsset={isAsset}
        onChange={onChange}
        min={0}
      />
    </Wrapper>
  );
};

export default Input;
