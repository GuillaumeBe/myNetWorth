import React, { FC } from "react";

import { Props } from "./interfaces";
import { Wrapper, StyledInput } from "./styles";

const Input: FC<Props> = ({ label, name, value, handleChange, isAsset }) => {
  return (
    <Wrapper isAsset={isAsset}>
      <label htmlFor={name}>{label}</label>
      <StyledInput
        type="number"
        name={name}
        value={value}
        isAsset={isAsset}
        onChange={handleChange}
        min={0}
      />
    </Wrapper>
  );
};

export default Input;
