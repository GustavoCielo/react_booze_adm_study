import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/Api";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [formatura, setFormatura] = useState(
    JSON.parse(localStorage.getItem("formatura")) || []
  );

  const [confraternizacao, setConfraternizacao] = useState(
    JSON.parse(localStorage.getItem("confraternizacao")) || []
  );

  const [casamento, setCasamento] = useState(
    JSON.parse(localStorage.getItem("casamento")) || []
  );

  useEffect(() => {
    api.get().then((response) => setProducts(response.data));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        formatura,
        setFormatura,
        confraternizacao,
        setConfraternizacao,
        casamento,
        setCasamento,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
