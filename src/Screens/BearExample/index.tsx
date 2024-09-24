import React, { useState } from "react";
import { Container, StageStatusContainer } from "./styles";
import useBearStore from "../../Store/userStore";
import Spacer from "../../Components/Spacer";
import AddressCard from "../../Components/AddressCard";
import TypeOfPersonCard from "../../Components/TypeOfPersonCard";
import StageStatus from "../../Components/StageStatus";
import CollapsedMenu from "../../Components/CollapsedMenu";

interface listStatusProps {
  status: number;
  label: string;
  value:
    | "Sale"
    | "Inspection"
    | "Administrative"
    | "Execution"
    | "Completed"
    | "Canceled"
    | undefined;
}

const BearExample: React.FC = () => {
  const bear = useBearStore((e) => e.bears);
  const addBear = useBearStore((e) => e.increase);

  const [listOfStatus, setlistOfStatus] = useState<listStatusProps[]>([
    {
      status: 1,
      label: "Sale",
      value: "Sale",
    },
    {
      status: 2,
      label: "Inspection",
      value: "Inspection",
    },
    {
      status: 3,
      label: "Administrative",
      value: "Administrative",
    },
    {
      status: 4,
      label: "Execution",
      value: "Execution",
    },
    {
      status: 5,
      label: "Completed",
      value: "Completed",
    },
    {
      status: 6,
      label: "Canceled",
      value: "Canceled",
    },
  ]);

  return (
    <Container>
      <h1>{process.env.REACT_APP_BASE_URL}</h1>
      <Spacer size="xl" />
      <h2>Quantidade de ursos: {bear}</h2>
      <button onClick={() => addBear(1)}>Adicionar</button>

      <CollapsedMenu />
      <Spacer />
      <StageStatusContainer>
        {listOfStatus.map((status) => (
          <StageStatus label={status.label} status={status.value} />
        ))}
      </StageStatusContainer>
      <Spacer size="m" />
      <AddressCard
        street="Rua: testando testonildo"
        neighborhood="nova vila"
        city="campo largo"
        state="PR"
        complement="casa numero 007"
        houseName="Casa da bruxa"
      />
      <Spacer size="m" />
      <TypeOfPersonCard type="company" />
    </Container>
  );
};

export default BearExample;
