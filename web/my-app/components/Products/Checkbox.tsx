import { useState, useEffect } from "react";
import { useShopCtx } from "../../store/shop-context";

export type filters = {
    male: boolean,
    female: boolean,
    unisex: boolean,
    clothing: boolean,
    accessories: boolean,
    jewellery: boolean,
    fightingEquipment: boolean,
}

const Checkbox = ({ category, label }: { category: string, label: string }) => {
    const { filterProducts, filters } = useShopCtx();
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        switch (category) {
            case 'male':
                filters.male === true ? setChecked(true) : setChecked(false);
                break
            case 'female':
                filters.female === true ? setChecked(true) : setChecked(false);
                break
            case 'unisex':
                filters.unisex === true ? setChecked(true) : setChecked(false);
                break
            case 'clothing':
                filters.clothing === true ? setChecked(true) : setChecked(false);
                break
            case 'fightingEquipment':
                filters.fightingEquipment === true ? setChecked(true) : setChecked(false);
                break
            case 'accessories':
                filters.accessories === true ? setChecked(true) : setChecked(false);
                break
            case 'jewellery':
                filters.jewellery === true ? setChecked(true) : setChecked(false);
                break
        }
    }, [filters,category])

    return (
        <div className="flex items-center justify-between">
            <p>
                {label}
            </p>
            <div onClick={() => filterProducts(category)} className={`border p-2 ml-2 cursor-pointer ${checked ? 'gradient' : null}`}>
            </div>
        </div>
    )
}

export default Checkbox;