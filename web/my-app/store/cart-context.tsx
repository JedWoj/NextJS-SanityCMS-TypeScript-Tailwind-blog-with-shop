import { createContext, ReactNode, useContext, useState, useReducer } from "react";

type prod = {
    name: string,
    quantity: number,
    price: number,
    id: string,
}

type cartContextType = {
    modalIsOpen: boolean,
    setModalIsOpen: () => void,
    cart: prod[],
    addToCart: (prod: prod) => void,
    removeFromCart: (id: string) => void,
    clearCart: () => void,
    totalAmount: number,
}

const cartContextDefaultValues: cartContextType = {
    modalIsOpen: false,
    setModalIsOpen: () => { },
    cart: [],
    addToCart: (prod) => { },
    removeFromCart: (id) => { },
    clearCart: () => { },
    totalAmount: 0,
}

const cartContext = createContext<cartContextType>(cartContextDefaultValues);

export const useCartCtx = () => {
    return useContext(cartContext);
}

type Props = {
    children: ReactNode,
}

const defaultCartState = {
    cart: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;

        const existingCartItemIdex = state.cart.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.cart[existingCartItemIdex];
        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity,
            }

            updatedItems = [...state.cart];
            updatedItems[existingCartItemIdex] = updatedItem;
        } else {
            updatedItem = {
                ...action.item
            }

            updatedItems = state.cart.concat(updatedItem)
        }

        return {
            cart: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if (action.type === "REMOVE") {
        const existingCartItemIdex = state.cart.findIndex(item => item.id === action.id);
        const existingItem = state.cart[existingCartItemIdex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.quantiry === 1) {
            updatedItems = state.cart.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...state.cart];
            updatedItems[existingCartItemIdex] = updatedItem;
        }

        return {
            cart: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if (action.type === 'CLEAR') {
        return {
            cart: [],
            totalAmount: 0,
        }
    }

    return defaultCartState;
};

export const CartCtxProvider = ({ children }: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item: prod) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' })
    }

    const value = {
        modalIsOpen,
        setModalIsOpen: setModal,
        cart: cartState.cart,
        addToCart: addItemToCartHandler,
        removeFromCart: removeItemFromCartHandler,
        totalAmount: cartState.totalAmount,
        clearCart: clearCartHandler,
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}