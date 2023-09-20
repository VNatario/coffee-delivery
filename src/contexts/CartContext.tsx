import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQauntity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void
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

  function changeCartItemQauntity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === cartItemId
    )

    if (coffeeAlreadyExistsInCart >= 0) {
      const newCart = cartItems.map((item, index) => {
        if (index === coffeeAlreadyExistsInCart) {
          return {
            ...item,
            quantity:
              type === 'increase' ? item.quantity + 1 : item.quantity - 1,
          }
        } else {
          return item
        }
      })

      setCartItems(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQauntity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
