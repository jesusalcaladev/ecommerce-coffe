import { getProductsField } from '@/services/products'
import { useQuery } from '@tanstack/react-query'

export const useProductsField = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['products-field'],
    queryFn: getProductsField,
  })
  return { data, isLoading: isFetching }
}
