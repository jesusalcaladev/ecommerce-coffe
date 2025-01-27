import { GET } from './api-handler'

export const getProductsFeatured = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
  const response = await GET(url)
  return response.data
}

export const getCategory = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
  const response = await GET(url)
  return response.data
}

export const getProducts = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*`
  const response = await GET(url)
  return response.data
}

export const getCategoryProducts = async (slug: string) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`
  const response = await GET(url)
  return response.data
}

export const getCategoryTop = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
  const response = await GET(url)
  return response.data.slice(0, 3)
}

export const getProductsField = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`
  const response = await GET(url)
  return response.data
}

export const getProductBySlug = async (slug: string) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
  const response = await GET(url)
  return response.data[0]
}
