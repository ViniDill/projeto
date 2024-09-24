import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { AccordionContainer, ContainerTitle } from "./styles";

export interface DropdownButtonProps {
  children?: React.ReactNode;
  iconName?: string;
  header?: string;
}

const DropDownButton: React.FC<DropdownButtonProps> = ({
  children,
  iconName,
  header,
}) => {
  return (
    <AccordionContainer>
      <Accordion transition transitionTimeout={250}>
        <AccordionItem
          header={
            <ContainerTitle>
              {iconName && (
                <img
                  src={`/icons/dashboardIcons/${iconName}.svg`}
                  alt={iconName}
                />
              )}
              <span>{header}</span>
            </ContainerTitle>
          }
        >
          {children}
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default DropDownButton;
