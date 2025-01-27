import { Product } from '@/types/product'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { toast } from './use-toast'

type LovedProducts = {
  lovedProducts: Product[]
  addLovedProduct: (product: Product) => void
  removeLovedProduct: (id: string) => void
}

export const useLovedProducts = create(
  persist<LovedProducts>(
    (set, get) => ({
      lovedProducts: [],
      addLovedProduct(item: Product) {
        const currentItems = get().lovedProducts
        const existsItem = currentItems.find((i) => i.id === item.id)
        if (existsItem) {
          return toast({
            title: 'Ya existe el producto en favoritos',
            description: 'Intentalo de nuevo',
            variant: 'destructive',
          })
        }
        set({ lovedProducts: [...currentItems, item] })
        toast({
          title: 'Producto agregado a favoritos',
          description: '¡Listo para comprar!',
        })
      },
      removeLovedProduct: (id: string) => {
        const currentItems = get().lovedProducts
        set({ lovedProducts: currentItems.filter((i) => i.id !== id) })
        toast({
          title: 'Producto eliminado de favoritos',
          description: '¡Listo para comprar!',
        })
      },
    }),

    {
      name: 'loved-products',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
