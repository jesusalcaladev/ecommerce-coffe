export const formatPrice = (price: number) => {
  return price.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'USD',
  })
}
