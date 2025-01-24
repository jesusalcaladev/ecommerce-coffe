import { getCategory } from '@/services/products'
import { Category } from '@/types/category'
import { Response } from '@/types/response'
import { useQuery } from '@tanstack/react-query'

export const useGetCategory = (): Response<Category[]> => {
  const { data, isFetching } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
  })
  return { data, isLoading: isFetching }
}
