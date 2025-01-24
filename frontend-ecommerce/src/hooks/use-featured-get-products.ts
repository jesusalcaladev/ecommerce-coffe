import { getProductsFeatured } from '@/services/products'
import { Product } from '@/types/product'
import { Response } from '@/types/response'
import { useQuery } from '@tanstack/react-query'

export const useFeaturedGetProducts = (): Response<Product[]> => {
  const { data, isFetching } = useQuery({
    queryKey: ['products-featured'],
    queryFn: getProductsFeatured,
    initialData: [],
  })

  return { data, isLoading: isFetching }
}
