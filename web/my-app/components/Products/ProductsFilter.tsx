import { useState } from "react";
import { useShopCtx } from "../../store/shop-context";
import React from "react";

const ProductsFilter = () => {
    const [filters, setFilters] = useState({ male: true, female: true, unisex: true, clothing: true, fightingEquipment: true, accessories: true, jewellery: true })
    const { allProducts, setActiveProducts } = useShopCtx();

    console.log(filters);

    const getCheckedCategories = () => {
        const categories = [];
        for (const category in filters) {
            if (filters[category] === true) {
                categories.push(category)
            }
        }
        return categories;
    }

    const handleFiltering = () => {
        const categories = getCheckedCategories();
        const filtered = allProducts.filter(p => categories.includes(p.gender)).filter(p => categories.includes(p.category));
        setActiveProducts(filtered);
    }

    return (
        <div className="gradient--rotated py-4 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-8 rounded text-white relative text-left">
            <div className="flex">
                <div className="flex flex-col w-1/5 sm:w-1/6 lg:w-1/12 mt-2">
                    <h2 className="font-bold">
                        Gender
                    </h2>
                    <div className="flex items-center justify-between">
                        <label htmlFor="male">
                            Male
                        </label>
                        <input onChange={() => setFilters((prev) => { return { ...prev, male: !prev.male } })} type="checkbox" value="male" id="male" name="gender" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="female">
                            Female
                        </label>
                        <input onChange={() => setFilters((prev) => { return { ...prev, female: !prev.female } })} type="checkbox" id="female" value="female" name="gender" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="unisex">
                            Unisex
                        </label>
                        <input onChange={() => setFilters((prev) => { return { ...prev, unisex: !prev.unisex } })} type="checkbox" id="unisex" value="unisex" name="gender" className="checkbox" defaultChecked />
                    </div>
                </div>
                <div className="flex flex-col w-1/3 lg:w-1/6 ml-5 mt-2">
                    <h2 className="font-bold">
                        Category
                    </h2>
                    <div className="flex items-center justify-between">
                        <label htmlFor="clothing">
                            Clothing
                        </label>
                        <input onChange={() => setFilters((prev) => { return { ...prev, clothing: !prev.clothing } })} type="checkbox" value="clothing" id="clothing" name="category" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="fightingEquipment">
                            Fighting Equipment
                        </label>
                        <input onChange={() => setFilters((prev) => { return { ...prev, fightingEquipment: !prev.fightingEquipment } })} type="checkbox" id="fightingEquipment" value="fightingEquipment" name="category" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="accessories">
                            Accessories
                        </label>
                        <input onChange={() => setFilters((prev) => { return { ...prev, accessories: !prev.accessories } })} type="checkbox" id="accessories" value="accessories" name="category" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="jewellery">
                            Jewellery
                        </label>
                        <input onChange={() => setFilters((prev) => { return { ...prev, jewellery: !prev.jewellery } })} type="checkbox" id="jewellery" value="jewellery" name="category" className="checkbox" defaultChecked />
                    </div>
                </div>
                <button onClick={handleFiltering} className="gradient--reversed self-center rounded py-2 px-3 lg:py-3 lg:px-5 ml-auto shadow-2xl">
                    Apply filters
                </button>
            </div>
        </div>
    )
}

export default ProductsFilter;