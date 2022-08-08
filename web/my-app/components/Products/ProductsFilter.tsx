import { useState } from "react";
import { useShopCtx } from "../../store/shop-context";

const ProductsFilter = () => {
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const { allProducts, setActiveProducts } = useShopCtx();

    const getCheckedCheckboxes = () => {
        const checkboxes = [...document.querySelectorAll('.checkbox')].filter(check => check.checked === true).map(check => check.value);
        return checkboxes;
    }

    const handleFiltering = () => {
        const categories = getCheckedCheckboxes();
        const filtered = allProducts.filter(p => categories.includes(p.gender)).filter(p => categories.includes(p.category));
        setActiveProducts(filtered);
    }

    return (
        <div className="gradient--rotated py-4 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-8 rounded text-white relative text-left">
            <p className="text-3xl">
                {filterIsOpen ? 'Click "-" to hide filters!' : 'Click "+" to add filters!'}
            </p>
            <div onClick={() => setFilterIsOpen(prev => !prev)} className="w-12 h-12 cursor-pointer absolute bottom-1 right-1 text-5xl">
                {filterIsOpen ? '-' : '+'}
            </div>
            {filterIsOpen && <div className="flex">
                <div className="flex flex-col w-1/12 mt-2">
                    <h2 className="font-bold">
                        Gender
                    </h2>
                    <div className="flex items-center justify-between">
                        <label htmlFor="male">
                            Male
                        </label>
                        <input type="checkbox" value="male" id="male" name="gender" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="female">
                            Female
                        </label>
                        <input type="checkbox" id="female" value="female" name="gender" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="unisex">
                            Unisex
                        </label>
                        <input type="checkbox" id="unisex" value="unisex" name="gender" className="checkbox" defaultChecked />
                    </div>
                </div>
                <div className="flex flex-col w-1/6 ml-10 mt-2">
                    <h2 className="font-bold">
                        Category
                    </h2>
                    <div className="flex items-center justify-between">
                        <label htmlFor="clothing">
                            Clothing
                        </label>
                        <input type="checkbox" value="clothing" id="clothing" name="category" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="fighting-equipment">
                            Fighting Equipment
                        </label>
                        <input type="checkbox" id="fighting-equipment" value="fighting-equipment" name="category" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="accessories">
                            Accessories
                        </label>
                        <input type="checkbox" id="accessories" value="accessories" name="category" className="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="jewellery">
                            Jewellery
                        </label>
                        <input type="checkbox" id="jewellery" value="jewellery" name="category" className="checkbox" defaultChecked />
                    </div>
                </div>
                <button onClick={handleFiltering} className="gradient--reversed self-center rounded py-3 px-6 ml-auto shadow-2xl">
                    Apply filters
                </button>
            </div>}
        </div>
    )
}

export default ProductsFilter;