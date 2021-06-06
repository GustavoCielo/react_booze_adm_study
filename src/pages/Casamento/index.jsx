import Nav from "../../components/Nav";
import { useProducts } from "../providers/products";

export default function Casamento() {
  const { casamento, setCasamento } = useProducts();

  const handleRemove = (booze) => {
    const list = JSON.parse(localStorage.getItem("casamento")) || [];
    const newList = list.filter((item) => item.name !== booze.name);
    localStorage.setItem("casamento", JSON.stringify(newList));
    setCasamento(newList);
  };

  return (
    <>
      <Nav />
      {casamento.map((casamento, index) => {
        return (
          <div key={index}>
            <div>
              <h2>{casamento.name}</h2>
              <p>{casamento.tagline}</p>
              <p>{casamento.description}</p>
              <img
                src={casamento.image_url}
                alt={casamento.name}
                style={{ width: "50px", height: "80px" }}
              />
              <button onClick={() => handleRemove(casamento)}>
                Remover bebida
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
