import { product } from '../components/Products/product-type';
import { filters } from '../components/Products/Checkbox';
import { createContext, ReactNode, useContext, useState } from 'react';

type shopContextType = {
    loadedProducts: number,
    loadMore: () => void,
    activeProducts: product[],
    setActiveProducts: (products: product[]) => void,
    allProducts: product[],
    setAllProducts: (products: product[]) => void,
    sortingType: string,
    setSortingType: (type: string) => void,
    filters: filters,
    filterProducts: (category: string) => void,
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
    const [sortingType, setSortingType] = useState<string>('ascending');
    const [filters, setFilters] = useState<filters>({ male: true, female: true, unisex: true, clothing: true, fightingEquipment: true, accessories: true, jewellery: true })

    const loadMore = () => {
        setLoadedProducts(loadedProducts + 9)
    }

    const filterProducts = (category: string) => {
        switch (category) {
            case 'male':
                setFilters((prev: filters) => ({ ...prev, male: !prev.male }));
                break
            case 'female':
                setFilters((prev: filters) => ({ ...prev, female: !prev.female }))
                break
            case 'unisex':
                setFilters((prev) => ({ ...prev, unisex: !prev.unisex }))
                break
            case 'clothing':
                setFilters((prev: filters) => ({ ...prev, clothing: !prev.clothing }))
                break
            case 'fightingEquipment':
                setFilters((prev: filters) => ({ ...prev, fightingEquipment: !prev.fightingEquipment }))
                break
            case 'accessories':
                setFilters((prev: filters) => ({ ...prev, accessories: !prev.accessories }))
                break
            case 'jewellery':
                setFilters((prev: filters) => ({ ...prev, jewellery: !prev.jewellery }));
                break
        }
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
    }

    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}