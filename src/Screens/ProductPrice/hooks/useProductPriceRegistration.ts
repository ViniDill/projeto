import { useState, useCallback } from "react";
import { apiRegisterProductService } from "../../../services/RegisterProductService/RegisterProductService";
import { FechProductProps } from "../../../services/RegisterProductService/IRegisterProductService";
import queryString from "query-string";

const useProductPriceRegistration = () => {
  const [data, setData] = useState<FechProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>();
  const [paginationValues, setPaginationValues] = useState({
    from: 0,
    last_page: 0,
    current_page: 0,
  });

  const getProcuts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiRegisterProductService.fetchItems();
      setData(response.data);
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

  const handlePagination = useCallback(async (n: number) => {
    setLoading(true);
    const result = queryString.stringifyUrl({
      url: "",
      query: { page: n, per_page: 10 },
    });

    try {
      const response = await apiRegisterProductService.fetchItems(result);
      setData(response.data);
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

  const handlePaginationNavigation = useCallback(
    async (n: number) => {
      if (n < 1 || n > paginationValues.last_page) return;
      const result = queryString.stringifyUrl({
        url: "",
        query: { page: n, per_page: 10 },
      });
      try {
        setLoading(true);
        const response = await apiRegisterProductService.fetchItems(result);
        setData(response.data);
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
    [paginationValues]
  );

  const handleSearchText = useCallback(async (search: string) => {
    setLoading(true);
    const result = queryString.stringifyUrl({
      url: "",
      query: { product: search },
    });

    try {
      const response = await apiRegisterProductService.fetchItems(result);
      setData(response.data);
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

  const handlePrice = useCallback(
    async (id: number | string, price: number) => {
      try {
        setLoading(true);
        const responsePrice = await apiRegisterProductService.registerPrice(
          id,
          price
        );
        const response = await apiRegisterProductService.fetchItems();
        setData(response.data);
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
    []
  );

  return {
    getProcuts,
    handlePagination,
    handlePaginationNavigation,
    setSearchText,
    handleSearchText,
    handlePrice,
    data,
    loading,
    paginationValues,
    searchText,
  };
};

export default useProductPriceRegistration;
