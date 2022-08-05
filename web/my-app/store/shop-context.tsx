import { createContext, ReactNode, useContext, useState } from 'react';

type shopContextType = {
    loadedProducts: number,
    loadMore: () => void,
}

const shopContextDefaultValues: shopContextType = {
    loadedProducts: 1,
    loadMore: () => { },
}

const shopContext = createContext<shopContextType>(shopContextDefaultValues);

export const useShopCtx = () => {
    return useContext(shopContext);
}

type Props = {
    children: ReactNode,
}

export const ShopCtxProvider = ({ children }: Props) => {
    const [loadedProducts, setLoadedProducts] = useState<number>(9);

    const loadMore = () => {
        setLoadedProducts(loadedProducts + 9)
    }

    const value = {
        loadedProducts,
        loadMore,
    }

    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}