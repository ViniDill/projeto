import React, { useState, useCallback, useEffect } from "react";
import {
  Container,
  Table,
  TableContent,
  IconBody,
  Header,
  Title,
  ContainerContent,
  Content,
  ContainerInput,
  ContainerFilter,
  MobileContainer,
  MobileContent,
  MobileIcon,
  ContainerTable,
  PaginationContainer,
  DrawerButtons,
  DrawerComponents,
  DrawerComponentsContainer,
  DrawerPadding,
  RegisterIconContainer,
  ConfirmationBox,
  ConfirmButtonContainer,
} from "./styles";
import { useTranslation } from "react-i18next";
import Spacer from "../../Components/Spacer";
import Button from "../../DesingSystem/Button";
import Input from "../../DesingSystem/Input";
import Pagination from "../../Components/Pagination";
import Text from "../../DesingSystem/Text";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Drawer } from "@mui/material";
import SkeletonEnergyProviderList from "./SkeletonEnergyProviderList";
import { Dialog } from "@mui/material";
import { apiConcessionaireService } from "../../services/ConcessionaireService/ConcessionaireService";
import { DefaultValues } from "../../services/ConcessionaireService/ConcessionaireProps";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

const EnergyProviderList: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = useState<string>();
  const [selectedProviderId, setSelectedProviderId] = useState<number | null>(
    null
  );

  const [paginationValues, setPaginationValues] = useState({
    from: 0,
    last_page: 0,
    current_page: 0,
  });

  const [confirmDelete, setConfirmDelete] = useState(false);

  const toggleDrawer = (ProviderId: number | null) => () => {
    setSelectedProviderId(ProviderId);
    setOpen(!open);
  };

  const [loading, setLoading] = useState<boolean>(true);

  const handleDeleteClick = (
    providerId: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setSelectedProviderId(providerId);
    setConfirmDelete(true);
    setOpen(false);
  };

  const handlePaginationNavigation = useCallback(async (n: number) => {
    if (n < 1 || n > paginationValues.last_page) return;

    const result = queryString.stringifyUrl({
      url: "",
      query: { page: n, per_page: 10 },
    });
    try {
      setLoading(true);
      const response = await apiConcessionaireService.getConcessionaire(result);
      setlistOfEnergyProviders(response.data);
      setPaginationValues({
        from: response?.from,
        last_page: response.last_page,
        current_page: response.current_page,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePagination = useCallback(async (n: number) => {
    const result = queryString.stringifyUrl({
      url: "",
      query: { page: n, per_page: 10 },
    });
    try {
      setLoading(true);
      const response = await apiConcessionaireService.getConcessionaire(result);
      setlistOfEnergyProviders(response.data);
      setPaginationValues({
        from: response?.from,
        last_page: response.last_page,
        current_page: response.current_page,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const handleConfirmDelete = async () => {
    try {
      deleteProvider(selectedProviderId);
    } catch (error) {
      console.error("Error deleting provider:", error);
    } finally {
      setConfirmDelete(false);
    }
  };

  const handleSearchByText = async (name: string) => {
    try {
      setLoading(false);
      setLoading(true);
      const result = queryString.stringifyUrl({
        url: "",
        query: { title: name },
      });
      const response = await apiConcessionaireService.getConcessionaire(result);
      setlistOfEnergyProviders(response.data);
      setPaginationValues({
        from: response?.from,
        last_page: response.last_page,
        current_page: response.current_page,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProvider = useCallback(async (providerId: number | null) => {
    if (providerId !== null) {
      try {
        setLoading(true);
        await apiConcessionaireService.deleteConcessionaire(providerId);
        const response = await apiConcessionaireService.getConcessionaire();
        setlistOfEnergyProviders(response.data);
        setPaginationValues({
          from: response?.from,
          last_page: response.last_page,
          current_page: response.current_page,
        });
      } catch (error) {
        throw new Error("Failed to delete provider");
      } finally {
        setLoading(false);
      }
    } else {
      throw new Error("No provider ID provided for deletion");
    }
  }, []);

  const [listOfEnergyProviders, setlistOfEnergyProviders] = useState<
    DefaultValues[]
  >([]);

  const getProviders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiConcessionaireService.getConcessionaire();
      setlistOfEnergyProviders(response.data);
      setPaginationValues({
        from: response?.from,
        last_page: response.last_page,
        current_page: response.current_page,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProviders();
  }, []);

  const getStatusByDate = useCallback((dateString: string): string => {
    const givenDate = new Date(dateString);
    const currentDate = new Date();

    const differenceInMilliseconds =
      currentDate.getTime() - givenDate.getTime();
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    if (differenceInDays < 15) {
      return "Atualizado";
    } else if (differenceInDays >= 15 && differenceInDays < 30) {
      return "Atualizar";
    } else {
      return "Desatualizado";
    }
  }, []);

  const renderEnergyProviderList = useCallback(
    () => (
      <Table>
        <thead>
          <tr>
            <th className="Name">{t("energy_provider_list_name")}</th>
            <th className="Status">{t("energy_provider_list_status")}</th>
            <th className="TableIcon">{t("energy_provider_list_edit")}</th>
            <th className="TableIconDelete">
              {t("energy_provider_list_delete")}
            </th>
          </tr>
        </thead>
        <TableContent>
          {listOfEnergyProviders.map((providers) => (
            <tr key={providers.id}>
              <td className="Name">{providers.title}</td>
              <td className="Status">
                <div
                  className={`StatusContainer ${getStatusByDate(
                    providers.updated_at
                  )}`}
                >
                  <Text bold={true} size="md">
                    {getStatusByDate(providers.updated_at)}
                  </Text>
                </div>
              </td>
              <td className="TableIcon">
                <IconBody
                  onClick={() => {
                    navigation("/Concessionaire", {
                      state: {
                        providerId: providers.id,
                      },
                    });
                  }}
                >
                  <img src="./icons/pencil.svg" alt="pencil icon" />
                </IconBody>
              </td>
              <td className="TableIconDelete">
                <button
                  onClick={(event) => handleDeleteClick(providers.id, event)}
                >
                  <img
                    src="./icons/trash.svg"
                    alt="Trash icon"
                    className="DeleteIcon"
                  />
                </button>
              </td>
            </tr>
          ))}
        </TableContent>
      </Table>
    ),
    [listOfEnergyProviders]
  );

  const selectedProviders = listOfEnergyProviders.find(
    (providers) => providers.id === selectedProviderId
  );

  return (
    <Container>
      {loading ? (
        <SkeletonEnergyProviderList />
      ) : (
        <ContainerContent>
          <Header>
            <Title>{t("energy_provider_list_title")}</Title>
            <Button
              variant="Primary"
              className="RegisterButton"
              onClick={() => {
                navigation("/Concessionaire");
              }}
            >
              {t("energy_provider_list_register_button")}
            </Button>
            <RegisterIconContainer>
              <img
                onClick={() => navigation("/Concessionaire")}
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
                  placeholder={t("energy_provider_list_search_placeholder")}
                  className="SearchInput"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
              </ContainerInput>
              <Button
                variant="Neutral"
                className="SearchButton"
                onClick={() => {
                  handleSearchByText(searchText || "");
                }}
              >
                {t("energy_provider_list_button_search")}
              </Button>
            </ContainerFilter>
            <Spacer size="l" />
            <Spacer size="l" />
            <ContainerTable>{renderEnergyProviderList()}</ContainerTable>
            {listOfEnergyProviders.map((provider) => (
              <MobileContainer key={provider.id}>
                <MobileContent>
                  <Text size="lg">{provider.title}</Text>
                  <div
                    className={`MobileStatus ${getStatusByDate(
                      provider.updated_at
                    )}`}
                  >
                    <Text>{getStatusByDate(provider.updated_at)}</Text>
                  </div>
                </MobileContent>
                <IconBody></IconBody>
                <MobileIcon onClick={toggleDrawer(provider.id)}>
                  <MoreHorizIcon className="IconRotated" />
                </MobileIcon>
              </MobileContainer>
            ))}
            <Spacer size="xl" />
            <PaginationContainer>
              <div>
                <Pagination
                  loading={loading}
                  totalPages={paginationValues.last_page}
                  currentPage={paginationValues.current_page}
                  onPageChange={handlePagination}
                  goBack={() => {
                    handlePaginationNavigation(
                      paginationValues.current_page - 1
                    );
                  }}
                  goForward={() => {
                    handlePaginationNavigation(
                      paginationValues.current_page + 1
                    );
                  }}
                />
              </div>
            </PaginationContainer>
          </Content>
          <Drawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            className="Drawer"
          >
            {selectedProviders && (
              <DrawerComponentsContainer>
                <DrawerPadding>
                  <DrawerComponents>
                    <Text size="lg" bold={true}>
                      {t("energy_provider_list_name_mobile")}
                    </Text>
                    <Text size="lg">{selectedProviders.title}</Text>
                  </DrawerComponents>
                  <DrawerComponents>
                    <Text size="lg" bold={true}>
                      {t("energy_provider_list_status_mobile")}
                    </Text>
                    <div
                      className={`DrawerStatus ${getStatusByDate(
                        selectedProviders.updated_at
                      )}`}
                    >
                      <Text size="lg" bold={true}>
                        {getStatusByDate(selectedProviders.updated_at)}
                      </Text>
                    </div>
                  </DrawerComponents>
                  <Spacer size="l" />
                </DrawerPadding>
                <Spacer size="l" />
                <DrawerButtons>
                  <Button
                    variant="Secundary"
                    className="DrawerButton"
                    onClick={(event) => {
                      if (selectedProviderId !== null) {
                        handleDeleteClick(selectedProviderId, event);
                      }
                    }}
                  >
                    {t("energy_provider_list_delete")}
                  </Button>
                  <Button
                    variant="Primary"
                    className="DrawerButton"
                    onClick={() => {
                      navigation("/Concessionaire", {
                        state: {
                          providerId: selectedProviderId,
                        },
                      });
                    }}
                  >
                    {t("energy_provider_list_edit")}
                  </Button>
                </DrawerButtons>
              </DrawerComponentsContainer>
            )}
          </Drawer>
          {confirmDelete && (
            <Dialog
              onClose={() => {
                setConfirmDelete(false);
              }}
              open={confirmDelete}
            >
              <ConfirmationBox>
                <Text size="lg" align="center" bold={true}>
                  {t("confirmation_delete_message_title")}
                </Text>
                <Text align="center">
                  {t("confirmation_delete_message")}
                  <strong> {selectedProviders?.title}</strong>?
                </Text>
                <ConfirmButtonContainer>
                  <Button
                    className="ButtonConfirm"
                    variant="Primary"
                    onClick={() => setConfirmDelete(false)}
                  >
                    {t("confirmation_delete_cancel_button")}
                  </Button>
                  <Button
                    className="ButtonConfirm"
                    variant="Secundary"
                    onClick={handleConfirmDelete}
                  >
                    {t("confirmation_delete_confirm_button")}
                  </Button>
                </ConfirmButtonContainer>
              </ConfirmationBox>
            </Dialog>
          )}
        </ContainerContent>
      )}
    </Container>
  );
};

export default EnergyProviderList;
