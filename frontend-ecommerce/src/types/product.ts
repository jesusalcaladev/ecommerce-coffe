export type Image = {
  id: string
  documentId: string
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: string[]
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
}

export type Product = {
  id: string
  productName: string
  description: string
  images: Image[]
  price: number
  isFeatured: boolean
  active: boolean
  origin: string
  taste: string
  publishedAt: string
  slug: string
  createdAt: string
  updatedAt: string
}
