import React from "react";
import styled from "styled-components";

interface CalculateComponentProps {
  monthPayment: number;
  totalPayment: number;
}

const CalculateComponent: React.FC<CalculateComponentProps> = ({
  monthPayment,
  totalPayment,
}) => {
  return (
    <Container>
      <h1>Your results</h1>
      <span>
        Your results are shown below based on the information you privided. To
        adjust the results,edit the form and click "calculate repayments" again
      </span>
      <SubContainer>
        <h3>Your monthly repayments</h3>
        <h1>$ {Number(monthPayment.toFixed(2)).toLocaleString("en-US")}</h1>
        <h3>Total you'll repay over the term </h3>
        <h2>$ {Number(totalPayment.toFixed(2)).toLocaleString("en-US")}</h2>
      </SubContainer>
    </Container>
  );
};

export default CalculateComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 80px;
  gap: 20px;

  span {
    text-align: justify;
    font-size: 20px;
    color: gainsboro;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    padding: 10px 20px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px 40px;
  border-radius: 10px;
  border-top-color: greenyellow;
  border-top-width: 3px;
  border-top-style: solid;
  background-color: hsl(202, 55%, 10%);

  h1 {
    color: yellowgreen;
    margin-top: 2px;
    margin-bottom: 1px;
    border-bottom-color: gray;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    padding-bottom: 35px;
  }

  h2 {
    color: white;
    margin-top: 1px;
  }

  h3 {
    color: gray;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
`;
