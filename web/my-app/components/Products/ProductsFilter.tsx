import { useEffect,useCallback } from "react";
import { useShopCtx } from "../../store/shop-context";
import React from "react";
import Checkbox from "./Checkbox";

const ProductsFilter = () => {
    const { allProducts, setActiveProducts, filters } = useShopCtx();
    
    const getCheckedCategories = useCallback(() => {
        const categories = [];
        for (const category in filters) {
            if (filters[category as keyof typeof filters] === true) {
                categories.push(category)
            }
        }
        return categories;
    },[filters])
    const handleFiltering = useCallback(() => {
        const categories = getCheckedCategories();
        const filtered = allProducts.filter(p => categories.includes(p.gender)).filter(p => categories.includes(p.category));
        setActiveProducts(filtered);
    },[allProducts,getCheckedCategories, setActiveProducts])

    useEffect(() => {
        handleFiltering();
    }, [handleFiltering])



    return (
        <div className="gradient--rotated py-4 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-8 rounded text-white relative text-left">
            <div className="flex">
                <div className="flex flex-col w-1/4 sm:w-1/6 lg:w-1/12 mt-2">
                    <h2 className="font-bold">
                        Gender
                    </h2>
                    <Checkbox label="Male" category="male" />
                    <Checkbox label="Female" category="female" />
                    <Checkbox label="Unisex" category="unisex" />
                </div>
                <div className="flex flex-col w-1/3 lg:w-1/6 ml-5 mt-2">
                    <h2 className="font-bold">
                        Category
                    </h2>
                    <Checkbox label="Clothing" category="clothing" />
                    <Checkbox label="Fighting Equipment" category="fightingEquipment" />
                    <Checkbox label="Accessories" category="accessories" />
                    <Checkbox label="Jewellery" category="jewellery" />
                </div>
            </div>
        </div>
    )
}

export default ProductsFilter;