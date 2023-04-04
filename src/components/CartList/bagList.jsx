import { StyledBagSection } from './bagListStyle';
import { BagListSum } from './bagListSum';

export function CartList({ cartSnackList, removeFromSnackCart, orderSnackFormatted, clearBagList }) {
  return (
    <StyledBagSection>
      <h3>Sacola de Compras</h3>
      {cartSnackList.length > 0 ? (
        <>
          <ul>
            {cartSnackList.map((snack) => (
              <li key={snack.id}>
                <div className="imgContainer">
                  <img src={snack.img} alt={snack.name} />
                </div>
                <div>
                  <h2>{snack.name}</h2>
                  <p>{snack.category}</p>
                </div>
                <button onClick={() => removeFromSnackCart(snack.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <BagListSum orderSnackFormatted={orderSnackFormatted} clearBagList={clearBagList} />
        </>
      ) : (
        <div className="emptyMessage">
          <h4>Sua sacola está vazia</h4>
          <span>Adicione itens</span>
        </div>
      )}
    </StyledBagSection>
  );
}
