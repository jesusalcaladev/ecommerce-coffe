import { Image } from './product'

export type Category = {
  id: string
  categoryName: string
  documentId: string
  slug: string
  mainImage: Image[]
}
