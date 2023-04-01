import { useEffect, useState } from 'react';
import { Header } from './components/HeaderComponent/header';
import { ProductList } from './components/ProductList/productList';
import { CartList } from './components/CartList/bagList';
import { api } from './services/api';
import { ResetCSS } from './styles/reset';
import { GlobalStyles } from './styles/globalStyles';
import { StyledMainContainer } from './styles/mainContainer';

function App() {
  const snackLocalStorage = localStorage.getItem('@kenzieBurger-BagSnack');

  const [showProducts, setShowProducts] = useState([]);

  const [cartSnackList, setCartSnackList] = useState(snackLocalStorage ? JSON.parse(snackLocalStorage) : []);

  const [search, setSearch] = useState('');

  const searchSnackResult = showProducts.filter((currentSnack) =>
    currentSnack.name.trim().toLowerCase().includes(search.toLowerCase()) ||
    currentSnack.category.toLowerCase().includes(search.toLowerCase())
  );
  
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

  const totalOrderSnack = cartSnackList.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0);

  const orderSnackFormatted = totalOrderSnack.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function clearBagList() {
    setCartSnackList([]);
  }

  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <Header setSearch={setSearch} />
      <StyledMainContainer>
        <ProductList showProducts={showProducts} addToSnackCart={addToSnackCart} searchSnackResult={searchSnackResult}/>
        <CartList
          cartSnackList={cartSnackList}
          removeFromSnackCart={removeFromSnackCart}
          orderSnackFormatted={orderSnackFormatted}
          clearBagList={clearBagList}
        />
      </StyledMainContainer>
    </>
  );
}

export default App;
