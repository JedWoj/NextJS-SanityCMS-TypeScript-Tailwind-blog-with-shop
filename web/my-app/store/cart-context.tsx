import { createContext, ReactNode, useContext, useState, useReducer } from "react";

export type item = {
    name: string,
    quantity: number,
    price: number,
    id: string,
    image: string,
}

type cartContextType = {
    modalIsOpen: boolean,
    setModalIsOpen: () => void,
    cart: item[],
    addToCart: (prod: item) => void,
    removeFromCart: (item: item) => void,
    clearCart: () => void,
    totalAmount: number,
}

enum ActionKind {
    Add = 'ADD',
    Remove = 'REMOVE',
    Clear = 'CLEAR',
}

type Action = {
    type: ActionKind,
    item: item
}

type Props = {
    children: ReactNode,
}

const cartContextDefaultValues: cartContextType = {
    modalIsOpen: false,
    setModalIsOpen: () => { },
    cart: [],
    addToCart: (prod) => { },
    removeFromCart: (item) => { },
    clearCart: () => { },
    totalAmount: 0,
}

const cartContext = createContext(cartContextDefaultValues);

export const useCartCtx = () => {
    return useContext(cartContext);
}

const defaultCartState = {
    cart: [],
    totalAmount: 0,
}

const cartReducer = (state: any, action: any) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price;
        const existingCartItemIdex = state.cart.findIndex((item: item) => item.id === action.item.id);
        const existingCartItem = state.cart[existingCartItemIdex];
        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
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
        const existingCartItemIdex = state.cart.findIndex((item: item) => item.id === action.item.id);
        const existingItem = state.cart[existingCartItemIdex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.quantity === 1) {
            updatedItems = state.cart.filter((item: item) => item.id !== action.item.id);
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
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const setModal = () => {
        setModalIsOpen(prevState => !prevState);
    }

    const addItemToCartHandler = (item: item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    }

    const removeItemFromCartHandler = (item: item) => {
        dispatchCartAction({ type: 'REMOVE', item: item })
    }

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' })
    }

    const value = {
        modalIsOpen: modalIsOpen,
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