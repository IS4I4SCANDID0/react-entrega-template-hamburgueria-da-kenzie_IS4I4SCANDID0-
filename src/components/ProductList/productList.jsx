import { StyledListProduct } from '../../styles';

export function ProductList({ showProducts, addToSnackCart, search, searchSnackResult }) {
  const currentResult = search !== '' ? searchSnackResult : showProducts;

  return (
    <StyledListProduct>
      {currentResult.map((product) => (
        <li key={product.id}>
          <div>
            <img src={product.img} alt={product.name} />
          </div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <span>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          <button onClick={() => addToSnackCart(product)}>Adicionar</button>
        </li>
      ))}
    </StyledListProduct>
  );
}
