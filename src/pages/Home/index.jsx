import Nav from "../../components/Nav";
import { useProducts } from "../providers/products";
import "./styles.css";

export default function Home() {
  const {
    products,
    casamento,
    setCasamento,
    formatura,
    setFormatura,
    confraternizacao,
    setConfraternizacao,
  } = useProducts();
  console.log(casamento);
  console.log(formatura);
  console.log(confraternizacao);

  const handleFormatura = (item) => {
    const list = JSON.parse(localStorage.getItem("formatura")) || [];
    list.push(item);
    localStorage.setItem("formatura", JSON.stringify(list));
    setFormatura([...formatura, item]);
  };

  const handleCasamento = (item) => {
    const list = JSON.parse(localStorage.getItem("casamento")) || [];
    list.push(item);
    localStorage.setItem("casamento", JSON.stringify(list));
    setCasamento([...casamento, item]);
  };

  const handleConfraternizacao = (item) => {
    const list = JSON.parse(localStorage.getItem("confraternizacao")) || [];
    list.push(item);
    localStorage.setItem("confraternizacao", JSON.stringify(list));
    setConfraternizacao([...confraternizacao, item]);
  };

  return (
    <>
      <Nav />
      <div>
        <h1 style={{ textAlign: "center" }}>Administração de Bebidas Punk</h1>
      </div>
      <div>
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h2>{item.name}</h2>
              <p>{item.tagline}</p>
              <p>{item.description}</p>
              <img
                src={item.image_url}
                alt={item.name}
                style={{ width: "50px", height: "80px" }}
              />
              <div style={{ display: "flex" }}>
                <button onClick={() => handleCasamento(item)}>
                  Adicionar ao casamento
                </button>
                <button onClick={() => handleFormatura(item)}>
                  Adicionar a Formatura
                </button>
                <button onClick={() => handleConfraternizacao(item)}>
                  Adicionar à Confraternização
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
