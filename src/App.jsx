import { useEffect, useState } from 'react';
import { Header } from './components/HeaderComponent/header';
import { ProductList } from './components/ProductList/productList';
import { api } from './services/api';

function App() {
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get();
        setShowProducts(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <main>
        <ProductList showProducts={showProducts} />
      </main>
    </>
  );
}

export default App;
