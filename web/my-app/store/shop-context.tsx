import { product } from '../components/Products/product-type';
import { createContext, ReactNode, useContext, useState } from 'react';

type shopContextType = {
    loadedProducts: number,
    loadMore: () => void,
    activeProducts: product[],
    setActiveProducts: (products: product[]) => void,
    allProducts: product[],
    setAllProducts: (products: product[]) => void,
}

const shopContextDefaultValues: shopContextType = {
    loadedProducts: 1,
    loadMore: () => { },
    activeProducts: [],
    setActiveProducts: ([]) => [],
    allProducts: [],
    setAllProducts: ([]) => [],
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
    const [activeProducts, setActiveProducts] = useState<product[]>([]);
    const [allProducts, setAllProducts] = useState<product[]>([]);

    const loadMore = () => {
        setLoadedProducts(loadedProducts + 9)
    }

    const value = {
        loadedProducts,
        loadMore,
        activeProducts,
        setActiveProducts,
        allProducts,
        setAllProducts,
    }

    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}