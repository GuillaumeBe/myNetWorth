import React, { useState, FC } from "react";
import NumberFormat from "react-number-format";
import { IState, HandleChangeType } from "./interfaces";
import {
  Wrapper,
  StyledNetWorthForm,
  Title,
  SubTitle,
  NetWorth,
  Image,
} from "./styles";
import Input from "../Input";
import Button from "../Button";

const NetWorthForm: FC = () => {
  const [state, setState] = useState<IState>({
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

  const handleChange = ({ type, name, value, index }: HandleChangeType) => {
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
    <Wrapper>
      <Title>myNetWorth</Title>
      <StyledNetWorthForm>
        <div>
          <SubTitle>Actifs - Valorisation</SubTitle>
          <Input
            label="Immobilier"
            name="realEstate"
            onChange={({ currentTarget: { name, value } }) =>
              handleChange({ type: "assets", name, value })
            }
            value={state.assets.realEstate}
            isAsset
          />
          <Input
            label="PEA"
            name="pea"
            onChange={({ currentTarget: { name, value } }) =>
              handleChange({ type: "assets", name, value })
            }
            value={state.assets.pea}
            isAsset
          />
          <Input
            label="Compte titre"
            name="ct"
            onChange={({ currentTarget: { name, value } }) =>
              handleChange({ type: "assets", name, value })
            }
            value={state.assets.ct}
            isAsset
          />
          <Input
            label="Assurance vie"
            name="lifeInsurance"
            onChange={({ currentTarget: { name, value } }) =>
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
                onChange={({ currentTarget: { name, value } }) =>
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
        </div>
        <div>
          <SubTitle>Passifs - Capital restant dû</SubTitle>
          <Input
            label="Immobilier"
            name="realEstate"
            onChange={({ currentTarget: { name, value } }) =>
              handleChange({ type: "liabilities", name, value })
            }
            value={state.liabilities.realEstate}
          />
          <Input
            label="Prêt étudiant"
            name="studentLoan"
            onChange={({ currentTarget: { name, value } }) =>
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
                  onChange={({ currentTarget: { name, value } }) =>
                    handleChange({ type: "liabilities", name, value, index })
                  }
                  value={element}
                />
              );
            }
          )}
          <Button
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
        </div>
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
  );
};

export default NetWorthForm;
