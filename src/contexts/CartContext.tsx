import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartQuantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    if (coffeeAlreadyExistsInCart < 0) {
      setCartItems((state) => [...state, coffee])
    } else {
      const newCart = cartItems.map((cartItem, index) => {
        if (index === coffeeAlreadyExistsInCart) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + coffee.quantity,
          }
        } else {
          return cartItem
        }
      })

      setCartItems(newCart)
    }
  }

  console.log(cartItems)
  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
