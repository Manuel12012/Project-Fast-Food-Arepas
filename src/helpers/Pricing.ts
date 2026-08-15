export const calculateDiscountedPrice = (
  precio: number | string,
  descuento: number | string = 0,
) => {
  const price = Number(precio);
  const discount = Number(descuento);

  if (!Number.isFinite(price)) return 0;
  if (!Number.isFinite(discount)) return price;

  return price - (price * discount) / 100;
};
