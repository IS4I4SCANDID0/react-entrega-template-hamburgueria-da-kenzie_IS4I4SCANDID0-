export function CartList({ cartSnackList, removeFromSnackCart }) {
  return (
    <section>
      <h3>Sacola de Compras</h3>
      {cartSnackList.length > 0 ? (
        <ul>
          {cartSnackList.map((snack) => (
            <li key={snack.id}>
              <img src={snack.img} alt={snack.name} />
              <h2>{snack.name}</h2>
              <p>{snack.category}</p>
              <button onClick={() => removeFromSnackCart(snack.id)}>Remover</button>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h4>Sua sacola está vazia</h4>
          <span>Adicione itens</span>
        </>
      )}
    </section>
  );
}
