export function ProductList({ showProducts }) {
  return (
    <ul>
      {showProducts.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <span>R$ {product.price}</span>
        </li>
      ))}
    </ul>
  );
}
// *** NORMALIZAR OS NÚMEROS COM MÉTODOS PARA TROCAR OS PONTOS POR VÍRGULA *** //
