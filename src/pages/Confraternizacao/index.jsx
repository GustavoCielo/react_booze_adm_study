import Nav from "../../components/Nav";
import { useProducts } from "../providers/products";

export default function Confraternizacao() {
  const { confraternizacao, setConfraternizacao } = useProducts();

  const handleRemove = (booze) => {
    const list = JSON.parse(localStorage.getItem("confraternizacao")) || [];
    const newList = list.filter((item) => item.name !== booze.name);
    localStorage.setItem("confraternizacao", JSON.stringify(newList));
    setConfraternizacao(newList);
  };

  return (
    <>
      <Nav />
      {confraternizacao.map((confraternizacao, index) => {
        return (
          <div key={index}>
            <div>
              <h2>{confraternizacao.name}</h2>
              <p>{confraternizacao.tagline}</p>
              <p>{confraternizacao.description}</p>
              <img
                src={confraternizacao.image_url}
                alt={confraternizacao.name}
                style={{ width: "50px", height: "80px" }}
              />
              <button onClick={() => handleRemove(confraternizacao)}>
                Remover bebida
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
