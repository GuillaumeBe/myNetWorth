import React, { useState, FC } from "react";
import NumberFormat from "react-number-format";

import { State, HandleChange } from "./interfaces";
import {
  Container,
  Wrapper,
  StyledNetWorthForm,
  Title,
  SubTitle,
  SubTitles,
  NetWorth,
  Image,
  Inputs,
  Button,
} from "./styles";
import Input from "../components/Input";

const App: FC = () => {
  const [state, setState] = useState<State>({
    assets: {
      realEstate: "",
      pea: "",
      ct: "",
      lifeInsurance: "",
      savings: [""],
    },
    liabilities: {
      realEstate: "",
      studentLoan: "",
      consumerCredits: [""],
    },
  });

  const handleChange = ({ type, name, value, index }: HandleChange) => {
    setState({
      ...state,
      [type]: {
        ...state[type],
        [name]:
          typeof index === "number"
            ? [
                ...state[type][name].slice(0, index),
                value,
                ...state[type][name].slice(index + 1),
              ]
            : value,
      },
    });
  };

  const netWorth =
    Object.values(state.assets)
      .flat()
      .reduce<number>((acc, value) => {
        return acc + Number(value);
      }, 0) -
      Object.values(state.liabilities)
        .flat()
        .reduce<number>((acc, value) => {
          return acc + Number(value);
        }, 0) || 0;

  return (
    <Container>
      <Wrapper>
        <Title>myNetWorth</Title>
        <SubTitles>
          <SubTitle>Actifs - Valorisation</SubTitle>
          <SubTitle>Passifs - Capital restant dû</SubTitle>
        </SubTitles>
        <StyledNetWorthForm>
          <Inputs isAsset>
            <Input
              label="Immobilier"
              name="realEstate"
              handleChange={({ currentTarget: { name, value } }) =>
                handleChange({ type: "assets", name, value })
              }
              value={state.assets.realEstate}
              isAsset
            />
            <Input
              label="PEA"
              name="pea"
              handleChange={({ currentTarget: { name, value } }) =>
                handleChange({ type: "assets", name, value })
              }
              value={state.assets.pea}
              isAsset
            />
            <Input
              label="Compte titre"
              name="ct"
              handleChange={({ currentTarget: { name, value } }) =>
                handleChange({ type: "assets", name, value })
              }
              value={state.assets.ct}
              isAsset
            />
            <Input
              label="Assurance vie"
              name="lifeInsurance"
              handleChange={({ currentTarget: { name, value } }) =>
                handleChange({ type: "assets", name, value })
              }
              value={state.assets.lifeInsurance}
              isAsset
            />
            {state.assets.savings.map((element: string, index: number) => {
              return (
                <Input
                  key={index}
                  label={`Epargne ${index + 1}`}
                  name="savings"
                  handleChange={({ currentTarget: { name, value } }) =>
                    handleChange({ type: "assets", name, value, index })
                  }
                  value={element}
                  isAsset
                />
              );
            })}
            <Button
              isAsset
              type="button"
              onClick={() =>
                setState({
                  ...state,
                  assets: {
                    ...state.assets,
                    savings: [...state.assets.savings, ""],
                  },
                })
              }
            >
              Ajouter une épargne
            </Button>
          </Inputs>
          <Inputs>
            <Input
              label="Immobilier"
              name="realEstate"
              handleChange={({ currentTarget: { name, value } }) =>
                handleChange({ type: "liabilities", name, value })
              }
              value={state.liabilities.realEstate}
            />
            <Input
              label="Prêt étudiant"
              name="studentLoan"
              handleChange={({ currentTarget: { name, value } }) =>
                handleChange({ type: "liabilities", name, value })
              }
              value={state.liabilities.studentLoan}
            />
            {state.liabilities.consumerCredits.map(
              (element: string, index: number) => {
                return (
                  <Input
                    key={index}
                    label={`Crédit conso ${index + 1}`}
                    name="consumerCredits"
                    handleChange={({ currentTarget: { name, value } }) =>
                      handleChange({ type: "liabilities", name, value, index })
                    }
                    value={element}
                  />
                );
              }
            )}
            <Button
              type="button"
              onClick={() =>
                setState({
                  ...state,
                  liabilities: {
                    ...state.liabilities,
                    consumerCredits: [...state.liabilities.consumerCredits, ""],
                  },
                })
              }
            >
              Ajouter un crédit conso
            </Button>
          </Inputs>
        </StyledNetWorthForm>
        <NumberFormat
          value={netWorth}
          displayType="text"
          thousandSeparator=" "
          renderText={(value) => <NetWorth>{value} €</NetWorth>}
        />
        <Image
          src={netWorth >= 1000000 ? "bill.jpg" : "broke.png"}
          alt="Broke"
          height="150"
        />
      </Wrapper>
    </Container>
  );
};

export default App;
