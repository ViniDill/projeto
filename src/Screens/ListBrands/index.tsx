import React, { useEffect, useState, useCallback } from "react";
import { Card, Dialog } from "@mui/material";
import TableSwitch from "../../Components/TableSwitch";
import Input from "../../DesingSystem/Input";
import Button from "../../DesingSystem/Button";
import { apiProductService } from "../../services/ProductBrandService/ProductBrandService";
import { Brand } from "../../services/ProductBrandService/IProductBrandService";
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

const ListBrands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalProduct, setModalProduct] = useState<boolean>(false);
  const [stage, setStage] = useState<EnumStage>(EnumStage.register);
  const [selectedItem, setSelecteItem] = useState<Brand>();
  const [inputValue, setInputValue] = useState<string>();
  const [searchText, setSearchText] = useState<string>();
  const [paginationValues, setPaginationValues] = useState({
    from: 0,
    last_page: 0,
    current_page: 0,
  });
  const { t } = useTranslation();

  const getBrand = async () => {
    try {
      setModalProduct(false);
      setLoading(true);
      const response = await apiProductService.fetchBrand();
      setBrands(response.data);
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

  const handleSearchByText = async (name: string) => {
    try {
      setModalProduct(false);
      setLoading(true);
      const result = queryString.stringifyUrl({
        url: "",
        query: { brand_name: name },
      });
      const response = await apiProductService.fetchBrand(result);
      setBrands(response.data);
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

  useEffect(() => {
    getBrand();
  }, []);

  const handlePagination = useCallback(async (n: number) => {
    const result = queryString.stringifyUrl({
      url: "",
      query: { page: n, per_page: 10 },
    });
    try {
      setLoading(true);
      const response = await apiProductService.fetchBrand(result);
      setBrands(response.data);
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
      const response = await apiProductService.fetchBrand(result);
      setBrands(response.data);
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

  const renderContent = useCallback(() => {
    return (
      <div>
        {brands?.map((field, index) => (
          <TableSwitch
            key={field.id}
            name={field.brand_name}
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
  }, [brands]);

  const openUpdate = useCallback(
    (item: Brand) => {
      setInputValue(item.brand_name);
      setSelecteItem(item);
      setStage(EnumStage.update);
      setModalProduct(true);
    },
    [stage, modalProduct]
  );

  const handleRegister = useCallback(async (name: string | undefined) => {
    if (name === undefined || name.length < 2) return;
    try {
      setLoading(true);
      await apiProductService.createBrand(name);
      getBrand();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setInputValue(undefined);
    }
  }, []);

  const handleUpdate = useCallback(
    async (item: Brand | undefined, name: string | undefined) => {
      if (
        name === undefined ||
        name.length < 2 ||
        item === undefined ||
        name === undefined
      )
        return;
      try {
        setLoading(true);
        await apiProductService.updateBrandById(item.id, name);
        getBrand();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setInputValue(undefined);
        setModalProduct(false);
      }
    },
    [selectedItem]
  );

  const handleRemove = useCallback(async (id: number) => {
    try {
      setLoading(true);
      await apiProductService.deleteBrand(id);
      getBrand();
    } catch (error) {
      console.error(error);
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
          <Title>{t("list_brands_title")}</Title>
        </div>
        <div>
          <Button variant="Tertiary" onClick={handleOpenModalRegister}>
            {t("list_brands_register_button")}
          </Button>
        </div>
      </ContainerHeader>

      <Card>
        <Content>
          <ContainerFilter>
            <InputContainer>
              <Input
                placeholder={t("list_brands_search_by_brand")}
                title=""
                className="inputContainer"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                value={searchText}
              />
            </InputContainer>

            <Button
              variant="Neutral"
              className="buttonContainer"
              onClick={() => {
                handleSearchByText(searchText || "");
              }}
            >
              {t("list_brands_search")}
            </Button>
          </ContainerFilter>
          {brands?.length <= 0 ? (
            <NotFoundMessage onClick={handleOpenModalRegister} />
          ) : (
            <Table>
              <TableHeader>
                <div>
                  <span>{t("list_brands_table_brand")}</span>
                </div>
                <ActionsContainer>
                  <ActionTitle>
                    <span>{t("list_brands_table_edit")}</span>
                  </ActionTitle>

                  <ActionTitle>
                    <span>{t("list_brands_table_status")}</span>
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
              ? t("list_brands_register_brand")
              : t("list_brands_update_brand")}
          </h3>
          <div>
            <Input
              placeholder={t("list_brands_placeholder_name_of_brand")}
              title={t("list_brands_title_name_of_brand")}
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
              {t("list_brands_close")}
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
                ? t("list_brands_modal_register_button")
                : t("list_brands_modal_update_button")}
            </Button>
          </ContainerButtons>
          <Spacer size="s" />
        </ContainerModal>
      </Dialog>
    </Container>
  );
};

export default ListBrands;
