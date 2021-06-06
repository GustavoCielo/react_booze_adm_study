import Nav from "../../components/Nav";
import { useProducts } from "../providers/products";

export default function Formatura() {
  const { formatura, setFormatura } = useProducts();

  const handleRemove = (booze) => {
    const list = JSON.parse(localStorage.getItem("formatura")) || [];
    const newList = list.filter((item) => item.name !== booze.name);
    localStorage.setItem("formatura", JSON.stringify(newList));
    setFormatura(newList);
  };

  return (
    <>
      <Nav />
      {formatura.map((formatura, index) => {
        return (
          <div key={index}>
            <div>
              <h2>{formatura.name}</h2>
              <p>{formatura.tagline}</p>
              <p>{formatura.description}</p>
              <img
                src={formatura.image_url}
                alt={formatura.name}
                style={{ width: "50px", height: "80px" }}
              />
              <button onClick={() => handleRemove(formatura)}>
                Remover bebida
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
