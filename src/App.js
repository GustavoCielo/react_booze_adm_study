import { ProductsProvider } from "./pages/providers/products";
import Routes from "./routes";

export default function App() {
  return (
    <>
      <ProductsProvider>
        <Routes />
      </ProductsProvider>
    </>
  );
}
