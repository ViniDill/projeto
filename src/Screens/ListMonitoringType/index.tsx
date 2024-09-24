import React, { useEffect, useState, useCallback } from "react";
import { Card, Dialog } from "@mui/material";
import TableSwitch from "../../Components/TableSwitch";
import Input from "../../DesingSystem/Input";
import Button from "../../DesingSystem/Button";
import { apiMonitoringTypeService } from "../../services/MonitoringTypeService/MonitoringTypeService";
import { MonitoringValue } from "../../services/MonitoringTypeService/MonitoringTypeServiceProps";
import NotFoundMessage from "../../Components/NotFoundMessage";
import Skeleton from "./Skeleton";
import Spacer from "../../Components/Spacer";
import { useTranslation } from "react-i18next";
import Pagination from "../../Components/Pagination";
import queryString from "query-string";

import {
  Container,
  Title,
  Content,
  Table,
  TableHeader,
  ActionTitle,
  ActionsContainer,
  ContainerFilter,
  InputContainer,
  ContainerHeader,
  ContainerButtons,
  ContainerModal,
  PaginationContainer,
} from "./styles";

enum EnumStage {
  register = "register",
  update = "update",
}

const ListTMonitoringType: React.FC = () => {
  const [monitoringType, setMonitoringType] = useState<MonitoringValue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalProduct, setModalProduct] = useState<boolean>(false);
  const [stage, setStage] = useState<EnumStage>(EnumStage.register);
  const [selectedItem, setSelecteItem] = useState<MonitoringValue>();
  const [inputValue, setInputValue] = useState<string>();
  const [searchText, setSearchText] = useState<string>();
  const [paginationValues, setPaginationValues] = useState({
    from: 0,
    last_page: 0,
    current_page: 0,
  });
  const { t } = useTranslation();

  const getItems = async () => {
    try {
      setModalProduct(false);
      setLoading(true);
      const response = await apiMonitoringTypeService.fetchMonitoringType();
      setMonitoringType(response.data);
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

  const handleSearchText = useCallback(async (search: string) => {
    const result = queryString.stringifyUrl({
      url: "",
      query: { monitoring_type_name: search },
    });
    try {
      setLoading(true);
      const response = await apiMonitoringTypeService.fetchMonitoringType(
        result
      );
      setMonitoringType(response.data);
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
      const response = await apiMonitoringTypeService.fetchMonitoringType(
        result
      );
      setMonitoringType(response.data);
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
      const response = await apiMonitoringTypeService.fetchMonitoringType(
        result
      );
      setMonitoringType(response.data);
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

  useEffect(() => {
    getItems();
  }, []);

  const renderContent = useCallback(() => {
    return (
      <div>
        {monitoringType?.map((field, index) => (
          <TableSwitch
            key={field.id}
            name={field.monitoring_type_name}
            index={index}
            onClickPencil={() => {
              openUpdate(field);
            }}
            onClickSwitch={() => {
              handleRemove(field.id);
            }}
            active={true}
          />
        ))}
      </div>
    );
  }, [monitoringType]);

  const openUpdate = useCallback((item: MonitoringValue) => {
    setInputValue(item.monitoring_type_name);
    setSelecteItem(item);
    setStage(EnumStage.update);
    setModalProduct(true);
  }, []);

  const handleRegister = useCallback(async (name: string | undefined) => {
    if (name === undefined || name.length < 2) return;
    try {
      setLoading(true);
      await apiMonitoringTypeService.createMonitoringType(name);
      getItems();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setInputValue(undefined);
    }
  }, []);

  const handleUpdate = useCallback(
    async (item: MonitoringValue | undefined, name: string | undefined) => {
      if (
        name === undefined ||
        name.length < 2 ||
        item === undefined ||
        name === undefined
      )
        return;
      try {
        setLoading(true);
        await apiMonitoringTypeService.updateMonitoringType(item.id, name);
        getItems();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setInputValue(undefined);
        setModalProduct(false);
      }
    },
    []
  );

  const handleRemove = useCallback(async (id: number) => {
    try {
      setLoading(true);
      await apiMonitoringTypeService.deleteMonitoringType(id);
    } catch (error) {
      console.error(error);
    } finally {
      getItems();
    }
  }, []);

  const handleOpenModalRegister = useCallback(() => {
    setStage(EnumStage.register);
    setInputValue(undefined);
    setModalProduct(true);
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <Container>
      <ContainerHeader>
        <div>
          <Title>{t("list_monitoring_types_title")}</Title>
        </div>
        <div>
          <Button variant="Tertiary" onClick={handleOpenModalRegister}>
            {t("list_monitoring_types_register_button")}
          </Button>
        </div>
      </ContainerHeader>

      <Card>
        <Content>
          <ContainerFilter>
            <InputContainer>
              <Input
                placeholder={t("list_monitoring_types_search_by_brand")}
                title=""
                className="inputContainer"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </InputContainer>

            <Button
              variant="Neutral"
              className="buttonContainer"
              onClick={() => {
                handleSearchText(searchText || "");
              }}
            >
              {t("list_monitoring_types_search")}
            </Button>
          </ContainerFilter>
          {monitoringType?.length <= 0 ? (
            <NotFoundMessage onClick={handleOpenModalRegister} />
          ) : (
            <Table>
              <TableHeader>
                <div>
                  <span>{t("list_monitoring_types_table_brand")}</span>
                </div>
                <ActionsContainer>
                  <ActionTitle>
                    <span>{t("list_monitoring_types_table_edit")}</span>
                  </ActionTitle>

                  <ActionTitle>
                    <span>{t("list_monitoring_types_table_status")}</span>
                  </ActionTitle>
                </ActionsContainer>
              </TableHeader>
              <div>{renderContent()}</div>
            </Table>
          )}
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
      </Card>
      <Dialog
        open={modalProduct}
        onClose={() => {
          setModalProduct(false);
        }}
      >
        <ContainerModal>
          <h3>
            {stage === EnumStage.register
              ? t("list_monitoring_types_register_brand")
              : t("list_monitoring_types_update_brand")}
          </h3>
          <div>
            <Input
              placeholder={t("list_monitoring_types_placeholder_name_of_brand")}
              title={t("list_monitoring_types_title_name_of_brand")}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <Spacer size="l" />
          <ContainerButtons>
            <Button
              variant="Secundary"
              onClick={() => {
                setModalProduct(false);
              }}
            >
              {t("list_monitoring_types_close")}
            </Button>
            <Button
              variant="Primary"
              onClick={() => {
                stage === EnumStage.register
                  ? handleRegister(inputValue)
                  : handleUpdate(selectedItem, inputValue);
              }}
            >
              {stage === EnumStage.register
                ? t("list_monitoring_types_modal_register_button")
                : t("list_monitoring_types_modal_update_button")}
            </Button>
          </ContainerButtons>
          <Spacer size="s" />
        </ContainerModal>
      </Dialog>
    </Container>
  );
};

export default ListTMonitoringType;
