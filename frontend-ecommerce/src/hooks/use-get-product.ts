import { getProductBySlug } from '@/services/products'
import { Product } from '@/types/product'
import { Response } from '@/types/response'
import { useQuery } from '@tanstack/react-query'

export const useGetProduct = (slug: string): Response<Product> => {
  const { data, isFetching } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductBySlug(slug),
  })

  return {
    data: data,
    isLoading: isFetching,
  }
}
