import { Product } from '@/types/product'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from '@/hooks/use-toast'

type CardStore = {
  items: Product[]
  addItem: (item: Product) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CardStore>(
    (set, get) => ({
      items: [],
      addItem: (item: Product) => {
        const currentItems = get().items
        const existsItem = currentItems.find((i) => i.id === item.id)
        if (existsItem) {
          return toast({
            title: 'Ya existe el producto en el carrito',
            description: 'Intentalo de nuevo',
            variant: 'destructive',
          })
        }
        set({ items: [...currentItems, item] })
        toast({
          title: 'Producto agregado al carrito',
          description: '¡Listo para comprar!',
        })
      },
      removeItem: (id: string) => {
        const currentItems = get().items
        set({ items: currentItems.filter((i) => i.id !== id) })
        toast({
          title: 'Producto eliminado del carrito',
          description: '¡Listo para comprar!',
        })
      },
      clearCart: () => {
        set({ items: [] })
        toast({
          title: 'Carrito vaciado',
          description: '¡Listo para comprar!',
        })
      },
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
