import React from "react";
import { Container, Background } from "./styles";

export interface StageStatusProps {
  label: string;
  status?: keyof typeof StageStatusEnum;
}

export enum StageStatusEnum {
  Sale = 1,
  Inspection = 2,
  Administrative = 3,
  Execution = 4,
  Completed = 5,
  Canceled = 6,
}

const StageStatus: React.FC<StageStatusProps> = ({
  label,
  status = "Sale",
}) => {
  return (
    <Container>
      <Background
        className={`StatusBackground status-${StageStatusEnum[status]}`}
        data-testid="status-background"
      >
        <strong>{label}</strong>
      </Background>
    </Container>
  );
};

export default StageStatus;
