import { StyledListProduct } from './index';
import { StyledResultDesc } from './results'
import { AdjustmentContainer } from '../../styles/adjustContainer';

export function ProductList({ showProducts, addToSnackCart, search, setSearch,searchSnackResult }) {
  const currentResult = search !== '' ? searchSnackResult : showProducts;

  return (
    <AdjustmentContainer>
      {search !== '' ? <StyledResultDesc><h2>Resultados para:</h2><span>{search}</span>
        <button onClick={() => setSearch('')}>Limpar Busca</button>
      </StyledResultDesc> : <></>}
      <StyledListProduct>
        {currentResult.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.img} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <span>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            <button onClick={() => addToSnackCart(product)}>
              Adicionar
            </button>
          </li>
        ))}
      </StyledListProduct>
    </AdjustmentContainer>
    
  );
}

//className='resultsContainer'


