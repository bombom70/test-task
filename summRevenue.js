const summRevenue = (products) => {
  return products.reduce((acc, { price, quantity }) => acc += price * quantity, 0);
}