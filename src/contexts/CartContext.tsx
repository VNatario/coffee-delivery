import { ReactNode, createContext, useEffect, useState } from 'react'
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
  removeCartItem: (cartItemId: number) => void
  cartItemsTotal: number
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITENS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITENS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  )

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

  function removeCartItem(cartItemId: number) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === cartItemId
    )

    if (coffeeAlreadyExistsInCart >= 0) {
      const newCart = cartItems.filter((item) => item.id !== cartItemId)
      setCartItems(newCart)
    }
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITENS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQauntity,
        removeCartItem,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
