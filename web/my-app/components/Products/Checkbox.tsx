import { useState } from "react";
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
    const { filter } = useShopCtx();
    const [checked, setChecked] = useState(true);
    const handleCheck = () => {
        filter(category);
    }

    return (
        <div className="flex items-center justify-between">
            <p>
                {label}
            </p>
            <div onClick={handleCheck} className={`border p-2 ml-2 cursor-pointer ${checked ? 'gradient' : null}`}>
            </div>
        </div>
    )
}

export default Checkbox;