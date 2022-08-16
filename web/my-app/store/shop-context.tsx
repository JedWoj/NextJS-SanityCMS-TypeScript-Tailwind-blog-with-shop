import { Product } from '../components/Products/product-type';
import { filters } from '../components/Products/Checkbox';
import { createContext, ReactNode, useContext, useState } from 'react';

type shopContextType = {
    loadedProducts: number,
    loadMore: () => void,
    activeProducts: Product[],
    setActiveProducts: (products: Product[]) => void,
    allProducts: Product[],
    setAllProducts: (products: Product[]) => void,
    sortingType: string,
    setSortingType: (type: string) => void,
    filters: filters,
    filterProducts: (category: string) => void,
    filtersTouched: boolean,
    setFiltersTouched: (type: boolean) => void,
}

const shopContextDefaultValues: shopContextType = {
    loadedProducts: 1,
    loadMore: () => { },
    activeProducts: [],
    setActiveProducts: ([]) => [],
    allProducts: [],
    setAllProducts: ([]) => [],
    sortingType: 'ascending',
    setSortingType: () => { },
    filters: {
        accessories: true,
        clothing: true,
        female: true,
        fightingEquipment: true,
        jewellery: true,
        male: true,
        unisex: true
    },
    filterProducts: (category: string) => { },
    filtersTouched: false,
    setFiltersTouched: () => {},
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
    const [activeProducts, setActiveProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [sortingType, setSortingType] = useState<string>('ascending');
    const [filters, setFilters] = useState<filters>({ male: true, female: true, unisex: true, clothing: true, fightingEquipment: true, accessories: true, jewellery: true })
    const [filtersTouched, setFiltersTouched] = useState<boolean>(false)

    const loadMore = () => {
        setLoadedProducts(loadedProducts + 9)
    }

    const filterProducts = (category: string) => {
        setFilters((prev: filters) => ({...prev, [category]: !prev[category as keyof filters]}))
    }

    const value = {
        loadedProducts,
        loadMore,
        activeProducts,
        setActiveProducts,
        allProducts,
        setAllProducts,
        sortingType,
        setSortingType,
        filters,
        filterProducts,
        filtersTouched,
        setFiltersTouched
    }

    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}