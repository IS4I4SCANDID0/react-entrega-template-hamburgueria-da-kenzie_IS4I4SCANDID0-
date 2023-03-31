export function BagListSum({ orderSnackFormatted, clearBagList }) {
  return (
    <div className="container__sumBag">
      <div>
        <h2>Total</h2>
        <span>R$ {orderSnackFormatted}</span>
      </div>
      <button onClick={() => clearBagList()}>Remover todos</button>
    </div>
  );
}
