import React, { useState, useCallback, useEffect } from "react";
import {
  Container,
  ContainerContent,
  Content,
  Title,
  Table,
  TableContent,
  IconBody,
  ContainerFilter,
  ContainerInput,
  ContainerTable,
  MobileContainer,
  MobileContent,
  MobileIcon,
  PaginationContainer,
  DrawerButtons,
  DrawerComponents,
  DrawerComponentsContainer,
  DrawerPadding,
} from "./styles";
import { useTranslation } from "react-i18next";
import Spacer from "../../Components/Spacer";
import Button from "../../DesingSystem/Button";
import Input from "../../DesingSystem/Input";
import Pagination from "../../Components/Pagination";
import Text from "../../DesingSystem/Text";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Drawer } from "@mui/material";
import SkeletonClientsList from "./SkeletonClientsList";
import { apiClientService } from "../../services/ClientService/ClientService";
import { fullInformationProps } from "../../services/ClientService/ClientServiceProps";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";

const ClientsList: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedClientsId, setSelectedClientsId] = useState<number | null>(
    null
  );
  const [paginationValues, setPaginationValues] = useState({
    from: 0,
    last_page: 0,
    current_page: 0,
  });
  const [searchText, setSearchText] = useState<string>();

  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const toggleDrawer = (ClientsId: number | null) => () => {
    setSelectedClientsId(ClientsId);
    setOpen(!open);
  };

  useEffect(() => {
    getClients();
  }, []);

  const getClients = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiClientService.getClients();
      setlistOfClients(response.data);
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

  const [listOfClients, setlistOfClients] = useState<fullInformationProps[]>(
    []
  );

  const handleSearchByText = async (name: string) => {
    try {
      setLoading(true);
      const result = queryString.stringifyUrl({
        url: "",
        query: { full_name: name },
      });
      const response = await apiClientService.getClients(result);
      setlistOfClients(response.data);
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

  const handlePagination = useCallback(async (n: number) => {
    const result = queryString.stringifyUrl({
      url: "",
      query: { page: n, per_page: 10 },
    });
    try {
      setLoading(true);
      const response = await apiClientService.getClients(result);
      setlistOfClients(response.data);
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

  const handlePaginationNavigation = useCallback(async (n: number) => {
    if (n < 1 || n > paginationValues.last_page) return;

    const result = queryString.stringifyUrl({
      url: "",
      query: { page: n, per_page: 10 },
    });
    try {
      setLoading(true);
      const response = await apiClientService.getClients(result);
      setlistOfClients(response.data);
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

  const formatPhoneNumber = (phoneNumber: string) => {
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
    return formattedPhoneNumber;
  };

  const renderClientsList = useCallback(
    () => (
      <Table>
        <thead>
          <tr>
            <th className="Name">{t("clients_list_name")}</th>
            <th className="Phone">{t("clients_list_phone")}</th>
            <th className="Email">{t("clients_list_email")}</th>
            <th className="TableIcon">{t("clients_list_edit")}</th>
          </tr>
        </thead>
        <TableContent>
          {listOfClients.map((clients) => (
            <tr key={clients.id}>
              <td className="clientsName">{clients.full_name}</td>
              <td className="Phone">
                <a
                  href={`https://wa.me/+55${formatPhoneNumber(clients.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="PhoneLink"
                >
                  {clients.phone}
                </a>
              </td>
              <td className="Email">{clients.email}</td>
              <td className="TableIcon">
                <IconBody
                  onClick={() => {
                    navigation("/register-client", {
                      state: {
                        clientdId: clients.id,
                      },
                    });
                  }}
                >
                  <img src="./icons/pencil.svg" alt="pencil icon" />
                </IconBody>
              </td>
            </tr>
          ))}
        </TableContent>
      </Table>
    ),
    [listOfClients]
  );

  const selectedClients = listOfClients.find(
    (clients) => clients.id === selectedClientsId
  );

  return (
    <Container>
      {loading ? (
        <SkeletonClientsList />
      ) : (
        <ContainerContent>
          <Title>{t("clients_list_title")}</Title>
          <Content>
            <ContainerFilter>
              <ContainerInput>
                <Input
                  placeholder={t("clients_list_placeholder")}
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
                {t("clients_list_button_search")}
              </Button>
            </ContainerFilter>
            <Spacer size="l" />
            <ContainerTable>{renderClientsList()}</ContainerTable>
            {listOfClients.map((clients) => (
              <MobileContainer>
                <MobileContent>
                  <Text size="lg">{clients.full_name}</Text>
                  <Text size="md">{clients.email}</Text>
                </MobileContent>
                <IconBody></IconBody>
                <MobileIcon onClick={toggleDrawer(clients.id)}>
                  <MoreHorizIcon className="IconRotated" />
                </MobileIcon>
              </MobileContainer>
            ))}

            <Spacer size="xl" />
            <PaginationContainer>
              <Pagination
                loading={loading}
                totalPages={paginationValues.last_page}
                currentPage={paginationValues.current_page}
                onPageChange={handlePagination}
                goBack={() => {
                  handlePaginationNavigation(paginationValues.current_page - 1);
                }}
                goForward={() => {
                  handlePaginationNavigation(paginationValues.current_page + 1);
                }}
              />
            </PaginationContainer>
          </Content>
          <Drawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            className="Drawer"
          >
            {selectedClients && (
              <DrawerComponentsContainer>
                <DrawerPadding>
                  <DrawerComponents>
                    <Text size="md" bold={true}>
                      {t("clients_list_name_mobile")}
                    </Text>
                    <Text size="md">{selectedClients.full_name}</Text>
                  </DrawerComponents>
                  <DrawerComponents>
                    <Text size="md" bold={true}>
                      {t("clients_list_email_mobile")}
                    </Text>
                    <Text size="md">{selectedClients.email}</Text>
                  </DrawerComponents>
                  <DrawerComponents>
                    <Text size="md" bold={true}>
                      {t("clients_list_phone_mobile")}
                    </Text>
                    <a
                      href={`https://wa.me/+55${formatPhoneNumber(
                        selectedClients.phone
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="PhoneLink"
                    >
                      {selectedClients.phone}
                    </a>
                  </DrawerComponents>
                  <Spacer size="l" />
                </DrawerPadding>
                <Spacer size="l" />
                <DrawerButtons>
                  <Button
                    variant="Secundary"
                    className="DrawerButton"
                    onClick={() => setOpen(false)}
                  >
                    {t("clients_list_close")}
                  </Button>
                  <Button variant="Primary" className="DrawerButton">
                    {t("clients_list_edit")}
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

export default ClientsList;
