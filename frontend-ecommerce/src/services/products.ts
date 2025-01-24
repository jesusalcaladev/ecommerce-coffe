import { GET } from './api-handler'

export const getProductsFeatured = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
  const response = await GET(url)
  return response.data
}
