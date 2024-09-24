import React, { useState, useCallback, useEffect } from "react";
import {
  Container,
  ContainerContent,
  Header,
  Title,
  RegisterIconContainer,
  Content,
  ContainerFilter,
  ContainerInput,
  Filter,
  Table,
  TableContent,
  IconBody,
  ContainerTable,
  MobileContainer,
  MobileContent,
  MobileIcon,
  DrawerComponents,
  DrawerComponentsContainer,
  DrawerPadding,
  DrawerButtons,
  ItemDivision,
  ProposalButton,
  DrawerFullScreen,
  DrawerMobile,
  ItemDivisionMobile,
  DrawerComponentsMobile,
} from "./styles";
import { useTranslation } from "react-i18next";
import Spacer from "../../Components/Spacer";
import Button from "../../DesingSystem/Button";
import Input from "../../DesingSystem/Input";
import Text from "../../DesingSystem/Text";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StageStatus from "../../Components/StageStatus";
import { Drawer } from "@mui/material";
import ReadOnly from "../../Components/ReadOnly";
import SkeletonProposalList from "./SkeletonProposalList";

const ProposalList: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [selectedProposalId, setSelectedProposalId] = useState<number | null>(
    null
  );
  const [drawerAnchor, setDrawerAnchor] = useState<
    "left" | "right" | "top" | "bottom"
  >("right");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1170) {
        setDrawerAnchor("bottom");
      } else {
        setDrawerAnchor("right");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = (ProposalId: number | null) => () => {
    setSelectedProposalId(ProposalId);
    setOpen(!open);
  };

  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteClick = (
    ProposalId: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setSelectedProposalId(ProposalId);
    setConfirmDelete(true);
    setOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteProposal(selectedProposalId);
    } catch (error) {
      console.error("Error deleting proposal:", error);
    }
    setConfirmDelete(false);
  };

  const deleteProposal = async (ProposalId: number | null) => {
    if (ProposalId !== null) {
      try {
        console.log("Deleting proposal with ID:", ProposalId);
      } catch (error) {
        throw new Error("Failed to delete proposal");
      }
    } else {
      throw new Error("No proposal ID provided for deletion");
    }
  };

  const [listOfProposal, setlistOfProposal] = useState([
    {
      id: 1,
      date: "12/12/2024",
      number: "5550248741656",
      client: "João Miguel da Silva",
      status: "Sale" as "Sale",
      value: "R$ 1000,00",
      validity: "Recalcular",
      subStatus: "Orçamento",
      productDate: "09/05/2021 - 13:35",
      indicator: "------",
    },
    {
      id: 2,
      date: "12/12/2024",
      number: "5550248741657",
      client: "João Miguel da Silva",
      status: "Inspection" as "Inspection",
      value: "R$ 1003,00",
      validity: "Recalcular",
      subStatus: "Orçamento",
      productDate: "09/05/2021 - 13:35",
      indicator: "------",
    },
    {
      id: 3,
      date: "12/12/2024",
      number: "5550248741658",
      client: "João Miguel da Silva",
      status: "Administrative" as "Administrative",
      value: "R$ 1783,00",
      validity: "Recalcular",
      subStatus: "Orçamento",
      productDate: "09/05/2021 - 13:35",
      indicator: "------",
    },
    {
      id: 4,
      date: "12/12/2024",
      number: "5550248741659",
      client: "João Miguel da Silva",
      status: "Execution" as "Execution",
      value: "R$ 1902,00",
      validity: "Recalcular",
      subStatus: "Orçamento",
      productDate: "09/05/2021 - 13:35",
      indicator: "------",
    },
    {
      id: 5,
      date: "12/12/2024",
      number: "5550248741660",
      client: "João Miguel da Silva",
      status: "Completed" as "Completed",
      value: "R$ 1026,00",
      validity: "Recalcular",
      subStatus: "Orçamento",
      productDate: "09/05/2021 - 13:35",
      indicator: "------",
    },
    {
      id: 6,
      date: "12/12/2024",
      number: "5550248741661",
      client: "João Miguel da Silva",
      status: "Canceled" as "Canceled",
      value: "R$ 1740,00",
      validity: "Recalcular",
      subStatus: "Orçamento",
      productDate: "09/05/2021 - 13:35",
      indicator: "------",
    },
  ]);

  const renderProposalList = useCallback(
    () => (
      <Table>
        <thead>
          <tr>
            <th className="Date">{t("proposal_list_date")}</th>
            <th className="Number">{t("proposal_list_number")}</th>
            <th className="Client">{t("proposal_list_client")}</th>
            <th className="Stage">{t("proposal_list_stage")}</th>
            <th className="Value">{t("proposal_list_value")}</th>
            <th className="Action">{t("proposal_list_action")}</th>
          </tr>
        </thead>
        <TableContent>
          {listOfProposal.map((proposal) => (
            <tr key={proposal.id}>
              <td className="Date">{proposal.date}</td>
              <td className="Number">{proposal.number}</td>
              <td className="Client">{proposal.client}</td>
              <td className="Stage">
                <StageStatus label={proposal.status} status={proposal.status} />
              </td>
              <td className="Value">{proposal.value}</td>
              <td>
                <IconBody onClick={toggleDrawer(proposal.id)}>
                  <img
                    src="../icons/threeDots.svg"
                    alt="three dots icon"
                    className="Options"
                  />
                </IconBody>
              </td>
            </tr>
          ))}
        </TableContent>
      </Table>
    ),
    [listOfProposal]
  );

  const selectedProposal = listOfProposal.find(
    (proposal) => proposal.id === selectedProposalId
  );

  return (
    <Container>
      {loading ? (
        <SkeletonProposalList />
      ) : (
        <ContainerContent>
          <Header>
            <Title>{t("proposal_list_title")}</Title>
            <Button variant="Primary" className="RegisterButton">
              {t("proposal_list_register_button")}
            </Button>
            <RegisterIconContainer>
              <img
                src="./icons/register.svg"
                alt="register icon"
                className="RegisterIcon"
              />
            </RegisterIconContainer>
          </Header>
          <Content>
            <ContainerFilter>
              <ContainerInput>
                <Input
                  placeholder={t("proposal_list_search_placeholder")}
                  className="SearchInput"
                />
              </ContainerInput>
              <Button variant="Neutral" className="SearchButton">
                {t("proposal_list_button_search")}
              </Button>
            </ContainerFilter>
            <Spacer size="l" />
            <Filter onClick={() => alert(`Aqui vai mostrar os filtros!`)}>
              <span className="FilterText">{t("proposal_list_filter")}</span>
              <img
                src="./icons/filter.svg"
                alt="filter icon"
                className="FilterIcon"
              />
            </Filter>
            <Spacer size="l" />
            <ContainerTable>{renderProposalList()}</ContainerTable>
            <Spacer size="l" />
            {listOfProposal.map((proposal) => (
              <MobileContainer key={proposal.id}>
                <MobileContent>
                  <Spacer size="s" />
                  <span className="ProposalNumber">
                    <strong>{proposal.number}</strong>
                  </span>
                  <Spacer size="s" />
                  <div className="MobileStatus">
                    <span>{proposal.client}</span>
                    <Spacer size="s" />
                    <span>{proposal.value}</span>
                    <Spacer size="s" />
                    <span className={`status ${proposal.status}`}>
                      <strong>{proposal.status}</strong>
                    </span>
                    <Spacer size="s" />
                  </div>
                </MobileContent>
                <IconBody>
                  <MobileIcon onClick={toggleDrawer(proposal.id)}>
                    <MoreHorizIcon className="IconRotated" />
                  </MobileIcon>
                </IconBody>
              </MobileContainer>
            ))}
          </Content>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            anchor={drawerAnchor}
          >
            {selectedProposal && (
              <DrawerComponentsContainer>
                <img
                  src="../icons/exit.svg"
                  alt=""
                  onClick={() => setOpen(false)}
                  className="ExitImg"
                />
                <DrawerPadding>
                  <DrawerComponents className="DrawerDivisionNumber">
                    <span>{t("proposal_list_proposal_number")}</span>
                    <span className="DrawerProposalNumber">
                      {selectedProposal.number}
                    </span>
                  </DrawerComponents>
                  <DrawerFullScreen>
                    <DrawerComponents className="DrawerData">
                      <ItemDivision className="DateProposal">
                        <label>{t("proposal_list_proposal_date")}</label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.date}`}
                        />
                      </ItemDivision>
                      <Spacer size="m" />
                      <ItemDivision>
                        <label>{t("proposal_list_client")}</label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.client}`}
                        />
                      </ItemDivision>
                      <Spacer size="m" />
                      <ItemDivision>
                        <label className={`status ${selectedProposal.status}`}>
                          {t("proposal_list_status")}
                        </label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.status}`}
                        />
                      </ItemDivision>
                      <Spacer size="m" />
                      <ItemDivision>
                        <label>{t("proposal_list_validity")}</label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.validity}`}
                        />
                      </ItemDivision>
                      <Spacer size="m" />
                      <ItemDivision>
                        <label>{t("proposal_list_indicator")}</label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.indicator}`}
                        />
                      </ItemDivision>
                      <Spacer size="m" />
                      <ItemDivision>
                        <label>{t("proposal_list_substatus")}</label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.subStatus}`}
                        />
                      </ItemDivision>
                      <Spacer size="m" />
                      <ItemDivision>
                        <label>{t("proposal_list_product_date")}</label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.productDate}`}
                        />
                      </ItemDivision>
                      <Spacer size="m" />
                      <ItemDivision>
                        <label>{t("proposal_list_value")}</label>
                        <Spacer size="xs" />
                        <ReadOnly
                          align="left"
                          value={`${selectedProposal.value}`}
                        ></ReadOnly>
                      </ItemDivision>
                    </DrawerComponents>
                  </DrawerFullScreen>
                  <DrawerMobile>
                    <DrawerComponentsMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>
                            {t("proposal_list_proposal_date_mobile")}
                          </strong>
                        </span>
                        <span>{selectedProposal.date}</span>
                      </ItemDivisionMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>{t("proposal_list_client_mobile")}</strong>
                        </span>
                        <span>{selectedProposal.client}</span>
                      </ItemDivisionMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>{t("proposal_list_status_mobile")}</strong>
                        </span>
                        <span>{selectedProposal.status}</span>
                      </ItemDivisionMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>{t("proposal_list_validity_mobile")}</strong>
                        </span>
                        <span>{selectedProposal.validity}</span>
                      </ItemDivisionMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>{t("proposal_list_indicator_mobile")}</strong>
                        </span>
                        <span>{selectedProposal.indicator}</span>
                      </ItemDivisionMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>{t("proposal_list_substatus_mobile")}</strong>
                        </span>
                        <span>{selectedProposal.subStatus}</span>
                      </ItemDivisionMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>
                            {t("proposal_list_product_date_mobile")}
                          </strong>
                        </span>
                        <span>{selectedProposal.productDate}</span>
                      </ItemDivisionMobile>
                      <ItemDivisionMobile>
                        <span>
                          <strong>{t("proposal_list_value_mobile")}</strong>
                        </span>
                        <span>{selectedProposal.value}</span>
                      </ItemDivisionMobile>
                    </DrawerComponentsMobile>
                  </DrawerMobile>
                  <Spacer size="l" />
                  <DrawerComponents>
                    <ProposalButton onClick={() => alert(`funcionou`)}>
                      <img src="../icons/ContractPDF.svg" alt="" />
                      {t("proposal_list_contract_pdf")}
                    </ProposalButton>
                  </DrawerComponents>
                  <Spacer size="m" />
                  <DrawerComponents>
                    <ProposalButton onClick={() => alert(`funcionou`)}>
                      <img src="../icons/ProposalWord.svg" alt="" />
                      {t("proposal_list_proposal_word")}
                    </ProposalButton>
                  </DrawerComponents>
                  <Spacer size="m" />
                  <DrawerComponents>
                    <ProposalButton onClick={() => alert(`funcionou`)}>
                      <img src="../icons/ProposalPDF.svg" alt="" />
                      {t("proposal_list_proposal_pdf")}
                    </ProposalButton>
                  </DrawerComponents>
                </DrawerPadding>
                <Spacer size="l" />
                <DrawerButtons>
                  <Button
                    variant="Secundary"
                    className="DrawerButton Left"
                    onClick={handleConfirmDelete}
                  >
                    {t("proposal_list_delete")}
                  </Button>
                  <Button variant="Primary" className="DrawerButton Right">
                    {t("proposal_list_edit")}
                  </Button>
                </DrawerButtons>
              </DrawerComponentsContainer>
            )}
          </Drawer>
        </ContainerContent>
      )}
    </Container>
  );
};

export default ProposalList;
