import React, { useState, useCallback, useEffect } from "react";
import {
  Container,
  Title,
  ContainerFilter,
  ContainerInput,
  Content,
  ContainerTable,
  Table,
  IconBody,
  TableContent,
  PaginationContainer,
  MobileContainer,
  MobileContent,
  MobileSwitch,
  MobileIcon,
  DrawerComponents,
  DrawerComponentsContainer,
  DrawerPrice,
  DrawerPadding,
  DrawerButtons,
} from "./styles";
import Button from "../../../DesingSystem/Button";
import { useTranslation } from "react-i18next";
import Switch from "../../../DesingSystem/Switch";
import Spacer from "../../../Components/Spacer";
import Input from "../../../DesingSystem/Input";
import Pagination from "../../../Components/Pagination";
import Text from "../../../DesingSystem/Text";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Drawer } from "@mui/material";
import ReadOnly from "../../../Components/ReadOnly";
import { apiKitService } from "../../../services/KitService/KitService";
import { SolarKit } from "../../../services/KitService/KitServiceProps";
import queryString from "query-string";

interface KitSearchProps {
  setLoading(value: boolean): void;
  loading: boolean;
}

const KitSearch: React.FC<KitSearchProps> = ({ setLoading, loading }) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [selectedKitId, setSelectedKitId] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const [paginationValues, setPaginationValues] = useState({
    from: 0,
    last_page: 0,
    current_page: 0,
  });

  const toggleDrawer = (kitId: number | null) => () => {
    setSelectedKitId(kitId);
    setOpen(!open);
  };

  const [listOfKits, setlistOfKits] = useState<SolarKit[]>([]);

  const getItem = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiKitService.getSolarKit();
      setlistOfKits(response.data);
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

  const handleSearchText = useCallback(async (search: string) => {
    const result = queryString.stringifyUrl({
      url: "",
      query: { fixation_type_name: search },
    });
    try {
      setLoading(true);
      const response = await apiKitService.getSolarKit(result);
      setlistOfKits(response.data);
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
    getItem();
  }, []);

  const handlePaginationNavigation = useCallback(async (n: number) => {
    if (n < 1 || n > paginationValues.last_page) return;

    const result = queryString.stringifyUrl({
      url: "",
      query: { page: n, per_page: 10 },
    });
    try {
      setLoading(true);
      const response = await apiKitService.getSolarKit(result);
      setlistOfKits(response.data);
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
      const response = await apiKitService.getSolarKit(result);
      setlistOfKits(response.data);
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

  const renderKitList = useCallback(
    () => (
      <Table>
        <thead>
          <tr>
            <th className="KitName">{t("kit_search_name_of_kit")}</th>
            <th className="Capacity">{t("kit_search_capacity")}</th>
            <th className="Price">{t("kit_search_price")}</th>
            <th className="TableIcon">{t("kit_search_edit")}</th>
            <th className="TableSwitch">{t("kit_search_activity")}</th>
          </tr>
        </thead>
        <TableContent>
          {listOfKits.map((kit) => (
            <tr key={kit.id}>
              <td className="KitName">{kit.title}</td>
              <td className="Capacity">{kit.solar_kit_power}</td>
              <td className="Price">{"00"}</td>
              <td className="TableIcon">
                <IconBody onClick={() => alert("Aqui você edita!")}>
                  <img src="./icons/pencil.svg" alt="pencil icon" />
                </IconBody>
              </td>
              <td className="TableSwitch">
                <IconBody>
                  <Switch />
                </IconBody>
              </td>
            </tr>
          ))}
        </TableContent>
      </Table>
    ),
    [listOfKits]
  );

  const selectedKit = listOfKits.find((kit) => kit.id === selectedKitId);

  return (
    <Container>
      <Title>{t("kit_search_title")}</Title>
      <Content>
        <ContainerFilter>
          <ContainerInput>
            <Input
              placeholder={t("kit_search_placeholder")}
              className="SearchInput"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </ContainerInput>
          <Button
            variant="Neutral"
            className="SearchButton"
            onClick={() => {
              handleSearchText(search);
            }}
          >
            {t("kit_search_button_search")}
          </Button>
        </ContainerFilter>
        <Spacer size="l" />
        <ContainerTable>{renderKitList()}</ContainerTable>
        {listOfKits.map((kit) => (
          <MobileContainer>
            <MobileContent>
              <Text size="lg">{kit.title}</Text>
              <Text size="md">{kit.solar_kit_power}</Text>
            </MobileContent>
            <MobileSwitch>
              <IconBody>
                <Switch />
              </IconBody>
              <MobileIcon
                onClick={() => {
                  toggleDrawer(Number(kit.id));
                }}
              >
                <MoreHorizIcon className="IconRotated" />
              </MobileIcon>
            </MobileSwitch>
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
        {selectedKit && (
          <DrawerComponentsContainer>
            <DrawerPadding>
              <DrawerComponents>
                <Text size="md" bold={true}>
                  {t("kit_search_kit_name")}
                </Text>
                <Text size="md">{selectedKit.title}</Text>
              </DrawerComponents>
              <DrawerComponents>
                <Text size="md" bold={true}>
                  {t("kit_search_inverter_capacity")}
                </Text>
                <Text size="md">{selectedKit.solar_kit_power}</Text>
              </DrawerComponents>
              <DrawerComponents>
                <Text size="md" bold={true}>
                  {t("kit_search_stats")}
                </Text>
                <Switch />
              </DrawerComponents>
              <Spacer size="l" />
              <DrawerPrice>
                <label>{t("kit_search_price")}</label>
                <Spacer size="s" />
                <ReadOnly value={20} align="left" />
              </DrawerPrice>
            </DrawerPadding>
            <Spacer size="l" />
            <DrawerButtons>
              <Button
                variant="Secundary"
                className="DrawerButton"
                onClick={() => setOpen(false)}
              >
                {t("kit_search_close")}
              </Button>
              <Button variant="Primary" className="DrawerButton">
                {t("kit_search_edit")}
              </Button>
            </DrawerButtons>
          </DrawerComponentsContainer>
        )}
      </Drawer>
    </Container>
  );
};

export default KitSearch;
