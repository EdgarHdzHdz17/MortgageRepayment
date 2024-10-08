import React from "react";
import CalculatorIllustration from "../../assets/images/icon-calculator.svg";
import styled from "styled-components";
interface FormComponentProps {
  morgageAmount: number | undefined;
  setMorgageAmount: (value: number | undefined) => void;
  mortgageTerm: number | undefined;
  setMortgageTerm: (value: number | undefined) => void;
  interestRate: number | undefined;
  setInterestRate: (value: number | undefined) => void;
  mortgageType: string;
  setMortgageType: (value: string) => void;
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  morgageAmount,
  setMorgageAmount,
  mortgageTerm,
  setMortgageTerm,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  submitForm,
}) => {
  const clearForm = () => {
    setMorgageAmount(undefined);
    setMortgageTerm(undefined);
    setInterestRate(undefined);
    setMortgageType(" ");
  };

  return (
    <Container>
      <h1 className="Title">Mortgage Calculator</h1>
      <span className="Clear" onClick={clearForm}>
        Clear All
      </span>
      <FormContainer onSubmit={submitForm}>
        <AmountContainer>
          <h2>Mortgage Amount</h2>
          <label>
            $
            <input
              type="number"
              placeholder="Only Numbers"
              value={morgageAmount !== undefined ? morgageAmount : ""}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0 && value <= 999999) {
                  setMorgageAmount(value);
                }
              }}
              min={0}
              max={999999}
            />
          </label>
        </AmountContainer>
        <MortgageContainer>
          <div>
            <h2>Mortgage Term</h2>
            <label>
              Years
              <input
                type="number"
                placeholder="Only Numbers"
                value={mortgageTerm !== undefined ? mortgageTerm : ""}
                onChange={(e) => setMortgageTerm(Number(e.target.value))}
              />
            </label>
          </div>
          <div>
            <h2>Interest Rain</h2>
            <label>
              %
              <input
                type="number"
                placeholder="Only Numbers"
                value={interestRate !== undefined ? interestRate : ""}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0 && value <= 100) {
                    setInterestRate(value);
                  }
                }}
                min={0}
                max={99}
              />
            </label>
          </div>
        </MortgageContainer>
        <TypeContainer>
          <h2>Mortgage Type: {mortgageType.toUpperCase()}</h2>
          <label className="Select">
            <input
              className="radio-input"
              type="radio"
              value="repayment"
              checked={mortgageType === "repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Repayment
          </label>
          <label className="Select">
            <input
              className="radio-input"
              type="radio"
              value="interest-only"
              checked={mortgageType === "interest-only"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Interest Only
          </label>
        </TypeContainer>
        <button className="Calculate">
          <img src={CalculatorIllustration} alt={"Ilustration"}></img>
          Calculate Repayments
        </button>
      </FormContainer>
    </Container>
  );
};

export default FormComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px 40px;

  .Title {
    color: hsl(202, 55%, 16%);
  }

  .Clear {
    color: gray;
    font-weight: bold;
    cursor: pointer;
    /* text-decoration: underline; */
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: gray;
    text-underline-offset: 5px;
  }

  .Calculate {
    background-color: yellowgreen;
    color: hsl(202, 55%, 16%);
    border-radius: 50px;
    height: 80px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Title {
      text-align: center;
      font-size: 30px;
    }

    .Calculate {
      width: 100%;
      height: 50px;
      padding: 10px;
      font-size: 15px;
    }
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  h2 {
    color: gray;
  }

  label {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 10px;
    padding: 0px 0px 0px 10px;
    font-size: 20px;
    color: hsl(202, 55%, 16%);
    font-weight: bold;
    border-radius: 3px;
    border: 2px solid gray;
    background-color: hsl(202, 86%, 94%);

    &:hover {
      border: 2px solid yellowgreen;
      outline: none;
    }
  }

  input {
    background-color: white;
    width: 100%;
    height: 30px;
    padding: 10px;
    color: black;
    border: none;

    &:focus {
      border-color: yellowgreen;
      outline: none;
    }
  }

  @media (max-width: 768px) {
    gap: 5px;
    font-size: 10px;

    label {
      font-size: 15px;
    }
  }
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MortgageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  div {
    display: flex;
    width: 50%;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px;

    div {
      width: 100%;
    }
  }
`;

const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;

  .Select {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    height: 30px;
    padding: 10px;
    color: gray;
    border: 2px solid gray;
    background-color: white;
    cursor: pointer;
    font-weight: bold;

    .radio-input {
      width: 20px;
      height: 20px;
      background-color: green;
      opacity: 20%;
      padding: 10px;
      border-radius: 50%;
      background-size: contain;
      border: 2px solid gray;
      border-width: 20px;
    }

    &:hover {
      border: 2px solid yellowgreen;
    }

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
