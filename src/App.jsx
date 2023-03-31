import { useEffect, useState } from 'react';
import { Header } from './components/HeaderComponent/header';
import { ProductList } from './components/ProductList/productList';
import { CartList } from './components/CartList/bagList';
import { api } from './services/api';

function App() {
  const snackLocalStorage = localStorage.getItem('@kenzieBurger-BagSnack');

  const [showProducts, setShowProducts] = useState([]);

  const [cartSnackList, setCartSnackList] = useState(snackLocalStorage ? JSON.parse(snackLocalStorage) : []);

  useEffect(() => {
    localStorage.setItem('@kenzieBurger-BagSnack', JSON.stringify(cartSnackList));
  }, [cartSnackList]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get();
        setShowProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);

  function addToSnackCart(product) {
    if (!cartSnackList.some((snack) => snack.id === product.id)) {
      const productInCart = [...cartSnackList, product];
      setCartSnackList(productInCart);
    } else {
      console.log('O produto já está no carrinho'); // *** COLOCAR TOAST NO LUGAR DO CONSOLE *** //
    }
  }

  function removeFromSnackCart(snackId) {
    const productInCart = cartSnackList.filter((snack) => snack.id !== snackId);
    setCartSnackList(productInCart);
  }

  return (
    <>
      <Header />
      <main>
        <ProductList showProducts={showProducts} addToSnackCart={addToSnackCart} />
        <CartList cartSnackList={cartSnackList} removeFromSnackCart={removeFromSnackCart} />
      </main>
    </>
  );
}

export default App;
