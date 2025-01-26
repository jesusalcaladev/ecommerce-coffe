import { getCategoryProducts } from '@/services/products'
import { Product } from '@/types/product'
import { Response } from '@/types/response'
import { useQuery } from '@tanstack/react-query'

export const useGetProductsCategory = (slug: string): Response<Product[]> => {
  const { data, isFetching } = useQuery({
    queryKey: ['products-category'],
    queryFn: () => getCategoryProducts(slug),
  })
  return {
    data,
    isLoading: isFetching,
  }
}
