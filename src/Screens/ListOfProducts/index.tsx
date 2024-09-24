import React, { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { apiRegisterProductService } from "../../services/RegisterProductService/RegisterProductService";
import { FechProductProps } from "../../services/RegisterProductService/IRegisterProductService";
import queryString from "query-string";

import {
  Container,
  Title,
  ContainerFilter,
  ContainerInput,
  Content,
  ContainerTable,
  Table,
  IconTable,
  IconBody,
  TableContent,
  ContainerDialog,
  DialogText,
  ConfirmContainer,
  TitleDialog,
  ContainerMobile,
  PaginationContainer,
  ContainerPills,
} from "./styles";
import { Card } from "@mui/material";
import Input from "../../DesingSystem/Input";
import Button from "../../DesingSystem/Button";
import Spacer from "../../Components/Spacer";
import PercilSvg from "../../IconsSvg/Pencil";
import TrashSvg from "../../IconsSvg/Trash";
import Dialog from "@mui/material/Dialog";
import ListItem from "../../Components/ListItem";
import Drawer from "@mui/material/Drawer";
import DetailsListMobile from "../../Components/DetailsListMobile";
import NotFoundMessage from "../../Components/NotFoundMessage";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import { categoryList } from "../../utils/categoryList";

const ListOfProducts: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FechProductProps>();
  const [draw, setDraw] = useState(false);
  const [products, setProducts] = useState<FechProductProps[]>([]);
  const [searchText, setSearchText] = useState<string>();
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [paginationValues, setPaginationValues] = useState({
    from: 0,
    last_page: 0,
    current_page: 0,
  });

  const { t } = useTranslation();
  const navigation = useNavigate();

  const HandleMobileDetails = (item: FechProductProps) => {
    setSelectedItem(item);
    setDraw(true);
  };

  const handlePaginationNavigation = useCallback(
    async (n: number) => {
      if (n < 1 || n > paginationValues.last_page) return;
      const result = queryString.stringifyUrl({
        url: "",
        query: { page: n, per_page: 10, category: selectedFilter },
      });
      try {
        setLoading(true);
        const response = await apiRegisterProductService.fetchItems(result);
        setProducts(response.data);
        setPaginationValues({
          from: response?.from,
          last_page: response.last_page,
          current_page: response.current_page,
        });
      } catch (error) {
        console.error();
      } finally {
        setLoading(false);
      }
    },
    [paginationValues, selectedFilter]
  );

  const handlePagination = useCallback(
    async (n: number) => {
      setLoading(true);
      const result = queryString.stringifyUrl({
        url: "",
        query: { page: n, per_page: 10, category: selectedFilter },
      });

      try {
        const response = await apiRegisterProductService.fetchItems(result);
        setProducts(response.data);
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
    },
    [selectedFilter]
  );

  const handleSearchText = useCallback(
    async (search: string) => {
      setLoading(true);
      const result = queryString.stringifyUrl({
        url: "",
        query: { product: search, category: selectedFilter },
      });

      try {
        const response = await apiRegisterProductService.fetchItems(result);
        setProducts(response.data);
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
    },
    [selectedFilter]
  );

  const handleWarningProd = useCallback(
    (item: FechProductProps) => {
      setSelectedItem(item);
      setModal(true);
    },
    [selectedItem, modal]
  );

  const handleRemove = useCallback(async (id: number | string) => {
    try {
      setModal(false);
      setDraw(false);
      setLoading(true);
      await apiRegisterProductService.deleteProduct(id);
      const response = await apiRegisterProductService.fetchItems();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getItem = async () => {
    try {
      setLoading(true);
      const result = queryString.stringifyUrl({
        url: "",
        query: { category: selectedFilter },
      });
      const response = await apiRegisterProductService.fetchItems(result);
      setProducts(response.data);
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
    getItem();
  }, [selectedFilter]);

  const renderItem = useCallback(
    (item: FechProductProps[]) => {
      return item.map((field) => (
        <tr key={field.id}>
          <td>{field.product_name}</td>
          <td>{field?.brand?.brand_name || ""}</td>
          <td>{field?.category?.category_name || ""}</td>
          <IconBody
            onClick={() => {
              navigation("/product-registration", {
                state: {
                  productId: field.id,
                  typeOfUpdate: 1,
                  category: field.category_id,
                },
              });
            }}
          >
            <PercilSvg />
          </IconBody>
          <IconBody
            onClick={() => {
              handleWarningProd(field);
            }}
          >
            <TrashSvg />
          </IconBody>
        </tr>
      ));
    },
    [products]
  );

  const renderMobile = useCallback(
    (item: FechProductProps[]) => {
      return (
        <div>
          {item.map((field, index) => (
            <ListItem
              key={field.id}
              title={field.product_name}
              description={field?.category?.category_name || ""}
              index={index}
              onClick={() => HandleMobileDetails(field)}
            />
          ))}
        </div>
      );
    },
    [products]
  );

  if (loading) {
    return <Skeleton />;
  }

  return (
    <Container>
      <Title>{t("list_of_products_title")} </Title>
      <Card>
        {products.length <= 0 ? (
          <NotFoundMessage onClick={() => {}} />
        ) : (
          <Content>
            <ContainerFilter>
              <ContainerInput>
                <Input
                  placeholder={t("list_of_products_placeholder_search")}
                  title=""
                  className="inputContainer"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
              </ContainerInput>

              <Button
                variant="Neutral"
                className="buttonContainer"
                onClick={() => {
                  handleSearchText(searchText || "");
                }}
              >
                {t("list_of_products_button_search")}
              </Button>
            </ContainerFilter>
            <Spacer size="l" />
            <ContainerPills>
              {categoryList.map((field) => (
                <Button
                  key={field.id}
                  variant={
                    selectedFilter === field.id ? "Secundary" : "Primary"
                  }
                  onClick={() => {
                    setSelectedFilter(
                      selectedFilter === field.id ? null : field.id
                    );
                  }}
                >
                  {field.label}
                </Button>
              ))}
            </ContainerPills>
            <Spacer size="l" />
            <ContainerTable>
              <Table>
                <thead>
                  <tr>
                    <th>{t("list_of_products_name_of_product")}</th>
                    <th>{t("list_of_products_name_of_brand")}</th>
                    <th>{t("list_of_products_name_of_types")}</th>
                    <IconTable>{t("list_of_products_name_of_edit")}</IconTable>
                    <IconTable>
                      {t("list_of_products_name_of_delete")}
                    </IconTable>
                  </tr>
                </thead>
                <TableContent>{renderItem(products)}</TableContent>
              </Table>
            </ContainerTable>
            <ContainerMobile>{renderMobile(products)}</ContainerMobile>
          </Content>
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
      </Card>
      <Dialog
        onClose={() => {
          setModal(false);
        }}
        open={modal}
      >
        <ContainerDialog>
          <TitleDialog>{t("list_of_products_title_dialog")}</TitleDialog>
          <DialogText>{t("list_of_products_dialog_if_you_wish")}</DialogText>
          <DialogText>
            {t("list_of_products_dialog_delete_forever")}{" "}
            <b>{selectedItem?.product_name}</b>?
          </DialogText>
          <Spacer size="m" />
          <ConfirmContainer>
            <Button
              variant="Neutral"
              onClick={() => {
                setModal(false);
              }}
            >
              {t("list_of_products_dialog_back")}
            </Button>
            <Button
              variant="Secundary"
              onClick={() => {
                if (selectedItem?.id) {
                  handleRemove(selectedItem?.id);
                }
              }}
            >
              {t("list_of_products_dialog_delete")}
            </Button>
          </ConfirmContainer>
        </ContainerDialog>
      </Dialog>
      <Drawer
        anchor="bottom"
        open={draw}
        onClose={() => {
          setDraw(false);
        }}
      >
        <DetailsListMobile
          brand={String(selectedItem?.brand?.brand_name) || ""}
          product={selectedItem?.product_name || ""}
          type={selectedItem?.category?.category_name || ""}
          onEdit={() => {
            navigation("/product-registration", {
              state: {
                productId: selectedItem?.id,
                typeOfUpdate: 1,
                category: selectedItem?.category_id,
              },
            });
          }}
          onDelet={() => {
            if (selectedItem?.id) {
              handleRemove(selectedItem?.id);
            }
          }}
        />
      </Drawer>
    </Container>
  );
};

export default ListOfProducts;
